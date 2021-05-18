import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions/index";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
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
}
export default connect(null, { fetchStream })(StreamDelete);
