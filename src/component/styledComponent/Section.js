import styled from "styled-components";
export const SectionPreview = styled.section`
  width: 100%;
  height: 450px;
  background-color: black;
  color: ${(props) => props?.isWrite ? "white" : "black"};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8%;
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
    height: 170px;
  }
`;