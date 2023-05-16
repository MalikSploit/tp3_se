#!/bin/bash

# Boucle infinie
while true; do
  # Lire une ligne de l'entrée standard
  read -p "> " command

  # Quitter l'interpréteur si la commande est "exit"
  if [ "$command" = "exit" ]; then
    break
  fi

  # Évaluer la ligne lue dans un sous-shell en arrière-plan
  (
    eval "$command"
  ) &

  # Attendre le retour du processus fils
  wait
done