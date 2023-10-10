import styled from "styled-components";
import TextEditor from "./TextEditor";
import { useState } from "react";
import useNote from "../hooks/useNote";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice";

const NoteMainDiv = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddNoteDiv = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #00000010;
  border-radius: 5px;
  padding: 0 10px;
  &:hover {
    box-shadow: 0px 0px 2px 0px #00000029;
    cursor: pointer;
  }
`;
const AddNoteBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #f0f8fb;
  font-size: 18px;
  box-shadow: none;
  &:hover {
    box-shadow: 0px 0px 2px 0px #0000003b;
  }
`;

const NotesDiv = styled.div`
  border: 1px solid #00000010;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotePickTime = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 55px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

const ActionBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Btn = styled.button`
  width: 65px;
  height: 24px;
  background-color: ${(props) => (props.isDelete ? "#E41A0E" : "#349C3E")};
  color: white;
  box-shadow: none;
`;

const NoteTextContainer = styled.div`
  padding: 1px 10px;
  font-size: 13px;
`;
const NoteText = styled.p``;

const Note = ({ videoId, timeline}) => {
  const dispatch = useDispatch();
  const [isNew, setisNew] = useState(false);
  const [editID, setEditID] = useState("");
  const { getNotes } = useNote();
  const notes = getNotes(videoId);
  const handelNote = () => {
    setisNew(true);
    setEditID("");
  };
  const textEditorHandler = () => {
    setisNew(false);
    setEditID("");
  };
  return (
    <NoteMainDiv>
      {!isNew && (
        <AddNoteDiv onClick={handelNote}>
          <p style={{ color: "#00000070" }}>create a new note</p>
          <AddNoteBtn>+</AddNoteBtn>
        </AddNoteDiv>
      )}

      {isNew && (
        <TextEditor closeHandeler={textEditorHandler} videoId={videoId} timeline={timeline}/>
      )}

      {notes &&
        notes.map((note) => {
          return (
            <NotesDiv key={note.noteId}>
              {editID == note.noteId ? (
                <TextEditor closeHandeler={textEditorHandler} videoId={videoId} noteId={note.noteId} note={note.note} timeline={note.timeline}/>
              ) : (
                <>
                  <NoteTextContainer>
                    <NoteText
                      dangerouslySetInnerHTML={{ __html: note.note }}
                    ></NoteText>
                  </NoteTextContainer>
                  <ActionContainer>
                    <NotePickTime>
                      <a href="#">{note.timeline}</a>
                    </NotePickTime>
                    <ActionBtnContainer>
                      <Btn onClick={() => setEditID(note.noteId)}>Edit</Btn>
                      <Btn
                        isDelete
                        onClick={() =>
                          dispatch(
                            deleteNote({
                              videoId: videoId,
                              noteId: note.noteId,
                            })
                          )
                        }
                      >
                        delete
                      </Btn>
                    </ActionBtnContainer>
                  </ActionContainer>
                </>
              )}
            </NotesDiv>
          );
        })}
    </NoteMainDiv>
  );
};

export default Note;
