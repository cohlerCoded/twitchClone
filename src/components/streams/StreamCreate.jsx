import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    return <input {...input} />;
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
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
