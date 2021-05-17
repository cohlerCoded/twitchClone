import React from "react";
import Modal from "../Modal";

export default function StreamDelete() {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  );
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
}
