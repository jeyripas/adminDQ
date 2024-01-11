import React, { useEffect, useState } from 'react';
import CardPizza from './selectCardPizza/CardPizza';
import CreatePizza from './crudPizzas/CreatePizza';
import axios from 'axios';

const SelectPizzas = ({
  selectCategory,
  crud,
  setCrud,
  categories,
  id,
}) => {
  const [allProducts, setallProducts] = useState();
  const [productsCategory, setproductsCategory] = useState();

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/category-product/all-products/${id}`;

    axios
      .get(url)
      .then((res) => setallProducts(res.data))
      .catch((err) => console.log(err));
  }, [crud]);

  useEffect(() => {
    if (selectCategory.id) {
      const url = `${import.meta.env.VITE_URL_API}/category-product/${
        selectCategory.id
      }`;

      axios
        .get(url)
        .then((res) => setproductsCategory(res.data.categoryProduct))
        .catch((err) => console.log(err));
    }
  }, [crud, selectCategory]);

  return (
    <section className="selectProduct__container">
      <article className="selectProduct__nameCreateProduct">
        <h2>{categories?.name}</h2>
        <h2>
          {selectCategory === 'Todos' ? 'Todos' : selectCategory.name}
        </h2>
        <p onClick={() => setCrud('createPizza')}>Crear Producto</p>
        <CreatePizza
          categories={categories}
          setCrud={setCrud}
          crud={crud}
        />
      </article>
      <article className="selectProduct__products__container">
        {selectCategory === 'Todos'
          ? allProducts?.categoryProducts.map((pizza) =>
              pizza.products.map((product) => (
                <CardPizza
                  key={product.id} // Aquí estás usando pizza.id como clave
                  pizza={product}
                  crud={crud}
                  setCrud={setCrud}
                />
              ))
            )
          : productsCategory?.products?.map((pizza) => (
              <CardPizza
                key={pizza.id}
                pizza={pizza}
                crud={crud}
                setCrud={setCrud}
              />
            ))}
      </article>
    </section>
  );
};

export default SelectPizzas;
