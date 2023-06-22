import React, { useState } from "react";
import Data from '.././Data/Record.json'
import Filter from "./filter/Filter";
import Product from "./Product/Product";

const Category = () => {
  const [Categorys, setCategorys] = useState(Data);
  const filterByPrice =(minPrice , maxPrice)=>{
    const filteredProducts= Data.filter(product=>{
      return product.price >= minPrice && product.price <= maxPrice;
    });
    
    setCategorys(filteredProducts);
 };
 const filterByBrand = (brand) => {
  const filteredProducts = Data.filter(product => {
    return product.brand === brand;
  });

  setCategorys(filteredProducts);
};
  
  return (
    <div>
       <Filter filterbyPrice={filterByPrice}  filterbyBrand={filterByBrand}/>
       <div>
        {Categorys.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export default Category;
