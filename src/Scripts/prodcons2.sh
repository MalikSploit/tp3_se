#!/bin/bash

# Nombre de producteurs et de consommateurs par défaut
n_producers=4
n_consumers=8

# Vérifie le nombre d'arguments et met à jour les valeurs par défaut si nécessaire
if [[ $# -eq 2 ]]; then
    n_producers=$1
    n_consumers=$2
elif [[ $# -eq 1 ]]; then
    n_producers=1
    n_consumers=$1
elif [[ $# -ne 0 ]]; then
    echo "Usage: $0 [producteurs [consommateurs]]"
    exit 1
fi

# Crée le fichier tube s'il n'existe pas déjà
tube=/tmp/tube$$
mkfifo $tube

# Crée un fichier temporaire pour collecter les messages
logfile=/tmp/logfile$$

# Lance les producteurs
for i in $(seq 1 $n_producers); do
    ./producteur.sh > $tube 2>> $logfile &
done

# Lance les consommateurs
for i in $(seq 1 $n_consumers); do
    ./consommateur.sh < $tube 2>> $logfile &
done

# Attend que tous les processus en arrière-plan se terminent
wait

# Affiche le contenu du fichier log
cat $logfile

# Supprime le fichier tube et le fichier log
rm $tube
rm $logfile
