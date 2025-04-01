import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const InputCard = ({ setAllNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { transcript, listening } = useSpeechRecognition();
  const addNote = () => {
    if (title == "") {
      toast.error("Title cannot be empty");
      return;
    }
    if (title.length > 50) {
      toast.error("Title too long!");
      return;
    }
    if (content.length > 250) {
      toast.error("Content too long!");
      return;
    }
    if (content == "") {
      toast.error("Content cannot be empty");
      return;
    }
    setAllNotes((prev) => [...prev, { title: title, content: content }]);
    toast.success("Note added");
    setTitle("");
    setContent("");
  };
  useEffect(() => {
    setContent(transcript);
  }, [transcript]);
  
  return (
    <section className="inputContainer">
      <div className="inputCard">
        <input
          type="text"
          name=""
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
          id=""
          onKeyDown={(e) => {
            if (e.key === "Enter") addNote();
          }}
        />
        <textarea
          placeholder="Take a note"
          name=""
          id=""
          col={20}
          rows={4}
        
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>

        <img
          onClick={SpeechRecognition.startListening}
          className="micIcon"
          src={
            listening
              ? "https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/record_recorder_stop-512.png"
              : "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/79-512.png"
          }
          alt="Mic"
        />
        <img
          onClick={addNote}
          className="plusIcon"
          src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/04-512.png"
          alt=""
        />
      </div>
      <ToastContainer />
      <div></div>
    </section>
  );
};

export default InputCard;
