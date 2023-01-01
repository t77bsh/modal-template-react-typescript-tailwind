import React, { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  modalContent: ReactNode;
}

function Modal(props: Props) {
  return (
    <div
      onClick={props.onClose}
      className={`fixed inset-0 z-50 overflow-y-auto ${
        props.isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-neutral-900 opacity-75"></div>
      </div>

      <div
        className="relative flex-1 flex items-center justify-center min-w-0 w-full h-full rounded-lg shadow-lg overflow-y-auto"
        tabIndex={-1}
      >
        {/* Insert Modal Content Here */}
        {props.modalContent}
        {/*  */}
      </div>
    </div>
  );
}

export default Modal;
