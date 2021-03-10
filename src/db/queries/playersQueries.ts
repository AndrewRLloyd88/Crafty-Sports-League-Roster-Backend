import pool from '../db';

const getPlayers = () => {
  const sql = `
  select players.player_name, teams.team_name
  from Players
  Join teams on players.team_ID = teams.id;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

export { getPlayers };
