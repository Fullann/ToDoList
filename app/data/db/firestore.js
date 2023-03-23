import {
    firebase
} from "./firebase";
const firestore = firebase.firestore();

firestore.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            console.warn("Plusieurs onglets sont ouverts, la persistance ne peut être activée que dans un seul onglet à la fois.");
        } else if (err.code == 'unimplemented') {
            console.warn("Le navigateur actuel ne prend pas en charge toutes les fonctionnalités requises pour permettre la persistance.")
        }

        throw err;
    });

export {
    firestore
};
