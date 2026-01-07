import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oparaji Tochi | Frontend Engineer Portfolio",
  description:
    "Welcome to my portfolio. I build modern, responsive, and user-focused web applications with clean design and maintainable code.",
};

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
