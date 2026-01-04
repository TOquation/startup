import HomePage from "@/components/Home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
};

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
