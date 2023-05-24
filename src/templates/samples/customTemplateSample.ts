import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
    courseName: string;
    courseDates: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  issuers: [
    {
      name: "Tertiary Courses",
      documentStore: "0x8E41ef23b56515a75b83D4F9f0Ef860d0cefC0f7",
      identityProof: {
        location: "rough-olive-koi.sandbox.openattestation.com",
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
