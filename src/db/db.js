// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, getDoc, collection, query, where, doc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        if (querySnapshot.size !== 0) {
            const products = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            return products
        } else {
            console.log("No se encontraron datos de productos.")
            return null
        }
    } catch (error) {
        console.log("Error al obtener los datos de la base de datos:" + error.message)
        return null
    }
}

export const getProduct = async (id) => {
    const documentRef = doc(db, 'products', id)
    try {
        const snapshot = await getDoc(documentRef)
        if (snapshot.exists()) {
            return {
                id: snapshot.id,
                ...snapshot.data()
            }
        } else {
            console.log("No se encontro el documento.")
        }
    } catch (error) {
        console.log("Error al obtener los datos de la base de datos:" + error.message)
        return null
    }
}

export const getCategory = async (category) => {
    try {
        const filteredQuery = query(
            collection(db, 'products'),
            where('category', '==', category)
        )
        const querySnapshot = await getDocs(filteredQuery)
        if (querySnapshot.size !== 0) {
            const products = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            return products
        } else {
            console.log("No se encontraron datos de productos.")
            return null
        }
    } catch (error) {
        console.log("Error al obtener los datos de la base de datos:" + error.message)
        return null
    }
}

export const sendCart = async (cart) => {
    const cartsCollection = collection(db, 'carts');
    try {
        const docRef = await addDoc(cartsCollection, cart);
        return docRef.id;
    } catch (error) {
        console.error('Error al cargar los datos: ' + error);
    }
}