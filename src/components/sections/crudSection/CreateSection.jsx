import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';
import ViewSelectImg from '../../../hooks/ViewSelectImg';
import ViewSelectIcon from '../../../hooks/ViewSelectIcon';

const CreateSection = ({ crud, setCrud, pizzaCategories }) => {
  const {
    selectedImage,
    selectedFile,
    handleImageChange,
    handleOnClick,
    deleteSelectImgClick,
  } = ViewSelectImg({ idElementImg: 'sectionProductImg' });
  const {
    selectedIcon,
    selectedFileIcon,
    handleIconChange,
    handleOnClickIcon,
    deleteSelectIconClick,
  } = ViewSelectIcon({ idElementImg: 'sectionIcon' });
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/section-product/`;
    const formData = new FormData();
    formData.append('name', data.name);
    if (selectedFile && selectedFileIcon) {
      formData.append('sectionProductImg', selectedFile);
      formData.append('sectionIcon', selectedFileIcon);
    }

    axios
      .post(url, formData, config)
      .then((res) => {
        toast.success('La sección se creo exitosamente');
        deleteSelectImgClick();
        deleteSelectIconClick();
      })
      .catch((err) => {
        toast.error('Hubo un error al crear la sección');

        deleteSelectImgClick();
        deleteSelectIconClick();
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createSection' ? '' : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
          deleteSelectImgClick();
          deleteSelectIconClick();
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Sección</h3>
        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="sectionIcon">Subir Icono:</label>
          <div className="custom-file-input">
            <input
              id="sectionIcon"
              type="file"
              onChange={handleIconChange}
              accept="image/*"
              required
              style={{ display: 'none' }}
            />
            <i
              className="bx bxs-image-add"
              onClick={handleOnClickIcon}
            ></i>
          </div>
          <div className="image__preview">
            {selectedIcon && <img src={selectedIcon} alt="Preview" />}
          </div>
        </div>

        <div className="crud__div">
          <label htmlFor="sectionProductImg">Subir Imagen:</label>
          <div className="custom-file-input">
            <input
              id="sectionProductImg"
              type="file"
              onChange={handleImageChange}
              required
              style={{ display: 'none' }}
            />
            <i
              className="bx bxs-image-add"
              onClick={handleOnClick}
            ></i>
          </div>
          <div className="image__preview">
            {selectedImage && (
              <img src={selectedImage} alt="Preview" />
            )}
          </div>
        </div>
        <button type="submit" className="crud__button">
          Crear Sección
        </button>
      </form>
    </div>
  );
};
export default CreateSection;
