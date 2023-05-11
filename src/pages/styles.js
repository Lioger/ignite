import styled from "styled-components";
import { motion } from "framer-motion";

export const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;

    @media screen and (max-width: 991px) {
      padding: 2rem 0;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;

export const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 1.5rem;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 1rem;
  }
`;
