CREATE USER 'test'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON nolan_newsletter.* TO 'test'@'localhost';
FLUSH PRIVILEGES;

-- Créer la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS nolan_newsletter;

-- Utiliser la base de données
USE nolan_newsletter;

-- Supprimer la table si elle existe
DROP TABLE IF EXISTS subscribes;

-- Créer les champs suivants dans la table subscribes :
CREATE TABLE subscribes(

    -- Clé Chiffre, clé primaire auto incrémentée
    id INT PRIMARY KEY AUTO_INCREMENT,

    -- 100 caracteres max , unique (pour ne pas avoir 2 mails identiques)
    email VARCHAR(100) UNIQUE,
    -- Date d'inscription de la date courante
    date_inscription DATE DEFAULT CURRENT_DATE
);

-- Création de la bas de données users
CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL
);

INSERT INTO users (login,password) VALUES ('nom_utilisateur','password');
