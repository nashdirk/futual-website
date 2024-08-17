import styled, { css, keyframes } from "styled-components";
import propTypes from "prop-types";

const oneAnimation = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  25% {
    left: -100px;
    top: 70px;
  }
  50% {
    left: 20px;
    top: 150px;
  }
  75% {
    left: 50px;
    top: 100px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
`;

const twoAnimation = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  25% {
    left: -50px;
    top: -100px;
  }
  50% {
    left: -20px;
    top: -150px;
  }
  75% {
    left: 100px;
    top: -70px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
`;

const baseStyle = css`
  width: 400px;
  height: 400px;
  border-radius: 999px;
  position: relative;
  filter: blur(90px);
  opacity: 0.95;

  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
    filter: blur(70px);
  }

  @media (max-width: 769px) {
    width: 200px;
    height: 200px;
    filter: blur(50px);
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    filter: blur(40px);
  }
`;

const getTransformStyle = (value) => (value ? `translateX(${value})` : "none");

const BackgroundLeft = styled.div`
  ${baseStyle}
  animation: ${twoAnimation} 10s infinite;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => getTransformStyle(props.translateX)};

  @media (max-width: 1200px) {
    transform: ${(props) =>
      getTransformStyle(props.translateXLg || props.translateX)};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -37.5px;
        top: -75px;
      }
      50% {
        left: -15px;
        top: -112.5px;
      }
      75% {
        left: 75px;
        top: -52.5px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }

  @media (max-width: 769px) {
    transform: ${(props) =>
      getTransformStyle(
        props.translateXMd || props.translateXLg || props.translateX
      )};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -25px;
        top: -50px;
      }
      50% {
        left: -10px;
        top: -75px;
      }
      75% {
        left: 50px;
        top: -35px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }

  @media (max-width: 480px) {
    transform: ${(props) =>
      getTransformStyle(
        props.translateXSm ||
          props.translateXMd ||
          props.translateXLg ||
          props.translateX
      )};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -17.5px;
        top: -35px;
      }
      50% {
        left: -7px;
        top: -55px;
      }
      75% {
        left: 37.5px;
        top: -26.25px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }
`;

const BackgroundRight = styled.div`
  ${baseStyle}
  animation: ${oneAnimation} 10s infinite;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => getTransformStyle(props.translateX)};

  @media (max-width: 1200px) {
    transform: ${(props) =>
      getTransformStyle(props.translateXLg || props.translateX)};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -75px;
        top: 50px;
      }
      50% {
        left: 15px;
        top: 110px;
      }
      75% {
        left: 40px;
        top: 75px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }

  @media (max-width: 769px) {
    transform: ${(props) =>
      getTransformStyle(
        props.translateXMd || props.translateXLg || props.translateX
      )};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -50px;
        top: 35px;
      }
      50% {
        left: 10px;
        top: 75px;
      }
      75% {
        left: 25px;
        top: 50px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }

  @media (max-width: 480px) {
    transform: ${(props) =>
      getTransformStyle(
        props.translateXSm ||
          props.translateXMd ||
          props.translateXLg ||
          props.translateX
      )};
    animation: ${keyframes`
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: -35px;
        top: 25px;
      }
      50% {
        left: 7px;
        top: 55px;
      }
      75% {
        left: 18px;
        top: 37px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    `} 10s infinite;
  }
`;

const BackgroundColorAnimation = ({
  colorLeft = "bg-green_1",
  colorRight = "bg-teal_1",
  opacityLeft = 1,
  opacityRight = 1,
  translateXLeft,
  translateXLeftLg,
  translateXLeftMd,
  translateXLeftSm,
  translateXRight,
  translateXRightLg,
  translateXRightMd,
  translateXRightSm,
}) => {
  return (
  <div className={`left-50% absolute z-0 flex w-full max-w-[260px] sm:max-w-[80vw] lg:max-w-[95vw] items-center justify-around`}>
      <BackgroundLeft
        className={colorLeft}
        opacity={opacityLeft}
        translateX={translateXLeft}
        translateXLg={translateXLeftLg}
        translateXMd={translateXLeftMd}
        translateXSm={translateXLeftSm}
      />
      <BackgroundRight
        className={colorRight}
        opacity={opacityRight}
        translateX={translateXRight}
        translateXLg={translateXRightLg}
        translateXMd={translateXRightMd}
        translateXSm={translateXRightSm}
      />
    </div>
  );
};

BackgroundColorAnimation.propTypes = {
  colorLeft: propTypes.string,
  colorRight: propTypes.string,
  opacityLeft: propTypes.number,
  opacityRight: propTypes.number,
  translateXLeft: propTypes.string,
  translateXLeftLg: propTypes.string,
  translateXLeftMd: propTypes.string,
  translateXLeftSm: propTypes.string,
  translateXRight: propTypes.string,
  translateXRightLg: propTypes.string,
  translateXRightMd: propTypes.string,
  translateXRightSm: propTypes.string,

};

export default BackgroundColorAnimation;
