import { Menu, Mail, Phone, MapPin, Play } from "lucide-react"

export default function FitnessLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Poppins']">
      {/* Header */}
      <header className="bg-black py-4">
        <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/fitness-logo.png" alt="Fitness Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-2xl font-bold text-white logo-font">Fitness</span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
              Home
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
              About Us
            </a>
            <a href="#trainer" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
              Trainer
            </a>
            <a href="#review" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
              Reviews
            </a>
          </div>
          <Menu className="md:hidden w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer" />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Full Width Image - Kettlebells */}
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <img
              src="/kettlebells.jpeg"
              alt="Kettlebells on gym floor"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Content - Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                We Dont Just Practice
                <br />
                But Calms The Soul
              </h1>
            </div>

            {/* Right Content - Lorem Ipsum */}
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Features - Text miring sesuai referensi */}
      <section className="bg-cyan-400 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col sm:flex-row gap-0 w-full">
          <div className="flex-1 py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 text-center border-b sm:border-b-0 sm:border-r border-cyan-300 last:border-0">
            <div className="feature-text text-sm sm:text-base lg:text-xl font-bold italic">Beginner Friendly</div>
          </div>
          <div className="flex-1 py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 text-center border-b sm:border-b-0 sm:border-r border-cyan-300 last:border-0">
            <div className="feature-text text-sm sm:text-base lg:text-xl font-bold italic">Solid Community</div>
          </div>
          <div className="flex-1 py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 text-center border-b sm:border-b-0 sm:border-r border-cyan-300 last:border-0">
            <div className="feature-text text-sm sm:text-base lg:text-xl font-bold italic">Free Consultation</div>
          </div>
          <div className="flex-1 py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 text-center">
            <div className="feature-text text-sm sm:text-base lg:text-xl font-bold italic">Trainer Professional</div>
          </div>
        </div>
      </section>

      {/* About Section - Background dengan warna #1391AD40 */}
      <section id="about" className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: "#1391AD40" }}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Full Width Image with Play Button */}
          <div className="relative mb-8 sm:mb-10 lg:mb-12">
            <img
              src="/gym-hero.jpeg"
              alt="Person doing squats in modern gym"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-500 hover:bg-red-600 rounded-full p-3 sm:p-4 transition-colors shadow-lg">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </button>
            </div>
          </div>

          {/* Content Below Image with proper background division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Content - Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Fitness is The Best Solution For You
              </h2>
              <p className="text-gray-100 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue. Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas
                viverra. Fermentum sed amet eget elementum volutpat amet augue.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-cyan-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors">
                  Contact Now
                </button>
              </div>
            </div>

            {/* Right Content - Contact Info Card with white background */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-black shadow-lg mx-auto w-full max-w-md lg:max-w-none">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-black">Contact Us!</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-black">Email</h4>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">ecotourtravelkarimunjawa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-black">Phone</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">0858-0033-1815</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-black">Address</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Jl. Bukit Kapuran, Karimunjawa, RT 04
                      <br />
                      RW 01 Jepara, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section - Layout sesuai gambar */}
      <section id="trainer" className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header dengan large image di kiri dengan frame rounded rectangle */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 sm:mb-10 lg:mb-12 gap-4 lg:gap-8">
            <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-80 xl:w-96">
              <div className="w-full h-32 sm:h-36 lg:h-32 xl:h-36 overflow-hidden bg-gray-800 rounded-2xl lg:rounded-3xl">
                <img
                  src="/gym-header-frame.png"
                  alt="Woman exercising on gym equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Trainer Professional
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur. Eu diam nulla netus in maecenas viverra. Fermentum sed amet eget
                elementum volutpat amet augue.
              </p>
            </div>
          </div>

          {/* 4 Trainer Cards - Nama langsung di atas frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { name: "Cevalline Hyen", image: "/cevalline-hyen-correct.png" },
              { name: "Step Hanson", image: "/step-hanson-correct.png" },
              { name: "Angela Traine", image: "/angela-traine.png" },
              { name: "Robert Bert", image: "/robert-bert-correct.png" },
            ].map((trainer, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-4">{trainer.name}</h3>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className={`w-full h-64 sm:h-80 lg:h-96 ${
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
      <section id="review" className="py-6 sm:py-8 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">They Are Happy Members</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Phone", role: "Teacher", image: "/phone-testimonial.png" },
              { name: "Jessica", role: "CEO", image: "/jessica-testimonial.png" },
              { name: "Ozzie", role: "Designer", image: "/ozzie-testimonial.png" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 text-black">
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-base sm:text-lg truncate">{member.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consecasatetur. Natoque sed dui odio urna lectus enim feugiat justo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA - Menggunakan font PT */}
      <section className="py-4 sm:py-6" style={{ backgroundColor: "#1AB9BF" }}>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white pt-font text-center sm:text-left">
            Join Our Member Now!
          </h2>
          <button className="bg-yellow-400 text-white px-4 sm:px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors text-sm sm:text-base">
            Contact
          </button>
        </div>
      </section>

      {/* Footer - Sesuai referensi dengan logo baru */}
      <footer className="py-6 sm:py-8" style={{ backgroundColor: "#1AB9BFA1" }}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Logo dan Navigation */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img src="/fitness-logo-footer.png" alt="Fitness Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="text-xl sm:text-2xl font-bold text-white logo-font">Fitness</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Home
              </a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                About Us
              </a>
              <a href="#trainer" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Trainer
              </a>
              <a href="#program" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Program
              </a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/20 pt-3 sm:pt-4">
            <p className="text-white text-xs sm:text-sm">2023 Fitness. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
