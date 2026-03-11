import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-farm-green overflow-hidden min-h-[300px] md:min-h-[350px]">
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Farm background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-farm-green/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full min-h-[300px] md:min-h-[350px] pb-12">
            <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 text-sm font-sans text-center">
              <a href="/" className="hover:text-farm-orange transition-colors">HOME</a>
              {" / "}
              <span>CONTACT US</span>
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Mail */}
              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-farm-orange/15 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-farm-orange" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-base mb-2">Mail us 24/7</h3>
                  <p className="text-muted-foreground text-sm">Florafarms@gmail.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-farm-orange/15 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-farm-orange" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-base mb-2">Call us 24/7</h3>
                  <p className="text-muted-foreground text-sm">+234 810235467</p>
                </div>
              </div>
              {/* Location */}
              <a href="https://maps.app.goo.gl/JMGrNnqfdSPqogsW6?g_st=iw" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-farm-orange/15 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-farm-orange" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-base mb-2">Our Locations</h3>
                  <p className="text-muted-foreground text-sm">Behind Ave Maria Villa, Ijurin Ekiti</p>
                </div>
              </a>
            </div>

            {/* Map + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-xl overflow-hidden">
              {/* Map placeholder */}
              <div className="min-h-[400px] bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d5.2!3d7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzYnMDAuMCJOIDXCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FloraFarms location map"
                />
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <p className="text-muted-foreground text-sm mb-2">Get to Contact Us</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Have any Questions?<br />Get in Touch
                </h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-farm-orange"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-farm-orange"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-farm-orange"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-farm-orange"
                    />
                  </div>
                  <textarea
                    rows={5}
                    placeholder=""
                    className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-farm-orange resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground py-3 rounded-full font-semibold transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
