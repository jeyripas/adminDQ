import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const DeleteCategoryPizza = ({ crud, setCrud, categories }) => {
  const { handleSubmit } = useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSubmit = async () => {
    try {
      const url = `${import.meta.env.VITE_URL_API}/category-product/${
        selectedCategory.id
      }`;
      await axios.delete(url, config);
      toast.success('La categoría se eliminó exitosamente');
      setCrud('');
    } catch (err) {
      console.error(err);
      if (!selectedCategory) {
        toast.error('Por favor, seleccione una categoría');
      } else {
        toast.error('Hubo un error al eliminar la categoría');
      }
    }
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'deleteCategory' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Eliminar la Categoría {selectedCategory?.name}</h3>
        <div className="crud__div">
          <label>Seleccione la categoría:</label>
          <select
            required
            onChange={(e) => {
              const selectedCategory = JSON.parse(e.target.value);
              setSelectedCategory(selectedCategory);
            }}
          >
            <option value="0">Seleccionar categoría</option>
            {categories?.categoryProducts.map((categoryPizza) => (
              <option
                key={categoryPizza?.id}
                value={JSON.stringify(categoryPizza)}
              >
                {categoryPizza?.name}
              </option>
            ))}
          </select>
        </div>
        <section className="crudForm__deleteButtons">
          <button type="submit" className="crud__button">
            Eliminar
          </button>
          <button
            type="button"
            className="crud__button crudForm__cancelDelete"
            onClick={() => setCrud('')}
          >
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default DeleteCategoryPizza;
