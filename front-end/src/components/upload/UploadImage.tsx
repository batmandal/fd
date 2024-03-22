"use client";
import { CreateOutlined } from "@mui/icons-material";
import { Button, Modal, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useData } from "../providers/DataProvider";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { imageUrl, setImageUrl } = useData();
  const [openModal, setModalOpen] = useState(false);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  const handleClose = () => setModalOpen(false);

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dl0k92sfh/upload?upload_preset=wug703jq",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);
        console.log(data.secure_url, "imageURL");
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <>
      <Stack
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <CreateOutlined />
      </Stack>

      <Modal
        open={openModal}
        onClose={handleClose}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <Stack
          py={8}
          alignItems="center"
          bgcolor="white"
          width="587px"
          padding={3}
          borderRadius={2}
        >
          <Stack gap={3} width="100%">
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button onClick={handleImageUpload} variant="contained">
              Upload
            </Button>
            {imageUrl && (
              <Stack width="100%" pt="100%" position="relative">
                <Image
                  src={imageUrl}
                  alt="Uploaded"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
export default Page;
