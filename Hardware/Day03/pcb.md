# Piscine Hardware : Creation de PCB!

## Sommaire


## Introduction

Sur cette journer nous allon voir les bases de la conception de
[PCB](https://en.wikipedia.org/wiki/Printed_circuit_board)

### Logiciel de conception

Pour ca nous allons utiliser un logiciel de conception:
[Easyeda](https://easyeda.com/). C'est un logiciel propietaire qui simplifie la
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

### Introduction

Maintenant que vous avez fait votre premier pcb en utilisant des compensant 
présélectionner par mes soins, vous allez rentrer dans la partie la plus 
compliquer, dans un vrai project il faut sélectionner sois meme ces composants,
ici vous seré toujours guider.

Dans l'exo 1 vous utiliser une carte arduino, ici nous allons directement 
utiliser le puce qui se trouve sur les ESP32.

Pour les prochains exercices vous allez à chaque fois itéré sur le design en
y ajoutant des fonctionaliters au fer et a mesure. Ici vous aurez donc du
travaille en plus par rapport a un vrai project puisque vous passerez par
l'etappe de routing a chaque itération. Dans le cas d'un project réel vous 
ne passer a l'étape de routing, qu'une fois l'étape de conception finit.

Vous devez vous demander ce que vous aller réaliser. Votre but sera de concevoir
une telecomande universsel pour controler n'inport quelle type de project que 
vous orier envie de crée dans le futur

### Part 1

Les bases, Pour une telecomande, il faut un controller, ici un esp32.
Tout composant éléctronique a besoin de conpensant dit passiffe pour fonctionner
(resistance, capacitor, inductance, etc). Toute ces information peuve etre
trouver dans la datasheet du composant. Elle est disponible directement 
depuis le site de JCLBCP, (meme si par moment vous devrer aprendre a lire le
chinoi, literalment). Elle sont le plus souvent trouvable en ligne.

Ouvrer la datasheet de l'esp32 et trouver les informations qui vous manque
pour avoir un esp32 fonctionnel, vous devrez rajouter les composants manquant 
vous meme depuis le library JLCBCP
<details>
    <summary>Tips</summary>

    Rendez vous a la page 19
</details>

* Un esp32-s2
* Un port USB-C
* Un crystal (a la bonne fréquence)
* Un régulateur de tension LDO (3.3V)
* Un bouton reset
* Un bouton flash (boot mode)
* Un port de debug (JTAG)
* Un port de communication serie (UART)
* Un led d'éta

N'hésitez pas à nous appeler si vous avez besoin d'aide, des questions et pour
nous faire valider vos design.

### Part 2

Pour le routing, il n'y a pas de contrainte supplémentaire. Cependant, penser à
respecter les contraintes des composants que vous avez utilisés, notamment 
l'USB et [le WIFI](https://lewifi.fr/)


## EXO 3

### Part 1

Les bases de l'esp sont prete mais vous conviendré que pour l'instant 
ce ne ressemble pas vraiment a une télécommande, On va y remédier tout de suite.
Pour ca on va y rajouter des boutons.

Je vous demande d'avoir au moin :

* 2 joystick analogique 2 axe
* 2 switch on/off
* 2 bouton

Vous pouvez rajouter ce que vous voulez (mais ne perdez pas trop de temps)

### Part 2

Votre PCB devra avoir la forme d'une manette et les boutons devront etre 
placer de manière logique pour une manette.


## EXO 4

Bien maintenant vous allez ajouter d'autre chip

* NRF24L01P-R: un transceiver radio (C8791)
* MMA8653FCR1: Un gyroscope (C132231)
* TF-01A: Un lecteur de carte SD (C91145)

Penser a aller regarder les datasheet des c'est compsant pour comprendre comment
les connecters a l'esp


### EXO 5

On va y ajouter un ecran OLED (C90547) pour afficher toute sorte d'information
et de configuration, qui dit un ecran, dit un nouveau system de control.
5 boutons disposer en D-Pad devrait le faire.

Penser à mettre a jour le routing avec ces nouveaux compensant.

### EXO 6

Jusque ici votre télécommande ne fonctionne que brancher. Pas tres 
pratique. Une solution simple, ajoutez une batterie !

Penser à ajouter un régulateur de tension et un system de charge et un
indicateur de niveau.

### EXO 7

Et si on allait plus loin ?
#### .1

Vous en conviendrez un pcb entre les mains, ce n'est pas le plus pratique.
Et si vous metier ce que vous avez apres ce matin à contribution ?
Je vous demande de créer un boitier imprimable en 3D pour votre télécommande 
universelle 

#### .2

Au tout debut je vous ai fait utiliser un esp32-s2, ce microcontroller a une 
particulariter, en plus d'embarquer du wifi et du bluetooth, il dispose d'une
interface usb 2.0 complete, vous pouvez donc écrire un driver pour le rendre
compatible avec un ordinateur pour en faire au choix, une manette de jeu
ou une station au sol pour afficher plus d'information sur la ou les appareils
au quelle il est connecté. Le wifi ou le Bluetooth pourrait aussi vous servire.


## Conclusion 

Félicitation vous avez réalisé vos premiers PCB, si vous le souhaiter vous 
pouvez commander vos créations directement à partir de vos schema. 
Attention tout de meme, il se peut qu'il y ait encore des erreurs dans vos
circuits et de plus souder ce type de composant à la main peut etre 
une tache relativement complexe.

Si vous voulez voir à quoi aurait pu ressembler ces exercices, vous pourrez
consulter ma version 
