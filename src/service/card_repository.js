import firebaseApp from './firebase';
// import {getDatebase, ref, set, remove } from './firebase/database';
// import { app } from './firebase';

class CardRepository {
    syncCards(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val()
            value && onUpdate(value);
        });
        return () => ref.off();
    }
    
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}
 // class CardRepository {
//     saveCard(userId, card) {
//         const db = getDatebase();

//         set(ref(db,`${userId}/cards/${card.id}`),{
//             1: userId,
//             2: card,
//         });
//     }

//     removeCard(userId, card) {
//         const db = getDatebase();
//         const cardRef = ref(db, `${userId}/cards/${card.id}`);
//         remove(cardRef);
//     }

// }


export default CardRepository;
