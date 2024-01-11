import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../utils/getToken';

const UpdateOptionPizza = ({ crud, setCrud, clickOptionData }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-option/${
      clickOptionData.id
    }`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('El extra  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al editar el extra');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'updateOptionProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar la opcion {clickOptionData?.name} </h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            defaultValue={clickOptionData?.name}
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="size">tamaño:</label>
          <input
            {...register('size')}
            id="size"
            type="text"
            defaultValue={clickOptionData?.size}
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="price">precio:</label>
          <input
            {...register('price', {
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'Ingrese un número válido',
              },
            })}
            id="price"
            type="text"
            defaultValue={clickOptionData?.price}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="discount">Descuento:</label>
          <input
            {...register('discount')}
            id="discount"
            type="number"
            defaultValue={clickOptionData?.discount}
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Editar Opcion
        </button>
      </form>
    </div>
  );
};

export default UpdateOptionPizza;
