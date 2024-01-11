import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const DeleteDelivery = ({ crud, setCrud, delivery }) => {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const url = `${import.meta.env.VITE_URL_API}/delivery/${
        delivery.id
      }`;
      await axios.delete(url, config);
      toast.success('La zona se eliminó exitosamente');
      setCrud('');
    } catch (err) {
      toast.error('Hubo un error al eliminar la zona');
    }
  };

  return (
    <div
      className={`crud__container  ${
        crud === `deleteDelivery${delivery.id}`
          ? ''
          : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(onSubmit)}>
        <h3>
          Esta seguro que quiere eliminar la Zona {delivery?.name}
        </h3>

        <section className="crudForm__deleteButtons">
          <button type="submit" className="crud__button">
            Eliminar
          </button>
          <button
            type="button"
            className="crud__button crudForm__cancelDelete"
            onClick={() => setCrud('')}
          >
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default DeleteDelivery;
