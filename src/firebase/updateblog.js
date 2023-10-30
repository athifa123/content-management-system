import { doc, updateDoc } from "firebase/firestore";
import {db }from "./app";

async function UpdateDocument( collectionpath , documentId , data ){
    const documentReference = doc(db, collectionpath , documentId );
    const document =  await updateDoc(documentReference, data);
}

export default UpdateDocument;