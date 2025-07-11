import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-800 px-6=3 py-16 space-y-20">
            {/* Privacy Policy */}
            <section id="privacy" className="max-w-4xl scroll-mt-20 mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">Privacy Policy</h2>
                <p className="mb-2 text-left px-8">
                    Social Mage respects your privacy. While we are still finalizing the specifics of the data we will store,
                    we want to be transparent about our commitment to protecting your personal information. We may collect certain data
                    to optimize your experience on the platform, but we are currently assessing which types of data are essential
                    for our services. Any data collected will be handled with the utmost care and in
                    compliance with applicable privacy laws.
                </p>
                <ul className="list-disc pl-15 pr-15 space-y-2">
                    <li>Any user data that is retained will be handled in compliance with all applicable laws and Integrated partner terms.</li>
                    <li>If personal data is collected (e.g. TikTok user ID or profile info), it is only used to display relevant metrics.</li>
                    <li>Social Mage does not share data with third parties</li>
                    <li>You may request deletion of your data by contacting <a href="mailto:info@socialmage.site" className="text-blue-600 hover:underline">info@socialmage.site</a>.</li>
                    <li>We comply with all our Integrated partners Developer Terms and applicable data protection laws.</li>
                </ul>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
