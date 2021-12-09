# PoC Hardware, Day1 Matin

## Sommaire
  - [Introduction](#introduction)
  - [0 - Setup](#0---setup)
  - [1 - Les bases électriques :zap:](#1---les-bases-électriques-zap)
    - [1.1 - La théorie](#11---la-théorie)
    - [1.2 - La visualisation](#12---la-visualisation)
  - [2 - L'électronique :cyclone:](#2---lélectronique-cyclone)
    - [2.1 La carte Arduino](#21-la-carte-arduino)
    - [2.2 Vos premiers pas](#22-vos-premiers-pas)
      - [2.2.1 No code, just volts](#221-no-code-just-volts)
    - [2.3 Les données](#23-les-données)
      - [2.3.1 Digital](#231-digital)
        - [2.3.1.1 Blinking](#2311-blinking)
        - [2.3.1.2 Un simple bouton](#2312-un-simple-bouton)
      - [2.3.2 Analog](#232-analog)
        - [2.3.2.1 LED's time blinking](#2321-leds-time-blinking)
        - [2.3.2.2 Fading](#2322-fading)

## Introduction

## 0 - Setup

## 1 - Les bases électriques :zap:

### 1.1 - La théorie

Vous devrez regarder la suite de vidéo suivante cela vous prendra environ ***30 minutes***. Essentielle pour comprendre les fondamentaux des circuits électriques !
- [La playlist](https://www.youtube.com/watch?v=oGiDi6a8hPY&list=PLGKyx5mruVO9xCjlbgU4grlv8qdqBEmMa&index=1)
  - [ELECTRICITE, TENSION et INTENSITE ! #01](https://www.youtube.com/watch?v=oGiDi6a8hPY) (4'03)
  - [LOI D'OHM, RESISTANCE SERIE et PARALLELE ! #02](https://www.youtube.com/watch?v=282w0s8frZ8) (3'56)
  - [LOIS FONDAMENTALES de L'ELECTRICITE ! #03](https://www.youtube.com/watch?v=Iyxu9-akMVk&t=43s) (3'16)
  - [LOIS FONDAMENTALES, APPLICATION ! #04](https://www.youtube.com/watch?v=8lrNLba37ts) (4'01)
  - [LIRE & CHOISIR une RESISTANCE ! #05](https://www.youtube.com/watch?v=gy0f7mmrkbc) (4'17)
  - [UTILISER UN MULTIMETRE (VOLT, AMPERE et OHM) ! #06](https://www.youtube.com/watch?v=SXRwyHKmx4s) (4'17)
  - [UTILISER UNE BREADBOARD ! #07](https://www.youtube.com/watch?v=a3J2Hm2Db-s) (2'56)

  - [UTILISER UNE LED et UNE RESISTANCE ! #08](https://www.youtube.com/watch?v=nSKQTvrBdNg) (3'33)

### 1.2 - La visualisation

Maintenant que vous avez appris les bases, nous allons les conceptualiser grâce au simulateur [Falstad](https://www.falstad.com/circuit/circuitjs.html).
Vous allez créer un simple circuit composé de:
- **Générateur** (Draw > Inputs and Sources > Add Voltage Source) mettez le sur `3.3 V`.
- **LED** (Draw > Outputs and Labels > Add LED)
- **Résistance** (Draw > Add Resistor)
- **Câbles** (Draw > Add Wire)

Amusez-vous à changer les valeurs de la `résistance` pour voir comment circule le courant !
```diff
+Pour passer à la suite+
Il faut que la LED s'allume ! (simple pour l'instant nan ?)
```
```diff
!~ Tips ~!
Vous pouvez voir certain concept en allant dans:
@@Circuits > Basics@@
Il y a plein d'exemple comme:
@@Circuits > Basics > Ohm's Law@@
Qui vous montre en pratique comment cela fonctionne !
```

## 2 - L'électronique :cyclone:

### 2.1 La carte Arduino
Avant de construire le Megazord, apprenez comment est concu [la carte Arduino](ArduinoCard.md) que vous allez beaucoup utiliser lors de cette piscine.

### 2.2 Vos premiers pas
#### 2.2.1 No code, just volts
<details>
    <summary> 🛠️ Matériel requis:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Résistance

</details>

Faites un circuit reliant une LED à un Arduino et allumer cette LED.
```diff
+Pour passer à la suite+
Appelez un encadrant avant d’alimenter votre Arduino.
```
>:warning: Aucun code n'est requis pour cet exercise
>:warning: Vous n'avez pas le droit à la pin 3.3V

### 2.3 Les données

Les cartes Arduino possèdent deux types d'I/O (Input/Ouput):
- ***Digitaux*** - qui vont pouvoir lire / écrire des valeurs binaires (LOW ou HIGH) soit 0 et 1.
- ***Analogues*** - qui vont pouvoir lire / écrire des valeurs variables. Par exemple les deux bornes sont (0;255), alors je pourrais lire 16 comme 232 selon l'information que le capteur remonte.

> [Digital Pins](https://docs.arduino.cc/foundations/microcontrollers/digital-pins)
> [Analog Input Pins](https://docs.arduino.cc/foundations/microcontrollers/analog-input)
> [PWM](https://docs.arduino.cc/foundations/microcontrollers/analog-output) (Pulse With Modulation)

### 2.3.1 Digital
#### 2.3.1.1 Blinking
<details>
    <summary> 🛠️ Matériel requis:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Résistance

</details>

Bien évidemment vous commencez à coder avec `Arduino IDE`.
Faites en sorte que la LED clignote toutes les secondes.
```diff
!~ Tips ~!
delay();
```

#### 2.3.1.2 Un simple bouton
<details>
    <summary> 🛠️ Matériel requis:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Bouton
* Résistance

</details>

Faites en sorte que la LED s'allume ou s'éteigne lorsqu'on appui sur le bouton. Comme votre interrupteur de maison.
```diff
!~ Tips ~!
INPUT_PULLUP
```

### 2.3.2 Analog
#### 2.3.2.1 LED's time blinking

<details>
    <summary> 🛠️ Matériel requis:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Potentiomètre
* Résistance

</details>

Faites en sorte que le délai de clignotement de la LED soit dépendant des valeurs du potentiomètre.
```diff
!~ Tips ~!
map();
```

#### 2.3.2.2 Fading

<details>
    <summary> 🛠️ Matériel requis:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Résistance

</details>

Faites en sorte de faire disparaître une LED.
C'est à dire d'augmenter/diminuer progressivement l'intensité (pour créer un effet de fondu).
```diff
+Pour passer à la suite+
Essayer votre circuit en mettant sur la LED sur:
 - un pin Analogique non PWM.
 - puis sur un pin Analogique PWM(~).
```

> La PWM est une technique permettant d'obtenir un comportement analogique à partir d'une sortie numérique en l'éteignant et en l'allumant très rapidement et avec un rapport différent entre les temps d'activation et de désactivation.
