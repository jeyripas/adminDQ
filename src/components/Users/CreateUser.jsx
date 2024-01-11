import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../pages/pagesStyle/crudStyle.css';
const CreateUser = ({ crud, setCrud }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/user/signup`;

    axios
      .post(url, data)
      .then((res) => {
        toast.success('El usuario  se creo exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al crear el usuario');
        setCrud('');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'createUser' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Crear Usuario</h3>
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
          <label htmlFor="lastName">Apellidos:</label>
          <input
            {...register('lastName')}
            id="lastName"
            type="text"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="dni">DNI:</label>
          <input
            {...register('dni')}
            id="dni"
            type="text"
            maxLength="9"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="phoneNumber">Numero de telefono:</label>
          <input
            {...register('phoneNumber')}
            id="phoneNumber"
            type="number"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="address">Dirrección:</label>
          <input
            {...register('address')}
            id="address"
            type="text"
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="password">Contraseña:</label>
          <input
            {...register('password')}
            id="password"
            type="password"
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
