import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../utils/getToken';

const UpdateExtraPizza = ({ crud, setCrud, extra }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-extra/${
      extra.id
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
        crud === 'updateExtraProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar Extra</h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            defaultValue={extra.name}
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
            defaultValue={extra.price}
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Editar Extra
        </button>
      </form>
    </div>
  );
};

export default UpdateExtraPizza;
