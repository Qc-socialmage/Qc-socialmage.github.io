import { Button } from "@/components/button";
import ContactForm from "./ContactForm";
import SectionLink from "./SectionLink"
import { Card, CardContent } from "@/components/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#161616] to-[#2b2b2b] text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Social Mage</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Track. Pitch. Grow. Smarter influencer marketing starts here.
        </p>
        <SectionLink targetId="join-wait-list">
          <Button className="px-12 py-4 rounded-lg shadow-lg">Join Pre-launch</Button>
        </SectionLink>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Built for Creators, Brands, and Managers</h2>
        <p className="text-lg mb-6">
          Social Mage is a mobile-first influencer marketing platform focused on TikTok. We make it easy to track growth, pitch to brands, and manage campaigns — all with real, useful data.
        </p>
      </section>

      {/* Screenshots Section */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            src: "/screens/analytics.png", // replace these with clean screen shots withouth the black line
            caption: "Clean analytics dashboard" // TODO change caption 
          },
          {
            src: "/screens/audienceInsights.png", // replace these with clean screen shots withouth the black line
            caption: "Streamlined creator insights" // TODO change caption 
          },
          {
            src: "/screens/brandDeals.png", // replace these with clean screen shots withouth the black line
            caption: "Brand $ and performance summary" // TODO change caption 
          },
          {
            src: "/screens/earningsOverview.png", // replace these with clean screen shots withouth the black line
            caption: "Campaign performance summary" // TODO change caption 
          },
          {
            src: "/screens/settings.png", // replace these with clean screen shots withouth the black line
            caption: "Campaign performance summary" // TODO change caption 
          }
        ].map(({ src, caption }, i) => (
          <Card key={i} className="shadow-lg">
            <CardContent className="p-0">
              <img src={src} alt={caption} className="block w-full max-w-sm h-auto mx-auto rounded-lg object-contain" />
              <div className="p-4 text-center text-sm text-gray-800">{caption}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="font-semibold text-lg">📊 Cleanly Laid Out Analytics</h3>
            <p>Only the insights that matter — no clutter, no noise.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🔄 Live Engagement Stats</h3>
            <p>Updated daily so you're always working with fresh data.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🤝 Streamlined Brand Pitching/Partnerships</h3>
            <p>Creator profiles and built-in communication for frictionless deals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">💸 Seriously Affordable</h3>
            <p>Built for creators and small teams — Enterprise features without the enterprise price tag.</p>
          </div>
        </div>
      </section>

      {/* User Research Insight */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <blockquote className="italic text-gray-600 text-lg">
          “In early interviews, creators said they struggle to prove their worth to brands — Social Mage makes that easy.”
        </blockquote>
      </section>

      {/* CTA Section */}
      <section id="join-wait-list" className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow your Brand, Partner with others!</h2>
        <ContactForm/>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-gray-500">
        {/* <p>© 2025 Social Mage • <a href="#" className="underline">Privacy Policy</a> • <a href="mailto:qcopeland.socialmage@gmail.com" className="underline">Contact</a></p> */}
        <p>© 2025 Social Mage • <a href="mailto:qcopeland.socialmage@gmail.com" className="underline">Contact</a></p>
      </footer>
    </div>
  );
} 

