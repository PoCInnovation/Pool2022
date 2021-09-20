# PoC Hardware, Day2

## Sommaire
  - [Introduction](#introduction)
  - [0 - Setup](#0---setup)
  - [1 - USB](#1---usb)
    - [Graph Météo :sunny:](#graph-météo-sunny)
  - [2 - MQTT](#2---mqtt)
    - [IFTT turn on LED with your vocal assistant ! :speaking_head:](#iftt-turn-on-led-with-your-vocal-assistant--speaking_head)
  - [3 - Bluetooth](#3---bluetooth)
    - [Chating :selfie:](#chating-selfie)
  - [4 - WiFi](#4---wifi)
    - [4.1 - Color Picker :syringe:](#41---color-picker-syringe)
      - [4.1.1 Piloter la LED](#411-piloter-la-led)
      - [4.1.2 Créer votre premier Access Point](#412-créer-votre-premier-access-point)
      - [4.1.3 Web Server sur ESP32](#413-web-server-sur-esp32)
    - [4.2 - Among Us du RFC :detective:](#among-us-du-rfc-detective)
      - [4.2.1 Lancer l'API](#421-lancer-lapi)
      - [4.2.2 Trouver les imposteurs](#422-trouver-les-imposteurs)

## Introduction

Lors de cette journée, vous allez apprendre plusieurs `protocoles de communication` et élaborer des projets autour de ses protocoles que l'on retrouve partout dans notre quotidien !  
Et le plus important vous allez avoir une brève approche à l'`IOT` (Internet Of Things)

- Inter System Communication Protocols
  - USB  (Universal Serial Bus)
  - UART (Universal Asynchronous Receiver/Transmitter)
- Intra System Communication Protocols
  - I2C
  - SPI (Serial Peripheral Interface)
  - CAN (Controller Area Network)
- IR (InfraRed)
- Bluetooth 5 and BLE (Bluetooth Low Energy)
- MQTT (MosQuito Telemetry Transport)
- Wifi (Wireless Fidelity)

## 0 - Setup

## 1 - USB
### Graph Météo :sunny:

## 2 - MQTT
### IFTT turn on LED with your vocal assistant ! :speaking_head:

## 3 - Bluetooth
### Chating :selfie:

## 4 - Wifi
### 4.1 - Color Picker :syringe:

Créer  otre premier `web server` sur ESP32 permettant de contrôler la couleur d'une LED RGB

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* ESP32 - Breadboard - Jumpers
* LED RGB
* 3x Résistances

</details>

#### 4.1.1 Piloter la LED
Pour débuter notre programme, commencez par piloter votre LED RGB grâce à l'ESP32.  
Pour cela vous allez devoir écrire dans le `Serial Monitor` la couleur souhaité sous cette forme: `r255g00b00&`. Vous comprendrez par la suite.

> r pour red, g pour green, b pour blue  
> Soit le nombre après chaque lettre compris entre 0 et 255 (un byte)

Créer la fonction dont le header est ci-dessous:
```arduino
void change_led_color(String header)
```

```diff
+Pour passer à la suite envoyé ses lignes+
r255g0b0& # rouge
r0g255b0& # vert
r0g0b255& # bleu
```
```diff
!~ Tips ~!
ledcSetup();
ledcAttachPin();

String.indexOf();
String.substring();
@@ ok @@
```

#### 4.1.2 Créer votre premier Access Point
Vous devrez mettre l'ESP32 en `AP`. Et print l'address IP de votre carte.  
Nommé votre réseau comme suit:
```
RGB_votrePrenom
```
Bien sûr votre code devra être dans la fonction `setup` de votre code.  

```diff
+Pour passer à la suite+
Aller dans les réglages WiFi de votre téléphone et regardé si votre Access Point y est.
```
```diff
!~ Tips ~!
WiFi.h
```
> ESP32 Useful Wi-Fi Library [Explication](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)

#### 4.1.3 Web Server sur ESP32
Maintenant il vous faudra créer un ***serveur sur le port 80*** de votre carte.  
Par la suite il faudra créer votre client, qui vous permettra d'écrire l'`htlm` sur votre serveur.  
Il faudra utiliser `color_picker.html` qui se trouve dans les `resouces/`.  
La fonction permettant de mettre le code html sur votre serveur sera construit comme suit:  
```arduino
void web_color_picker(WiFiClient client)
```
```diff
!~ Tips ~!
WiFi.h
WiFiServer();
WiFiClient();
```
> Documentation [Create A Web Server](https://electropeak.com/learn/create-a-web-server-w-esp32/)  
> Un code d'exemple vous devriez vite comprendre [ESP32 Web Server – Arduino IDE](https://randomnerdtutorials.com/esp32-web-server-arduino-ide/)  
> La documentation de [WiFi library](https://www.arduino.cc/en/Reference/WiFi)
>   
> :warning: Vous n'avez pas le droit à la lib <WebServer.h> :)

Si vous avez bien géré votre loop vous pouvez vous connecter à votre ESP32 et aller sur votre `WebBrowser de téléphone` et tapez-y l'IP de votre Carte.  
Vous devriez voir affiché:  
![](../.github/day2/example_color_picker.png)  

### 4.2 - Among Us du RFC :detective:
#### 4.2.1 Lancer l'API

Le but de cet exercise sera d'envoyer des request http à une API ce trouvant dans les `resources/`.  
Vous y retrouverez un `docker-compose.yml` il faudra donc avoir **docker** d'installé sur votre machine et d'effectuer la commande suivante:
```bash
docker-compose up -d
```

L'API tourne sur le `port 3000`. Pour avoir plus d'info sur l'API aller sur la route ***/about.json***.  

http://localhost:3000/about.json

#### 4.2.2 Trouver les imposteurs

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* ESP32 - Breadboard - Jumpers
* 2x LED (Rouge/Vert)
* 2x Résistances
* Lecteur RFID-RC522

</details>

Connectez votre PC et votre ESP32 sur le même réseau.  
Grâce au lecteur RFID et aux cartes et badges fournis le but sera de découvrir qui est l'imposteur.  
Scannez les cartes et badges, s'il s'agit d'un imposteur allumez la LED rouge sinon la LED verte.  

```diff
!~ Tips ~!
HTTPClient.h
```