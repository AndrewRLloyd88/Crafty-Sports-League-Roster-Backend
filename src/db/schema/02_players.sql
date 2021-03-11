-- Drop and recreate players table
-- There are many players that can belong to one team

DROP TABLE IF EXISTS players CASCADE;
CREATE TABLE players (
  id                SERIAL PRIMARY KEY NOT NULL,
  player_name       VARCHAR(255) NOT NULL,
  team_ID           INT,
  CONSTRAINT fk_team
  FOREIGN KEY (team_ID) 
  REFERENCES teams(id)
  ON DELETE SET NULL
);