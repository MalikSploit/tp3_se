#!/usr/bin/bash

while read task
do
	delay="$(( $RANDOM % 4 )).$RANDOM"
	echo "[C$BASHPID] Je traite la tâche $task, ça me prendra $delay secondes environ."
	sleep $delay
	echo "[C$BASHPID] J'ai fini de traiter $task, y-a-t-il d'autres tâches à traiter?"
done
echo "[C$BASHPID] J'ai fini mon travail (plus de tâches)."
