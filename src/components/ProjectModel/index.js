import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./Modal.css"; // Import your modal styles

const ProjectModel = ({ isOpen, onClose, text }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <p className="bg-pink-600 ">{text}</p>
            <button onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModel;
