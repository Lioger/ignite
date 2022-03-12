import React from "react";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { smallImage } from "../util";
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ gameId }) => {
  const { screen, game, isLoading } = useSelector(state => state.detail);
  const navigate = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  };

  const getStars = () => {
    let stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(<img alt="star" key={i} src={i <= rating ? starFull : starEmpty} />);
    }
    return stars;
  };

  const getPlatform = (platform) => {
    if (platform.match(/playstation/i)) {
      return playstation;
    } else if (platform.match(/xbox/i)) {
      return xbox;
    } else if (platform.match(/ios/i)) {
      return apple;
    } else if (platform.match(/nintendo/i)) {
      return nintendo;
    } else if (platform.match(/pc/i)) {
      return steam;
    } else {
      return gamepad;
    }
  }
  return (
    <>
      {!isLoading && <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={Number(gameId)}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${gameId}`}>{game.name}</motion.h3>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game?.platforms?.map(data => (
                  <img
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                    alt={data.platform.name}
                    title={data.platform.name}
                  />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img layoutId={`image ${gameId}`} src={smallImage(game.background_image, 1280)} alt={game.name} />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {screen?.results?.map(screenshot => (
              <img
                key={screenshot.id}
                src={smallImage(screenshot.image, 1280)}
                alt={game.name}
              />
            ))}
          </div>
        </Detail>
      </CardShadow>}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5%;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.8rem;
  img {
    width: 32px;
    height: 32px;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
