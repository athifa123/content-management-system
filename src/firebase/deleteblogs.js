import { deleteDoc , doc } from "firebase/firestore";
import { db } from "./app";

async function deleteDocument( collectionPath, docId){
    const documentReference = doc(db ,collectionPath , docId);
     await deleteDoc(documentReference);
}

export default deleteDocument;
