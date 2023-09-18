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
      documentStore: "0x3DbcbeAbc2A8f68c264c0648A1448C4Ce038929A",
      identityProof: {
        location: "neat-amber-firefly.sandbox.openattestation.com",
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
