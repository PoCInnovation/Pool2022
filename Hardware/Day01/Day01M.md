# PoC Hardware, Day1 Morning

## Summary
  - [Summary](#summary)
  - [Introduction](#introduction)
  - [0 - Setup](#0---setup)
  - [1 - Electrical basics :zap:](#1---electrical-basics-zap)
    - [1.1 - The theory](#11---the-theory)
    - [1.2 - Visualization](#12---visualization)
  - [2 - Electronics :cyclone:](#2---electronics-cyclone)
    - [2.1 The Arduino board](#21-the-arduino-board)
    - [2.2 Your first steps](#22-your-first-steps)
      - [2.2.1 No code, just volts](#221-no-code-just-volts)
    - [2.3 The data](#23-the-data)
    - [2.3.1 Digital](#231-digital)
      - [2.3.1.1 Blinking](#2311-blinking)
      - [2.3.1.2 Un simple bouton](#2312-un-simple-bouton)
    - [2.3.2 Analog](#232-analog)
      - [2.3.2.1 LED's time blinking](#2321-leds-time-blinking)
      - [2.3.2.2 Fading](#2322-fading)

## Introduction

Welcome to the 2022 hardware pool.  
I hope you are motivated !  
Let's start with the basics:

## 0 - Setup

## 1 - Electrical basics :zap:

### 1.1 - The theory

You will need to watch the following video suite which will take you about **30 minutes**. Essential to understand the fundamentals of electrical circuits!
- [Playlist](https://www.youtube.com/watch?v=oGiDi6a8hPY&list=PLGKyx5mruVO9xCjlbgU4grlv8qdqBEmMa&index=1)
  - [ELECTRICITE, TENSION et INTENSITE ! #01](https://www.youtube.com/watch?v=oGiDi6a8hPY) (4'03)
  - [LOI D'OHM, RESISTANCE SERIE et PARALLELE ! #02](https://www.youtube.com/watch?v=282w0s8frZ8) (3'56)
  - [LOIS FONDAMENTALES de L'ELECTRICITE ! #03](https://www.youtube.com/watch?v=Iyxu9-akMVk&t=43s) (3'16)
  - [LOIS FONDAMENTALES, APPLICATION ! #04](https://www.youtube.com/watch?v=8lrNLba37ts) (4'01)
  - [LIRE & CHOISIR une RESISTANCE ! #05](https://www.youtube.com/watch?v=gy0f7mmrkbc) (4'17)
  - [UTILISER UN MULTIMETRE (VOLT, AMPERE et OHM) ! #06](https://www.youtube.com/watch?v=SXRwyHKmx4s) (4'17)
  - [UTILISER UNE BREADBOARD ! #07](https://www.youtube.com/watch?v=a3J2Hm2Db-s) (2'56)

  - [UTILISER UNE LED et UNE RESISTANCE ! #08](https://www.youtube.com/watch?v=nSKQTvrBdNg) (3'33)

### 1.2 - Visualization

Now that you've learned the basics, let's conceptualize them with the [Falstad](https://www.falstad.com/circuit/circuitjs.html) simulator. You will create a simple circuit composed of:

- **Generator** (Draw > Inputs and Sources > Add Voltage Source) set it to `3.3 V`.
- **LED** (Draw > Outputs and Labels > Add LED)
- **Resistor** (Draw > Add Resistor)
- **Cables** (Draw > Add Wire)

Have fun changing the `resistance` values to see how the current flows!
```diff
+To proceed to the next step+
The LED has to light up! (simple for now, isn't it?)
```
```diff
!~ Tips ~!
You can see some concepts by going to:
@@Circuits > Basics@@
There are plenty of examples like:
@@Circuits > Basics > Ohm's Law@@
Who shows you in practice how it works!
```

## 2 - Electronics :cyclone:

### 2.1 The Arduino board

Before building the Megazord, learn how the [Arduino board](ArduinoCard.md) that you will use a lot in this pool is designed.

### 2.2 Your first steps
#### 2.2.1 No code, just volts
<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Resistor

</details>

Make a circuit connecting a LED to an Arduino and turn on this LED.
```diff
+To proceed to the next step+
Call a supervisor before powering up your Arduino.
```
>:warning: No code is required for this exercise
>:warning: You are not allowed to use the 3.3V pin

### 2.3 The data

Arduino boards have two types of I/O (Input/Output):
- ***Digital*** - which will be able to read / write binary values (LOW or HIGH) either 0 and 1.
- ***Analog*** - that will be able to read / write variable values. For example the two terminals are (0;255), so I could read 16 or 232 depending on the information that the sensor returns.

> [Digital Pins](https://docs.arduino.cc/foundations/microcontrollers/digital-pins)
> [Analog Input Pins](https://docs.arduino.cc/foundations/microcontrollers/analog-input)
> [PWM](https://docs.arduino.cc/foundations/microcontrollers/analog-output) (Pulse With Modulation)

### 2.3.1 Digital
#### 2.3.1.1 Blinking
<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Resistor

</details>

Of course you start coding with `Arduino IDE` or `PlatformIO`.
Make sure that the LED blinks every second.
```diff
!~ Tips ~!
delay();
```

#### 2.3.1.2 Un simple bouton
<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Bouton
* Resistor

</details>

Make the LED turn on or off when the button is pressed. Just like your house switch.
```diff
!~ Tips ~!
INPUT_PULLUP
```

### 2.3.2 Analog
#### 2.3.2.1 LED's time blinking

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Potentiometer
* Resistor

</details>

Make the LED flashing delay dependent on the potentiometer values.
```diff
!~ Tips ~!
map();
```

#### 2.3.2.2 Fading

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* LED
* Resistor

</details>

Make an LED fade.
That is, gradually increase/decrease the intensity (to create a fade effect).
```diff
+To proceed to the next step+
Try your circuit by putting on the LED on:
 - a non-PWM Analog pin.
 - then on an Analog PWM(~) pin.
```

> PWM is a technique for obtaining analog behavior from a digital output by turning it off and on very quickly and with a different ratio between on and off times.
