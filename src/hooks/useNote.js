import { useSelector } from "react-redux";

const useNote = () => {
  const { notes } = useSelector((state) => state.notes);
  const getNotes = (videoId)=>{
    return notes[videoId]
  }

  return {
    getNotes
  }
};

export default useNote;
