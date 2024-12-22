// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuyQUjKBqcjh-soOmrkbNnsUY8bRKEq3k",
  authDomain: "task-management-system-1e0ac.firebaseapp.com",
  projectId: "task-management-system-1e0ac",
  storageBucket: "task-management-system-1e0ac.firebasestorage.app",
  messagingSenderId: "1035021736103",
  appId: "1:1035021736103:web:94fd7ae06f4c7d4343a382"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GithubAuthProvider };

