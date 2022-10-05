import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyB25wmhjJmj_P5fBiFk4q_jychtR8uyPEA',
   authDomain: 'sample-98678.firebaseapp.com',
   projectId: 'sample-98678',
   storageBucket: 'sample-98678.appspot.com',
   messagingSenderId: '338883944343',
   appId: '1:338883944343:web:6e028fe45a9803378daed2'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export{
   db
}