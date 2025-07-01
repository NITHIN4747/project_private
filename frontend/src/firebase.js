import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDK69p3zg_AVHo-YOACNk_iH3o_pS3P_ho",
  authDomain: "samritha-tribute.firebaseapp.com",
  databaseURL: "https://samritha-tribute-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "samritha-tribute",
  storageBucket: "samritha-tribute.appspot.com",
  messagingSenderId: "151252654666",
  appId: "1:151252654666:web:bfcf11201d9a9874df24b3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };