import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeLogin } from "../../store/modal.js";
import LoginForm from "./LoginForm";

Modal.setAppElement(document.getElementById("root"));

const LoginModal = ({
  authenticated,
  setAuthenticated,
  email,
  updateEmail,
}) => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.modal.loginShow);

  const closeModal = () => dispatch(closeLogin());

  return (
    <>
      <Modal
        isOpen={loginState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        overlayClassName="OuterModal"
        className="InnerModal"
      >
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          email={email}
          updateEmail={updateEmail}
        />
      </Modal>
    </>
  );
};

export default LoginModal;
