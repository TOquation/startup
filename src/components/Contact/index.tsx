"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error" | null;
  }>({ isOpen: false, type: null });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    const form = e.currentTarget;
    const formDataToSubmit = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8557ee9f-0738-402a-88d5-d73f691f1886",
          name: formDataToSubmit.get("name"),
          email: formDataToSubmit.get("email"),
          message: formDataToSubmit.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setModalState({ isOpen: true, type: "success" });
        form.reset();
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModalState({ isOpen: true, type: "error" });
      }
    } catch (error) {
      setModalState({ isOpen: true, type: "error" });
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null });
  };

  return (
    <>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                variants={!reduceMotion ? containerVariants : undefined}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75"
              >
                <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                  Let's Work Together
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-12 text-base font-medium">
                  Have a project in mind? I'd love to hear about it. Fill out
                  the form below and I'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base transition-all outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base transition-all outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="text-dark mb-3 block text-sm font-medium dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message || ""}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project..."
                          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base transition-all outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <motion.button
                        type="submit"
                        disabled={!isFormValid}
                        whileHover={!reduceMotion ? { scale: 1.02 } : undefined}
                        whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
                        className={`bg-primary shadow-submit dark:shadow-submit-dark rounded-sm px-9 py-4 text-base font-medium text-white transition-all duration-300 ${
                          !isFormValid ? "cursor-not-allowed opacity-50" : ""
                        }`}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalState.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="dark:bg-gray-dark shadow-three relative w-full max-w-md rounded-sm bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {modalState.type === "success" ? (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-center text-xl font-semibold text-black dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-center text-base">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <svg
                    className="h-6 w-6 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-center text-xl font-semibold text-black dark:text-white">
                  Something Went Wrong
                </h3>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-center text-base">
                  Failed to send your message. Please try again later.
                </p>
              </>
            )}
            <button
              onClick={closeModal}
              className="bg-primary hover:bg-primary/90 mt-6 w-full rounded-sm px-6 py-3 text-base font-medium text-white transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Contact;
