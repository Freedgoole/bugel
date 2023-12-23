import {memo} from "react";
import styled from 'styled-components';

const PriceWrapper = styled.div`
  display: flex;
  gap: 4px;
  color: #3d8705;
  font-size: 24px;
  font-family: NespressoLucasBold;
  align-items: center;
`;

const PriceText = styled(PriceWrapper)`
 font-family: NespressoLucasRegular;
 font-size: 18px;
`;

const PriceComponent = ({price}) => {
    return (
        <PriceWrapper>
            {price} <PriceText>грн</PriceText>
        </PriceWrapper>
    )
};

export const Price = memo(PriceComponent);