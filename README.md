# Brest bar

Petit projet réalisé dans le cadre d’une offre d’emploi. 

## Outils utilisées

- Next JS
- Redux Toolkit
- Mapbox
- Tailwind CSS
- TypeScript
    > Etant donné que la librairie React-Mapbox-GL ne propose pas nativement le support de TS, les composants de la Map (Map, cluster, Marker) ont été volontairement laissés tel que présentés dans la documentation.

    > En outre, le package n'étant pas mis a jour depuis plus de 3 ans, il y a de nombreux warnings. Il aurait été judicieux de se pencher sur la librairie open-source **Leaflet JS** qui est maintenue et dispose d'un package pour les types.

## Les evolutions à venir très prochainement

- Gestion des erreurs
- Amélioration du design et du responsive + refacto & cleanup
- Hebergement sur un autre nom de domaine
- ~~Support de TypeScript~~
- ~~Ajout des filtres et des horaires en toggle avec highlight du current day~~
- ~~Load de quelques résultats puis chargement des suivant sur interraction utilisateur~~
- ~~Optimisation du rendu du cluster, tailles, couleur et surtout reload (Pas résolut sur le zoom uniquement car valeur dans le composant)~~
- ~~Ajout du zoom sur le bar au click + popup des informations~~