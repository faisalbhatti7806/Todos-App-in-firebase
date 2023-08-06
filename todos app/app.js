import { db } from "./firebase.js";
import { collection, addDoc , getDocs , doc , deleteDoc , updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const addBtn = document.getElementById("add")
addBtn.addEventListener('click' , async()=>{
    const inp = document.getElementById("inp").value;
    try {
        const docRef = await addDoc(collection(db, "todo"), {
         inp : inp ,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})


const add = async()=>{
    const todo = document.getElementById("show")
    const querySnapshot = await getDocs(collection(db, "todo"));
    querySnapshot.forEach((doc) => {
    todo.innerHTML+= `
    <div id="main">
        <div id="text">
           <h1>${doc.data().inp}</h1>
        </div>
        <div id="bth">
         <button onclick="edt('${doc.id}')">Edit</button>
         <button onclick="delet('${doc.id}')">Delete</button>
        </div>
    </div>
    `
      console.log(doc.data());
    });
}

add();


const delet = (async(id)=>{
    console.log(id);
    await deleteDoc(doc(db, "todo", id));
    location.reload();
    
})

const edt = (async(id)=>{
    const num = prompt("Enter your Type")
    const washingtonRef = doc(db, "todo", id);
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        inp : num
    });
    location.reload();
})



window.delet=delet;
window.edt=edt;