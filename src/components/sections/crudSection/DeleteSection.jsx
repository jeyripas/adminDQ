import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const DeleteSection = ({ section, crud, setCrud }) => {
  const handleSubmit = () => {
    const url = `${import.meta.env.VITE_URL_API}/section-product/${
      section.id
    }`;

    axios
      .delete(url, config)
      .then((res) => {
        toast.success('la sección se elminino exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al eliminar la sección');
        setCrud(''); // Mensaje de error
      });
  };

  return (
    <div
      className={`crud__container  ${
        crud === `deleteSection${section.id}`
          ? ''
          : 'closeCrud__container'
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
          Seguro que quiere eliminar la sección {section.name} ?
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

export default DeleteSection;
