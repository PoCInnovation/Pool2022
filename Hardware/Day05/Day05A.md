# PoC Hardware, Day 5 Après-Midi

## Sommaire

- [Introduction](#introduction)

## Introduction

Cette après-midi prend la forme d'un mini projet, vous allez découvrir l'implémentation et les failles d'un algorithme de chiffrement.

Nous allons voir l'algorithme RSA.

Cet algorithme consiste à générer 2 [nombres premiers](https://fr.wikipedia.org/wiki/Nombre_premier) et les multiplier entre eux pour la clé privée. Les nombres premiers générés sont suffisament grands pour que ce soit trop long pour un ordinateur récent de trouver ces 2 nombres.
Pour plus de détails sur le chiffrement RSA, je vous conseille d'aller voir [juste ici](https://fr.wikipedia.org/wiki/Chiffrement_RSA).

Le but de cette après-midi est de chiffrer et déchiffrer le contenu d'une carte RFID à l'aide de clés RSA.
Ensuite, il le but sera de casser le chiffrement RSA de n'importe quelle carte afin de récupérer son contenu.

Pour rappel, vous allez développer votre programme pour qu'il tourne sur une Arduino Uno ou une ESP32, il faudra donc faire cela en C++. Pas de panique si vous n'avez jamais fais de C++, c'est du C avec des choses en plus.

## 1 - La génération de clés RSA

Pour préparer la suite, il va vous falloir généré des clés RSA.

Pour cela, vous allez donc implémenter la génération de clés RSA.

## 2 - Le chiffrage RSA

Ce 2nd exercice sera donc de réimplémenter le chiffrage RSA vous même.

Bien évidemment le but n'est pas que vous utilisiez une librairie qui le fait pour vous. Vous devez le réimplémenter pour que vous compreniez bien son fonctionnement ce qui vous aidera grandement pour le dernier exercice.

## 3 - Le déchiffrage RSA

Ce 3ème exercice est d'implémenter le déchiffrage RSA. Tout cela dans la continuité de l'étape précédente.

## 4 - Casser le chiffrement RSA

Maintenant que vous avez implémenté le chiffrement RSA, vous allez apprendre à le casser (la partie la plus fun).

Le but est de casser le chiffrement RSA sur une carte RFID afin d'en révéler le message chiffré.