import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';
import ViewSelectImg from '../../../hooks/ViewSelectImg';

const UpdatePizzaImg = ({
  crud,
  setCrud,
  pizza,
  setclickEditImg,
}) => {
  const {
    selectedImage,
    selectedFile,
    handleImageChange,
    handleOnClick,
    deleteSelectImgClick,
  } = ViewSelectImg({ idElementImg: 'updateImg' });
  const { register, handleSubmit, reset } = useForm();

  const submit = async () => {
    const url = `${import.meta.env.VITE_URL_API}/product/${
      pizza.id
    }/updateImg`;
    const formData = new FormData();

    if (selectedFile) {
      formData.append('productImg', selectedFile);
    }

    try {
      const res = await axios.patch(url, formData, config);
      toast.success(
        'La imagen de la pizza se actualizó exitosamente'
      );
      deleteSelectImgClick();
    } catch (err) {
      toast.error('Hubo un error al actualizar la imagen');
      deleteSelectImgClick();
    }

    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'updateProductImg' ? '' : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
          deleteSelectImgClick();
          setclickEditImg();
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Actualizar la imagen de la pizza {pizza.name}</h3>

        <div className="crud__div">
          <label htmlFor="updateImg">Seleccionar Imagen:</label>
          <div className="custom-file-input">
            <input
              id="updateImg"
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
          Actualizar Imagen
        </button>
      </form>
    </div>
  );
};
export default UpdatePizzaImg;
