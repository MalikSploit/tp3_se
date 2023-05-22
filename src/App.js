import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import the Bootstrap JavaScript
import 'popper.js';
import { Link } from 'react-scroll';


function App() {
    // Function to collapse the navbar
    const closeNav = () => {
        document.querySelector('.navbar-toggler').classList.remove('collapsed');
        document.querySelector('.navbar-collapse').classList.remove('show');
    }
    return (
        <div className="container">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand" href="#">Sommaire des Exercices du TP3</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link onClick={closeNav}
                                    className="nav-link"
                                    activeClass="active"
                                    to="Exercice1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Exercice 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeNav}
                                    className="nav-link"
                                    activeClass="active"
                                    to="Exercice2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Exercice 2</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeNav}
                                    className="nav-link"
                                    activeClass="active"
                                    to="Exercice3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Exercice 3</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeNav}
                                    className="nav-link"
                                    activeClass="active"
                                    to="Exercice4"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Exercice 4</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeNav}
                                    className="nav-link"
                                    activeClass="active"
                                    to="Exercice5"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Exercice 5</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="Exercice1" className="mt-5 pt-5">
                <h2>Exercice 1 – Descripteurs de fichier et redirections</h2>
            </div>
          <ul className="question-list">
          <li>
            <h4 className="mb-3">Question 1: Trouver la section correspondant à la redirection dans le manuel de bash, et répondez aux questions suivantes.</h4>
            <p>a) Quels opérateurs de redirection permettent d’ouvrir un fichier en lecture ? en écriture ? les deux à
              la fois ?</p>
            <p className="answer-highlight">Réponse : Les opérateurs de redirection permettant d'ouvrir un fichier en lecture
              sont <code>&lt;</code> et <code>&lt;&lt;</code>. Pour ouvrir un fichier en écriture, les opérateurs
              sont <code>&gt;</code> et <code>&gt;&gt;</code>. Pour ouvrir un fichier en lecture et écriture, on
              utilise <code>3&lt;&gt;/tmp/toto</code>.</p>
            <p>b) À quels modes d’ouverture de fichier correspondent les
              redirections <code>&lt;~/.bashrc</code>, <code>3&lt;&gt;/tmp/toto</code> et <code>>&gt;/tmp/toto.log</code> ?
              Quels fichiers sont ouverts ? Quels descripteurs de fichier sont associés ?</p>
            <p className="answer-highlight">Réponse : La redirection <code>&lt;~/.bashrc</code> ouvre le fichier <code>~/.bashrc</code> en mode lecture avec
              le descripteur de fichier 0 (entrée standard). La redirection <code>3&lt;&gt;/tmp/toto</code> ouvre le
              fichier <code>/tmp/toto</code> en lecture et écriture avec le descripteur de fichier 3. La
              redirection <code>>&gt;/tmp/toto.log</code> ouvre le fichier <code>/tmp/toto.log</code> en mode écriture,
              en ajoutant les nouvelles données à la fin du fichier, avec le descripteur de fichier 1 (sortie standard).
            </p>
            <p>c) À quelles actions correspondent <code>2&gt;&amp;1</code>, <code>3&gt;&amp;-</code> ?</p>
            <p className="answer-highlight">Réponse : L'action <code>2&gt;&amp;1</code> redirige la sortie d'erreur vers la sortie standard.
              Ensuite, <code>3&gt;&amp;-</code> ferme le descripteur de fichier 3.</p>
            <p>d) Que permet la clause de redirection <code>3&gt;&amp;1 1&gt;&amp;2 2&gt;&amp;3 3&gt;&amp;-</code> ?</p>
            <p className="answer-highlight">Réponse : La clause de redirection <code>3&gt;&amp;1 1&gt;&amp;2 2&gt;&amp;3 3&gt;&amp;-</code> permet
              d'échanger la sortie standard et la sortie d'erreur. Ensuite, elle ferme le descripteur de fichier 3 pour
              éviter les fuites.</p>
            <br/>
            <h4 className="mb-3">Question 2: Que fait le script suivant ? En particulier, donnez ce qui est affiché sur la
              sortie standard et sur l’erreur standard.</h4>
            <pre><code>{`#!/usr/bin/bash
    echo "sortie de $USER" >&1
    echo "erreur de $USER" >&2
    echo "écriture de $USER" >> /tmp/fichier
    cat </tmp/fichier >&2`}</code></pre>
            <p className="answer-highlight">Réponse : Le script donnes trois messages. Le premier sortie de $USER est affiché sur la sortie standard, le second erreur de $USER est affiché sur la sortie d'erreur, et le troisième écriture de $USER est écrit dans le fichier /tmp/fichier. Ensuite, le contenu du fichier /tmp/fichier est affiché sur la sortie d'erreur.</p>
            <br/>
            <h4 className="mb-3">Question 3: Créez un tube qui envoie la sortie standard de ce script sur l’entrée standard de la commande grep à laquelle vous passerez l’argument "$USER".
              Que fait grep "$USER" ? Précisez-en l’entrée, la sortie et l’erreur standard.</h4>
            <p className="answer-highlight">Réponse : Commande pour créer un tube qui envoie la sortie standard du script sur l'entrée standard : ./script.sh | grep "$USER"
              grep "$USER" recherche le nom de l'utilisateur courant dans son entrée standard et écrit les lignes correspondantes sur sa sortie standard. Son erreur standard serait normalement inutilisée sauf si une erreur se produit.</p>
            <br/>
            <h4 className="mb-3">Question 4: Modifiez la ligne de commande de la question précédente, en ajoutant des
              redirections avant le tube (|), afin que l’erreur standard du script soit
              envoyée à grep, et non sa sortie standard.</h4>
            <p className="answer-highlight">Réponse : Pour rediriger l'erreur standard du script vers grep plutôt que la sortie standard, on fait : ./script.sh 2>&1 >/dev/null | grep "$USER"</p>
            <br/>
            <h4 className="mb-3">Question 5: Pour chacun des cas donnés ci-dessous, remplacez le bloc (redirections)
              de la commande suivante, afin que la sortie contienne 1 la ou les lignes attendues données (faites attention aux permissions) :</h4>
            <p className="answer-highlight">Réponse : <pre><code>{`a) ls -l --time-style=+ /proc/self/fd/ 0</tmp/toto
    b) ln -s /proc/self/fd/ /tmp/toto
    c) ls -l --time-style=+ /proc/self/fd/ 2>/tmp/toto
    d) ls -l --time-style=+ /proc/self/fd/ 0</tmp/toto 2>/tmp/toto 3<>/tmp/toto 4</tmp/tata 5>/tmp/toto`}</code></pre></p>
          </li>
        </ul>
        <div id="Exercice2" className="mt-5 pt-5">
            <h2 className="mb-4">Exercice 2 – Producteur – Consommateur</h2>
        </div>
        <ul className="question-list">
          <li>
            <h4 className="mb-3">Question 1: Écrire un script prodcons.sh qui lance 4 producteurs (i.e., 4 processus
              exécutant producteur.sh) et 8 consommateurs (i.e., 8 processus exécutant
              consommateur.sh) en arrière plan, puis attend que tout le monde termine
              son travail. Les tâches produites par les producteurs doivent toutes être
              écrite dans un même fichier tube, qui sera lu par tous les consommateurs.
              Ainsi, chaque tâche produite sera traité par un consommateur. Le fichier
              tube peut être créé préalablement via la commande mkfifo (tube nommé).
              La commande seq peut également s’avérer utile.
            </h4>
            <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/prodcons.sh" download>prodcons.sh</a> </p>
              <br/>
            <h4 className="mb-3">Question 2: Modifiez votre script pour que tous les messages (pas les tâches envoyées
              dans le tube) soient affichés sur la sortie standard du script.
            </h4>
            <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/prodcons2.sh" download>prodcons2.sh</a></p>
              <br/>
            <h4 className="mb-3">Question 3: Modifiez votre script afin que le nombre de producteurs à lancer soit
              donné en premier argument, et celui de consommateurs à lancer soit
              donné en second argument.
            </h4>
            <p className="answer-highlight">Réponse : Done, même script qu'avant.</p>
              <br/>
            <h4 className="mb-3">Question 4: Modifiez votre script pour qu’il accepte zéro, un ou deux arguments.
              Avec deux arguments, il devra fonctionner comme à la question précédente. Avec un argument (de valeur n), il devra lancer 1 producteur et n
              consommateurs. Avec zéro argument, il devra lancer 4 producteurs et 8
              consommateurs (comme à la ??). Avec un nombre différent d’arguments,
              il devra produire un message d’erreur et terminer immédiatement avec le
              code d’erreur 1.
            </h4>
            <p className="answer-highlight">Réponse : Done, même script qu'avant.</p>
          </li>
        </ul>
        <div id="Exercice3" className="mt-5 pt-5">
            <h2 className="mb-4">Exercice 3 – Lecteurs – Écrivains</h2>
        </div>
        <ul className="question-list">
            <li>
                <h4 className="mb-3">Question 1: Écrire un script ecrivain.sh qui modifie un fichier en déplaçant sa première ligne en fin de fichier. Le chemin vers le fichier sera donné en unique
                    argument du script. Pour réaliser cela, vous pourrez, par exemple, utiliser un fichier temporaire
                    (c.f. mktemp).
                </h4>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ecrivain.sh" download>ecrivain.sh</a></p>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/lecteur.sh" download>lecteur.sh</a></p>
                <br/>
                <h4 className="mb-3">Question 2: Les deux scripts ecrivain.sh et lecteur.sh peuvent-ils être en concurrence ? Y-a-t-il une ressource critique ? Si oui, réalisez un scénario montrant
                    un résultat incohérent (pour cela, vous pouvez tricher, en ralentissant
                    l’exécution des opérations dans les deux scripts – insérez des sleep .25
                    adéquates, par exemple).
                </h4>
                <p className="answer-highlight">Réponse : Oui, les scripts ecrivain.sh et lecteur.sh peuvent entrer en concurrence s'ils sont exécutés simultanément sur le même fichier. La ressource critique dans ce cas est le fichier sur lequel les deux scripts opèrent. Si ecrivain.sh commence à modifier le fichier alors que lecteur.sh lit le fichier, cela peut entraîner un comportement inattendu. Par exemple, lecteur.sh pourrait lire une version partielle ou inconsistante du fichier.</p>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ecrivain2.sh" download>ecrivain2.sh</a></p>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/lecteur2.sh" download>lecteur2.sh</a></p>
                <br/>
                <h4 className="mb-3">Question 3: Écrire un script lecteur-ecrivain.sh qui lance, en arrière plan, e écrivains et l lecteurs, tous appelés sur un même fichier f où e, l et f sont
                    respectivement donnés en premier, deuxième et troisième argument du
                    script. Une fois lancé, le script attendra que tous (lecteurs et écrivains)
                    finissent. Testez. Constatez-vous des résultats incohérents ?
                </h4>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/lecteur-ecrivain.sh" download>lecteur-ecrivain.sh</a></p>
                <br/>
                <h4 className="mb-3">Question 4: Rétablissez la cohérence à coup sûr, en utilisant l’outil de verrouillage
                    à double phase (c.f. cours) flock (c.f. man flock aussi). Avec quelle
                    option doit-il être appelé dans lecteur.sh ? Dans ecrivain.sh ?
                </h4>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/lecteur3.sh" download>lecteur3.sh</a></p>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ecrivain3.sh" download>ecrivain3.sh</a></p>
                <br/>
                <h4 className="mb-3">Question 5: À l’aide de la commande sleep .$RANDOM, qui force une pause d’une
                    durée aléatoire inférieure à 1 seconde, différez aléatoirement le lancement
                    des processus lecteurs et écrivains dans lecteur-ecrivain.sh. Identifiez
                    également chacun par un numéro, et faites-en sorte qu’il affiche des
                    messages concernant les opérations qu’ils réalisent sur l’erreur standard.
                </h4>
                <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/lecteur-ecrivain2.sh" download>lecteur-ecrivain2.sh</a></p>
                <p className="answer-highlight">Réponse : Doit etre utilisé avec lecteur.sh et ecrivain.sh</p>
            </li>
        </ul>
            <div id="Exercice4" className="mt-5 pt-5">
                <h2 className="mb-4">Exercice 4 – Signaux</h2>
            </div>
            <ul className="question-list">
                <li>
                    <h4 className="mb-3">Question 1: Écrire un script ilestquelleheure.sh qui affiche l’heure (à la seconde
                        près) toutes les 5 secondes (dans une boucle infinie), après avoir affiché
                        son pid.
                    </h4>
                    <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ilestquelleheure.sh" download>ilestquelleheure.sh</a></p>
                    <br/>
                    <h4 className="mb-3">Question 2: Exécutez le script et envoyez-lui le signal SIGUSR1. Que se passe-t-il ? Tuez
                        le processus s’il est encore en vie.
                    </h4>
                    <p className="answer-highlight">Réponse : Si on envoit le signal SIGUSR1, il ne ce passe rien et c'est logique vu qu'on ne le traite pas. Pour tuer le processus on pourra faire kill [PID du processus] ou plus fort kill -SIGKILL [PID du processus]</p>
                    <br/>
                    <h4 className="mb-3">Question 3: En utilisant la commande trap, modifiez votre script pour qu’à la réception
                        du signal SIGUSR1, il affiche l’heure (à la seconde près) dans un message
                        de la forme : "Vous demandez l'heure ? La voici : 09:45:38". Le script
                        devra ensuite se remettre en attente. Testez. L’effet est-il immédiat ?
                    </h4>
                    <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ilestquelleheure2.sh" download>ilestquelleheure2.sh</a></p>
                    <p className="answer-highlight">Réponse : L'effet de l'action définie par trap sera immédiat lors de la reception du signal SIGUSR1 cependant si le script est en train de dormir avec la commande sleep, il ne réagira pas immédiatement, mais seulement apres avoir termine le delai de sommeil en cours. On peut le tester on faisant : kill -SIGUSR1 [PID du processus]</p>
                    <br/>
                    <h4 className="mb-3">Question 4: La commande sleep masque les signaux tant qu’elle s’exécute, d’où un
                        certain délai (d’au plus 5 secondes) qui rend l’envoi du signal tout à fait
                        inintéressant. Fort heureusement, la commande wait, elle, ne masque pas
                        les signaux. Modifiez votre script, afin que l’effet de SIGUSR1 soit immédiat.
                    </h4>
                    <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ilestquelleheure4.sh" download>ilestquelleheure4.sh</a></p>
                    <p className="answer-highlight">Réponse : En utilisant read -t 0, nous permettons à read de vérifier régulièrement s'il y a un signal à traiter sans délai supplémentaire, ce qui garantit une réponse immédiate à la réception de SIGUSR1. DOnc si on envoit le signal SIGUSR1 avec kill -SIGUSR1 [PID du processus], il affichera immédiatement un message avec l'heure actuelle.</p>
                    <br/>
                    <h4 className="mb-3">Question 5: Interceptez le signal SIGUSR2 afin que le processus redonne son pid avant
                        de continuer (en reprenant le délai à 0). . .
                    </h4>
                    <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ilestquelleheure4.sh" download>ilestquelleheure4.sh</a></p>
                    <p className="answer-highlight">Réponse : Maintenant, lorsque nous envoyons le signal SIGUSR2 au script, il affichera immédiatement son PID avant de continuer l'exécution avec le délai à zéro.</p>
                    <h4 className="mb-3">Question 6: Interceptez le signal SIGQUIT (qui peut être envoyé au processus de premier
                        plan via la combinaison ctrl+\) afin qu’un message indique à quelle heure
                        le processus a terminé, avant de terminer.
                    </h4>
                    <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/ilestquelleheure5.sh" download>ilestquelleheure5.sh</a></p>
                    <p className="answer-highlight">Réponse : Maintenant, lorsque nous envoyons le signal SIGQUIT au script (en utilisant la combinaison Ctrl+), il affichera immédiatement un message indiquant l'heure à laquelle le processus a terminé avant de se terminer lui-même.</p>
                </li>
            </ul>
        <div id="Exercice5" className="mt-5 pt-5">
            <h2 className="mb-4">Exercice 5 – Interpreteur de commande et capture de signaux</h2>
        </div>
          <ul className="question-list">
              <li>
                  <h4 className="mb-3">Question 1: Écrivez un script bash interpreter.sh qui est un interpréteur de commande basique. Testez. Comment pouvez-vous quitter l’interpréteur ?
                  </h4>
                  <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/interpreter.sh" download>interpreter.sh</a></p>
                  <p className="answer-highlight">Réponse :
                      <ol>
                          <li>
                              <p>Il lit une ligne apres ></p>
                          </li>
                          <li>
                              <p>Il quitte s'il rencontre exit</p>
                          </li>
                          <li>
                              <p>Il évalue la commande dans un sous-shell en arriere-plan</p>
                          </li>
                          <li>
                              <p>Enfin, la commande wait est utilisée pour attendre le retour du processus fils avant de continuer a la prochaine iteration de la boucle</p>
                          </li>
                      </ol>

                  </p>
                  <br/>
                  <h4 className="mb-3">Question 2: Modifiez l’interpréteur pour qu’après l’exécution d’une commande, la
                      variable $status contienne le code de retour de cette commande. Testez.
                  </h4>
                  <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/interpreter2.sh" download>interpreter2.sh</a></p>
                  <br/>
                  <h4 className="mb-3">Question 3: La commande trap permet de définir le comportement à adopter à
                      la réception d’un signal donné. À l’aide de cette commande, faites en
                      sorte que le signal SIGINT (code 2) soit ignoré par notre interpréteur.
                      Ainsi, lorsqu’une commande (e.g., sleep 180) est évaluée à l’intérieur de
                      notre interpréteur, l’envoie du signal SIGINT (via Ctrl + c ) tuera cette
                      commande couramment interprétée mais pas notre interpréteur
                  </h4>
                  <p className="answer-highlight">Réponse : Voir script <a href="https://raw.githubusercontent.com/MalikSploit/tp3_se/main/src/Scripts/interpreter3.sh" download>interpreter3.sh</a></p>
                  <p className="answer-highlight">Réponse : Avec cette modification, le signal SIGINT (envoyé via Ctrl+C) sera ignoré par l'interpréteur. Lorsque nous exécutons une commande comme sleep 180 dans l'interpréteur et appuyons sur Ctrl+C pendant son exécution, la commande sera interrompue comme d'habitude, mais l'interpréteur continuera à s'exécuter normalement sans être affecté par le signal SIGINT.</p>
              </li>
          </ul>
          <br/>
          <footer className="footer bg-light text-center">
              <div className="container">
                  <p className="text-muted">&copy; {new Date().getFullYear()} Malik Makkes.</p>
              </div>
          </footer>
      </div>
  );
}

export default App;
