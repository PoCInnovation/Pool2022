# Setup

  - [Install](#install)
    - [Arduino IDE](#arduino-ide)
      - [Install ESP32 for Arduino IDE](#install-esp32-for-arduino-ide)
      - [Install libraries on Arduino IDE](#install-libraries-on-arduino-ide)
    - [PlatformIO](#platformio)
  - [To be able to communicate with the board](#to-be-able-to-communicate-with-the-board)
    - [On Fedora, Ubuntu and most Distros](#on-fedora-ubuntu-and-most-distros)
    - [On Archlinux and Arch-Based Distros (Manjaro, EndeavourOs, etc...)](#on-archlinux-and-arch-based-distros-manjaro-endeavouros-etc)
  - [Install Fusion360](#install-fusion360)
  - [Install Cura](#install-cura)
  
## Install

You have multiple softwares to write code and push code to your board.
We recommend using either [Arduino IDE](#arduino-ide) or [PlatformIO](#platformio)

### Arduino IDE

```shell
# Download Arduino IDE
cd ~/Dowloads/
wget https://downloads.arduino.cc/arduino-1.8.16-linux64.tar.xz

# Extract the archive and add the binaries to /usr/local/bin/arduino
tar -xvf arduino-1.8.16-linux64.tar.xz && cd arduino-1.8.16/
sudo ./install.sh
```

#### Install ESP32 for Arduino IDE

- [installing-the-esp32-board-in-arduino-ide](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

#### Install libraries on Arduino IDE

- [Installing Additional Arduino Libraries](https://www.arduino.cc/en/guide/libraries#)

### PlatformIO

- [Install PlatformIO](https://platformio.org/install/ide?install=vscode)

## To be able to communicate with the board

You will need to add your user to a group in order to have the rights to communicate with the device (ESP32 or Arduino Uno).
After adding yourself to the group, you need to reboot.

### On Fedora, Ubuntu and most Distros

```shell
sudo usermod -aG dialout $(whoami)
```

### On Archlinux and Arch-Based Distros (Manjaro, EndeavourOs, etc...)

```shell
sudo usermod -aG uucp $(whoami)
```

## [Install Fusion360](https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual)

## [Install Cura](https://ultimaker.com/software/ultimaker-cura)