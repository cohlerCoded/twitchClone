import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <Field name="title" />
          <Field name="description" />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
