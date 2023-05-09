import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <div>This certifies that</div>
      <h2>{document.recipient.name}</h2>
      <div>has successfully completed</div>
      <h2>{document.recipient.courseName}</h2>
      <h2> Held on {document.recipient.courseDates}</h2>
    </div>
  );
};
