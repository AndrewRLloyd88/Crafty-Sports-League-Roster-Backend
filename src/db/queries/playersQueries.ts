import pool from '../db';

//get all players and their associated teams
const getPlayers = () => {
  const sql = `
  select players.player_name, players.id, teams.team_name
  from Players
 Left Join teams on players.team_ID = teams.id
ORDER BY teams.team_name;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

//search for an individual player by name
const getPlayerByName = (term: string) => {
  const sql = `
  select players.player_name, players.id, teams.team_name
  from Players
 Left Join teams on players.team_ID = teams.id
 WHERE players.player_name = '${term}'
ORDER BY players;
  `;

  return pool.query(sql).then((res) => {
    return res.rows;
  });
};

//delete player using their ID
const deletePlayerById = (id: number) => {
  const sql = `
  DELETE FROM players WHERE id=${id};
`;

  return pool.query(sql).then((res) => {
    return res;
  });
};

//TODO Create Player and type player properly
const createPlayerWithTeam = (player_name: string, team_id: number) => {
  //TODO test out these values and modify as needed
  const sql = `
  insert into players (player_name, team_ID) values ($1, $2) RETURNING *;
  `;

  return pool.query(sql, [player_name, team_id]).then((response) => {
    return response.rows;
  });
};

const updatePlayerTeam = (player_id: number, team_id: number) => {
  const sql = `
UPDATE players
SET team_ID = ${team_id}
WHERE id=${player_id};
`;

  return pool.query(sql).then((res) => {
    return res;
  });
};

export {
  getPlayers,
  getPlayerByName,
  deletePlayerById,
  createPlayerWithTeam,
  updatePlayerTeam,
};
