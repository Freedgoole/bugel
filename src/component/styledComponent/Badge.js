import {styled} from "styled-components";

const colorTypes = {
    bestSeller: '#FF8C00',
    newProduct: 'blue'
}
export const Badge = styled.p`
  padding: 4px 8px;
  margin: 0;
  font-size: 10px;
  font-family: NespressoLucasMed;
  letter-spacing: .5px;
  text-transform: uppercase;
  background-color: ${({type}) => colorTypes[type]};
`;