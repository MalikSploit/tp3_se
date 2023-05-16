#!/usr/bin/bash

num_ecrivains="$1"
num_lecteurs="$2"
file="$3"

for i in $(seq 1 "$num_ecrivains"); do
    (
        sleep .$RANDOM
        echo "[Écrivain $i] Demande un verrou exclusif." >&2
        flock -x 200
        echo "[Écrivain $i] Verrou exclusif obtenu." >&2
        ./ecrivain.sh "$file"
        echo "[Écrivain $i] Libération du verrou exclusif." >&2
    ) 200<"$file" &
done

for i in $(seq 1 "$num_lecteurs"); do
    (
        sleep .$RANDOM
        echo "[Lecteur $i] Demande un verrou partagé." >&2
        flock -s 200
        echo "[Lecteur $i] Verrou partagé obtenu." >&2
        ./lecteur.sh "$file"
        echo "[Lecteur $i] Libération du verrou partagé." >&2
    ) 200<"$file" &
done

# Attend que tous les processus d'arrière-plan se terminent
wait
