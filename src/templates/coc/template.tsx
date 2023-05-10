import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CocTemplateCertificate } from "../samples/customTemplateSample";
import BackgroundImage from "../static/CertificateBlank.jpg";

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
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
          top: "43%",
          left: 0,
          width: "100%",
          fontSize: "24px",
          fontFamily: "Quintessential"
        }}
      >
        This certifies that
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          fontSize: "24px",
          fontFamily: "Quattrocento"
        }}
      >
        {document.recipient.name}
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: 0,
          width: "100%",
          fontSize: "24px",
          fontFamily: "Quintessential"
        }}
      >
        has successfully completed the
      </div>
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: 0,
          width: "100%",
          fontSize: "34px",
          fontWeight: "bold",
          fontFamily: "Quattrocento",
          color: "midnightblue"
        }}
      >
        {document.recipient.courseName}
      </div>
      <div
        style={{
          position: "absolute",
          top: "71%",
          left: 0,
          width: "100%",
          fontSize: "22px",
          fontFamily: "Quattrocento"
        }}
      >
        Held on {document.recipient.courseDates}
      </div>
    </div>
  );
};
