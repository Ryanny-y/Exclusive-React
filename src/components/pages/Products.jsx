import SmallHeader from "../ui/SmallHeader";
import FilterButtons from "../ui/buttons/FilterButtons";
import ProductContainer from "../ui/ProductContainer";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function Products() {
  const { products } = useContext(ProductContext);

  useEffect(() => {
    console.log(products);
  });

  const categoryArr = [
    {
      filterBy: "Phones",
    },
    {
      filterBy: "Computers",
    },
    {
      filterBy: "SmartWatch",
    },
    {
      filterBy: "Camera",
    },
    {
      filterBy: "Headphones",
    },
    {
      filterBy: "Gaming",
    },
    {
      filterBy: "Clothes",
    },
  ];

  return (
    <main className="products-page py-16">
      <div className="container mx-auto flex flex-col gap-10">
        <SmallHeader headers={["Home", "Products"]} />

        <div className="flex justify-between gap-10 relative">
          <aside id="product-filters" className="flex flex-col gap-5 basis-64">
            <div className="filter-categories flex flex-col gap-5">
              <h1 className="font-semibold text-2xl">Categories</h1>
              <ul className="filter_btn_categories flex flex-col gap-1 pl-2 ">
                {categoryArr.map((category) => (
                  <li key={category.filterBy}>
                    <FilterButtons filterBy={category.filterBy} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-categories flex flex-col gap-5">
              <h1 className="font-semibold text-2xl">Filter By</h1>
              <ul className="filter_btn_filters flex flex-col gap-1 pl-2 ">
                {categoryArr.map((category) => (
                  <li key={category.filterBy}>
                    <FilterButtons filterBy={category.filterBy} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section
            id="product-container"
            className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-14 h-svh bg-blue-200 overflow-auto"
          >
            {products.map((product) => (
              <ProductContainer key={product._id} productDetails={product} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
