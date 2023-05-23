import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string,
  recipient: {
    name: string;
    courseName: string;
    courseDates: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "Tertiary Courses Certificate of Accomplishment",
  issuers: [
    {
      name: "Tertiary Courses",
      documentStore: "0xec874D604AD734989cCFca2f951A05Afac68a866",
      identityProof: {
        location: "biological-gold-canidae.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "John Doe",
    courseName: "Tertiary Course",
    courseDates: "1 January 2023",
  },
  $template: {
    name: "COA",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://vermillion-blancmange-5cc1e6.netlify.app",
  },
};
