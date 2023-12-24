import {memo} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    min-width: 265px;
    padding: 8px 16px 24px;
    box-sizing: border-box;
    box-shadow: 0 0 8px #17171a0d, 0 2px 8px #17171a14;
      display: flex;
      justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }

      @media (max-width: 450px) {
        max-width:265px;
        width: 90%;
      }
`
const ImgComponent = ({children}) => {

    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
};

export const CardGood = memo(ImgComponent);

