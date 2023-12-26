import styled from "styled-components";
import {GoodsContainer} from "./Wrappers";
export const SectionPreview = styled.div`
  width: 100%;
  height: 450px;
  background-color: black;
  color: ${(props) => props?.isWrite ? "white" : "black"};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 90px 25px;
  box-sizing: border-box;
  
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }

  @media (max-width: 970px) {
    height: 320px;
  }

  @media (max-width: 425px) {
    padding: 35px 25px 0;
    height: 200px;
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
`

export const SectionGoodsWrapper = styled(GoodsContainer)`
  width: 100%;
  transform: translateY(-220px);
  @media (max-width: 970px) {
    transform: translateY(-80px);
  }

  @media (max-width: 425px) {
    transform: translateY(-20px);
  }
`