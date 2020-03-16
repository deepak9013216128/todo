import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-S4k_zB-sKGeIEVg365D-R9sWYEYxyaw",
    authDomain: "todos-list-item.firebaseapp.com",
    databaseURL: "https://todos-list-item.firebaseio.com",
    projectId: "todos-list-item",
    storageBucket: "todos-list-item.appspot.com",
    messagingSenderId: "69268958902",
    appId: "1:69268958902:web:1a39d8d6f20c87f20fc017",
    measurementId: "G-V0W9RMQGDY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const todosList = async ()=>{
    const todosRef = firestore.collection("todos");
    //const snapshot = await todosRef.get();
    // todosRef.onSnapshot(snapshot=>{
    //     snapshot.forEach(doc=>
    //         console.log(doc.data())

    //     )
    // })
    // console.log(snapshot)
    return todosRef;
}

export const addTodo = async (newTodo)=>{
    const todosRef = await firestore.collection("todos");
    const snapshot = await todosRef.get();
    try{
        const {todo}=newTodo;
        const date = `${newTodo.date.getDate() }/${newTodo.date.getMonth()}/${newTodo.date.getFullYear()}`;
        todosRef.add({
            todo,
            date
        })
    }catch(error){
        console.log(error);
    }
}

export const firestore = firebase.firestore();

export default firebase;
