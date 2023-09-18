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
      documentStore: "0xEF4b497D2243E6D502678955C47E04878Bd6696E",
      identityProof: {
        location: "quiet-amethyst-ox.sandbox.openattestation.com",
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
