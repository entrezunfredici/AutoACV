# AutoACV

## API Auto ACV

### Installs :

Premièrement installer node.js sur votre ordinateur :

https://nodejs.org/en/download/prebuilt-installer

- Ouvrez un terminal et naviguez à l'aide de 'cd' par exemple
- Rendez-vous dans le dossier du projet 'AutoACV'
- Puis dans le dossier 'api-auto-acv'
- Entrez la commande suivante :
```bash
npm update
```
Ceci devrait vous installer toutes les dépendances du projet.

### Connexion à la base de donnée

Veillez à ce que votre base de donée soit bien connecté à votre api.
- Ouvrir le fichier de configuration de base de donnée présent ici :
Exemple : \path\to\your\project\AutoACV\api-auto-acv\db.config.js
- Modifier les informations pour qu'elles correspondent à votre configuration de base de donnée mySQL.

### Ajoutez des données à votre base de donnée 
Des jeux de données sont déjà fournis dans le dossier :

/AutoACV/tests/bddData
### Lancer l'API 
- Ouvrez un invité de commande

- Rendez-vous au même endroit que pour les installations :

Exemple : /path/to/your/project/AutoACV/api-auto-acv

- Entrez la commande : 

```bash
npm start
```
### Voir les routes
Pour voir les routes accedez au site :

https://editor.swagger.io/
- Copiez/Collez le contenue du fichier openApi.yml dans le dossier :
/path/to/your/project/AutoACV/api-auto-acv/openApi.yml
- Collez-le dans l'éditeur du site et explorez les routes.
### Tester les routes
Pour tester les routes vous aurez besoin de postman :

https://www.postman.com/downloads/

- Dans postman importez une collection via le fichier .json présent dans le dossier :
/path/to/your/project/AutoACV/tests/AutoACV.postman_collection.json
- Parcourez la collection et testez vos routes.

our team:

    → Gardais Theo

    → Macabiau Frederic
