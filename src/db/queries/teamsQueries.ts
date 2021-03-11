import pool from '../db';

const getTeams = () => {
  const sql = 'SELECT * FROM teams;';

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

const getPlayersByTeamID = (id: number) => {
  const sql = `
  select players.player_name, players.id
  from Players
 Left Join teams on players.team_ID = teams.id
 WHERE players.team_ID = '${id}'
ORDER BY players;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

export { getTeams, getPlayersByTeamID };
