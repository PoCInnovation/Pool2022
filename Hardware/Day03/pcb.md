# Piscine Hardware : Creation de PCB!

## Sommaire


## Introduction

Sur cette journer nous allon voir les bases de la conception de
[PCB](https://en.wikipedia.org/wiki/Printed_circuit_board)

### Logiciel de conception

Pour ca nous allons utiliser un logiciel de conception:
[Easyeda](https://easyeda.com/). C'est un  logiciel propietaire qui simplifie la
conception. Il existe d'autre logiciel de conption mais Easyeda est le seul 
a fournire un enviroment complet, de la conception a la biblioteque de composant 
justqua l'achat et la livraison de vos board.

### Les alternatives au PCB

Jusqu'a maintenant vous concevier vos circuit electronique sur des breadboard
ce qui est tres pratique pour le prototipage, mais ce n'est pas durable pour 
systeme qui devra et utlisier et deployer pour d'autre persone.

Il existe different manière de realiser un cicuit électronique qui poura durere
dans le temps:

* [Perfboard](https://en.wikipedia.org/wiki/Perfboard):
Une carte pré perforé avec une taille de grille standard (0.1 inches) 
sans connection électrique entre les différants troues.

* [Stripboard](https://en.wikipedia.org/wiki/Stripboard):
Similaire a la perfboard mais les troues sont relier electriqument a la
maniere d'une breadboard

* [PCB](https://en.wikipedia.org/wiki/Printed_circuit_board):
La methode la plus professionnelle, et surtout prete a la production automatiser
Contrairement au 2 autre solution, c'est la seule qui permet une miniaturisation
grace a l'utilisation de composant monter en surface.

### Les different type de composant

La plupart des composants électronique son disponible sous different forme :

* [Through-hole](https://en.wikipedia.org/wiki/Through-hole_technology)
Tout les composant que vous avez utiliser jusque ici fond partie de cettte
famille. Exemple pour une resistance
![](img/resistors-on-green-pcb-through-hole.png "Through hole resistor shema")
Pour les utiliser il faut forcément percer la board pour pouvoir les installer

* [SMD/SMT](https://en.wikipedia.org/wiki/Surface-mount_technology):
cette famille de composant elle, est monter en surface, pas de percage nessessaire
ce qui permet grandement de reduire les couts de fabrication.
Un des autre avantage, est leur taille, bien plus petite que les autres.
Exemple pour une resistance ![](img/SMT_sizes.png)

## Easyeda

La conception ce fait en 2 étapes, la realisation du schema électrique puis
le routage des pistes.


## EXO 1

### PART1

Pour cette exo vous allez reprendre un project existant et le complete pour
vous familiariser avec l'éditeur. Vous le trouvere dans le dossier ressource

LIEN 

Ce project contient plusieurs boutons et led.
On vous demande d'effectuer les connection électrique suivante :

SW1 -> D7

SW2 -> D8

LED1 -> D6

LED2 -> D5 

Pour l'alimentation électrique on utilisera le port usb de l'Arduino

Vous pouvez déplacer tout les composent pour les relies le mieux possible
penser les recommendations électrique des composants, comme vue les premiere
jours

### PART 2

Maintenant que le schema est fait, nous allons passer a la partie routing.

Pour ce faire aller dans Design -> Convert schematic to PCB

Une nouvelle page s'ouvre, utiliser les paramètre par default.

Crée la board de telle manner à avoir l'Arduino avec le port usb sur la droite
et les LED sur le dessus et les buttons en dessous 


## EXO 2

Maintenant que vous avez fait votre premier pcb en utilisant des compensant 
présélectionner par mes soins, vous allez rentrer dans la partie la plus 
compliquer, dans un vrai project il faut sélectionner sois meme ces composants,
ici vous seré toujours guider.

Dans l'exo 1 vous utiliser une carte arduino, ici nous allons directement 
utiliser le puce qui se trouve sur les ESP32.

Nous allons reprendre un exo des jours precedent et luis crée une board 
complete



