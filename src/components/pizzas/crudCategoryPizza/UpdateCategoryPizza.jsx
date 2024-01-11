import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const UpdateCategoryPizza = ({ crud, setCrud, categories }) => {
  const { register, handleSubmit, reset } = useForm();
  const [selectCategoryId, setselectCategoryId] = useState();
  const [selectNameCategory, setselectNameCategory] = useState();

  const submit = (data) => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/category-product/${selectCategoryId}`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('La categoría  se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        console.log(err);
        if (!selectCategoryId) {
          toast.error('por favor seleccione una categoria');
        } else {
          toast.error('Hubo un error al editar la categoría');
        }

        setCrud('');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === 'updateCategory' ? '' : 'closeCrud__container'
      }`}
    >
      <i onClick={() => setCrud('')} className="bx bxs-x-circle"></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Editar categoría de Pizza {selectNameCategory}</h3>
        <div className="crud__div">
          <label>Seleccione la categoría:</label>
          <select
            required
            onChange={(e) => {
              const selectedCategory = JSON.parse(e.target.value);
              setselectCategoryId(selectedCategory.id);
              setselectNameCategory(selectedCategory.name);
            }}
          >
            <option value="0">Seleccionar categoría</option>
            {categories?.categoryProducts.map((categoryPizza) => (
              <option
                key={categoryPizza?.id}
                value={JSON.stringify(categoryPizza)} // Convertir objeto a cadena JSON
              >
                {categoryPizza?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="crud__div">
          <label htmlFor="name">Nombre:</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            required
            defaultValue={selectNameCategory}
          />
        </div>

        <button type="submit" className="crud__button">
          Editar categoría
        </button>
      </form>
    </div>
  );
};

export default UpdateCategoryPizza;
