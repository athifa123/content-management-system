import { collection, getDocs , doc , getDoc } from "firebase/firestore";
import { db } from "./app";

const readAll = async () => {
  const ref = collection(db, "blogs");
  const querySnapshot = await getDocs(ref);
  var docs_ref = querySnapshot.docs;
  console.log(docs_ref);
  return docs_ref;
};

const readDoc = async(collectionPath , docId) =>{
    const docRef = doc(db ,collectionPath , docId);
    const document = await getDoc(docRef);
    return document;
}

export {readAll , readDoc} ;
