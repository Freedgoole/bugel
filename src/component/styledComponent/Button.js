import {styled} from "styled-components";

const colorShema = {
   basketHeader: {
       background: "transparent",
       borderColor: "white",
       color: "white"
   },
    basketHeaderActive: {
        background: "#3d8705",
        borderColor: "#3d8705",
        color: "white"
    },
   basket: {
       background: "transparent",
       borderColor: "white",
       color: "white"
   }
}

export const Button = styled.button`
  margin: 0;
  font-size: 12px;
  font-family: NespressoLucasBold;
  letter-spacing: .6px;
  text-transform: uppercase;
  background: ${props => props?.type ? colorShema[props.type].background : '#3d8705'};
  color: ${props => props?.type ? colorShema[props.type].color : 'white'};
  padding: .8rem 1.9rem;
  width: auto;
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  max-width: 190px;
  border: ${props => props?.type ? `1.5px solid ${colorShema[props.type].borderColor}`: '1px solid transparent'};
  
  &:hover {
    background-color: ${props => props?.type ? "none": '#326e04'};
  }
`;