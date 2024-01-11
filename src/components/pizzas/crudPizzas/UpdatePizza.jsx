import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const UpdatePizza = ({ crud, setCrud, pizza, setclickEditImg }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product/${pizza.id}`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('EL product  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al editar el product');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'updateProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
          setclickEditImg();
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar el product {pizza.name}</h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            defaultValue={pizza.name}
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
            defaultValue={pizza.description}
          />
        </div>
        <div className="crud__div">
          <label htmlFor="label">Etiqueta:</label>
          <input
            {...register('label')}
            id="label"
            type="text"
            defaultValue={pizza.label}
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="labelColor">Color de la Etiqueta:</label>
          <input
            {...register('labelColor')}
            id="labelColor"
            type="color"
            defaultValue={pizza.labelColor} // Reemplaza con un valor de color hexadecimal válido
            required
          />
        </div>
        <button type="submit" className="crud__button">
          Editar product
        </button>
      </form>
    </div>
  );
};

export default UpdatePizza;
