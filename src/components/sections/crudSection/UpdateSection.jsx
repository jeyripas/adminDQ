import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';
import ViewSelectIcon from '../../../hooks/ViewSelectIcon';

const UpdateSection = ({ crud, setCrud, section }) => {
  const {
    selectedIcon,
    selectedFileIcon,
    handleIconChange,
    handleOnClickIcon,
    deleteSelectIconClick,
  } = ViewSelectIcon({ idElementImg: `updateIcon${section.id}` });
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/section-product/${
      section.id
    }`;
    const formData = new FormData();
    formData.append('name', data.name);
    if (selectedFileIcon) {
      formData.append('sectionIcon', selectedFileIcon);
    }

    axios
      .patch(url, formData, config)
      .then((res) => {
        toast.success('La sección se edito exitosamente');
        deleteSelectIconClick();
      })
      .catch((err) => {
        toast.error('Hubo un error al editar la sección');
        deleteSelectIconClick();
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === `updateSection${section.id}`
          ? ''
          : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
          deleteSelectIconClick();
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar la sección {section.name}</h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            defaultValue={section.name}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor={`updateIcon${section.id}`}>
            Subir Icono:
          </label>
          <div className="custom-file-input">
            <input
              id={`updateIcon${section.id}`}
              type="file"
              onChange={handleIconChange}
              accept="image/*"
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
        <button type="submit" className="crud__button">
          Editar Sección
        </button>
      </form>
    </div>
  );
};

export default UpdateSection;
