import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions/index";
import { connect } from "react-redux";

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
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
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
export default connect(mapStateToProps, { fetchStream })(StreamDelete);
