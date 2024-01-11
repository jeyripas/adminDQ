import { useState } from 'react';

const ViewSelectIcon = ({ idElementImg }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedFileIcon, setSelectedFileIcon] = useState(null);

  const handleIconChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validar que el archivo no sea un SVG
      if (!file.type.includes('svg')) {
        setSelectedIcon(URL.createObjectURL(file));
        setSelectedFileIcon(file);
      } else {
        alert('No se permiten archivos SVG');
        event.target.value = '';
      }
    }
  };

  const handleOnClickIcon = () => {
    document.getElementById(idElementImg).click();
  };

  const deleteSelectIconClick = () => {
    setSelectedIcon(null);
    setSelectedFileIcon(null);
  };

  return {
    selectedIcon,
    selectedFileIcon,
    handleIconChange,
    handleOnClickIcon,
    deleteSelectIconClick,
  };
};

export default ViewSelectIcon;
