import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../../utils/getToken';

const CreateDrinkProduct = ({ crud, setCrud, pizza }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-drink/${
      pizza.id
    }`;

    axios
      .post(url, data, config)

      .then((res) => {
        toast.success('La Bebida  se creo exitosamente');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear la Bebida ');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createDrinkProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Bebida para el Producto {pizza.name}</h3>
        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Crear Bebida
        </button>
      </form>
    </div>
  );
};

export default CreateDrinkProduct;
