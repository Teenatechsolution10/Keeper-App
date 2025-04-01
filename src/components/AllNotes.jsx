import { MdDeleteOutline } from "react-icons/md";
const AllNotes = ({ noteData, setAllNotes, id, allNotes }) => {
  const deleteNote = () => {
    const updatedNotes = allNotes.filter((_, index) => index !== id);
    setAllNotes(updatedNotes);
  };

  return (
    <div className="eachNote">
      <p className="eachNoteTitle">{noteData?.title}</p>
      <p className="eachNoteContent">{noteData?.content}</p>
      <MdDeleteOutline fill="red" className="deleteIcon" size={30} onClick={deleteNote} />
      {/* <img
        onClick={deleteNote}
        className="deleteIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgCtB72sd2csn3h4Xoktuuub7vFQQ-dGBOw&s"
        alt="Delete"
      /> */}
    </div>
  );
};

export default AllNotes;
