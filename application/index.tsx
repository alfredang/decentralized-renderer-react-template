import ReactDOM from "react-dom";
import { cocTemplateCertificate } from "../src/templates/samples";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Default document", document: cocTemplateCertificate },
      {
        name: "Red document",
        document: {
          ...cocTemplateCertificate,
          foo: "bar"
        }
      }
    ]}
  />,
  document.getElementById("root")
);
