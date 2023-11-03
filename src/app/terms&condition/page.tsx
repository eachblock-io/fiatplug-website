import Footer from "@/components/Footer";
import React from "react";

const PrivacyPage = () => {
  return (
    <section>
      <div className="container mx-auto my-20">
        <h1 className="text-4xl font-bold text-center lg:my-20 my-10">
          Terms & Condition
        </h1>
        <h1 className="text-lg font-bold text-center mb-4">
          Please review the User Agreement carefully.
        </h1>
        <div className="content lg:w-4/6 w-full mx-auto">
          <p className="mt-4"></p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PrivacyPage;
