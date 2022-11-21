// 이번주 날씨 Container
import React from 'react';
import styled from 'styled-components';
import { TbTemperature } from 'react-icons/tb';
import { TiWeatherSunny } from 'react-icons/ti';
import { TiWeatherShower } from 'react-icons/ti';

const WeeklyWeather = ({ weekly }) => {
  //내일
  const temperature0 = Math.round(weekly.list[5].main.temp);
  // const temperature3 = Math.round(weekly.list[6].main.temp);
  // const temperature6 = Math.round(weekly.list[7].main.temp);
  // const temperature9 = Math.round(weekly.list[8].main.temp);
  //   const temperature12 = Math.round(weekly.list[9].main.temp);
  //   const temperature15 = Math.round(weekly.list[10].main.temp);
  //   const temperature18 = Math.round(weekly.list[11].main.temp);
  //   const temperature21 = Math.round(weekly.list[12].main.temp);
  //   const temperature24 = Math.round(weekly.list[13].main.temp);
  //모레
  //   const Twotemperature0 = Math.round(weekly.list[14].main.temp);
  //   const Twotemperature3 = Math.round(weekly.list[15].main.temp);
  //   const Twotemperature6 = Math.round(weekly.list[16].main.temp);
  //   const Twotemperature9 = Math.round(weekly.list[17].main.temp);
  //   const Twotemperature12 = Math.round(weekly.list[18].main.temp);
  //   const Twotemperature15 = Math.round(weekly.list[19].main.temp);
  //   const Twotemperature18 = Math.round(weekly.list[20].main.temp);
  //   const Twotemperature21 = Math.round(weekly.list[21].main.temp);
  //   const Twotemperature24 = Math.round(weekly.list[22].main.temp);

  //배열 => slice(weekly.list.7.25)
  
  return (
    <>
      {/* 내일 */}
      <Container>
        <Title>
          <h3>내일</h3>
          <div>
            <TbTemperature size="20px" />
            <TiWeatherSunny size="20px" />
            <TiWeatherShower size="20px" />
          </div>
        </Title>
        <Wrap>
          <WrapList>
            <div>{}°C</div>
            <div>img</div> {/* <img src="" alt="" /> */}
            <div>0시</div>
          </WrapList>
        </Wrap>
      </Container>
      {/* 모레 */}
      <Container>
        <Title>
          <h3>모레</h3>
          <div>
            <TbTemperature size="20px" />
            <TiWeatherSunny size="20px" />
            <TiWeatherShower size="20px" />
          </div>
        </Title>
        <Wrap>
          <WrapList>
            <div>{}°C</div>
            <div>img</div> {/* <img src="" alt="" /> */}
            <div>0시</div>
          </WrapList>
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 30%;
  width: 90%;
  margin: 10px;
  padding: 15px 5px;
  background-color: rgb(255 255 255 / 20%);
  border-radius: 20px;
  font-size: 14px;
`;

const Wrap = styled.div`
  display: flex;
  overflow: hidden;
`;

const WrapList = styled.div`
  margin: 5px 20px;
  line-height: 30px;

  div {
    width: 2.2rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h3 {
    font-size: 14px;
    font-weight: bold;
    /* padding-right: 200px; */
  }
`;

export default WeeklyWeather;
