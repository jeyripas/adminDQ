import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../utils/getToken';

const DeleteUser = ({ crud, setCrud, selectUser }) => {
  const handleSubmit = () => {
    const url = `${import.meta.env.VITE_URL_API}/user/${
      selectUser?.id
    }`;

    axios
      .delete(url, config)
      .then((res) => {
        toast.success('el usuario se elminino exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al eliminar al usuario');
        setCrud(''); // Mensaje de error
      });
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'deleteUser' ? '' : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form">
        <h3>
          Seguro que quiere eliminar al usuario {selectUser?.name} ?
        </h3>

        <section className="crudForm__deleteButtons">
          <button
            type="submit"
            className="crud__button"
            onClick={handleSubmit}
          >
            Eliminar
          </button>
          <button
            type="submit"
            className=" crud__button crudForm__cancelDelete"
            onClick={() => setCrud('')}
          >
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default DeleteUser;
