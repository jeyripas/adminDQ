import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const CreateDelivery = ({ crud, setCrud }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/delivery`;

    axios
      .post(url, data, config)
      .then((res) => {
        toast.success('La Zona  se creo exitosamente');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear la zona');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createZone' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Zona </h3>
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
          <label htmlFor="description">Descripción:</label>
          <input
            {...register('description')}
            id="description"
            type="text"
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
            required
          />
        </div>

        <div className="crud__div">
          <label htmlFor="linkMap">link del map:</label>
          <input
            {...register('linkMap')}
            id="linkMap"
            type="text"
            required
          />
        </div>
        <button type="submit" className="crud__button">
          Crear Zona
        </button>
      </form>
    </div>
  );
};

export default CreateDelivery;
