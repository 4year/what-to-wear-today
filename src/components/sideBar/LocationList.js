// 지역이름, 날씨 아이콘, 현재 기온
import React from 'react';
import styled from 'styled-components';
import { WiDayCloudyWindy } from 'react-icons/wi'



const LocationList = () => {
	return (
    <div>
      <List>
        <h4>서울특별시</h4>
        <div className='temp'>
          <WiDayCloudyWindy size="34px"/>
          <span>21°C</span>          
        </div>
      </List>
    </div>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 15px;
  padding: 3px 20px; 
  margin-bottom: 15px;
  .temp{
    width : 90px;
    display: flex;
    justify-content: space-between;    
    span{
      font-size: 20px;
    }
  }
`
export default LocationList;
