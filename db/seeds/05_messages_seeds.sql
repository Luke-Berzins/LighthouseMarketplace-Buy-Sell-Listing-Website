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

INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 8, 'hello my friend how have you been', 1, '2011-11-31T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 8, 4, 'just doing a midterm project and its looking GOOD', 1, '2011-12-31T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 8, 'these for sale', 2, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 8, 4, 'YE', 2, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 5, 8, 'have you ever seen the rain?', 3, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 8, 5, 'coming down on a sunny day', 3, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 7, 8, 'ahhhhh bro nice kicks', 4, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 8, 7, 'i kick em ya know', 4, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 7, 9, 'ahhhhh bro nice kicks', 5, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 9, 7, 'i kick em ya know', 5, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 6, 9, 'i am wondering', 6, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 9, 6, 'whats wondering?', 6, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 9, 'we hanging out?', 7, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 9, 1, 'what?', 7, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 9, 'i like to party', 8, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 9, 4, 'uh ok', 8, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 10, 'looking out my backdoor', 9, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 1, 'dadadadadadadadd dup', 9, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 2, 10, 'whats another ccr song', 10, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 2, 'something about a jungle?', 10, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 10, 'I want these', 11, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 1, 'take em', 11, '2011-12-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 3, 10, 'i like to dance', 12, '2011-11-26T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 3, 'uh ok', 12, '2011-12-26T05:32:00.000Z');



