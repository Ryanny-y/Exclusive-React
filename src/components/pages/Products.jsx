import SmallHeader from "../ui/SmallHeader";
import FilterButtons from "../ui/buttons/FilterButtons";
import ProductContainer from "../ui/ProductContainer";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import useScrollToTop from '../../utils/hooks/useScrollToTop';

export default function Products() {
  useScrollToTop(); 

  const { products } = useContext(ProductContext);
  const [ filteredProducts, setFilteredProducts ] = useState(products);

  const { filter = '' } = useParams();

  useEffect(() => {
    if(filter.includes('category')) {
      const filteredProducts = products.filter(product => 
        product.category.some(cat => 
          cat.toLowerCase().includes(filter.split('=')[1].toLowerCase())
        )
      )
      setFilteredProducts(filteredProducts);
    }

  }, [filter])

  const filterArr = [
    {
      filterBy: "category=Phones",
    },
    {
      filterBy: "category=Computers",
    },
    {
      filterBy: "category=SmartWatch",
    },
    {
      filterBy: "category=Camera",
    },
    {
      filterBy: "category=Headphones",
    },
    {
      filterBy: "category=Gaming",
    },
    {
      filterBy: "category=Clothes",
    },
  ];

  return (
    <main className="products-page py-16">
      <div className="container mx-auto flex flex-col gap-10">
        <SmallHeader headers={["Home", "Products"]} />

        <div className="flex flex-col xs:flex-row justify-between gap-10 relative">
          <aside id="product-filters" className="hidden md:flex flex-col gap-5 basis-64">
            <div className="filter-categories flex flex-col gap-5">
              <h1 className="font-semibold text-2xl">Categories</h1>
              <ul className="filter_btn_categories flex flex-col gap-1 pl-2 ">
                {filterArr.map((category) => (
                  <li key={category.filterBy}>
                    <FilterButtons filterBy={category.filterBy} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-categories flex flex-col gap-5">
              <h1 className="font-semibold text-2xl">Filter By</h1>
              <ul className="filter_btn_filters flex flex-col gap-1 pl-2 ">
                {filterArr.map((category) => (
                  <li key={category.filterBy}>
                    <FilterButtons filterBy={category.filterBy} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section
            id="product-container"
            className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-14 h-svh overflow-auto"
          >
            {filteredProducts.map((product) => (
              <ProductContainer key={product._id} productDetails={product} isDetailed={filter ? true : false}/>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
