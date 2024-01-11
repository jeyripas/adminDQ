import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../pages/pagesStyle/crudStyle.css';
import config from '../../utils/getToken';

const UpdateUser = ({ crud, setCrud, selectUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/user/${
      selectUser?.id
    }`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('El usuario  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al editar el usuario');
        setCrud('');
      });
    reset();
  };
  return (
    <div
      className={`crud__container  ${
        crud === 'updateUser' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar Usuario</h3>
        <div className="crud__div">
          <label htmlFor="updateName">Nombre:</label>
          <input
            {...register('name')}
            id="updateName"
            type="text"
            defaultValue={selectUser?.name}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="updateLastName">Apellidos:</label>
          <input
            {...register('lastName')}
            id="updateLastName"
            type="text"
            defaultValue={selectUser?.lastName}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="updatePhoneNumber">
            Numero de telefono:
          </label>
          <input
            {...register('phoneNumber')}
            id="updatePhoneNumber"
            type="number"
            defaultValue={selectUser?.phoneNumber}
            required
          />
        </div>
        <div className="crud__div">
          <label htmlFor="updateAddress">Dirrección:</label>
          <input
            {...register('address')}
            id="updateAddress"
            type="text"
            defaultValue={selectUser?.address}
            required
          />
        </div>

        <button type="submit" className="crud__button">
          Update Usuario
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
