# PoC Hardware, Day 5 Matin

## Sommaire
- [Introduction](#introduction)
- [0 - Setup](#0---setup)
- [1 - Lecture de carte](#1---lecture-de-carte)
- [2 - Écriture de carte](#2---ecriture-de-carte)

## Introduction

Cette journée est dédiée à la sécurité dans le domaine du hardware. La première partie sera consacrée au NFC `alias Near-Field Communication`.

Vous devrez réaliser différentes opérations à l'aide d'un Arduino et de cartes/badge NFC, tel que
- de l'écriture
- de la lecture
- une découverte des techniques de chiffrement


## 0 - Setup

Vous commencerez le day avec:
- Une carte RFID-RC522
- Des cartes et badges NFC
- Un Arduino
- Des jumpers

![Schema de branchement RFID](https://www.electronique-mixte.fr/wp-content/uploads/2019/08/RFID-Sch%C3%A9ma-de-principe.jpg)
**Comment connecter la carte RFID-RC522 à votre Arduino :)**

## 1 - Lecture de carte

### A - Lecture basique

Assurez vous que votre Arduino est bien connecté et que les branchements de votre carte RFID sont valides. Pour être sûre que tout fonctionne vous pouvez dumper les informations de votre carte RFID à l'écran.

Prenez la première carte que nous vous avons fournie et scanner la avec votre carte RFID pour afficher son contenu.

L'objectif est de retrouver le flag PoC dans la data que vous lisez. Il est sous cette forme : `PoC{FLAG}`.

### B - Déchiffrement débutant

Votre prochaine étape est de déchiffrer une carte que vous devez demander à un encadrant.

Le but d'un chiffrement est de rendre des informations illisibles et inutilisables pour une personne qui ne disposerait pas de la clé de déchiffrement.
Il existe de très nombreux algorithmes permettant de chiffrer des données, pour cet exercice, vous ferez face à un cipher.

L'objectif est de trouver la clé de chiffrement utilisé pour le chiffrement des données de cette carte.
Pour cet exercice ainsi que tous les autres exercices comprenant un chiffrement la longueur de la clé est de sept caractères.

### C - Déchiffrement basique

Pour cet exercice, vous devez de nouveau déchiffrer une carte.

La technique utiliser pour le chiffrement de cette troisième carte est le XOR.

L'objectif est de trouver la clé de chiffrement utilisé pour le chiffrement des données de cette carte.

## 2 - Écriture de carte
### A - Écriture débutant

Vous allez devoir lire une carte et réécrire son contenu pour changer la variable CODE de `PoK` à `PoC`.

Une fois réussie vous devrez demander à un encadrant de scanner votre carte pour valider cette tâche.

### B - Écriture basique

La carte que vous avez reçue est obfusquée, vous allez devoir écrire un programme capable de supprimer tout le code inutile sur votre carte pour la rendre utilisable.

La validation de cette tâche s'effectuera de la même façon que pour la tâche précédente.
