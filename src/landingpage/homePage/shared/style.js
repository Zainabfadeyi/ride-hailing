
import styled from "styled-components";
import theme from "../../../styles/theme";
const { breakpoints, colors } = theme;
export const SlideContainer = styled.div`
  display: none;
  ${breakpoints.lg} {
    display: block;
  }
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  text-align: center;
  background: linear-gradient(-0deg, #000000, #2c292900);
  position: absolute;
  height: 100%;
  bottom: 0;
  display: flex;
  > div {
    align-self: end;
    padding: 24px;
    color: ${colors.white};
    text-align: left;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Testimonial = styled.p`
  font-size: 15px;
  line-height: 21px;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 39%;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;