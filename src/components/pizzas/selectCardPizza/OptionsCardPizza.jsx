import React, { useState } from 'react';
import CreateOptionPizza from './crudSelectCardPizza/CreateOptionPizza';
import CreateExtraPizza from './crudSelectCardPizza/CreateExtraPizza';
import UpdateExtraPizza from './crudSelectCardPizza/UpdateExtraPizza';
import UpdateOptionPizza from './crudSelectCardPizza/UpdateOptionPizza';
import DeleteOptionPizza from './crudSelectCardPizza/DeleteOptionPizza';
import DeleteExtraPizza from './crudSelectCardPizza/DeleteExtraPizza';

const OptionsCardPizza = ({
  pizza,
  viewOptionsProduct,
  setviewOptionsProduct,
  crud,
  setCrud,
}) => {
  const [clickOptionData, setclickOptionData] = useState();
  const [clickExtraData, setclickExtraData] = useState();

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
                        <UpdateOptionPizza
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
                        <DeleteOptionPizza
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
                        <UpdateExtraPizza
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
                        <DeleteExtraPizza
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
            Agregar Opciones
          </p>
          <CreateOptionPizza
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
          <p onClick={() => setCrud('createExtraProduct')}>
            Agregar Extras
          </p>
          <CreateExtraPizza
            crud={crud}
            setCrud={setCrud}
            pizza={pizza}
          />
        </article>
      </div>
    </div>
  );
};

export default OptionsCardPizza;
