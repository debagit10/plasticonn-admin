import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { getInitials } from "../../utils/getInitials";
import { useState } from "react";
import { useToast } from "../../utils/useToast";
import api from "../../utils/axiosInstance";
import Toast from "../../utils/Toast";

interface Center {
  _id: string;
  centerId: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
  capacity: string;
  type: string;
  centerType: string;
  formal: boolean;
  materialsAccepted: [string];
  contactEmail: string;
  contactPerson: string;
  contactPhone: string;
  gps: { coordinates: GPS };
  operatingHours: string;
  verified: boolean;
  image: {
    url: string;
    public_id: string;
  };
  documents: [
    {
      url: string;
      public_id: string;
    },
  ];
}

interface GPS {
  lon: number;
  lat: number;
}

const View_Center = ({
  center,
  view,
  setView,
}: {
  center: Center;
  view: boolean;
  setView: (value: boolean) => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { toast, showToast, closeToast } = useToast();

  const verify = async () => {
    setLoading(true);

    try {
      const response = await api.put(
        `api/admin/center-mgt/verify/${center._id}`,
      );

      if (response.data.status === 200) {
        showToast(response.data.message, "success");

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error: any) {
      const errMsg = error?.response?.data?.message;
      console.log(errMsg);

      showToast(errMsg, "error");
      setLoading(false);

      if (errMsg) {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Toast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={closeToast}
      />

      {/* MODAL */}
      <Dialog
        open={view}
        onClose={() => setView(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent
          sx={{
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* HEADER */}
          <Typography
            fontSize={{ xs: 20, sm: 24 }}
            fontWeight={400}
            color="#1A1A1A"
            textAlign="center"
          >
            Center Details
          </Typography>

          <Divider />

          {/* PROFILE */}
          <div className="flex flex-col items-center gap-3">
            <Avatar
              src={center?.image?.url || undefined}
              sx={{
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                background: "linear-gradient(to bottom, #005C3D, #00C281)",
              }}
            >
              {!center?.image?.url && getInitials(`${center?.name} `)}
            </Avatar>

            <Typography
              fontSize={{ xs: 16, sm: 18 }}
              fontWeight={500}
              color="#1A1A1A"
            >
              {center?.name}
            </Typography>

            <Typography
              fontSize={13}
              color={center.verified ? "#00C281" : "#E11D48"}
              sx={{ textTransform: "capitalize" }}
            >
              {center.verified ? "Verified" : "Not verified"}
            </Typography>

            {!center.verified && (
              <Button
                disabled={loading}
                onClick={verify}
                sx={{
                  width: "365px",
                  height: "48px",
                  padding: "12px",
                  borderRadius: "12px",
                  backgroundColor: loading ? "white" : "#00C281",
                  color: loading ? "grey" : "white",
                }}
              >
                <Typography
                  fontWeight={400}
                  fontSize={16}
                  sx={{ textTransform: "capitalize" }}
                >
                  {loading ? "Verifying..." : "Verify"}
                </Typography>
              </Button>
            )}
          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Contact Person", value: center?.contactPerson },
              { label: "Email", value: center?.contactEmail },
              { label: "Phone", value: center?.contactPhone },
              { label: "Address", value: center?.address },
              { label: "Operating Hours", value: center?.operatingHours },
              {
                label: "Accepted Materials",
                value: center?.materialsAccepted?.join(", "),
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <Typography fontSize={13} color="#1A1A1A80">
                  {item.label}
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 15 }}
                  color="#1A1A1A"
                  className="wrap-break-word"
                >
                  {item.value || "-"}
                </Typography>
              </div>
            ))}
          </div>

          {/* DOCUMENTS */}
          {center?.documents?.length > 0 && (
            <div className="flex flex-col gap-3">
              <Typography
                fontSize={{ xs: 16, sm: 18 }}
                fontWeight={400}
                color="#1A1A1A"
              >
                Documents
              </Typography>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {center.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden border border-[#1A1A1A20]"
                  >
                    <img
                      src={doc.url}
                      alt={`document-${index}`}
                      onClick={() => setPreview(doc.url)}
                      className="w-full h-28 sm:h-32 object-cover cursor-pointer hover:opacity-90 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTION */}
          <div className="mt-4">
            <Button
              fullWidth
              onClick={() => setView(false)}
              sx={{
                height: "48px",
                borderRadius: "12px",
                border: "1px solid #1A1A1A30",
                color: "#1A1A1A",
              }}
            >
              <Typography fontSize={16} sx={{ textTransform: "capitalize" }}>
                Close
              </Typography>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!preview} onClose={() => setPreview(null)} maxWidth="md">
        <DialogContent
          sx={{
            p: 0,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          )}

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setPreview(null)}
            className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm shadow"
          >
            ✕
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default View_Center;
