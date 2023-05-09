import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
    courseName: string;
    courseDates: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "Certificate of Accomplishment",
  issuers: [
    {
      name: "My name",
      documentStore: "0x50a5d169A1bD154d0f98E78B65FA91788A7aBc66",
      identityProof: {
        location: "contemporary-magenta-platypus.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "John Doe",
    courseName: "Python Fundementals",
    courseDates: "1 January 2023"
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://vermillion-blancmange-5cc1e6.netlify.app/",
  },
};