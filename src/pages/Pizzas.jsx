import React, { useEffect, useState } from 'react';
import './pagesStyle/pageProduct.css';
import './pagesStyle/selectProduct.css';
import './pagesStyle/cardProduct.css';
import './pagesStyle/optionProduct.css';
import CategoryPizzas from '../components/pizzas/CategoryPizzas';
import SelectPizzas from '../components/pizzas/SelectPizzas';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pizzas = () => {
  const { id } = useParams();
  const [crud, setCrud] = useState('');
  const [categories, setCategories] = useState();
  const [selectCategory, setselectCategory] = useState('Todos');

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/section-product/${id}`;

    axios
      .get(url)
      .then((res) => setCategories(res.data.sectionProduct))
      .catch((err) => console.log(err));
  }, [crud]);

  return (
    <div className="page__container">
      <CategoryPizzas
        setCrud={setCrud}
        crud={crud}
        setselectCategory={setselectCategory}
        selectCategory={selectCategory}
        categories={categories}
        id={id}
      />
      <SelectPizzas
        crud={crud}
        setCrud={setCrud}
        selectCategory={selectCategory}
        categories={categories}
        id={id}
      />
    </div>
  );
};

export default Pizzas;
