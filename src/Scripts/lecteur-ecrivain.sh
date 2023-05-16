#!/bin/bash

# Vérifiez que les arguments corrects ont été fournis
if [ $# -ne 3 ]; then
    echo "Usage: $0 num_ecrivains num_lecteurs fichier"
    exit 1
fi

num_writers=$1
num_readers=$2
filename=$3

# Lancez les écrivains en arrière-plan
for (( i=0; i<$num_writers; i++ )); do
    ./ecrivain.sh "$filename" &
done

# Lancez les lecteurs en arrière-plan
for (( i=0; i<$num_readers; i++ )); do
    ./lecteur.sh "$filename" &
done

# Attendez que tous les processus en arrière-plan se terminent
wait

echo "Tous les écrivains et lecteurs ont terminé."
