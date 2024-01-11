import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../utils/getToken';

const CreateOptionPizza = ({ crud, setCrud, pizza }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-option/${
      pizza.id
    }`;

    axios
      .post(url, data, config)

      .then((res) => {
        toast.success('La Opción  se creo exitosamente');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear la Opción ');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createOptionProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Opción para la Pizza {pizza.name}</h3>
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
          <label htmlFor="size">tamaño:</label>
          <input
            {...register('size')}
            id="size"
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
          <label htmlFor="discount">Descuento:</label>
          <input
            {...register('discount')}
            id="discount"
            type="number"
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Crear Opción
        </button>
      </form>
    </div>
  );
};

export default CreateOptionPizza;
