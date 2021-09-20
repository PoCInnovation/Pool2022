# Carte Arduino

![](../.github/day1/arduino_1.png)  
1. ***Power connector*** - C'est ainsi que vous alimentez votre Arduino lorsqu'il n'est pas branché sur un port USB. Il peut accepter des tensions entre 7 et 12V. 
2. ***USB port*** - Utilisé pour l'alimentation de votre Arduino Uno, le téléversement (téléchargement) de vos esquisses (programmes) vers votre Arduino, et pour communiquer avec votre esquisse Arduino.  


![](../.github/day1/arduino_2.png)  
1.  ***Reset Button*** - Réinitialise le microcontrôleur ATmega. Vous pourriez avoir à l'utiliser si votre carte ne se comporte pas comme vous le souhaitez.  
2.  ***TX et RX LEDs*** - Ces LEDs indiquent la communication entre votre Arduino et votre ordinateur. Attendez-vous à ce qu'elles clignotent rapidement pendant le téléversement du sketch et pendant que la carte communique avec l'ordinateur. Ces voyants sont utiles pour le débogage.  

![](../.github/day1/arduino_3.png)  
1. ***Digital pins*** - Interprétation des données binaires (marche ou arrêt) d'un composant d'entrée comme un interrupteur. Vous apprendrez que les broches numériques sont utilisées avec digitalRead(), digitalWrite() et analogWrite(). analogWrite() ne fonctionne que sur les broches portant le symbole PWM (modulation de largeur d'impulsion).
2. ***Analog pins*** - Interprètent une gamme de signaux provenant d'un composant d'entrée. Utilisez ces broches avec analogRead().
3. ***Pin 13 LED*** - La seule sortie intégrée à votre Arduino Uno. Cette LED est très utile pour le débogage.  

![](../.github/day1/arduino_4.png)  
1. ***ATmega microcontroller*** - Le cerveau de votre Arduino Uno !
2. ***Power LED*** - Indique que votre Arudino est alimenté. Cette lumière est utile pour le débogage.
3. ***GND et 5V pins*** -  Utilisez ces broches pour fournir une alimentation +5V et une masse 0V à vos circuits.
