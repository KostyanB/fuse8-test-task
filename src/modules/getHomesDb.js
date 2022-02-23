import env from '../../env.json';
import { setLoading, setSuccess, setError } from './handleLoading';

const dbUrl = env.backend.dbUrl;

const getDb = () => {
  const data = [];
  return async () => {
    if (data.length) return data;
    setLoading();
    try {
      const result = await fetch(dbUrl);

      if (!result.ok) throw `Server error ${result.status}`;

      data.push(...(await result.json()));
      setSuccess();
      return data;
    } catch (error) {
      setError(error.message);
    }
  };
};

const getHomesDb = getDb();
export default getHomesDb;
