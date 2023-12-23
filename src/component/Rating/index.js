import {memo} from "react";
import {styled} from "styled-components";

const MAX_RATE = 12;

const RateWrapper = styled.div`
  display: flex;
  gap: 2.4px;
`;

const RateCell = styled.div`
  width: 2px;
  height: 16px;
  opacity: ${({isGrey}) => isGrey ? '.25' : '1'} ;
  background-color: #876c43 ;
`;

const RateNumber = styled.div`
  font-family: NespressoLucasRegular;
  font-size: 14px;
  text-transform: uppercase;
  color: #876c43;
  padding: 0 2px;
`;

const RatingComponent = ({rate}) => {
    const preparedCell =  [...Array(MAX_RATE + 1)];
    return (
        <RateWrapper>
            {preparedCell.map((i, index) => {
                const shouldRenderNumber = index === rate;
                const cellAfterRate = index > rate;
                return (
                    <>
                        {!shouldRenderNumber && <RateCell isGrey={cellAfterRate}/>}
                        {shouldRenderNumber && <RateNumber>{rate}</RateNumber>}
                    </>
                )
            })}
        </RateWrapper>
    )
};

export const Rating = memo(RatingComponent);

