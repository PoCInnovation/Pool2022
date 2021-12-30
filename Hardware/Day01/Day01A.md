# PoC Hardware, Day1 Afternoon

## Summary
  - [Summary](#summary)
  - [Introduction](#introduction)
  - [Led Memory game](#led-memory-game)
    - [LED and Button](#led-and-button)
    - [The Game](#the-game)
  - [Calculator](#calculator)
  - [Snake](#snake)
  - [RFID Pass](#rfid-pass)
  - [Shi Fu Mi](#shi-fu-mi)
  
## Introduction

On this afternoon you will design circuits.  
You can do them in any order you want.  
Don't hesitate to look on the net to know how a module works

## Led Memory game

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* 4x LED (preferably: Red, Blue, Green, Yellow)
* 4x Resistor
* 4x Button

</details>

You all know the game [Simon](https://www.youtube.com/watch?v=1Yqj76Q4jJ4)? Well you will have to recreate one, you will find everything you need in *"🛠️ Materials required: "*.

### LED and Button

Start by putting your LEDs and Buttons on the BreadBoard.
Each Button will correspond to an LED color.

> For example: Red Button => Red LED

```diff
+To proceed to the next step+
Make sure that when you press a button its associated LED lights up.
```

### The Game

Now that you have the circuit, you will have to code!

Flash the LEDs, to start the game you have to press any Button.

The game will alternate between colors to memorize and moves to play.

At each new turn a random color will be added to the previous sequence.

You must have a consecutive sequence of `12 moves` to win the game.

If the player takes more than `3 seconds` to press a Button he has lost.

> Choose your winner and loser combination.
> ex: flash the red LED for loser 3 times.

## Calculator

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* Potentiometer
* Display 16x2
* Keypad 4x4

</details>

The objective of this task is to create a calculator.

The first step is to connect your screen to your Arduino.
Then you just have to use the library corresponding to your [screen](https://www.arduino.cc/reference/en/libraries/liquidcrystal-i2c/) to display **"Hello World !"**.

Your second objective is to install your keypad on your Arduino and to install your library for the [keypad](https://github.com/Chris--A/Keypad).   

Each time you press a number you must display it on your `LCD screen`.

To define the operators in our keypad, we will start from this postulate:
- A : '/'
- B : '*'
- C : '+'
- D : '-'

Now it's time to combine your operators and numbers.  
When you press the "*" key, your screen will display "=" followed by the result.

## Snake

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* Potentiometer 10k
* 8x8 Matrix display
* Joystick

</details>

This exercise consists in recreating the snake game.
You will first connect your matrix to your Arduino Uno.
Add the [library](https://github.com/wayoda/LedControl) to light leds on your matrix.
Make sure you have a pixel that is displayed randomly every second.

You will then connect your joystick to your arduino and advance 2 pixels simultaneously and move them with your joystick.
Add a Potentiometer to control the speed of your display.

You now have all the steps to finish this exercise.  
Add your random pixel and display a new one when the head of your snake touches it.  
As soon as your snake touches an apple, a led is added at its end.  
Your last step is to restart: display "END" when your snake touches one of its leds or when it leaves the matrix.

After displaying "END", if the joystick moves your snake will return to its initial position with its original size.

## RFID Pass

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* 2x Resistor
* 2x LED (red and green)
* Buzzer
* RFID sensor

</details>

This exercise consists in **reading a badge in RFID**, you will need the library [SPI](https://www.arduino.cc/en/reference/SPI) and [MFRC522](https://github.com/miguelbalboa/rfid).  
If its content is correct, a green led lights up.  

> :warning: If not, a red led lights up with a noise emitted by the buzzer.

You will first connect your RFID reader to your Arduino.  
Write a program that allows you to read the content of a card in RFID.  
Now you have to light the red or green LED when a card is read.  
The color of the LED corresponds to the comparison between the content of the card and a reference value.

> :warning: Don't forget to use resistors for your LEDs.


## Shi Fu Mi

<details>
    <summary> 🛠️ Materials required:</summary>

* Arduino - Breadboard - Jumpers
* 3x Servo
* Ultrasonic sensor
* Buzzer

</details>

This exercise consists in creating a Shi Fu Mi.
- **Each servo-motor** corresponds to an action (Shi, Fu, Mi).
- **The Ultrasonic sensor** allows to evaluate if a gesture from the opponent has been perceived.
- **The Buzzer** emits a sound when the action is executed.

The first part is to connect your ultrasonic sensor when an object enters a `30 cm area`.  
Add the buzzer, it must emit a noise as long as an object is in the zone.

You will then connect a servo motor and when an object enters the area the servo motor is activated.  
Your last step is to put the `3 servo-motors` in your circuit and activate `one randomly` when an action is recognized by the ultrasonic sensor.

> 😊 Vous avez enfin finit votre circuit et votre premier jour de piscine !
> ㊗️ Félicitations

