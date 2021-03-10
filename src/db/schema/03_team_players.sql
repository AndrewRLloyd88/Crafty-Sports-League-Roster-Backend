--Join table to normalize teams that can have many players

DROP TABLE IF EXISTS team_players CASCADE;
CREATE TABLE team_players (
  team_id       INTEGER,
  player_id       INTEGER
);