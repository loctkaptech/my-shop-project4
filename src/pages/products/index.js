import React from "react";
import ProductsTemplate from "templates/products";
import { getCategories } from "apis/fetchers/getCategories";
import { getBrands } from "apis/fetchers/getBrands"

const Products = ({ brands, categories }) => {
  return (
    <div>
      <ProductsTemplate brands={brands} categories={categories} />
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  const [brandsRes, categoriesRes] = await Promise.all([
    getBrands(),
    getCategories()
  ]);

  return {
    props: {
      brands: brandsRes.data.data,
      categories: categoriesRes.data.data,
    }
  };
}
