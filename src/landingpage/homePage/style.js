"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../styles/theme";


const { colors,breakpoints } = theme;
export const FlexContainer = styled.div`
  display: flex;
`;


export const UsersContainer = styled.div`
  padding: 80px 0;
  p.slide-heading {
    font-size: 33px;
    font-weight: 700;
    color: ${colors.brownishGrey};
    margin-bottom: 50px;
  }

  ${breakpoints.md} {
    > p {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
`;
export const UserCardsContainer = styled(FlexContainer)`
  gap: 20px;
  overflow-x: hidden;
  ${breakpoints.lg} {
    display: none;
  }
`;
export const UserCard = styled(motion.div)`
  position: relative;
  width: 130px;
  max-width: 280px;
  max-height: 450px;
  overflow: hidden;
  > img {
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    height: 450px;
  }
`;
export const UserInfo = styled(motion.div)`
  border-radius: 8px;
  background: linear-gradient(-0deg, #000000, #2c292900);
  position: absolute;
  height: 100%;
  bottom: 0;
  display: flex;
  > div {
    align-self: end;
    padding: 24px;
    color: ${colors.white};

    > h4 {
      font-size: 20px;
      font-size: 700;
    }

    > p {
      font-size: 15px;
    }
  }
`;
