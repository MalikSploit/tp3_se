#!/bin/bash

# Lire la première ligne du fichier
head -1 "$1"

# Ajoute un délai
sleep .25

# En cours
echo "..."

# Lire la dernière ligne du fichier
tail -1 "$1"
