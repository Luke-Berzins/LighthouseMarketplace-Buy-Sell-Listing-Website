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

INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 1, 'hello my friend how have you been', 1, '2011-12-31T05:32:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 10, 1, 'nice product', 1, '2015-12-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 2, 4, 'you want it?', 2, '2016-12-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 2, '20 bucks', 2, '2017-12-31T02:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 2, 4, 'hello my friend how have you been', 2, '2020-12-18T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 2, 4, 'you selling that?', 2, '2010-12-31T02:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 8, 'you selling that?', 3, '2019-01-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 5, 9, 'you selling that?', 4, '2009-12-31T08:10:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 9, 3, 'you selling that?', 5, '2009-12-31T08:16:05.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 2, 6, 'you selling that?', 6, '2009-12-31T08:09:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 3, 4, 'you selling that?', 7, '2009-12-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 3, 5, 'you selling that?', 8, '2018-12-27T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 10, 'you selling that?', 1, '2010-12-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 10, 'hello ?', 1, '2018-12-31T08:14:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 4, 2, 'its been a while, hmu on myspace', 2, '2016-12-31T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 5, 9, 'hang outs?', 4, '2018-12-30T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 3, 9, 'its been a while, hmu on myspace', 5, '2018-11-23T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 6, 2, 'its been a while, hmu on myspace', 6, '2018-12-11T08:11:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 6, 1, 'Hello dear friend', 9, '2018-11-23T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 6, 'Good day my old chum', 9, '2018-12-11T08:11:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 6, 1, 'Shall we conduct business?', 9, '2018-11-23T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 6, 'Indubiliiltity my good man.', 9, '2018-12-11T08:11:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 6, 1, 'Why I say, spit it out Sir HARHARHAR', 9, '2018-11-23T08:16:00.000Z');
INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent) VALUES ( 1, 6, 'HARAHARHARAHARHAR.', 9, '2018-12-11T08:11:00.000Z');
