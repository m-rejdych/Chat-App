import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDnnXJImYm81dGQKnrjOotfwCo-3W-i3aA',
  authDomain: 'chat-app-a6345.firebaseapp.com',
  databaseURL: 'https://chat-app-a6345.firebaseio.com',
  projectId: 'chat-app-a6345',
  storageBucket: 'chat-app-a6345.appspot.com',
  messagingSenderId: '314966886330',
  appId: '1:314966886330:web:da326989e78447a27c3f83',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const authPresistance = firebase.auth.Auth.Persistence;

export { db, auth, authPresistance };
