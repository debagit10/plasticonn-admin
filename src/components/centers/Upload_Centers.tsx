import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { useRef, useState, type DragEvent } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Upload_Centers = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        sx={{
          width: "190px",
          height: "48px",
          padding: "12px",
          borderRadius: "12px",
          borderColor: "#1A1A1A80",
          color: "#1A1A1A",
        }}
      >
        <span className="mr-2.5">
          <img src="/upload.png" />
        </span>

        <Typography
          fontWeight={400}
          fontSize={16}
          sx={{ textTransform: "capitalize" }}
        >
          Upload CSV
        </Typography>
      </Button>

      <Dialog open={open}>
        <DialogContent
          sx={{
            width: "600px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className="flex flex-col gap-6.5">
            <div className="flex justify-between items-center">
              <Typography fontWeight={400} fontSize={26} color="#1A1A1A">
                Upload CSV File
              </Typography>

              <IoCloseOutline
                onClick={() => setOpen(false)}
                size={20}
                color="#1A1A1A"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="text-center flex justify-center">
              <Box
                //component="label"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
                sx={{
                  width: "500px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: isDragging ? "#E0FFF4" : "transparent",
                  "&:hover": {
                    borderColor: "#00C281",
                    backgroundColor: "#00C2810D",
                  },
                  gap: "16px",
                  border: "2px dashed #1A1A1A80",
                }}
              >
                <div className="flex justify-center">
                  <img src="/upload.png" height={40} width={40} />
                </div>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  color="#1A1A1A"
                  textTransform="capitalize"
                >
                  {file ? file.name : "Click or drag to upload file"}
                </Typography>

                <Typography
                  fontWeight={300}
                  fontSize={16}
                  color="#1A1A1A80"
                  textTransform="capitalize"
                >
                  CSV files only (Max 10MB)
                </Typography>
              </Box>

              <input
                ref={fileInputRef}
                type="file"
                hidden
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={(e) =>
                  e.target.files && handleFileChange(e.target.files[0])
                }
              />
            </div>

            <div className="flex justify-center bg-[#355AD61A] p-3 rounded-xl border-0.5 border-[#355AD680]">
              <Typography fontWeight={400} fontSize={16} color="#355AD6">
                <span style={{ fontStyle: "oblique" }}>Required columns:</span>{" "}
                name, type, category, location, capacity
              </Typography>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Upload_Centers;
