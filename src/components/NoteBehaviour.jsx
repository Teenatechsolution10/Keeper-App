import Form from "react-bootstrap/Form";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
const NoteBehaviour = ({ setAllNotes, setSearchText, searchText }) => {
  const [show, setShow] = useState(false);

  const handleClose = (action) => {
    if (action === "del") {
      setAllNotes([]);
    }

    setShow(false);
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete all notes ? </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete all the notes ? </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose("cancel");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose("del");
            }}
          >
            Delete all notes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="noteBehaviourContainer">
        <Form.Control
          className="searchBar"
          type="text"
          placeholder="Search By Title"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <MdOutlineDeleteSweep style={{cursor:"pointer"}} onClick={handleShow} fill="white" size={30} />
      </div>
    </>
  );
};

export default NoteBehaviour;
