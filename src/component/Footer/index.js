import {memo, useState} from "react";
import {keyframes, styled} from "styled-components";
import {FlexContainerCentred, FlexContainerCentredEnd} from "../styledComponent/Wrappers";
import Logo from '../../svg/logoS.svg';

const Wrapper = styled.div`
  font-family: NespressoLucasMed;
  display: flex;
  height: 40px;
  background-color: #faf9f8;
  width: 100%;
  font-size: 14px;
  color: black;
  padding: 0 14px;
  box-sizing: border-box;
  width: 100%;
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LinkScroll = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;

const FollowSection = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;



const FooterComponent = ({src, alt}) => {

    return (
        <Wrapper>
            <FlexContainerCentredEnd>
                <FollowSection>Слідкувати за нами: </FollowSection>
            </FlexContainerCentredEnd>
            <Center><LinkScroll>До верху сторінки</LinkScroll></Center>
            <FlexContainerCentredEnd><img src={Logo} height={20} alt=""/></FlexContainerCentredEnd>
        </Wrapper>
    )
};

export const Footer = memo(FooterComponent);

