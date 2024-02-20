import React, { useState } from 'react';
import CreateCategoryProduct from './crudCategoryProduct/CreateCategoryProduct';
import UpdateCategoryProduct from './crudCategoryProduct/UpdateCategoryProduct';
import DeleteCategoryProduct from './crudCategoryProduct/DeleteCategoryProduct';

const CategoryProduct = ({
  crud,
  setCrud,
  setselectCategory,
  selectCategory,
  categories,
  id,
}) => {
  const [openSelectCategory, setOpenSelectCategory] = useState(false);
  const [openMenu, setopenMenu] = useState(true);

  return (
    <section className="pageCategories__section">
      <div className="pageCategories__iconsMenu__container">
        {openMenu ? (
          <i
            className="bx bx-menu"
            onClick={() => setopenMenu(!openMenu)}
          ></i>
        ) : (
          <i
            className="bx bxs-x-circle"
            onClick={() => setopenMenu(!openMenu)}
          ></i>
        )}
      </div>
      <div
        className={`pageCategories__articles_container ${
          openMenu ? 'pageCategories__closeArticles_container' : ''
        } `}
      >
        <article className="pageCategories__selectCategory_container">
          <span>Tus Categorias:</span>
          <p
            tabIndex={0}
            onBlur={() => setOpenSelectCategory(false)}
            onFocus={() => setOpenSelectCategory(true)}
          >
            {selectCategory === 'Todos'
              ? 'Todos'
              : selectCategory?.name}
            <i className="bx bx-chevron-down"></i>
          </p>
          <ul
            className={` pageCategories__closeSelectCategory ${
              openSelectCategory
                ? 'pageCategories__openSelectCategory'
                : ''
            }`}
          >
            <li
              onClick={() => {
                setOpenSelectCategory(false);
                setselectCategory('Todos');
              }}
            >
              Todos
            </li>
            {categories?.categoryProducts.map((categoryPizza) => (
              <li
                key={categoryPizza?.id}
                onClick={() => {
                  setOpenSelectCategory(false);
                  setselectCategory(categoryPizza);
                }}
              >
                {categoryPizza?.name}
              </li>
            ))}
          </ul>
        </article>
        <article className="pageCategories__createCategoryProduct__contianer">
          <p onClick={() => setCrud('createCategory')}>
            Crear Categoría
          </p>
          <CreateCategoryProduct
            setCrud={setCrud}
            crud={crud}
            id={id}
          />
          <p onClick={() => setCrud('updateCategory')}>
            Editar Categoría
          </p>
          <UpdateCategoryProduct
            setCrud={setCrud}
            crud={crud}
            categories={categories}
          />
          <p onClick={() => setCrud('deleteCategory')}>
            Eliminar Categoría
          </p>
          <DeleteCategoryProduct
            setCrud={setCrud}
            crud={crud}
            categories={categories}
          />
        </article>
      </div>
    </section>
  );
};

export default CategoryProduct;
