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

type Blog = {
  _id: string;
  title: string;
  by: string;
  status: "draft" | "published";
  timestamp: string;
  content?: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selected, setSelected] = useState<Blog | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    by: "",
    content: "",
  });

  const fetchBlogs = async () => {
    const res = await api.get("/api/blogs");
    setBlogs(res.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const createBlog = async () => {
    setLoading(true);
    await api.post("/api/blogs", form);
    setCreateOpen(false);
    fetchBlogs();
  };

  const publishBlog = async (id: string) => {
    await api.patch(`/api/blogs/publish/${id}`);
    fetchBlogs();
  };

  const deleteBlog = async (id: string) => {
    await api.delete(`/api/blogs/${id}`);
    fetchBlogs();
    setOpen(false);
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
              <TableCell>{blog.by}</TableCell>
              <TableCell>
                <Chip
                  label={blog.status}
                  color={blog.status === "published" ? "success" : "warning"}
                />
              </TableCell>
              <TableCell>{new Date(blog.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* BLOG DETAILS MODAL */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogContent>
          <Typography>By: {selected?.by}</Typography>
          <Typography>Status: {selected?.status}</Typography>
          <Typography className="mt-3">{selected?.content}</Typography>

          <div className="flex gap-2 mt-4">
            {selected?.status === "draft" && (
              <Button
                onClick={() => publishBlog(selected._id)}
                variant="contained"
              >
                Publish
              </Button>
            )}

            <Button color="error" onClick={() => deleteBlog(selected!._id)}>
              Delete
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
            onChange={(e) => setForm({ ...form, by: e.target.value })}
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

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setCreateOpen(false)}
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
              {loading ? "Creating Blog..." : "Publish"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;
