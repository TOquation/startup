import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A breakdown of the services I provide, focused on building modern, responsive, and scalable web applications.",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="I help individuals, startups, and organizations bring ideas to life through clean, performant, and user-focused web solutions."
      />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
    </>
  );
};

export default ServicePage;
