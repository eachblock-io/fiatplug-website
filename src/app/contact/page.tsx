import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-amber-50">
      <section className="h-auto py-20">
        <div className="container mx-auto py-20 flex items-center justify-center">
          <div className="bg-white py-20 drop-shadow-xl rounded-lg">
            <div className="header text-center lg:w-3/4 w-full mx-auto space-y-4 mb-6">
              <h1 className="lg:text-4xl text-2xl font-bold">Contact Us</h1>
              <p className="lg:px-40 px-8">
                For any issues, questions, or assistance, our dedicated customer
                support team is here to help.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
