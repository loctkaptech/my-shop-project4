import { Button } from '@mui/material';
import Head from 'next/head';
import Script from 'next/script';

const AddProductTemplate = () => {
  const handleUpload = () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgrzlzx6f',
        uploadPreset: 'myshop',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
        }
      }
    );
    myWidget.open();
  };

  return (
    <div>
      <Head></Head>
      AddProductTemplate
      <Button
        sx={{ background: 'inherit' }}
        variant='outlined'
        onClick={handleUpload}
        id='upload_widget'
        className='cloudinary-button'
      >
        Upload files
      </Button>
      <Script
        src='https://upload-widget.cloudinary.com/global/all.js'
        type='text/javascript'
      ></Script>
    </div>
  );
};

export default AddProductTemplate;
