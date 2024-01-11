import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';
import ViewSelectImg from '../../../hooks/ViewSelectImg';

const CreatePizza = ({ crud, setCrud, categories }) => {
  const {
    selectedImage,
    selectedFile,
    handleImageChange,
    handleOnClick,
    deleteSelectImgClick,
  } = ViewSelectImg({ idElementImg: 'productImg' });
  const { register, handleSubmit, reset } = useForm();
  const [idCategory, setidCategory] = useState('0');

  const submit = (data) => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/product/${idCategory}`;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('label', data.label);
    formData.append('labelColor', data.labelColor);

    if (selectedFile) {
      formData.append('productImg', selectedFile);
    }

    axios
      .post(url, formData, config)
      .then((res) => {
        toast.success('El producto se creo exitosamente');
        deleteSelectImgClick();
        reset();
      })
      .catch((err) => {
        console.log(err);
        if (idCategory === '0') {
          toast.error('Seleccione una Categoria por favor');
        } else {
          toast.error('Hubo un error al crear el producto');
        }
        deleteSelectImgClick();
      });
  };

  const defaultColor = '#rrggbb';

  return (
    <div
      className={`crud__container  ${
        crud === 'createPizza' ? '' : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
          deleteSelectImgClick();
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Producto</h3>
        <div className="crud__div">
          <label htmlFor="description">Categoría:</label>
          <select
            name="categoryPizzaId"
            id="categoryPizzaId"
            onChange={(e) => setidCategory(e.target.value)}
          >
            <option value="0">Seleccione La categoría</option>
            {categories?.categoryProducts?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
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
          <label htmlFor="description">Ingredientes:</label>
          <textarea
            {...register('description')}
            id="description"
            type="text"
            rows="4"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="label">Etiqueta:</label>
          <input
            {...register('label')}
            id="label"
            type="text"
            defaultValue="no"
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="labelColor">Color de la Etiqueta:</label>
          <input
            {...register('labelColor')}
            id="labelColor"
            type="color"
            defaultValue="#ff0000" // Reemplaza con un valor de color hexadecimal válido
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="productImg">Subir Imagen:</label>
          <div className="custom-file-input">
            <input
              id="productImg"
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
          Crear Producto
        </button>
      </form>
    </div>
  );
};
export default CreatePizza;
