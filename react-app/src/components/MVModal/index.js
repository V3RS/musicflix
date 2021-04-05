import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeMV } from "../../store/modal.js";
import MV from "./MV";

Modal.setAppElement(document.getElementById("root"));

const MVModal = ({ mv }) => {
  const dispatch = useDispatch();
  const mvState = useSelector((state) => state.modal.mvShow);

  const closeModal = () => dispatch(closeMV());

  return (
    <>
      <Modal
        isOpen={mvState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Musiv Video Modal"
        overlayClassName="OuterModalMV"
        className="InnerModalMV"
      >
        <MV mv={mv} />
      </Modal>
    </>
  );
};

export default MVModal;
