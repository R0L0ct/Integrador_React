import styled from "styled-components";

export const ImageSectionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
  background: radial-gradient(
    circle at 10% 20%,
    rgb(0, 0, 0) 0%,
    rgb(64, 64, 64) 90.2%
  );
`;
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
export const Image = styled.img`
  width: 500px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border-radius: 10px;
  }
  @media (max-width: 1070px) {
    width: 300px;
    :hover {
      transform: scale(1);
    }
  }
  @media (max-width: 620px) {
    :hover {
      border: none;
    }
    width: 200px;
  }
`;
