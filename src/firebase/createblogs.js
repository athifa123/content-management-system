import { addDoc, collection, Timestamp } from "firebase/firestore";
import {db }from "./app";


const handleSubmit = async(obj)=> {
    try {
        await addDoc(collection(db, 'blogs'), {
          header: obj["header"],
          description: obj["description"],
          content : obj["content"],
          created: Timestamp.now()
        })
      } catch (err) {
        alert(err)
      } 
    
    
}

export default handleSubmit;