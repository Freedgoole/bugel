import {styled} from "styled-components";
export const Button = styled.button`
  margin: 0;
  font-size: 12px;
  font-family: NespressoLucasBold;
  letter-spacing: .6px;
  text-transform: uppercase;
  background: ${props => props?.type ? "transparent": '#3d8705'};
  color: ${props => props?.type ? "black": 'white'};
  padding: .7rem 1.5rem;
  width: auto;
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  max-width: 185px;
  border: ${props => props?.type ? "1px solid black": '1px solid transparent'};
  
  &:hover {
    background-color: ${props => props?.type ? "none": '#326e04'};
  }
`;