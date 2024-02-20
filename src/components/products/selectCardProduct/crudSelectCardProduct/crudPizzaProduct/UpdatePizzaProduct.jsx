import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../../utils/getToken';

const UpdatePizzaProduct = ({ crud, setCrud, clickPizzaData }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-pizza/${
      clickPizzaData.id
    }`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('la pizza  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al editar la pizza');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'updatePizzaProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar la Pizza {clickPizzaData?.name} </h3>

        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            defaultValue={clickPizzaData?.name}
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Editar Pizza
        </button>
      </form>
    </div>
  );
};

export default UpdatePizzaProduct;
