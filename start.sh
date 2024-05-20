#!/bin/bash

GREEN='\033[0;32m'
VITTCYAN='\033[1;36m'
NOCOLOR='\033[0m'
RED='\033[0;31m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTRED='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

loading_animation() {
  echo  "${LIGHTGREEN}[ALTO-CONEXÃO] - AGUARDE UM POUCO."
  sleep 0.5
  clear
  echo  "${RED}[ ! ]  Loading 𝗗𝗶𝗲 𝗖𝗿𝗮𝘀𝗵 ."
  sleep 0.5
  echo  "${RED}[ ! ] [𝗗𝗶𝗲] CONNECTING [ ! ]\n"
  sleep 0.5
}

loading_animation

# Run node
node trix.js

# Simulate loading progress (modify the duration or add more steps if needed)
for i in {5..5}
do
  loading_animation
done

# Add any other post-loading actions here if necessary
