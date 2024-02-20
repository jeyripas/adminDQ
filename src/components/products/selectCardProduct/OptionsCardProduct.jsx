import React, { useState } from 'react';

import CreateExtraProduct from './crudSelectCardProduct/crudExtraProduct/CreateExtraProduct';
import CreateOptionProduct from './crudSelectCardProduct/crudOptionProduct/CreateOptionProduct';
import DeleteExtraProduct from './crudSelectCardProduct/crudExtraProduct/DeleteExtraProduct';
import UpdateExtraProduct from './crudSelectCardProduct/crudExtraProduct/UpdateExtraProduct';
import DeleteOptionProduct from './crudSelectCardProduct/crudOptionProduct/DeleteOptionProduct';
import UpdateOptionProduct from './crudSelectCardProduct/crudOptionProduct/UpdateOptionProduct';
import CreatePizzaProduct from './crudSelectCardProduct/crudPizzaProduct/CreatePizzaProduct';
import UpdatePizzaProduct from './crudSelectCardProduct/crudPizzaProduct/UpdatePizzaProduct';
import DeletePizzaProduct from './crudSelectCardProduct/crudPizzaProduct/DeletePizzaProduct';
import CreateDrinkProduct from './crudSelectCardProduct/crudDrinkProduct/CreateDrinkProduct';
import UpdateDrinkProduct from './crudSelectCardProduct/crudDrinkProduct/UpdateDrinkProduct';
import DeleteDrinkProduct from './crudSelectCardProduct/crudDrinkProduct/DeleteDrinkProduct';

