import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <div className="avatar"></div>
        <div className="profile">
          <div className="info">
            <p> Your Name </p>
            <div className="position">
              <p> Position </p>
            </div>
            <div className="profile-icons">
              <a
                onClick={() => setShowModal(true)}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={("fab", "qrcode")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
                <Modal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                ></Modal>
              </a>

              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
              <a href="mailto: " target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={("fab", "envelope")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Add your whatsapp phone number in "wa.me/"
//Add your email in "mailto: "
