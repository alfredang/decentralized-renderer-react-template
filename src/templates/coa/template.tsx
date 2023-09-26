import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CoaTemplateCertificate } from "../samples/customTemplateSample";
import BackgroundImage from "../static/CertificateTemplate_International.png";

export const CoaTemplate: FunctionComponent<TemplateProps<CoaTemplateCertificate> & { className?: string }> = ({
  document
}) => {
  return (
    <div
      style={{
        width: "1040px",
        height: "720px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        position: "relative" as const
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          fontSize: "50px",
          fontFamily: "Vollkorn"
        }}
      >
        {document.recipient.name}
      </div>
      <div
        style={{
          position: "absolute",
          top: "66%",
          left: 0,
          width: "100%",
          fontSize: "34px",
          fontWeight: "bold",
          fontFamily: "Vollkorn",
          color: "midnightblue"
        }}
      >
        {document.recipient.courseName}
      </div>
      <div
        style={{
          position: "absolute",
          top: "73%",
          left: 0,
          width: "100%",
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "Montserrat"
        }}
      >
        Held on {document.recipient.courseDates}
      </div>
    </div>
  );
};
