import React from "react";
import { useSelector } from "react-redux";
import { CategoriesContainerStyled } from "./CategoryStyles";
import { Category } from "./Category";
import { useEffect } from "react";
import { getAllCategories } from "../../api/data";
import { useState } from "react";

export const Categories = () => {
  const categorias = useSelector((state) => state.categories.categories);
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContainerStyled>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map((category) => (
          <Category key={category.id} {...category} />
        ))
      )}
    </CategoriesContainerStyled>
  );
};
