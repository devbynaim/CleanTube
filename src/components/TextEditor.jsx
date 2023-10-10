import JoditEditor from "jodit-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addNote, updateNote } from "../features/notes/noteSlice";

const TextEditorConainter = styled.div`
  width: 100%;
  border: 1px solid #00000010;
`;

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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

const TextEditor = ({ videoId, noteId, closeHandeler,note,timeline }) => {
  const [noteText, setNoteText] = useState(note);
  const dispitch = useDispatch();
  const handelChange = (noteTxt) => {
    setNoteText(noteTxt);
  };

  const btnHandeler = (action) => {
    if (action == "cencel") {
      closeHandeler();
      return;
    }
    if (noteId) {
      dispitch(updateNote({ videoId, noteId, note: noteText }));
      closeHandeler();
      return
    }
    dispitch(addNote({ videoId, timeline, note: noteText }));
    closeHandeler();
  };

  return (
    <TextEditorConainter>
      <JoditEditor value={noteText} onChange={handelChange} />
      <ActionContainer>
        <NotePickTime>
          <a href="#">{timeline}</a>
        </NotePickTime>
        <ActionBtnContainer>
          <Btn isDelete onClick={() => btnHandeler("cencel")}>
            cencel
          </Btn>
          <Btn onClick={() => btnHandeler("save")}>save</Btn>
        </ActionBtnContainer>
      </ActionContainer>
    </TextEditorConainter>
  );
};

export default TextEditor;
