import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderTitleInput() {
    return (
      <>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" />
        </div>
      </>
    );
  }
  renderDescriptionInput() {
    return (
      <>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" />
        </div>
      </>
    );
  }
  render() {
    return (
      <div>
        <form action="">
          <Field name="title" component={this.renderTitleInput} />
          <Field name="description" component={this.renderDescriptionInput} />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