const OptionsCardProduct = ({
  pizza,
  viewOptionsProduct,
  setviewOptionsProduct,
  crud,
  setCrud,
}) => {
  const [clickOptionData, setclickOptionData] = useState();
  const [clickExtraData, setclickExtraData] = useState();
  const [clickPizzaData, setclickPizzaData] = useState();
  const [clickDrinkData, setclickDrinkData] = useState();

  function formatPrice(price) {
    if (Number.isInteger(price)) {
      return price.toFixed(2);
    } else {
      const decimalPart = price.toString().split('.')[1];
      return decimalPart && decimalPart.length === 1
        ? price.toFixed(2)
        : price;
    }
  }

  console.log(pizza);
  return (
    <div
      className={`optionProduct__container ${
        viewOptionsProduct ? '' : 'closeOptionProduct__container'
      }`}
    >
      <div className="optionProduct__cardOptionContainer">
        <article className="optionProduct__nameClose">
          <h3>{pizza.name}</h3>
          <i
            className="bx bx-x"
            onClick={() => setviewOptionsProduct(false)}
          ></i>
        </article>
        <article className="optionProduct__dataOptionsExtra__article">
          <div className="optionProduct__optionExtraData__div">
            <h4>Opciones:</h4>
            <ul>
              {pizza.productOptions
                ?.sort((a, b) => b.price - a.price) // Ordenar opciones por precio de mayor a menor
                .map((option) => (
                  <li key={option.id}>
                    <div className="optionProduct__optionExtraData">
                      <p>
                        {option.name}: {option.size}
                      </p>
                      <p>s./{formatPrice(option.price)}</p>
                    </div>
                    <div className="optionProduct__updateDeleteIcon">
                      <i
                        className="bx bxs-edit-alt icon__editExtraProduct"
                        onClick={() => {
                          setCrud('updateOptionProduct');
                          setclickOptionData(option);
                        }}
                      ></i>
                      {option.id === clickOptionData?.id ? (
                        <UpdateOptionProduct
                          crud={crud}
                          setCrud={setCrud}
                          clickOptionData={clickOptionData}
                        />
                      ) : (
                        ''
                      )}
                      <i
                        className="bx bx-trash delete__editExtraProduct"
                        onClick={() => {
                          setCrud('deleteOptionProduct');
                          setclickOptionData(option);
                        }}
                      ></i>
                      {option.id === clickOptionData?.id ? (
                        <DeleteOptionProduct
                          crud={crud}
                          setCrud={setCrud}
                          clickOptionData={clickOptionData}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="optionProduct__optionExtraData__div">
            <h4>Pizzas:</h4>
            <ul>
              {pizza.productPizzas.map((extra) => (
                <li key={extra.id}>
                  <div className="optionProduct__optionExtraData">
                    <p>{extra.name}</p>
                  </div>
                  <div className="optionProduct__updateDeleteIcon">
                    <i
                      className="bx bxs-edit-alt icon__editExtraProduct"
                      onClick={() => {
                        setCrud('updatePizzaProduct');
                        setclickPizzaData(extra);
                      }}
                    ></i>
                    {extra.id === clickPizzaData?.id ? (
                      <UpdatePizzaProduct
                        crud={crud}
                        setCrud={setCrud}
                        clickPizzaData={clickPizzaData}
                      />
                    ) : (
                      ''
                    )}
                    <i
                      className="bx bx-trash delete__editExtraProduct"
                      onClick={() => {
                        setCrud('deletePizzaProduct');
                        setclickPizzaData(extra);
                      }}
                    ></i>
                    {extra.id === clickPizzaData?.id ? (
                      <DeletePizzaProduct
                        crud={crud}
                        setCrud={setCrud}
                        clickPizzaData={clickPizzaData}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="optionProduct__optionExtraData__div">
            <h4>Bebidas:</h4>
            <ul>
              {pizza.productDrinks.map((extra) => (
                <li key={extra.id}>
                  <div className="optionProduct__optionExtraData">
                    <p>{extra.name}</p>
                  </div>
                  <div className="optionProduct__updateDeleteIcon">
                    <i
                      className="bx bxs-edit-alt icon__editExtraProduct"
                      onClick={() => {
                        setCrud('updateDrinkProduct');
                        setclickDrinkData(extra);
                      }}
                    ></i>
                    {extra.id === clickDrinkData?.id ? (
                      <UpdateDrinkProduct
                        crud={crud}
                        setCrud={setCrud}
                        clickDrinkData={clickDrinkData}
                      />
                    ) : (
                      ''
                    )}
                    <i
                      className="bx bx-trash delete__editExtraProduct"
                      onClick={() => {
                        setCrud('deleteDrinkProduct');
                        setclickDrinkData(extra);
                      }}
                    ></i>
                    {extra.id === clickDrinkData?.id ? (
                      <DeleteDrinkProduct
                        crud={crud}
                        setCrud={setCrud}
                        clickDrinkData={clickDrinkData}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="optionProduct__optionExtraData__div">
            <h4>Extras:</h4>
            <ul>
              {pizza.productExtras

                ?.sort((a, b) => b.price - a.price)
                .map((extra) => (
                  <li key={extra.id}>
                    <div className="optionProduct__optionExtraData">
                      <p>{extra.name}</p>
                      <p>s./{formatPrice(extra.price)}</p>
                    </div>
                    <div className="optionProduct__updateDeleteIcon">
                      <i
                        className="bx bxs-edit-alt icon__editExtraProduct"
                        onClick={() => {
                          setCrud('updateExtraProduct');
                          setclickExtraData(extra);
                        }}
                      ></i>
                      {extra.id === clickExtraData?.id ? (
                        <UpdateExtraProduct
                          crud={crud}
                          setCrud={setCrud}
                          extra={clickExtraData}
                        />
                      ) : (
                        ''
                      )}
                      <i
                        className="bx bx-trash delete__editExtraProduct"
                        onClick={() => {
                          setCrud('deleteExtraProduct');
                          setclickExtraData(extra);
                        }}
                      ></i>
                      {extra.id === clickExtraData?.id ? (
                        <DeleteExtraProduct
                          crud={crud}
                          setCrud={setCrud}
                          clickExtraData={clickExtraData}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article className="optionProduct__addOptionsExtras">
          <p onClick={() => setCrud('createOptionProduct')}>
            Crear Opciones
          </p>
          <CreateOptionProduct
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
          <p onClick={() => setCrud('createPizzaProduct')}>
            Crear Pizzas
          </p>
          <CreatePizzaProduct
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
          <p onClick={() => setCrud('createDrinkProduct')}>
            Crear Bebidas
          </p>
          <CreateDrinkProduct
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
          <p onClick={() => setCrud('createExtraProduct')}>
            Crear Extras
          </p>
          <CreateExtraProduct
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
        </article>
      </div>
    </div>
  );
};

export default OptionsCardProduct;
