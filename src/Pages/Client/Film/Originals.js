import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectOriginal} from '../../../features/movies/movieSlide';

const Originals = () => {

  const movies = useSelector(selectOriginal);
  return (
      <Container>
        <p>Originals +</p>
        <Content>
          {
            movies && movies.map(item=>{
              return (
                  <Wrap key={item.id}>
                    <Link to={'/details/'+item.id}>
                      <img src={item.card_img} alt={item.title}/>
                    </Link>
                  </Wrap>
              )
            })
          }

        </Content>
      </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50.25%;
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
  rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  position: relative;
  transition: all 256ms ease;
  cursor: pointer;
  border: 3px solid rgba(239, 249, 249,.1);
  
  img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  
  &:hover{
  box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);
  }
`;
export default Originals;
