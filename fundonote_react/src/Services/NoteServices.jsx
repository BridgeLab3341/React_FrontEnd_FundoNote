import axios from "axios";

const JWTToken = localStorage.getItem("token");
console.log(JWTToken);

export const NoteCreate = async (obj) => {
    console.log("Object", obj);
    let response = await axios.post("https://localhost:44381/api/Note/AddNote", obj, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    //console.log(response);
    return response;
}

export const GetAllNotes = async () => {
    let response = await axios.get("https://localhost:44381/api/Note/GetAllNotes", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    return response;
}

export const DeleteNote = async (delteNoteobj) => {
    let response = await axios.delete(`https://localhost:44381/api/Note/DeleteNote/noteId=${delteNoteobj.noteId}`, delteNoteobj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    return response;
}

export const TrashNote = async (trashNoteObj) => {
    let response = await axios.put(`https://localhost:44381/api/Note/IsTrash/?noteId=${trashNoteObj.noteId}`,trashNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    return response;
}

export const ArchiveNote = async (archiveNoteObj) => {
    console.log('id', archiveNoteObj.noteId)
    let response = await axios.put(`https://localhost:44381/api/Note/ArchiveNote/?noteId=${archiveNoteObj.noteId}`, archiveNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`,
        }
    })
    return response;
}


