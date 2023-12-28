import {memo} from "react";
import {styled, css} from "styled-components";

const Wrapper = styled.div`
  position: relative;
  
  ${({isHover}) => (isHover && css`
       &:hover ${TooltipWrapper} {
           display: block;
   }
  `)}
`

const TooltipWrapper = styled.div`
  display: none;
  position: absolute;
  top: -80%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
 
  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #E5D5BB transparent transparent transparent;
  }
`

const TooltipComponent = ({children, tooltip, isHover}) => {
    return (
        <Wrapper isHover={isHover}>
            {children}
            <TooltipWrapper>{tooltip}</TooltipWrapper>
        </Wrapper>
    )
};

export const Tooltip = memo(TooltipComponent);