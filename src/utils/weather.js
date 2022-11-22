import { WeatherData } from '../WeatherData';

// 유닉스 -> 한국 시간
export const convertDate = dt => {
  return new Date(dt * 1000).toLocaleDateString('KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// 온도 반올림
export const convertTemp = temp => {
  return Math.round(temp);
};

// 해당 기온에 맞는 WeatherData 찾기
export const getWeatherData = temp => {
  return WeatherData.find(data => {
    return data.temp.indexOf(temp) !== -1 && data;
  });
};
