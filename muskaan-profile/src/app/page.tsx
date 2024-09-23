import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf4ec] text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#fdf4ec] border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-bold text-[#ffa5c6]">
              Sheik Muskaan
            </Link>
          </div>
          <div>
            <ul className="flex space-x-8 text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#ffa5c6]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ffa5c6]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ffa5c6]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center mt-16">
        <Image
          src="/avatar.jpg"
          alt="Muskaan's Avatar"
          width={200}
          height={200}
          className="rounded-full border-4 border-[#79c9fa]"
        />
        <h1 className="text-5xl font-bold mt-6 text-[#ffa5c6]">
          Sheik Muskaan
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-xl">
          A Software Engineer and Freelance Educator with a passion for cloud
          services and full-stack development.
        </p>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-20 border-t border-gray-200 text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-[#79c9fa]">
            Educational innovation is built, not found.
          </h2>
          <p className="text-gray-600">
            Great education in technology equips learners with the skills to
            innovate and adapt in a rapidly changing world. I specialize in
            creating hands-on, practical learning experiences that empower
            students to master tech and thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 border-t border-gray-200 text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-[#79c9fa]">
            Services I Offer
          </h2>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>🛠 IT Training Workshops</li>
            <li>🎤 Public speaking on IT</li>
            <li>👩‍🏫 Mentorship for IT students</li>
            <li>🤝 Developing educational videos</li>
          </ul>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="case-studies"
        className="py-20 border-t border-gray-200 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-[#79c9fa]">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#ffa5c6] text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Neuroinclusive Design for ADHD
              </h3>
              <p>
                Designed visual identity and website for Inflow, an app aimed at
                neurodivergent users.
              </p>
            </div>
            <div className="p-6 bg-[#ffa5c6] text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                UX for Social Justice
              </h3>
              <p>
                Worked with Neon to design an accessible website for social
                justice activists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer
        id="contact"
        className="py-12 text-center border-t border-gray-200 text-gray-600"
      >
        <p>
          Contact me at{" "}
          <a
            href="mailto:tamara@example.com"
            className="text-[#79c9fa] underline"
          >
            muskaansheik03@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
