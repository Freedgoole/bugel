import {memo, useContext} from "react";
import styled from "styled-components";
import {SideBarContext} from "../../context/SideBar";
import {css} from "styled-components";

const Menu = styled.div`
  background-color: white;
  width: 350px;

  @media (max-width: 425px) {
    width: 100%;
  }
`

const Overal = styled.div`
  background-color: black;
  flex: 1;
  opacity: 0.8;

  @media (max-width: 425px) {
    display: none;
  }
`

const WrapperSideBar =  styled.div`
  color: #f0f0f0;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  transform: translateX(-100%);
  z-index: 1;

  ${(props) =>
          (props.isOpen &&
                  css`
                    display: flex;
                    position: fixed;
                    transform: translateX(0);
                    height: 100vh;
      `)}
`;
const SideBarComponent = ({isOpenSideBar, onClose}) => {

    console.log('isOpenSideBar ===', isOpenSideBar)

    return (
        <WrapperSideBar isOpen={isOpenSideBar}>
            <Overal onClick={onClose}>: none;</Overal>
            <Menu><div onClick={onClose}>x</div>Menu</Menu>
        </WrapperSideBar>
    )
};

export const SideBar = memo(SideBarComponent);