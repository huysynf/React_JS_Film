import React from 'react';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Viewers from '../Film/Viewers';
import Recommends from '../Film/Recommends';
import NewFilm from '../Film/NewFilm';
import Originals from '../Film/Originals';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchFilms} from '../../../features/movies/movieSlide';
import Trending from '../Film/Trending';

function Home(props) {
  
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch( fetchFilms());
    return () => {
    };
  }, [dispatch]);
  
  return (
      <Container>
        <ImageSlider/>
        <Viewers/>
        <Recommends/>
        <NewFilm/>
        <Trending/>
        <Originals/>
      </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  color: #fff;
  z-index: 1;

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    height: 100%;
  }
`;

export default Home;