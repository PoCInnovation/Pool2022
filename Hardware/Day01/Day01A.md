# PoC Hardware, Day1 Aprem

## Sommaire
  - [Introduction](#introduction)
  - [1 - Les projets :bulb:](#1---les-projets-bulb)

## Introduction

## Led Memory game

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* 4x LED (de préférence: Rouge, Bleu, Vert, Jaune)
* 4x Résistance
* 4x Boutton

</details>

Vous connaisez tous le jeu [Simon](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) ? Et bien vous allez devoir en recréer un, vous retrouverez tous ce dont vous aurez besoin dans *"🛠️ Matériel requis:"*.  

### LED et Boutton

Commencez par mettre vos LED et Boutton sur la BreadBoard.  
Chaque Boutton correspondra à une couleur de LED.  

> Par exemple: Boutton Rouge => LED Rouge

```diff
+Pour passer à la suite+
Faite en sorte qu'en appuyant sur un boutton sa LED associé s'allume.
```

### The Game

Maintenant que vous avez le circuit, il faudra coder !

Faite clignoter les LED, pour commencer le jeu il faudra appuyer sur n'importe quel boutton.

Le jeu s'alternera entre les couleurs à mémoriser et les coups à jouer.  

A chaque nouveau tour une couleur aléatoire sera ajouter à la séquence précédente.  

Il faudra avoir une suite consécutive de `12 coups` pour gagner le jeu.  

Si le joueur prend plus de `3 secondes` pour appuyer sur un boutton il a perdu.

> Choisissez votre combinaison vainqueur et perdant.  
> ex: faire clignoter 3 fois la LED rouge pour perdant.

## Calculator

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* Potentiomètre
* Display 16x2
* Keypad 4x4

</details>

L'objectif de cette tâche est de créer une calculatrice.

La première étape est de votre écran à votre Arduino.
Ensuite il vous suffit d'utiliser la bibliothèque correspondant à votre [écran](https://www.arduino.cc/reference/en/libraries/liquidcrystal-i2c/) pour afficher "Hello World !".

Votre deuxième objectif l'installation de votre keypad sur votre Arduino et d'installer votre bibliothèque pour le [keypad](https://github.com/Chris--A/Keypad).
A chaque fois que vous appuyer sur un nombre vous devez l'afficher sur votre écran LCD quand vous appuyez sur la touche "*".

Pour définir les opérateurs dans notre keypad, nous allons partir de se postulat:
- A : '/'
- B : '*'
- C : '+'
- D : '-'

Il est maintenant temps de combiner vos opérateurs et vos chiffres.
Quand vous appuyez sur la touche "*", votre écran affiche "=" suivi du résultat. 

## Snake

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* Potentiomètre 10k
* 8x8 Matrix display
* Joystick

</details>

Cette exercice consiste à recréer le jeu snake.
Vous allez tout d'abord connecté votre matrice à votre Arduino Uno.
Ajouté la [bibliothèque](https://github.com/wayoda/LedControl) pour allumer des leds sur votre matrice.
Faite en sorte d'avoir un pixel qui s'affiche aléatoirement toutes les secondes.

Vous allez ensuite connecté votre joystick sur votre arduino et faire avancé 2 pixels simultanément et les mouvoirs avec votre joystick.
Ajouter un potentiomètre pour contrôler la vitesse de vos affichage.

Vous avez maintenant toutes les étapes pour finir cette exercice.
Ajoutez votre pixel aléatoire et affichez en un nouveau quand la tête de votre serpent touche celui ci.
Dès que votre serpent touche une pomme, une led est ajouté à sa fin.
Votre dernière étape est de restart : afficher "END" quand votre serpent touche une de ses leds ou quand il sort de la matrice.

Après avoir afficher "END", si le joystick bouge votre serpent reprend la position initial avec sa taille de départ.

## RFID Pass

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* 2x Resistances
* 2x LED (red and green)
* Buzzer
* RFID sensor

</details>

Cette exercice consiste à lire un badge en RFID, vous aurez besoin de la bibliothèque [SPI](https://www.arduino.cc/en/reference/SPI) et [MFRC522](https://github.com/miguelbalboa/rfid).
Si son contenu est correct une led Verte s'allume.
Sinon une led rouge s'allume accompagné d'un bruit émis par le buzzer.

Vous allez tout d'abord connecter votre lecteur RFID à votre Arduino.
Ecrivez un programme vous permettant de lire le contenu d'un carte en RFID.
Maintenant, il vous reste plus cas allumer la LED rouge ou vert quand une carte est lu.
La couleur de la LED correspond à la comparaison entre le contenu de la carte est d'une valeur de référence.

> :warning: N'oubliez pas d'utilisez des resistances pour vos LED.


## Shi Fu Mi

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* 3x servo
* Ultrasonic sensor
* Buzzer

</details>
