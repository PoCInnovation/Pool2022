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

## Snake

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* Potentiomètre 10k
* 8x8 Matrix display
* Joystick

</details>

## RFID Pass

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* 2x Resistances
* 2x LED (red and green)
* Buzzer
* RFID sensor

</details>

## Shi Fu Mi

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino - Breadboard - Jumpers
* 3x servo
* Ultrasonic sensor
* Buzzer

</details>