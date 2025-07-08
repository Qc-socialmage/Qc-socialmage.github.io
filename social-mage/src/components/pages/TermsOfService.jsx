import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6=3 py-16 space-y-20">
      {/* Terms of Service */}
      <section id="terms" className="max-w-4xl scroll-mt-20 mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">Terms of Service</h2>
        <p className="mb-2 text-left px-8">
          Welcome to Social Mage. By accessing our platform, you agree to the following terms.
          Social Mage helps creators and brands collaborate using data from our integrated partners, such as video performance,
          engagement, and other analytics.
        </p>
        <ul className="list-disc pl-15 pr-15 space-y-2">
          <li>Users are responsible for ensuring their actions comply with our partners community guidelines.</li>
          <li>You may not misuse data accessed through Social Mage or resell any insights or analytics obtained.</li>
          <li>We reserve the right to update these terms at any time without prior notice.</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;