import firebase from ".";
import {
  setDoc,
  doc,
  getDocs,
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
};
// const q = query(collection(db, "cities"), where("capital", "==", true));
