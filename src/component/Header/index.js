import {memo} from "react";
import {styled} from "styled-components";
import logoWhite from "../../svg/logoWhite.svg";
import {Button} from "../styledComponent/Button";

export const HeaderContainer = styled.header`
      width: 100%;
      height: 56px;
      background-color: black;
      display: flex;
      align-items: center;
      padding: 0 25px;
      position: fixed;
      justify-content: space-between;
      z-index: 1;
      box-sizing: border-box;
`;

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <img src={logoWhite} height={22} alt="Nespresso"/>
            <Button type='basketHeader'>Корзина</Button>
        </HeaderContainer>
    )
};

export const Header = memo(HeaderComponent);