import env from '../../env.json';

export const formatSrc = (value) => `${env.backend.imgUrl}${value.toString()}/${value.toString()}`;

export const formatLabel = (str) => {
  const upper = Array.from(str.matchAll(/[A-Z]/g));

  for (let i = 1; i < upper.length; i++) {
    const char = upper[i][0];
    str = str.replace(char, ` ${char.toLowerCase()}`);
  }

  return str;
};

export const formatPrice = (dig) => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: env.currency,
    minimumFractionDigits: 3,
  });

  return formatter.format((dig - 1) / 1000).replace('.', ',');
};
