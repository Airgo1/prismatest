# Test de recrutement

## Context et objectifs

Nous maintenons une solution de monétisation qui est principalement écrite en JavaScript et s'exécute dans le navigateur de nos utilisateurs.
De ce fait il nous est nécessaire d'interagir avec différentes informations provenant du navigateur, tel que l'URL, et d'agir en conséquence, 
par exemple pour filtrer des configurations complexes mises à disposition au format JSON.

## Énoncée 

En utilisant le jeu de données fournies, vous créerez un module JavaScript qui affichera les datas sous forme de tableau HTML.
Le tableau devra avoir au moins 7 colonnes dont : Nom, Prénom, Âge, Couleur des yeux et email.
Le tableau devra pouvoir être filtré grâce à des paramètre en query `?` dans l'URL.

Le candidat est libre de nommer les paramètres à sa convenance.

Le module devra être fonctionnel sur un serveur local aussi bien que sur un hébergement distant (FTP).

L'entrée `eyeColor` devra être filtrable suivant l'une des valeurs suivantes : `blue`, `brown`, `green`
L'entrée `age` devra être filtrable par tranche de 5 ans : de 20 à 25 ans, de 26 à 30 ans, de 31 à 35 ans et enfin de 36 à 41 ans

## Question

Il y a un problemes avec les tranches d'age indiqué. Elles ne sont pas unifore. Afin de faire le test sans avoir de blocage, j'ai donc mis des tranches d'age libre compris entre 20 et 25.. 

### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

### Test

```sh
npm test
```

### use application

Vous pouvez filter les données de la table d'utilisateurs avec les paremetres suivant : age ou colorEyes.
exemple : 
http://localhost:3000/?eyeColor=blue
http://localhost:3000/?eyeColor=green
http://localhost:3000/?eyeColor=brown
http://localhost:3000/?age=20-25
http://localhost:3000/?age=25-30
http://localhost:3000/?age=30-35
http://localhost:3000/?eyeColor=blue&age=25-30


### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

