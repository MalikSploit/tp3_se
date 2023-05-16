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
  output=$(eval "$command" 2>&1)

  # Stocker le code de retour dans la variable $status
  status=$?

  # Afficher le code de retour de la commande
  echo "Code de retour : $status"

  # Afficher la sortie de la commande
  echo "Sortie :"
  echo "$output"
done
