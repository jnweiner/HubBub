CREATE DATABASE hubbub;

\c hubbub;

CREATE TABLE cities (
  id BIGSERIAL PRIMARY KEY,
  city VARCHAR(50)
);

CREATE TABLE interests (
  id BIGSERIAL PRIMARY KEY,
  interest VARCHAR(50)
);

CREATE TABLE users (
id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(50),
username VARCHAR(20),
password VARCHAR(20),
joined TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
neighborhood VARCHAR(50),
avatar VARCHAR(100),
month_moved INT,
year_moved INT,
age_group VARCHAR(20),
city_id INT,
FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE users_interests (
  user_id INT,
  interest_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(interest_id) REFERENCES interests(id)
);

CREATE TABLE threads (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(100),
  text VARCHAR(500),
  date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  interest_id INT,
  city_id INT,
  user_id INT,
  FOREIGN KEY(interest_id) REFERENCES interests(id),
  FOREIGN KEY(city_id) REFERENCES cities(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE replies (
  id BIGSERIAL PRIMARY KEY,
  text VARCHAR(500),
  date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  thread_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(thread_id) REFERENCES threads(id)
);

CREATE TABLE watched_threads (
  user_id INT,
  thread_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(thread_id) REFERENCES threads(id)
);