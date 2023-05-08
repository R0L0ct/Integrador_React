import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 908px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 466px) {
    gap: 5px;
  }
`;

export const CategoryStyled = styled(motion.div)`
  background-image: url("/images/hero.jpg");
  background-size: contain;
  background-position: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 200px;
  height: 80px;
  @media (max-width: 466px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 215px) {
    width: 90px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  @media (max-width: 466px) {
    font-size: 15px;
  }
  @media (max-width: 215px) {
    font-size: 12px;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  border: ${({ selected }) => (selected ? "3px solid #ED1B24" : "none")};
  @media (max-width: 466px) {
    border: ${({ selected }) => (selected ? "2px solid #ED1B24" : "none")};
  }
`;
