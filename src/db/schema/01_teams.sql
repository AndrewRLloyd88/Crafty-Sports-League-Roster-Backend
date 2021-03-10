-- Drop and recreate teams table
-- One team can have many players and there can be many teams

DROP TABLE IF EXISTS teams CASCADE;
CREATE TABLE teams (
  id                SERIAL PRIMARY KEY NOT NULL,
  team_name         VARCHAR(255) NOT NULL
);


