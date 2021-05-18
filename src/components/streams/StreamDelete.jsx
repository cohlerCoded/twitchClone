import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream)
      return "Are you sure you want to delete this stream?";
    else
      return `Are you sure you want to delete the stream: ${this.props.stream.title}?`;
  }
  render() {
    const actions = (
      <>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </>
    );
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        actions={actions}
        onClick={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
