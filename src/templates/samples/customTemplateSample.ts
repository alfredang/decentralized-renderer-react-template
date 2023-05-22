import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  recipient: {
    id: string;
    name: string;
    courseName: string;
    courseDates: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  $template: {
    name: "Certificate of Accomplishment",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://vermillion-blancmange-5cc1e6.netlify.app/",
  },
  issuers: [
    {
      name: "Tertiary Courses",
      documentStore: "0xec874D604AD734989cCFca2f951A05Afac68a866",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "environmental-white-pig.sandbox.openattestation.com",
      },
    },
  ],
  recipient: {
    id: "abc123",
    name: "John Doe",
    courseName: "Tertiary Course",
    courseDates: "1 January 2023",
  },
};