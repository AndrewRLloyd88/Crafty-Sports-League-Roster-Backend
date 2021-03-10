import pool from '../db';

const getTeams = () => {
  const sql = 'SELECT * FROM teams;';

  return pool.query(sql).then((res) => {
    console.log(res);
    return res;
  });
};

export { getTeams };
