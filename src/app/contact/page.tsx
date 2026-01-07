import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me to discuss projects, collaborations, or any web development opportunities.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Me"
        description="Feel free to reach out for project inquiries, collaborations, or just to say hi. I’m always open to connecting with fellow developers and clients."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
