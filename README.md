# TS Contact Manager

Conception d'un gestionnaire de contact en TypeScript

## tsconfig.json

```sh
# Génère tsconfig.json
npx tsc --init
```

## Configuration : tsconfig.json

```diff
- Le code qui suis est entièrement traduit grâce à chatGPT
```

```json
{
    "include": ["./src"], // Spécifie les fichiers TypeScript à compiler (dans le dossier "src" ici)

    "compilerOptions": {
        /* Projects */
        "incremental": true, // Permet une compilation incrémentielle des projets en sauvegardant les fichiers .tsbuildinfo
        "composite": true, // Active les contraintes permettant l'utilisation de références de projet TypeScript
        "tsBuildInfoFile": "./.tsbuildinfo", // Spécifie le chemin vers le fichier de compilation incrémentielle .tsbuildinfo
        "disableSourceOfProjectReferenceRedirect": true, // Désactive la préférence des fichiers source par rapport aux fichiers de déclaration lors de la référence à des projets composites
        "disableSolutionSearching": true, // Désactive la vérification multi-projets lors de l'édition d'un projet
        "disableReferencedProjectLoad": true, // Réduit le nombre de projets chargés automatiquement par TypeScript

        /* Language and Environment */
        "target": "ESNext", // Définit la version du langage JavaScript et inclut les déclarations de bibliothèques compatibles
        "lib": [], // Spécifie un ensemble de fichiers de déclaration de bibliothèque regroupés décrivant l'environnement d'exécution cible
        "jsx": "preserve", // Spécifie le type de code JSX généré
        "experimentalDecorators": true, // Active le support expérimental pour les anciens décorateurs expérimentaux
        "emitDecoratorMetadata": true, // Génère des métadonnées de type de design pour les déclarations décorées dans les fichiers source
        "jsxFactory": "", // Spécifie la fonction factory JSX utilisée lors de la génération de JSX React (par ex. 'React.createElement' ou 'h')
        "jsxFragmentFactory": "", // Spécifie la référence de fragment JSX utilisée pour les fragments lors de la génération de JSX React (par ex. 'React.Fragment' ou 'Fragment')
        "jsxImportSource": "", // Spécifie le module d'importation utilisé pour les fonctions factory JSX avec 'jsx: react-jsx*'
        "reactNamespace": "", // Spécifie l'objet invoqué pour 'createElement'. Cela s'applique uniquement lors de la génération de JSX 'react'
        "noLib": true, // Désactive l'inclusion de tous les fichiers de bibliothèque, y compris lib.d.ts par défaut
        "useDefineForClassFields": true, // Émet des champs de classe conformes à la norme ECMAScript

        /* Modules */
        "module": "commonjs", // Spécifie le type de code de module généré
        "rootDir": "./", // Spécifie le dossier racine de vos fichiers source
        "moduleResolution": "node10", // Spécifie la façon dont TypeScript recherche un fichier à partir d'un spécificateur de module donné
        "baseUrl": "./", // Spécifie le répertoire de base pour résoudre les noms de modules non relatifs
        "paths": {}, // Spécifie un ensemble de correspondances entre les imports et les emplacements supplémentaires de recherche
        "rootDirs": [], // Permet de traiter plusieurs dossiers comme un seul lors de la résolution des modules
        "typeRoots": [], // Spécifie plusieurs dossiers qui fonctionnent comme './node_modules/@types'
        "types": [], // Spécifie les noms de packages de types à inclure sans être référencés dans un fichier source
        "allowUmdGlobalAccess": true, // Autorise l'accès aux globaux UMD à partir des modules
        "moduleSuffixes": [], // Liste des suffixes de noms de fichiers à rechercher lors de la résolution d'un module
        "allowImportingTsExtensions": true, // Autorise les imports à inclure les extensions de fichiers TypeScript
        "resolvePackageJsonExports": true, // Utilise le champ 'exports' du package.json lors de la résolution des imports de packages
        "resolvePackageJsonImports": true, // Utilise le champ 'imports' du package.json lors de la résolution des imports
        "customConditions": [], // Conditions à définir en plus des valeurs par défaut spécifiques au résolveur lors de la résolution des imports
        "resolveJsonModule": true, // Autorise l'importation de fichiers .json
        "allowArbitraryExtensions": true, // Autorise l'importation de fichiers avec n'importe quelle extension à condition qu'un fichier de déclaration soit présent
        "noResolve": true, // Empêche les 'import', 'require' ou '<reference>' d'ajouter des fichiers supplémentaires à la compilation

        /* JavaScript Support */
        "allowJs": true, // Autorise l'utilisation de fichiers JavaScript dans votre programme, utilisez l'option 'checkJS' pour obtenir des erreurs à partir de ces fichiers
        "checkJs": true, // Active la vérification des erreurs dans les fichiers JavaScript vérifiés
        "maxNodeModuleJsDepth": 1, // Spécifie la profondeur maximale des dossiers pour la vérification des fichiers JavaScript provenant de 'node_modules'

        /* Emit */
        "declaration": true, // Génère des fichiers .d.ts à partir des fichiers TypeScript et JavaScript de votre projet
        "declarationMap": true, // Crée des fichiers de mappage pour les fichiers .d.ts
        "emitDeclarationOnly": true, // Ne génère que des fichiers .d.ts et pas de fichiers JavaScript
        "sourceMap": true, // Crée des fichiers de mappage pour les fichiers JavaScript émis
        "inlineSourceMap": true, // Inclut les fichiers de mappage source à l'intérieur du code JavaScript émis
        "outFile": "./", // Spécifie un fichier qui regroupe toutes les sorties en un seul fichier JavaScript. Si 'declaration' est true, il désigne également un fichier qui regroupe toutes les sorties .d.ts
        "outDir": "./build", // Spécifie un dossier de sortie pour tous les fichiers émis
        "removeComments": true, // Désactive l'émission des commentaires
        "noEmit": true, // Désactive l'émission des fichiers lors de la compilation
        "importHelpers": true, // Autorise l'importation des fonctions d'aide depuis tslib une fois par projet, au lieu de les inclure par fichier
        "importsNotUsedAsValues": "remove", // Spécifie le comportement d'émission/vérification des imports qui ne sont utilisés que pour les types
        "downlevelIteration": true, // Émet un code JavaScript plus conforme, mais plus verbeux et moins performant pour l'itération
        "sourceRoot": "", // Spécifie le chemin racine pour que les débogueurs trouvent le code source de référence
        "mapRoot": "", // Spécifie l'emplacement où le débogueur doit localiser les fichiers de mappage plutôt que les emplacements générés
        "inlineSources": true, // Inclut le code source dans les fichiers de mappage source à l'intérieur du code JavaScript émis
        "emitBOM": true, // Émet un marqueur d'ordre des octets (BOM) UTF-8 au début des fichiers émis
        "newLine": "crlf", // Définit le caractère de nouvelle ligne pour l'émission des fichiers
        "stripInternal": true, // Désactive l'émission des déclarations contenant '@internal' dans leurs commentaires JSDoc
        "noEmitHelpers": true, // Désactive la génération de fonctions d'aide personnalisées comme '__extends' dans la sortie compilée
        "noEmitOnError": true, // Désactive l'émission des fichiers en cas d'erreurs de vérification de type
        "preserveConstEnums": true, // Désactive l'effacement des déclarations 'const enum' dans le code généré
        "declarationDir": "./", // Spécifie le répertoire de sortie pour les fichiers de déclaration générés
        "preserveValueImports": true, // Préserve les valeurs importées non utilisées dans la sortie JavaScript qui seraient sinon supprimées

        /* Interop Constraints */
        "isolatedModules": true, // Assure que chaque fichier peut être compilé de manière sûre sans dépendre d'autres imports
        "verbatimModuleSyntax": true, // Ne transforme ni n'élide aucun import ou export qui n'est pas marqué comme de type seulement, en s'assurant qu'ils sont écrits dans le format du fichier de sortie basé sur l'option 'module'
        "allowSyntheticDefaultImports": true, // Autorise 'import x from y' lorsque le module n'a pas d'export par défaut
        "esModuleInterop": true, // Émet du code JavaScript supplémentaire pour faciliter l'importation de modules CommonJS. Cela active également 'allowSyntheticDefaultImports' pour la compatibilité des types
        "preserveSymlinks": true, // Désactive la résolution des liens symboliques vers leurs chemins réels. Corrélation avec le même indicateur dans Node.js
        "forceConsistentCasingInFileNames": true, // Assure que la casse est correcte dans les imports

        /* Type Checking */
        "strict": true, // Active toutes les options de vérification de type strictes
        "noImplicitAny": true, // Active le signalement d'erreur pour les expressions et déclarations avec un type 'any' implicite
        "strictNullChecks": true, // Prend en compte 'null' et 'undefined' lors de la vérification de type
        "strictFunctionTypes": true, // Vérifie que les fonctions assignées respectent la compatibilité des types des paramètres et des valeurs de retour
        "strictBindCallApply": true, // Vérifie que les arguments des méthodes 'bind', 'call' et 'apply' correspondent à la fonction d'origine
        "strictPropertyInitialization": true, // Vérifie les propriétés de classe déclarées mais non initialisées dans le constructeur
        "noImplicitThis": true, // Signale une erreur lorsque 'this' est de type 'any'
        "useUnknownInCatchVariables": true, // Définit par défaut les variables de clause catch comme 'unknown' au lieu de 'any'
        "alwaysStrict": true, // S'assure que 'use strict' est toujours émis
        "noUnusedLocals": true, // Signale une erreur lorsque des variables locales ne sont pas utilisées
        "noUnusedParameters": true, // Signale une erreur lorsqu'un paramètre de fonction n'est pas utilisé
        "exactOptionalPropertyTypes": true, // Interprète les types de propriétés optionnelles comme écrits, sans ajouter 'undefined'
        "noImplicitReturns": true, // Signale une erreur pour les chemins de code qui ne retournent pas explicitement une valeur dans une fonction
        "noFallthroughCasesInSwitch": true, // Signale une erreur pour les cas de décalage dans les déclarations switch sans 'break'
        "noUncheckedIndexedAccess": true, // Ajoute 'undefined' à un type lorsqu'il est accédé à l'aide d'un index
        "noImplicitOverride": true, // S'assure que les membres substitués dans les classes dérivées sont marqués avec le modificateur 'override'
        "noPropertyAccessFromIndexSignature": true, // Exige l'utilisation d'accesseurs indexés pour les clés déclarées à l'aide d'un type indexé
        "allowUnusedLabels": true, // Désactive le signalement d'erreur pour les étiquettes non utilisées
        "allowUnreachableCode": true, // Désactive le signalement d'erreur pour le code inaccessible

        /* Completeness */
        "skipDefaultLibCheck": true, // Ignore la vérification des fichiers .d.ts inclus avec TypeScript
        "skipLibCheck": true // Ignore la vérification de tous les fichiers .d.ts
    }
}
```

