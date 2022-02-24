import env from '../../env.json';
import { showResultMessage, hideMessage } from './handleResultMessage';

const dbUrl = env.backend.dbUrl;

const getDb = () => {
  const data = [];
  return async () => {
    if (data.length) return data;

    showResultMessage({ text: '...Loading', status: 'loading' });

    try {
      const result = await fetch(dbUrl);

      if (!result.ok) throw `Server error ${result.status}`;

      data.push(...(await result.json()));
      hideMessage();
      return data;
    } catch (error) {
      console.warn(error.message);
      showResultMessage({
        text: `Error: ${error.message}. We will fix it soon...`,
        status: 'error',
      });
    }
  };
};

const getHomesDb = getDb();
export default getHomesDb;
