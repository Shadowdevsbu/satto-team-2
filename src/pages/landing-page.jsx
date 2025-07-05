import React from 'react';
import {
  Rocket,
  Lightbulb,
  Brain,
  Book,
  GraduationCap,
  Lock,
  Wallet,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';

// Hero feature icons
const featureIconData = [
  { icon: <Brain size={28} />, title: "Expert-verified homework help" },
  { icon: <Book size={28} />, title: "Personalized study plans" },
  { icon: <Lightbulb size={28} />, title: "Instant verified answers" },
];

// Step-by-step feature process
const featureSteps = [
  { number: "1", title: "Create or Browse Tasks", desc: "Students post tasks. Solvers browse gigs that match their skills." },
  { number: "2", title: "Submit or Review Proposals", desc: "Solvers send bids. Students review and choose who to work with." },
  { number: "3", title: "Secure the Deal", desc: "Payments are held in escrow. Communication happens in-app." },
  { number: "4", title: "Complete & Get Paid", desc: "Work is submitted, approved, and payment is released, all happens in the app" },
];

// Why Satto cards
const whySattoItems = [
  {
    icon: <GraduationCap size={48} className="text-green-700" />,
    title: "Built for Students",
    description: "Satto was created with student struggles in mind, real deadlines, real needs.",
  },
  {
    icon: <Lock size={48} className="text-green-700" />,
    title: "Escrow-Powered Payments",
    description: "Money is held safely until the job is done right no risks, no games.",
  },
  {
    icon: <Wallet size={48} className="text-green-700" />,
    title: "Earn While You Learn",
    description: "Use your skills to solve academic challenges, gain experience, and make money.",
  },
];

// Footer Social Icons
const socialIcons = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Youtube size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
];

// Footer Link Sections
const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
  },
  {
    heading: "Company",
    links: ["About", "Contact us", "Careers", "Culture", "Blog"],
  },
  {
    heading: "Support",
    links: ["Getting started", "Help center", "Server status", "Report a bug", "Chat support"],
  },
];

const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-no-repeat font-inter min-h-screen"
      style={{ backgroundImage: "url('/satto_landing.png')" }}
    >
      {/* Navbar */}
      <nav className="max-w-[997px] mx-auto mt-10 px-6 bg-white shadow-md rounded-md flex items-center justify-between h-[75px]">
        <div className="text-lg font-bold text-black">SATTO</div>
        <div className="hidden md:flex gap-12 text-sm">
          {["Home", "Features", "More", "Join us"].map((label, i) => (
            <a key={i} href="#" className="hover:text-green-700 transition">{label}</a>
          ))}
        </div>
        <a href="#signup" className="bg-black text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Sign Up</a>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-24 px-6">
        <h1 className="text-[42px] md:text-[60px] font-bold leading-tight">
          The student powered<br />
          way to get work <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full">done</span>
        </h1>
        <p className="text-gray-600 mt-5 text-lg">
          A gig-based platform for academic tasks where students connect,<br />
          collaborate, and earn by helping each other succeed.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a href="#get-started" className="flex items-center gap-2 bg-green-700 text-white py-3 px-6 rounded-full hover:bg-green-800 transition">
            <Rocket size={18} /> Get started
          </a>
          <a href="#learn-more" className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-full shadow hover:bg-gray-200 transition">
            <Lightbulb size={18} /> Learn more
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-20">
          {featureIconData.map((item, i) => (
            <FeatureIconCard key={i} icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>

      {/* Feature Steps */}
      <section id="features" className="mt-48 text-center">
        <div className="bg-gradient-to-br from-green-50 to-green-100 px-6 py-2 inline-block rounded-lg shadow-md mb-8 font-semibold">Features</div>
        <h2 className="text-3xl font-semibold">Here's how Satto works</h2>
        <p className="text-sm text-gray-600 mt-3">So you can focus on what matters most</p>

        <div className="flex flex-wrap justify-center gap-20 mt-16 px-6">
          <div className="flex flex-col gap-16">
            {featureSteps.filter((_, i) => i % 2 === 0).map((step, i) => (
              <FeatureCard key={i} {...step} />
            ))}
          </div>
          <div className="flex flex-col gap-16">
            {featureSteps.filter((_, i) => i % 2 === 1).map((step, i) => (
              <FeatureCard key={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Satto */}
      <section className="mt-48 text-center px-6">
        <div className="px-6 py-2 inline-block rounded-lg shadow-md mb-8 font-semibold">Why Satto?</div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-12">
          What if getting academic help or earning from it was simple?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {whySattoItems.map((item, i) => (
            <WhySattoCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-48 text-center px-6 mb-20">
        <h2 className="text-4xl font-bold mb-10">
          Join thousands of students getting work done<br />
          with Satto today!
        </h2>
        <div className="flex justify-center gap-6">
          <a href="#get-started" className="flex items-center gap-2 bg-green-700 text-white py-3 px-6 rounded-full hover:bg-green-800 transition">
            <Rocket size={18} /> Post a Task
          </a>
          <a href="#explore-gigs" className="flex items-center gap-2 bg-white text-gray-800 py-3 px-6 rounded-md shadow hover:bg-gray-100 transition">
            <Lightbulb size={18} /> Explore gigs
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 mt-48 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Satto Info */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">SATTO</h3>
              <p className="text-gray-600 max-w-[311px] text-sm leading-relaxed mb-6">
                A gig-based platform for academic tasks where students connect, collaborate, and earn by helping each other succeed.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((item, i) => (
                  <a key={i} href={item.href} className="text-gray-600 hover:text-green-700 transition">
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {footerLinks.map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-black mb-4">{section.heading}</h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}><a href="#" className="text-gray-600 hover:text-green-700 transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold text-black mb-4">Contact us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail size={16} className="text-gray-600" /><a href="mailto:Satto@company.com" className="text-gray-600 hover:text-green-700 transition">Satto@company.com</a></li>
                <li className="flex items-center gap-2"><Phone size={16} className="text-gray-600" /><a href="tel:123-456-7890" className="text-gray-600 hover:text-green-700 transition">123-456-7890</a></li>
                <li className="flex items-center gap-2"><MapPin size={16} className="text-gray-600" /><span className="text-gray-600">Babcock University</span></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 mt-12 pt-8 text-center md:flex justify-between items-center text-sm">
            <p className="text-gray-600 mb-4 md:mb-0">Copyright © 2025 Satto</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="text-green-700 hover:underline">Terms and Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-green-700 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Components
const FeatureCard = ({ number, title, desc }) => (
  <div className="relative w-72 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition">
    <div className="absolute -left-12 top-4 w-10 h-10 bg-white border border-green-200 rounded-full flex items-center justify-center text-lg shadow">{number}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-600 mt-2 text-left">{desc}</p>
  </div>
);

const FeatureIconCard = ({ icon, title }) => (
  <div className="w-64 h-24 bg-gradient-to-br from-green-50 to-green-100 shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-4 hover:-translate-y-2 transition">
    <div className="mb-2">{icon}</div>
    <p className="font-medium">{title}</p>
  </div>
);

const WhySattoCard = ({ icon, title, description }) => (
  <div className="w-80 bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center justify-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
