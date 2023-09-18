import { v2 } from "@govtechsg/open-attestation";

export interface CoaTemplateCertificate extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
    courseName: string;
    courseDates: string;
  };
}

export const coaTemplateCertificate: CoaTemplateCertificate = {
  issuers: [
    {
      name: "Tertiary Courses",
      documentStore: "0xA08053CB4980E4C9B187e09F9661538C68a8B52e",
      identityProof: {
        location: "greasy-white-mosquito.sandbox.openattestation.com",
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
