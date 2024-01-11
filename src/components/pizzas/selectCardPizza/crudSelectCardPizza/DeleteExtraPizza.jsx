import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../../utils/getToken';

const DeleteExtraPizza = ({ clickExtraData, crud, setCrud }) => {
  const handleSubmit = () => {
    const url = `${import.meta.env.VITE_URL_API}/product-extra/${
      clickExtraData.id
    }`;

    axios
      .delete(url, config)
      .then((res) => {
        toast.success('la opcion se elminino exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al eliminar la opcion');
        setCrud(''); // Mensaje de error
      });
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'deleteExtraProduct' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form">
        <h3>
          Seguro que quiere eliminar el extra {clickExtraData.name} ?
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

export default DeleteExtraPizza;
