import cityList from './cityList.json';

// 현재 위치 한글로 변경
export const getCityName = id => {
  console.log(id);
  return cityList.find(city => city.id === id).name;
};

// 중복된 이름을 제거한 목록
export const searchCityList = cityList.reduce((acc, current) => {
  if (!acc.find(item => item.name === current.name)) {
    return acc.concat([current]);
  }
  return acc;
}, []);
