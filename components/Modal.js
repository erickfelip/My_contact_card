import react, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ show, id = "modal", onClose = () => {} }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose();
      e.stopPropagation();
    }
  };

  function handleCloseModal(e) {
    e.stopPropagation();
    onClose();
  }

  const modalContent = show ? (
    <div id={id} className="overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <div className="closebutton">
          <a href="#" onClick={handleCloseModal}>
            <FontAwesomeIcon
              icon={("fab", "xmark")}
              size="2x"
              style={{ width: 25, height: 25 }}
            />
          </a>
        </div>

        <div className="headerr">
          <p>Save my contact!</p>
        </div>
        <div className="body">
          <Image
            src="/images/qrcode.png"
            alt="qr-code-contato"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

//Add your qrcode on image src.
