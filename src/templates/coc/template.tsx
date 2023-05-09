import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div className={className} id="custom-template">
      <h1>{document.name}</h1>
      <div>This certifies that</div>
      <h2>{document.recipient.name}</h2>
      <div>has successfully completed</div>
      <h2>{document.recipient.courseName}</h2>
      <h2> Held on {document.recipient.courseDates}</h2>
    </div>
  );
};
