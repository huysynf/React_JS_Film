import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import axios from '../../../config/axios';

const Detail = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState({});

  useEffect(async () => {
        try{
          const res = await axios.get('films/'+id)
            setDetail(res.data.data)
        }catch (e)
        {
        
        }
    
    return () => {
    };
  }, [id]);


  return (
      <Container>
        <Background>
          <img
              src={detail.background_img}
              alt={detail.title}/>
        </Background>

        <ImageTitle>
          <img
              src={detail.title_img}
              alt={detail.title} />
        </ImageTitle>
        <ContentMela>
          <Control>
            <Player>
              <img src="/images/play-icon-black.png" alt=""/>
              <span>Play</span>
            </Player>

            <Trailer>
              <img src="/images/play-icon-white.png" alt=""/>
              <span>Trailer</span>
            </Trailer>
            <AddList>
              <span/>
              <span/>
            </AddList>

            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt=""/>
              </div>
            </GroupWatch>
          </Control>

          <SubTitle>
            {detail.subTitle}
          </SubTitle>

          <Description>
            {detail.description}
          </Description>
        </ContentMela>
      </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: .8;
  position: fixed;
  right: 0;
  top: 8px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      width: initial;
    }
  }

`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 500px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMela = styled.div`
  max-width: 874px;
`;

const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 24px 0px;
  min-height: 55px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 8px 8px;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }

`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, .3);
  border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(8, 0, 8, .8);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid rgba(249, 249, 249);

  span {
    background: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(3deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;

      width: 2px;
      transform: translate(-8px) rotate(3deg);

    }
  }

`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: white;

  div {

    height: 40px;
    width: 40px;
    background: rgba(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }

`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;


  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`

  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;

