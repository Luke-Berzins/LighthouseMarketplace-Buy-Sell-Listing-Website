-- messages seeds

-- DROP TABLE IF EXISTS  CASCADE;
-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY NOT NULL,
--   sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   content TEXT,
--   conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
--   time TIMESTAMP
-- );
--INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 1, 2, 'hello my friend how have you been', 1, '2016-06-22 19:10:25-07');

INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 1, 10, 'hello my friend how have you been', 1, '2011-06-22 11:10:45-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 10, 1, 'gimme dat', 1, '2016-01-22 19:10:45-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 2, 4, 'gimme dat', 2, '2011-06-22 11:10:24-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 4, 2, 'gimme dat', 2, '2016-06-21 19:11:24-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 1, 10, 'hello my friend how have you been', 1, '2016-06-21 19:40:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 2, 4, 'you selling that?', 2, '2011-06-22 14:10:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 4, 8, 'you selling that?', 3, '2016-01-22 19:10:21-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 5, 9, 'you selling that?', 4, '2016-01-22 19:14:15-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 9, 3, 'you selling that?', 5, '2016-01-22 19:10:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 2, 6, 'you selling that?', 6, '2016-06-21 14:10:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 3, 4, 'you selling that?', 7, '2016-01-22 19:40:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 3, 5, 'you selling that?', 8, '2011-06-22 14:40:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 1, 2, 'you selling that?', 1, '2011-06-21 19:10:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 1, 10, 'you selling that?', 1, '2011-01-22 14:10:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 4, 2, 'its been a while, hmu on myspace', 2, '2011-06-22 19:40:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 5, 9, 'its been a while, hmu on myspace', 4, '2016-06-22 11:14:25-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 3, 9, 'its been a while, hmu on myspace', 5, '2016-16-22 19:11:45-07');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time) VALUES ( 6, 2, 'its been a while, hmu on myspace', 6, '2016-06-21 19:10:24-07');

