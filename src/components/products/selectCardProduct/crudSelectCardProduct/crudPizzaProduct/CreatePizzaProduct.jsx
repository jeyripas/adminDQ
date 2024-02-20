import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../../utils/getToken';

const CreatePizzaProduct = ({ crud, setCrud, pizza }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-pizza/${
      pizza.id
    }`;

    axios
      .post(url, data, config)

      .then((res) => {
        toast.success('La Pizza  se creo exitosamente');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear la Pizza ');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createPizzaProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Pizza para el Producto {pizza.name}</h3>
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
          Crear Pizza
        </button>
      </form>
    </div>
  );
};

export default CreatePizzaProduct;
