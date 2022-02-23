import env from '../../env.json';

const dbUrl = env.backend.dbUrl;

const getDb = () => {
  const data = [];
  return async () => {
    if (data.length) return data;
    const result = await fetch(dbUrl);
    if (!result.ok) throw `Ошибка БД ${result.status}`;
    data.push(...(await result.json()));
    return data;
  };
};
const getHomesDb = getDb();
export default getHomesDb;
