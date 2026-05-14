import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Chip,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import { IoMdAdd } from "react-icons/io";
import { useToast } from "../../utils/useToast";
import Toast from "../../utils/Toast";
import DayAndTime from "../../utils/DayAndTime";

type Blog = {
  _id: string;
  title: string;
  author: string;
  status: "draft" | "published";
  timestamp: string;
  content?: string;
  createdAt: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selected, setSelected] = useState<Blog | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const { toast, showToast, closeToast } = useToast();

  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    role: "",
  });

  const formData = new FormData();

  Object.entries(form).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value as string);
    }
  });

  if (image) {
    formData.append("image", image);
  }

  const fetchBlogs = async () => {
    const res = await api.get("/api/blog");
    setBlogs(res.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const createBlog = async () => {
    try {
      console.log(formData);
      setLoading(true);

      const response = await api.post("/api/blog", formData);

      console.log(response.data);

      if (response.data.status === 201) {
        showToast(response.data.message, "success");
        setLoading(false);
        setTimeout(() => {
          fetchBlogs();
          setCreateOpen(false);
        }, 2000);
      }
    } catch (error: any) {
      const errMsg = error?.response?.data?.message;
      console.log(errMsg);

      showToast(errMsg, "error");

      if (errMsg) {
        setLoading(false);
      }
    }
  };

  const publishBlog = async (id: string) => {
    try {
      await api.patch(`/api/blog/${id}`);

      showToast("Blog published", "success");
      setLoading(false);
      setTimeout(() => {
        fetchBlogs();
        setOpen(false);
      }, 2000);
    } catch (error: any) {
      const errMsg = error?.response?.data?.message;
      console.log(errMsg);

      showToast(errMsg, "error");

      if (errMsg) {
        setLoading(false);
      }
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await api.delete(`/api/blog/${id}`);

      showToast("Blog deleted", "success");

      setLoading(false);
      setTimeout(() => {
        fetchBlogs();
        setOpen(false);
      }, 2000);
    } catch (error: any) {
      const errMsg = error?.response?.data?.message;
      console.log(errMsg);

      showToast(errMsg, "error");

      if (errMsg) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <Typography variant="h5">Blogs</Typography>
        <Button
          fullWidth
          onClick={() => setCreateOpen(true)}
          startIcon={<IoMdAdd />}
          sx={{
            width: "15%",
            backgroundColor: "#00C281",
            color: "white",
            textTransform: "capitalize",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <Typography fontSize={16} fontWeight={300} color="#FAFAFA">
            Add Blog
          </Typography>
        </Button>
      </div>

      {/* TABLE */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>By</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {blogs.map((blog) => (
            <TableRow
              key={blog._id}
              onClick={() => {
                setSelected(blog);
                setOpen(true);
              }}
              className="cursor-pointer"
            >
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>
                <Chip
                  label={blog.status}
                  color={blog.status === "published" ? "success" : "warning"}
                />
              </TableCell>
              <TableCell>{<DayAndTime date={blog.createdAt} />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* BLOG DETAILS MODAL */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            paddingY: { xs: "16px", sm: "20px", md: "24px" },
            paddingX: { xs: "12px", sm: "16px", md: "18px" },
            borderRadius: "16px",
            width: "100%",
            maxWidth: "900px",
            margin: "12px",
          },
        }}
      >
        <Toast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          onClose={closeToast}
        />
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <TextField
              label="Author"
              value={selected?.author || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            />

            <TextField
              label="Status"
              value={selected?.status || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            />

            <TextField
              label="Content"
              value={selected?.content || ""}
              fullWidth
              multiline
              rows={6}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            {selected?.status === "draft" && (
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  publishBlog(selected!._id);
                }}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "10px",
                  borderColor: "#1A1A1A80",
                  color: "#1A1A1A",
                  padding: "10px",
                }}
              >
                Publish
              </Button>
            )}

            <Button
              fullWidth
              disabled={loading}
              onClick={() => deleteBlog(selected!._id)}
              sx={{
                textTransform: "capitalize",
                borderRadius: "10px",
                backgroundColor: loading ? "#A0A0A0" : "red",
                color: "white",
                padding: "10px",
              }}
            >
              {loading ? "Deleting Blog..." : "Delete blog"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CREATE MODAL */}
      <Dialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            paddingY: { xs: "16px", sm: "20px", md: "24px" },
            paddingX: { xs: "12px", sm: "16px", md: "18px" },
            borderRadius: "16px",
            width: "100%",
            maxWidth: "900px",
            margin: "12px",
          },
        }}
      >
        <Toast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          onClose={closeToast}
        />
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent className="flex flex-col gap-3">
          <TextField
            placeholder="Title of Blog"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            name="title"
            inputProps={{
              min: 0,
              max: 100,
              step: 1,
            }}
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#FAFAFA",

                // default border
                "& fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },

                // focused
                "&.Mui-focused fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },
              },

              // input text
              "& input": {
                padding: "10px 12px",
                fontSize: 14,
              },
            }}
          />
          <TextField
            placeholder="Author"
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            name="author"
            type="text"
            inputProps={{
              min: 0,
              max: 100,
              step: 1,
            }}
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#FAFAFA",

                // default border
                "& fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },

                // focused
                "&.Mui-focused fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },
              },

              // input text
              "& input": {
                padding: "10px 12px",
                fontSize: 14,
              },
            }}
          />
          <TextField
            placeholder="Role"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            name="role"
            type="text"
            inputProps={{
              min: 0,
              max: 100,
              step: 1,
            }}
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "12px",
                backgroundColor: "#FAFAFA",

                // default border
                "& fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },

                // focused
                "&.Mui-focused fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },
              },

              // input text
              "& input": {
                padding: "10px 12px",
                fontSize: 14,
              },
            }}
          />
          <TextField
            placeholder="Blog content"
            name="content"
            multiline
            rows={10}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            type="text"
            inputProps={{
              min: 0,
              max: 100,
              step: 1,
            }}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#FAFAFA",

                // default border
                "& fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },

                // focused
                "&.Mui-focused fieldset": {
                  borderColor: "#1A1A1A",
                  borderWidth: "0.2px",
                },
              },

              // input text
              "& input": {
                padding: "10px 12px",
                fontSize: 14,
              },
            }}
          />

          <div>
            <Typography
              fontWeight={400}
              fontSize={{ xs: 15, sm: 16, md: 18 }}
              color="#1A1A1A"
            >
              Image
            </Typography>

            {image && (
              <div className="flex justify-center my-3">
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="w-36 h-36 object-cover mt-2 rounded-full"
                />
              </div>
            )}

            <input
              className="h-10 w-full rounded-xl bg-[#00C2810D] px-2.5 py-3 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0])
                  setImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                setCreateOpen(false);
                setImage(null);
                setLoading(false);
                setForm({ title: "", author: "", content: "", role: "" });
              }}
              sx={{
                textTransform: "capitalize",
                borderRadius: "10px",
                borderColor: "#1A1A1A80",
                color: "#1A1A1A",
                padding: "10px",
              }}
            >
              Cancel
            </Button>

            <Button
              fullWidth
              disabled={loading}
              onClick={createBlog}
              sx={{
                textTransform: "capitalize",
                borderRadius: "10px",
                backgroundColor: loading ? "#A0A0A0" : "#00C281",
                color: "white",
                padding: "10px",
              }}
            >
              {loading ? "Adding Blog..." : "Add blog"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;
