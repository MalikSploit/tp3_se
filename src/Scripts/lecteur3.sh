#!/bin/bash

(
    # Attend un verrou partagé sur le fichier
    flock -s 200

    # Lit le fichier
    head -1 "$1"
    echo "..."
    tail -1 "$1"
) 200<"$1"
