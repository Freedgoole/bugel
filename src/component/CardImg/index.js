import {memo, useState} from "react";
import {keyframes, styled} from "styled-components";

const breatheAnimation = keyframes`
    0% {transform: rotate(0deg)}
    100%{transform: rotate(360deg)}`

const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgComponent = ({src, alt}) => {
    const [isLoad, setIsLoad] = useState(false);

    const handleLoad = () => {
        setIsLoad(true)
    };

    const preparedSrc = `images/original/${src}`
    return (
        <div style={{width: 160, height: 160}}>
            {!isLoad && <Loader />}
            <img src={preparedSrc} alt={alt} width={160} onLoad={handleLoad} />
        </div>
    )
};

export const Img = memo(ImgComponent);

