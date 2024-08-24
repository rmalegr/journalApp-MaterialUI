import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./JournalSlice";
import { loadNotes } from "../../helpers";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal-1/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    // console.log({ newDoc, setDocResp });
    newNote.id = newDoc.id;

    //dispatch()
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    // console.log({ uid });
    if (!uid) throw new Error("El UID del usuario no existe");

    const notes = await loadNotes(uid);
    // console.log(notes);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    const docRef = doc(FirebaseDB, `${uid}/journal-1/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    // dispatch(setActiveNote(note));
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving()); // bloquea los botones , y pone la aplicacion en carga
    await fileUpload(files[0]);

    // const fileUploadPromises = [];
    // for (const file of files) {
    //   fileUploadPromises.push(UploadFile(file));
    // }
    // const photosUrls = await Promise.all(fileUploadPromises);
    // dispatch(setSaving());
    // return photosUrls;
  };
};
