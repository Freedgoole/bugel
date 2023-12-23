import {memo} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    min-width: 225px;
    padding: 8px 16px 24px;
    box-sizing: border-box;
    box-shadow: 0 0 8px #17171a0d, 0 2px 8px #17171a14;
  
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }

      @media (max-width: 320px) {
        width: 100%;
      }
`
const ImgComponent = () => {

    return (
        <CardContainer>
            CardContainer
        </CardContainer>
    )
};

export const CardGood = memo(ImgComponent);

