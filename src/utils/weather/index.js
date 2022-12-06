import { WeatherData } from './WeatherData';

// 유닉스 -> 한국 시간
export const convertDate = weather => {
  return new Date(weather.dt * 1000).toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
};

// 해당 기온에 맞는 WeatherData 찾기
export const getWeatherData = temp => {
  return WeatherData.find(data => {
    return data.temp.indexOf(temp) !== -1 && data;
  });
};
