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
          Track. Pitch. Grow. Smart influencer marketing starts here.
        </p>
        <SectionLink targetId="join-wait-list">
          <div className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-center cursor-pointer">
            Join Pre-launch
          </div>
        </SectionLink>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Built for Creators and Brands</h2>
        <p className="text-lg mb-6">
          Social Mage is the smart way to manage influencer marketing! Creators can track their metrics across platforms like TikTok,
          Instagram, YouTube and more - all in one dashboard. They can discover brand collaborations, pitch themselves profressionally, and monitor
          earnings over time. Brands can launch campaigns, attract the right creators, and get deep insights into influencer performance and 
          audience reach. Whether you're growing your influence or scailing a campaign, Social Mage connects the right people with the right data
        </p>
      </section>

      {/*All Screens section */}
      <section className="py-4 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">All Your Insights in One Place</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-1">
          From analytics to earnings to brand deals—everything you need, beautifully organized and always accessible.
        </p>
          <img 
            src="/screens/AllScreens_Cropped.jpg" 
            alt="App screens preview" 
            className="w-full max-w-3xl mx-auto h-auto object-contain"
          />
      </section>

      {/* Screenshots Section */}
      <section className="py-2 px-6 space-y-6 max-w-6xl mx-auto mt-2">
        {/* First row */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              src: "/screens/analytics.png",
              caption: "Clean analytics dashboard"
            },
            {
              src: "/screens/audienceInsights.png",
              caption: "Streamlined creator insights"
            },
            {
              src: "/screens/brandDeals.png",
              caption: "Brand $ and performance summary"
            }
          ].map(({ src, caption }, i) => (
            <Card key={i} className="shadow-lg">
              <CardContent className="p-0">
                <img src={src} alt={caption} className="block w-full max-w-sm h-auto mx-auto rounded-lg object-contain" />
                <div className="p-4 text-center text-sm text-gray-800">{caption}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row with 2 items centered */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              src: "/screens/earningsOverview.png",
              caption: "Campaign performance summary"
            },
            {
              src: "/screens/settings.png",
              caption: "Campaign performance summary"
            }
          ].map(({ src, caption }, i) => (
            <Card key={i} className="shadow-lg">
              <CardContent className="p-0">
                <img src={src} alt={caption} className="block w-full max-w-sm h-auto mx-auto rounded-lg object-contain" />
                <div className="p-4 text-center text-sm text-gray-800">{caption}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/*Ingegrations section */}
      <section className="py-12 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Integrated With</h2>
        <p className="text-gray-600 mb-6">
          Connect with top platforms — launching with TikTok and Instagram, with YouTube, X, and more under development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 items-center">
          <img src="/screens/tiktok.JPG" alt="TikTok" className="h-15 mx-auto" />
          <img src="/screens/instagram.JPG" alt="Instagram" className="h-15 mx-auto" />
          <img src="/screens/youtube.JPG" alt="YouTube (Coming Soon)" className="h-18 mx-auto opacity-50" title="Coming Soon" />
          <img src="/screens/x.JPG" alt="Pinterest (Coming Soon)" className="h-15 mx-auto opacity-50" title="Coming Soon" />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="font-semibold text-lg">📱Mobile first platform</h3>
            <p>All-in-one. Mobile-first. Designed to do more with a tap.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">📊 Cleanly Laid Out Analytics</h3>
            <p>Only the insights that matter — no clutter, no noise.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🔄 Live Engagement Stats</h3>
            <p>Real time analytics so you're always working with fresh data.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">💸 Seriously Affordable</h3>
            <p>Built for Creators and Brands of all sizes — Enterprise features without the enterprise price tag.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🤝 Streamlined Brand Pitching/Partnerships</h3>
            <p>Creator profiles and built-in communication for frictionless deals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🔗 Data accross all socials</h3>
            <p>Integrations with all the popular social media platforms.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">🔮 Coming Soon - Post Launch: Even More Ways to Grow</h2>
        <div className="grid md:grid-cols-1 gap-10 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="font-semibold text-lg">👀 Spot top performers at a glance</h3> 
            <p>Quickly identify creators and collaborators making the biggest impact—so you know who's really moving the needle.</p> 
          </div>
          <div>
            <h3 className="font-semibold text-lg">🆚 See how you compare across the industry</h3> 
            <p>Quickly identify creators and collaborators making the biggest impact—so you know who's really moving the needle.</p> 
          </div>
          <div>
            <h3 className="font-semibold text-lg">🤖 Uncover new growth opportunities with smart insights</h3> 
            <p>Let intelligent signals surface what's working—and what's next—so you can grow with confidence.</p> 
          </div>
        </div>
      </section>

      {/* User Research Insight - TODO see about create carusel for interview testominoals */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h4 className="text-3xl font-semibold mb-4">In Early Interviews</h4>
        {/* <blockquote className="italic text-gray-600 text-lg">
          “In early interviews, creators said, proving your value to brands shouldn't be hard — Social Mage would make that easy.”
        </blockquote> */}
        <blockquote className="italic text-gray-600 text-lg">
          “Most platforms just give you a media kit. We need tools that actually help us showcase our value to brands—clearly and effortlessly.”
        </blockquote>
        {/* <blockquote className="italic text-gray-600 text-lg">
          “There should be a space where creators and brands connect seamlessly, from both sides.”
        </blockquote> */}
        {/* <blockquote className="italic text-gray-600 text-lg">
          “Having a media kit about all my stats and metrics accross my socials - game changing.”
        </blockquote> */}
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

