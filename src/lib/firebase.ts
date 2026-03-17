import { initializeApp } from 'firebase/app'
import { getFirestore, doc, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApwBSh_c1whMawh5N0m6uKl39a-0DqydE",
  authDomain: "furco-inventory.firebaseapp.com",
  projectId: "furco-inventory",
  storageBucket: "furco-inventory.firebasestorage.app",
  messagingSenderId: "774721161473",
  appId: "1:774721161473:web:ab961832522e6afb123300"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const PROD_DOC  = doc(collection(db, 'furco'), 'products')
export const CONT_DOC  = doc(collection(db, 'furco'), 'containers')
export const HIST_DOC  = doc(collection(db, 'furco'), 'history')
