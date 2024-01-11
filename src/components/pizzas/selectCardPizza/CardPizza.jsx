import React, { useState } from 'react';
import OptionsCardPizza from './OptionsCardPizza';
import DeletePizza from '../crudPizzas/DeletePizza';
import UpdatePizza from '../crudPizzas/UpdatePizza';
import UpdatePizzaImg from '../crudPizzas/UpdatePizzaImg';

const CardPizza = ({ pizza, crud, setCrud }) => {
  const [viewOptionsProduct, setviewOptionsProduct] = useState(false);
  const [clickEditImg, setclickEditImg] = useState();

  return (
    <div className="cardProduct__contianer">
      <p
        className="cardProduct__label"
        style={{ backgroundColor: `${pizza.labelColor}` }}
      >
        {pizza.label}
      </p>
      <div className="cardProduct__imgContainer">
        <span>{pizza.purchasedProduct}</span>
        <i
          className="bx bxs-edit-alt icon__editProductImg"
          onClick={() => {
            setCrud('updateProductImg');
            setclickEditImg(pizza);
          }}
        ></i>
        {clickEditImg?.id === pizza.id ? (
          <UpdatePizzaImg
            pizza={pizza}
            crud={crud}
            setCrud={setCrud}
            setclickEditImg={setclickEditImg}
          />
        ) : (
          ''
        )}
        <img src={pizza.productImg} alt={pizza.name} />
        <article className="cardProduct__articleData">
          <h4>{pizza.name}</h4>
          <p>{pizza.description}</p>
        </article>
      </div>
      <div className="cardProduct__optionsUpdateProduct">
        <p
          onClick={() => {
            setviewOptionsProduct(true);
          }}
        >
          <i className="bx bx-menu"></i> Opciones
        </p>
        <OptionsCardPizza
          pizza={pizza}
          crud={crud}
          setCrud={setCrud}
          setviewOptionsProduct={setviewOptionsProduct}
          viewOptionsProduct={viewOptionsProduct}
        />
        <article className="cardProduct__updateDeleteIcons">
          <i
            className="bx bxs-edit-alt icon__editExtraProduct"
            onClick={() => {
              setCrud('updateProduct');
              setclickEditImg(pizza);
            }}
          ></i>

          {clickEditImg?.id === pizza.id ? (
            <UpdatePizza
              pizza={pizza}
              crud={crud}
              setCrud={setCrud}
              setclickEditImg={setclickEditImg}
            />
          ) : (
            ''
          )}
          <i
            className="bx bx-trash delete__editExtraProduct"
            onClick={() => {
              setCrud('deleteProduct');
              setclickEditImg(pizza);
            }}
          ></i>
          {clickEditImg?.id === pizza.id ? (
            <DeletePizza
              pizza={pizza}
              crud={crud}
              setCrud={setCrud}
              setclickEditImg={setclickEditImg}
            />
          ) : (
            ''
          )}
        </article>
      </div>
    </div>
  );
};

export default CardPizza;
