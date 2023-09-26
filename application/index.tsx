import ReactDOM from "react-dom";
import { coaTemplateCertificate } from "../src/templates/samples";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Default document", document: coaTemplateCertificate },
      {
        name: "Red document",
        document: {
          ...coaTemplateCertificate,
          foo: "bar"
        }
      }
    ]}
  />,
  document.getElementById("root")
);
