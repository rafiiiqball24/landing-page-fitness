import { Menu, Mail, Phone, MapPin, Play } from "lucide-react"

export default function FitnessLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Poppins']">
      {/* Header */}
      <header className="bg-black py-4">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/fitness-logo.png" alt="Fitness Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white logo-font">Fitness</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              About Us
            </a>
            <a href="#trainer" className="text-white hover:text-cyan-400 transition-colors">
              Trainer
            </a>
            <a href="#review" className="text-white hover:text-cyan-400 transition-colors">
              Reviews
            </a>
          </div>
          <Menu className="md:hidden w-6 h-6 text-white" />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16">
        <div className="container mx-auto px-6">
          {/* Full Width Image - Kettlebells */}
          <div className="mb-12">
            <img
              src="/kettlebells.jpeg"
              alt="Kettlebells on gym floor"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Title */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                We Dont Just Practice
                <br />
                But Calms The Soul
              </h1>
            </div>

            {/* Right Content - Lorem Ipsum */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Features - Text miring sesuai referensi */}
      <section className="bg-cyan-400 py-6">
        <div className="flex gap-0 w-full">
          <div className="flex-1 py-6 px-6 text-center">
            <div className="feature-text">Beginner Friendly</div>
          </div>
          <div className="flex-1 py-6 px-6 text-center">
            <div className="feature-text">Solid Community</div>
          </div>
          <div className="flex-1 py-6 px-6 text-center">
            <div className="feature-text">Free Consultation</div>
          </div>
          <div className="flex-1 py-6 px-6 text-center">
            <div className="feature-text">Trainer Professional</div>
          </div>
        </div>
      </section>

      {/* About Section - Background dengan warna #1391AD40 */}
      <section id="about" className="py-16" style={{ backgroundColor: "#1391AD40" }}>
        <div className="container mx-auto px-0 lg:px-6">
          {/* Top image with play button */}
          <div className="relative mb-0 lg:mb-0">
            <img
              src="/gym-hero.jpeg"
              alt="Person doing squats in modern gym"
              className="w-full h-80 lg:h-96 object-cover rounded-t-2xl lg:rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-500 hover:bg-red-600 rounded-full p-4 transition-colors shadow-lg">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </button>
            </div>
          </div>

          {/* Content below image, dark background, two columns */}
          <div className="bg-[#0B232A] rounded-b-2xl lg:rounded-lg px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Fitness is The Best Solution For You</h2>
              <p className="text-gray-100 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue. Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas
                viverra. Fermentum sed amet eget elementum volutpat amet augue.
              </p>
              <button className="self-start bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition-colors shadow-md">
                Contact Now
              </button>
            </div>

            {/* Right Content - Contact Card */}
            <div className="bg-white rounded-2xl p-8 text-black shadow-lg w-full max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-6 text-black">Contact Us!</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-black" />
                  <div>
                    <span className="font-semibold text-base text-black block">Email</span>
                    <span className="text-gray-600 text-sm block">ecotourtravelkarimunjawa@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-black" />
                  <div>
                    <span className="font-semibold text-base text-black block">Phone</span>
                    <span className="text-gray-600 text-sm block">0858-0033-1815</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-black" />
                  <div>
                    <span className="font-semibold text-base text-black block">Address</span>
                    <span className="text-gray-600 text-sm block">Jl. Bukit Kapuran, Karimunjawa, RT 04<br/>RW 01 Jepara, Jawa Tengah, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section - Layout sesuai gambar */}
      <section id="trainer" className="py-16 bg-black">
        <div className="container mx-auto px-6">
          {/* Header dengan large image di kiri dengan frame rounded rectangle */}
          <div className="flex items-center mb-12">
            <div className="relative mr-8 flex-shrink-0" style={{ width: "320px", height: "128px" }}>
              <div
                className="w-full h-full overflow-hidden bg-gray-800"
                style={{
                  borderRadius: "32px",
                }}
              >
                <img
                  src="/gym-header-frame.png"
                  alt="Woman exercising on gym equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trainer Professional</h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue.
              </p>
            </div>
          </div>

          {/* 4 Trainer Cards - Nama langsung di atas frame */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Cevalline Hyen", image: "/cevalline-hyen-correct.png" },
              { name: "Step Hanson", image: "/step-hanson-correct.png" },
              { name: "Angela Traine", image: "/angela-traine.png" },
              { name: "Robert Bert", image: "/robert-bert-correct.png" },
            ].map((trainer, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg text-white mb-4">{trainer.name}</h3>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className={`w-full h-96 ${
                      trainer.name === "Angela Traine"
                        ? "object-cover object-center"
                        : trainer.name === "Robert Bert"
                          ? "object-cover object-top"
                          : "object-cover"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Spacing dikurangi */}
      <section id="review" className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">They Are Happy Members</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Phone", role: "Teacher", image: "/phone-testimonial.png" },
              { name: "Jessica", role: "CEO", image: "/jessica-testimonial.png" },
              { name: "Ozzie", role: "Designer", image: "/ozzie-testimonial.png" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-black">
                <div className="flex items-center mb-3">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consecasatetur. Natoque sed dui odio urna lectus enim feugiat justo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA - Menggunakan font PT */}
      <section className="py-6" style={{ backgroundColor: "#1AB9BF" }}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl font-bold text-white pt-font">Join Our Member Now!</h2>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Contact
          </button>
        </div>
      </section>

      {/* Footer - Sesuai referensi dengan logo baru */}
      <footer className="py-8" style={{ backgroundColor: "#1AB9BFA1" }}>
        <div className="container mx-auto px-6">
          {/* Logo dan Navigation */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/fitness-logo-footer.png" alt="Fitness Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-white logo-font">Fitness</span>
            </div>
            <div className="flex justify-center space-x-8 mb-6">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="#trainer" className="text-white hover:text-yellow-400 transition-colors">
                Trainer
              </a>
              <a href="#program" className="text-white hover:text-yellow-400 transition-colors">
                Program
              </a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/20 pt-4">
            <p className="text-white text-sm">2023 Fitness. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
