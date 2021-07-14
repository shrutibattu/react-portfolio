import React from "react";
import styles from "./Card.module.scss";
import Modal from "react-modal";
import { useState } from "react";

const Card = () => {
  Modal.setAppElement("button");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Punkapi Project</h1>
        <div className={styles.container}>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={styles.customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Card;
