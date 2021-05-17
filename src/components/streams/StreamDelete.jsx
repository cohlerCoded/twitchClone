import React from "react";
import Modal from "../Modal";
import history from "../../history";

export default function StreamDelete() {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onClick={() => history.push("/")}
      />
    </div>
  );
}
