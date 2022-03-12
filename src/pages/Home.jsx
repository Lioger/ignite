import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { loadGames } from "../actions/gamesAction";
import GameCard from '../components/GameCard';
import GameDetail from '../components/GameDetail';
import { fadeIn } from '../animations';

const Home = () => {
  const location = useLocation();
  const gameId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming, searched } = useSelector(state => state.games);
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {gameId && <GameDetail gameId={gameId} />}
        </AnimatePresence>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched.map(game => <GameCard
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />)}
            </Games>
          </>
        ): ''}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => <GameCard
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />)}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => <GameCard
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />)}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => <GameCard
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />)}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
