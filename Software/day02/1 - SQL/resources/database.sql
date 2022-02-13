--
-- SOFTWARE Pool 2022 - Day 2 - Morning
-- Music Database
-- Made with <3 by PoC
--

--
-- Name: genre; Type: TYPE; Schema: -; Owner: -
--
CREATE TYPE genres AS ENUM (
    'rap',
    'hip-hop/rap',
    'alternative',
    'jazz',
    'r&b/soul',
    'pop',
    'reggae',
    'classical',
    'rock',
    'country'
);

--
-- Name: certification; Type: TYPE; Schema: -; Owner: -
--
CREATE TYPE certifications AS ENUM (
    'Gold',
    'Platinum',
    'Diamond'
);

--
-- Name: Artist; Type: TABLE; Schema: -; Owner: -
--
create table Artists
(
    id    serial not null
        constraint artist_pkey
            primary key,
    name  varchar(32),
    genre   genres,
    nbfans INT
);

--
-- Name: Music; Type: TABLE; Schema: -; Owner: -
--
create table Musics
(
    id     serial not null
        constraint music_pkey
            primary key,
    name   varchar(32),
    certification certifications default 'Gold'::certifications
);

--
-- Name: Participation; Type: TABLE; Schema: -; Owner: -
--
create table Participations
(
    artistid  integer not null
        constraint participation_artistid_fkey
            references Artists,
    musicid integer not null
        constraint participation_musicid_fkey
            references Musics,
    constraint participation_artistid_musicid_key
        unique (artistid, musicid)
);

--
-- Insert Artists
--
INSERT INTO artists (id, name, genre, nbfans) VALUES (1, 'Michael Jackson', 'pop', 16000000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (2, 'PNL', 'rap', 2000000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (3, 'Rilès', 'hip-hop/rap', 90000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (4, 'Mac Miller', 'hip-hop/rap', 3200000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (5, 'Billie Eilish', 'alternative', 6000000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (6, 'Sidney Bechet', 'jazz', 300000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (7, 'Tame Impala', 'alternative', 456000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (8, 'Booba', 'rap', 4200000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (9, 'Post Malone', 'hip-hop/rap', 4100000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (10, 'Aretha Franklin', 'r&b/soul', 230000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (11, 'Bebo Valdés', 'pop', 230000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (12, 'Tokio Myers', 'pop', 80000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (13, 'Ninho', 'rap', 1900000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (14, 'Damso', 'rap', 2100000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (15, 'Hamza', 'rap', 900000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (16, 'Eminem', 'rap', 8800000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (17, 'Dr Dre ', 'rap', 700000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (18, '50 cent', 'rap', 2300000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (19, 'Akon', 'reggae', 660000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (20, 'Pavarotti', 'classical', 8342000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (21, 'Bob Dylan', 'rock', 9939000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (22, 'Ray Charles', 'country', 780000);
INSERT INTO artists (id, name, genre, nbfans) VALUES (23, 'Diana Ross', 'r&b/soul', 530000);

--
-- Insert Musics
--
INSERT INTO musics (id, name, certification) VALUES (1, 'We Are The World', 'Diamond');
INSERT INTO musics (id, name, certification) VALUES (2, 'Deux frères', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (3, 'Mexico', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (4, 'SOUL SPEECH', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (5, 'Jet Fuel', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (6, 'No Time To Die', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (7, 'Petite Fleur', 'Diamond');
INSERT INTO musics (id, name, certification) VALUES (8, 'The Less I Know The Better', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (9, 'Avant De partir', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (10, 'Take What You Want', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (11, 'Au DD', 'Diamond');
INSERT INTO musics (id, name, certification) VALUES (12, 'Glaive', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (13, 'I say a Little Prayer', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (14, 'La Bella Cubana', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (15, 'Our Generation', 'Gold');
INSERT INTO musics (id, name, certification) VALUES (16, 'Promo', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (17, 'BXL ZOO', 'Platinum');
INSERT INTO musics (id, name, certification) VALUES (18, 'Crack A Bottle', 'Diamond');
INSERT INTO musics (id, name, certification) VALUES (19, 'Locked Up', 'Diamond');
INSERT INTO musics (id, name, certification) VALUES (20, 'Paris c est loin', 'Platinum');


--
-- Insert relation
--
INSERT INTO participations (artistid, musicid) VALUES (1, 1);
INSERT INTO participations (artistid, musicid) VALUES (2, 2);
INSERT INTO participations (artistid, musicid) VALUES (2, 3);
INSERT INTO participations (artistid, musicid) VALUES (3, 4);
INSERT INTO participations (artistid, musicid) VALUES (4, 5);
INSERT INTO participations (artistid, musicid) VALUES (5, 6);
INSERT INTO participations (artistid, musicid) VALUES (6, 7);
INSERT INTO participations (artistid, musicid) VALUES (7, 8);
INSERT INTO participations (artistid, musicid) VALUES (8, 9);
INSERT INTO participations (artistid, musicid) VALUES (9, 10);
INSERT INTO participations (artistid, musicid) VALUES (2, 11);
INSERT INTO participations (artistid, musicid) VALUES (8, 12);
INSERT INTO participations (artistid, musicid) VALUES (10, 13);
INSERT INTO participations (artistid, musicid) VALUES (11, 14);
INSERT INTO participations (artistid, musicid) VALUES (12, 15);
INSERT INTO participations (artistid, musicid) VALUES (13, 16);
INSERT INTO participations (artistid, musicid) VALUES (14, 16);
INSERT INTO participations (artistid, musicid) VALUES (14, 17);
INSERT INTO participations (artistid, musicid) VALUES (15, 17);
INSERT INTO participations (artistid, musicid) VALUES (16, 18);
INSERT INTO participations (artistid, musicid) VALUES (17, 18);
INSERT INTO participations (artistid, musicid) VALUES (18, 18);
INSERT INTO participations (artistid, musicid) VALUES (8, 19);
INSERT INTO participations (artistid, musicid) VALUES (19, 19);
INSERT INTO participations (artistid, musicid) VALUES (14, 20);
INSERT INTO participations (artistid, musicid) VALUES (8, 20);
INSERT INTO participations (artistid, musicid) VALUES (20, 1);
INSERT INTO participations (artistid, musicid) VALUES (21, 1);
INSERT INTO participations (artistid, musicid) VALUES (22, 1);
INSERT INTO participations (artistid, musicid) VALUES (23, 1);