import firebase from "firebase/compat/app";

const db = firebase.firestore();

export const getUser = async (email: string) => {
  try {
    const snapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const updateUser = async (
  uid: string,
  formdata: {
    store_name: string;
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    state: string;
    country: string;
  }
) => {
  try {
    await db.collection("users").doc(uid).update({
      store_name: formdata.store_name,
      first_name: formdata.first_name,
      last_name: formdata.last_name,
      phone: formdata.phone,
      address: formdata.address,
      state: formdata.state,
      country: formdata.country,
    });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
