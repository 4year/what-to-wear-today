export const convertDate = dt => {
  return new Date(dt * 1000).toLocaleDateString('KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const convertTemp = temp => {
  return Math.round(temp);
};
