import {memo} from "react";
import styled from 'styled-components';

const PriceWrapper = styled.div`
  display: flex;
  gap: 0px;
  color: #3d8705;
  font-size: 20px;
  font-family: NespressoLucasBold;
  align-items: center;
  margin-top: 4px;
`;

const PriceText = styled(PriceWrapper)`
 font-family: NespressoLucasRegular;
 font-size: 14px;
`;

const PriceComponent = ({price}) => {
    return (
        <PriceWrapper>
            {price}<PriceText>грн</PriceText>
        </PriceWrapper>
    )
};

export const Price = memo(PriceComponent);