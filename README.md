This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Quarrel

Une **mini-application de chat en temps réel**, avec un login via **Google** et la possibilité de créer des nouveaux channels de discussion.

(3ème projet d'alternance à **[La Capsule](https://www.lacapsule.academy/)**)

## Auteur(s)

- [@Mar-Nb](https://www.github.com/Mar-Nb)

## Technologies utilisées

- Next.js
- React Context
- React Hooks
- Tailwind CSS
- Firebase / Firestore

## Fonctionnalités

- Identification via un compte Google (_Firebase Authenticator_)
- Chat en temps réel (_Firestore Database_)
- Création de nouveaux channels
- Stockage des données de l'utilisateur dans le contexte de l'app

## Ce que j'ai appris

Durant ce projet, le but était de mettre à profit les outils proposés par Firebase pour construire une application avec un moyen d'authentification et des échanges en temps réel.

J'ai ainsi pu voir le côté pratique de l'utilisation d'un contexte (plus léger qu'un **Redux**), et l'intérêt que peut avoir un _custom hook_ (notamment pour récupérer les informations du contexte).

J'ai également pu, au travers de ce projet, continuer de me familiariser avec l'**App Router** de Next.js, qui diffère relativement de l'ancienne méthode de routing de ce framework.
