import firebase from ".";
import {
  setDoc,
  doc,
  getDocs,
  getDoc,
  collection as firebaseCollection,
  query as queryFirebase,
  where as whereFirebase,
  WhereFilterOp,
} from "firebase/firestore";

//types
type saveDatatype = {
  collectionName: string;
  id: string;
  payload: any;
};
type getDocsByCollectionType = {
  collectionName: string;
  query?: queryType;
};
type getDocsByIdType = {
  collectionName: string;
  id: string;
};
type queryType = {
  field: string;
  operator: WhereFilterOp;
  value: any;
};
export default {
  async saveData({ collectionName, id, payload }: saveDatatype) {
    await setDoc(doc(firebase.firestore, collectionName, id), payload);
  },
  async getDocsByCollection({
    collectionName,
    query,
  }: getDocsByCollectionType) {
    const collection = firebaseCollection(firebase.firestore, collectionName);
    if (!!query) {
      var queryToGet = queryFirebase(
        collection,
        whereFirebase(query.field, query.operator, query.value)
      );
    }
    let querySnapshot = await getDocs(!!query ? queryToGet : collection);
    let docs = querySnapshot.docs.map((doc) => doc.data());
    return docs;
  },
  async getDocById({ collectionName, id }: getDocsByIdType) {
    const docRef = doc(firebase.firestore, collectionName, id);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  },
};
// const q = query(collection(db, "cities"), where("capital", "==", true));
