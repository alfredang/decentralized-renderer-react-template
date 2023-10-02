
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
        location: "diverse-lavender-anglerfish.sandbox.openattestation.com",
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
  network: {
    chain: "878d60f8-481b-4b0c-8489-a036f7c9e838:string:MATICMUM",
    chainId: "6a122dcb-e9d2-4d6c-a86c-8cbc04502067:string:80001"
  }
};
