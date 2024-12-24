import React from "react";
import Routing from "../../policy/Routing";
import Article from "../../policy/Article";

const Faqs = () => {
  const data = [
    {
      id: "accountTerms",
      name: "1. Account Terms",
      updated: "Last updated on: March 1, 2023",
      content:
        "Our Privacy Policy outlines how we collect, use, and protect your personal information when you engage with our services. We gather various types of information, such as personal details and usage data, to improve user experience and deliver tailored services. This policy also explains how we may share your information with trusted third parties and the steps we take to ensure your data is secure. Furthermore, we detail how cookies and other tracking technologies help us understand user behavior, enhance site functionality, and personalize content.<br /><br />We respect your privacy and are committed to safeguarding your data in compliance with relevant laws. You have rights over your personal information, including access, correction, or deletion requests, which we honor in accordance with applicable regulations. Our policy also explains how long we retain your data and the steps to take if you wish to opt out of certain data processing practices. For any questions or concerns regarding our privacy practices, we provide clear contact information for support.",
    },
    {
      id: "accountActivation",
      name: "2. Account Activation",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "shopifyRights",
      name: "3. Shopify Rights",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "yourResponsibility",
      name: "4. Your Responsibilities",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "feeAndTaxPayment",
      name: "5. Payment of Fees and Taxes",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "confidentiality",
      name: "6. Confidentiality",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "limitationOfLiabilityAndIdentification",
      name: "7. Limitation of Liability and Identification",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
    {
      id: "intellectualPropertyAndMaterials",
      name: "8. Intellectual Property and Your Materials",
      updated: "Last updated on: March 1, 2023",
      content:
        "These Terms & Conditions govern your use of the site and outline the rights and responsibilities of both the users and the company. By accessing the site, you agree to follow the guidelines regarding purchases, payments, shipping, and returns. We ensure that your privacy and data security are safeguarded, and we maintain strict policies on the protection and usage of personal information. All intellectual property on the site remains the sole property of the company and cannot be reproduced or used without prior permission.<br /><br />Additionally, the terms limit the company’s liability in the event of any issues or damages arising from the use of the site. Disputes will be handled under the governing law specified within the terms. Users will be informed of any changes or updates to these terms as needed, and the process for making such changes is also described. If you have any concerns or questions, our contact information is provided for further assistance.",
    },
  ];

  return (
    <div className="w-full flex flex-col pt-28 lg:px-[100px] md:px-8 px-4 ">
      <h1 className="text-4xl font-bold mx-5 md:mx-0">FAQs</h1>
      <div className="flex items-center relative justify-between">
        <Routing data={data} />
        <Article data={data} />
      </div>
    </div>
  );
};

export default Faqs;
