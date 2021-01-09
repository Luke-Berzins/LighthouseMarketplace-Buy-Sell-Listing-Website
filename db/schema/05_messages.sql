-- Drop and recreate messages table

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  content TEXT,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
  time_sent TIMESTAMP DEFAULT NOW()
);
