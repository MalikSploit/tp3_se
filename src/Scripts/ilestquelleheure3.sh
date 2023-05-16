#!/bin/bash

# Affiche le PID du script
echo "PID du script : $$"

# Définit l'action à effectuer lors de la réception de SIGUSR1
trap 'echo "Vous demandez l heure ? La voici : $(date "+%H:%M:%S")"' SIGUSR1

# Boucle infinie
while true; do
  # Affiche l'heure actuelle à la seconde près
  date '+%H:%M:%S'
  
  # Attend l'entrée de l'utilisateur avec un délai nul
  read -t 0

  # Sort de la boucle si une entrée a été détectée
  if [ $? = 0 ]; then
    break
  fi

  # Attend 5 secondes
  sleep 5
done
