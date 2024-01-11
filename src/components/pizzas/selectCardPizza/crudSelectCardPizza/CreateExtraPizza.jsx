import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../utils/getToken';

const CreateExtraPizza = ({ crud, setCrud, pizza }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/product-extra/${
      pizza.id
    }`;

    axios
      .post(url, data, config)

      .then((res) => {
        toast.success('El extra  se creo exitosamente');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear el extra ');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createExtraProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Extra para la Pizza {pizza.name}</h3>
        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="queso extra"
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
            placeholder="2"
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Crear Extra
        </button>
      </form>
    </div>
  );
};

export default CreateExtraPizza;
