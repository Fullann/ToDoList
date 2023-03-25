# TodoList

## Introduction
Ce projet a été réaliser dans le cadre de mon organisation personnel😅. Grace a ce projet je ne perd pas le file des me tache et obligation dans ma vie personnel. Grace a cette todolist on peut créer plusieur tableau,plusieurs tâche ainsi que le customiser complétement.

## Instalation
Il vous suffit de cloner le répertoire
```
git clone https://github.com/Fullann/TodoList.git
 ```
Installer les dépendances (Ce projet n'a pas été maintenu à jour donc possibilité de crash avec les nouvelle version de NodeJS) 
```
yarn install 
```
Configurer votre base de donnée firebase
```
// Copier le .env.example
cp .env.example .env
```
Introduire les donnée de connexion mise sur [firebase](https://firebase.google.com/).(N'oublier pas d'activer l'autentification et les types de connexion que vous souhaiter. Sur le projet seulment en anonyme et google son mis).<br>
Puis start le projet
```
yarn start
```
Et enjoy ;)

### Ajouter des mode de connexion
Dans le fichier /app/routes/signIn/Controller.js ajouter ce si pour chaque nouveau mode de connexion (Ici github)
```
 signInWithGitHub(e) {
        e.preventDefault();
        let provider = new firebase.auth.GithubAuthProvider();
        this.signInWithProvider(provider);
    }
```
et dans le fichier /app/routes/signIn/index.js ajouter le bouton comme ce si
```
 <LinkButton mod="login-primary" href="#" onClick="signInWithGitHub">
    SignIn with Github
</LinkButton>
```
Avec le nom de la méthode mise si dessus
