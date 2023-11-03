import Footer from "@/components/Footer";
import React from "react";

const PrivacyPage = () => {
  return (
    <section>
      <div className="container mx-auto my-20">
        <h1 className="text-4xl font-bold text-center lg:my-20 my-10">Privacy policy</h1>
        <div className="content lg:w-4/6 w-full mx-auto">
          <p>
            FiatPlug, a peer-to-peer exchange platform is committed to
            protecting the privacy of her customers, and takes data protection
            responsibilities with the utmost seriousness.
          </p>
          <p className="mt-4">
            This privacy policy describes how FiatPlug collects and processes
            your personal data through the FiatPlug websites and applications
            that are referenced in this statement . FiatPlug refers to an
            ecosystem comprising FiatPlug websites (whose domain names include
            but are not limited to www.FiatPlug.com/en), mobile applications,
            clients, applets and other applications that are developed to offer
            FiatPlug Services, and includes independently-operated platforms,
            websites and clients within the ecosystem (e.g., FiatPlug’s Open
            Platform, FiatPlug Launchpad, FiatPlug Labs, FiatPlug Charity,
            FiatPlug gateways).
          </p>
          <p className="mt-4">
            This Privacy policy applies to all Personal data processing
            activities carried out by us, across platforms, websites, and
            departments of FiatPlug.
          </p>
          <p className="mt-4">
            To the extent that you are a customer or user of our services, this
            Privacy policy applies together with any terms of business and other
            contractual documents, including but not limited to any agreements
            we may have with you.
          </p>
          <p className="mt-4">
            To the extent that you are not a relevant stakeholder, customer, or
            user of our services, but are using our website, this Privacy policy
            also applies to you together with other notices of Fiatplug.
          </p>
          <p className="mt-4">
            This Policy statement should therefore be read together with our
            other Notices, which provides further details on our operations. Our
            other Notices can be accessed <a href="/terms&condition" className="text-red-400">here</a>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PrivacyPage;
