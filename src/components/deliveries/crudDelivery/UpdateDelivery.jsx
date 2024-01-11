import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const UpdateDelivery = ({ crud, setCrud, delivery }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/delivery/${
      delivery.id
    }`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('La Zona  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        toast.error('Hubo un error al editar la Zona');

        setCrud('');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === `updateDelivey${delivery.id}`
          ? ''
          : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar la zona {delivery.name}</h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            required
            defaultValue={delivery.name}
          />
        </div>
        <div className="crud__div">
          <label htmlFor="description">Descripción:</label>
          <input
            {...register('description')}
            id="description"
            type="text"
            defaultValue={delivery.description}
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
            defaultValue={delivery.price}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="linkMap">link del map:</label>
          <input
            {...register('linkMap')}
            id="linkMap"
            type="text"
            defaultValue={delivery.linkMap}
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Editar Zona
        </button>
      </form>
    </div>
  );
};

export default UpdateDelivery;
