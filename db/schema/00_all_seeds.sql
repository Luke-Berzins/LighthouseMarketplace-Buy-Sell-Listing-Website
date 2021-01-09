-- Drop and recreate users table
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS postings CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS messages CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

-- Drop and recreate postings table


CREATE TABLE postings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  image_photo_url TEXT,
  title VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  post_code VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  date_created TIMESTAMP DEFAULT NOW()
);

-- Drop and recreate favorites table


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  posting_id INTEGER REFERENCES postings(id) ON DELETE CASCADE
);

-- Drop and recreate conversations table


CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  posting_id INTEGER REFERENCES postings(id) ON DELETE CASCADE
);

-- Drop and recreate messages table


CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  content TEXT,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
  time_sent TIMESTAMP DEFAULT NOW()
);
