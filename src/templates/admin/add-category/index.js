import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { addCategory } from "apis/fetchers/addCategory";
import Image from "next/image";
import Script from "next/script";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

const AddCategoryTemplate = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const [images, setImages] = useState([]);

  const handleAddCategory = async () => {
    if (categoryName === "" || description === "" || images.length === 0) {
      enqueueSnackbar("Please fill in all fields and upload image", {
        variant: "error",
      });
      return;
    }

    const newCategory = {
      name: categoryName,
      description,
      thumbnail: images[0],
    };

    try {
      const res = await addCategory(newCategory);
      if (res.data.status === "ok") {
        enqueueSnackbar(res.data.message, {
          variant: "success",
        });
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.message, {
        variant: "error",
      });
    }
  };

  const handleUpload = () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dgrzlzx6f",
        uploadPreset: "myshop",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImages((preImages) => [...preImages, result.info.url]);
        }
      }
    );
    myWidget.open();
  };

  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        Please fill in form bellow to add Categories
      </Typography>

      <TextField
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        fullWidth
        label="Categorory Name"
        margin="normal"
      />

      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        label="Categories description"
        margin="normal"
        multiline
        minRows={5}
      />

      <Typography variant="h5" gutterBottom>
        Add images{" "}
        <Button
          variant="outlined"
          onClick={handleUpload}
          id="upload_widget"
          className="cloudinary-button"
        >
          Add
        </Button>
      </Typography>

      <Typography gutterBottom>Add Images</Typography>
      <Grid container spacing={2}>
        {images.map((url, idx) => (
          <Grid
            item
            xs={12}
            md={3}
            lg={2}
            key={url}
            sx={{ aspectRatio: "3/2" }}
          >
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                src={url}
                width={200}
                height={150}
                alt={`uploaded image ${idx}`}
                layout="fill"
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ p: 8, textAlign: "center" }}>
        <Button onClick={handleAddCategory} variant="contained" size="large">
          Save
        </Button>
      </Box>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      ></Script>
    </Box>
  );
};

export default AddCategoryTemplate;
