import {memo} from "react";
import styled from 'styled-components';

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({isShort}) => !isShort ? "#faf9f8" : "none"};
  border: ${({isShort}) => !isShort ? "1px solid #E5D5BB" : "none"};
  cursor: pointer;
  border-radius: 20px;
  padding: 6px 12px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.p`
  font-family: NespressoLucasRegular;
  font-size: 12px;
  text-transform: lowercase;
  letter-spacing: 0.7px;
  color: rgb(23, 23, 26);
  margin: 0 0 0 4px;
`;

const LabelComponent = ({information, isShort}) => {
    const {svg, tr, ml} = information;
    const sizeOfCup = ml ? `(${ml + 'ml'})` : '';
    console.log('information', information)
    return (
        <LabelWrapper isShort={isShort}>
            <Img src={svg} />
            {!isShort && <Text>{tr} {sizeOfCup}</Text>}
        </LabelWrapper>
    )
};

export const Label = memo(LabelComponent);

