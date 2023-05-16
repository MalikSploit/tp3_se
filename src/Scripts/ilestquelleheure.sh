#!/bin/bash

# Affiche le PID du script
echo "PID du script : $$"

# Boucle infinie
while true; do
  # Affiche l'heure actuelle à la seconde près
  date '+%H:%M:%S'
  
  # Attend 5 secondes
  sleep 5
done
