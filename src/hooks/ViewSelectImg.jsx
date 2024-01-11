import { useState } from 'react';

const ViewSelectImg = ({ idElementImg }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  const handleOnClick = () => {
    document.getElementById(idElementImg).click();
  };

  const deleteSelectImgClick = () => {
    setSelectedImage(null);
  };

  return {
    selectedImage,
    selectedFile,
    handleImageChange,
    handleOnClick,
    deleteSelectImgClick,
  };
};

export default ViewSelectImg;
