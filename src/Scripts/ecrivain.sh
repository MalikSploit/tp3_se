#!/bin/bash

# Vérifie que le fichier a été fourni en argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 fichier"
    exit 1
fi

# Vérifie que le fichier existe
if [ ! -f $1 ]; then
    echo "Fichier introuvable!"
    exit 1
fi

# Crée un fichier temporaire
tempfile=$(mktemp)

# Écrit tout sauf la première ligne dans le fichier temporaire
tail -n +2 "$1" > "$tempfile"

# Ajoute la première ligne à la fin du fichier temporaire
head -n 1 "$1" >> "$tempfile"

# Remplace le fichier original par le fichier temporaire
mv "$tempfile" "$1"
