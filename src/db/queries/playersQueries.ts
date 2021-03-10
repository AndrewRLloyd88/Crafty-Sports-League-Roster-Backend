import pool from '../db';

const getPlayers = () => {
  const sql = `
  select players.player_name, teams.team_name
  from Players
 Left Join teams on players.team_ID = teams.id
ORDER BY teams.team_name;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

const getPlayerByName = (term: string) => {
  const sql = `
  select players.player_name, teams.team_name
  from Players
 Left Join teams on players.team_ID = teams.id
 WHERE players.player_name = '${term}'
ORDER BY players;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

export { getPlayers, getPlayerByName };