```diff
+ Le code qui suis est utilisé sur DYMA
```

```json
{
    "include": ["./src"], // Spécifie les fichiers TypeScript à compiler (dans le dossier "src" ici)

    "compilerOptions": {
        "incremental": true, // Accélère la vitesse de reconstruction en conservant certaines informations entre les compilations
        "target": "ESNext", // Version ciblée d'ECMAScript (la dernière version possible ici)
        "module": "commonjs", // Spécifie le standard des modules à utiliser pour les imports/exports
        "sourceMap": true, // Génère des fichiers de mappage pour établir un lien entre les codes TypeScript et JavaScript
        "outDir": "./build", // Dossier de destination pour les fichiers JavaScript transpilés
        "removeComments": true, // Supprime les commentaires du code JavaScript généré

        /* Contraintes d'interopérabilité */
        "esModuleInterop": true, // Génère du code JavaScript supplémentaire pour faciliter l'importation de modules CommonJS
        "forceConsistentCasingInFileNames": true, // Assure une cohérence de casse lors de l'importation de fichiers

        /* Vérification des types */
        "strict": true, // Active toutes les options de vérification de type strictes
        "noUnusedLocals": true, // Génère une erreur pour les variables locales non utilisées
        "noUnusedParameters": true, // Génère une erreur pour les paramètres de fonction non utilisés
        "noImplicitReturns": true, // Génère une erreur pour les fonctions sans retour explicite
        "noFallthroughCasesInSwitch": true, // Génère une erreur pour les cas de décalage dans les déclarations switch sans "break"

        /* Exhaustivité */
        "skipLibCheck": true // Ignore la vérification des fichiers .d.ts externes (fichiers de déclaration de type)
    }
}
```
