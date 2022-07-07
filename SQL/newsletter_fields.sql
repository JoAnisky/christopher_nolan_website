-- Créer la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS nolan_newsletter;

-- Utiliser la base de données
USE nolan_newsletter;

-- Supprimer la table si elle existe
DROP TABLE IF EXISTS subscribes;

-- Créer les champs suivants dans la table subscribes :
-- Clé Chiffre, clé primaire auto incrémentée
-- 100 caracteres max , unique (pour ne pas avoir 2 mails identiques)
-- Date d'inscription de la date courante
CREATE TABLE subscribes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(100) UNIQUE,
    date_inscription DATE DEFAULT CURRENT_DATE
);