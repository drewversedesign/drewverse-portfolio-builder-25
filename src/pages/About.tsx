
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-drew-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="service-chip">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              About <span className="text-gradient">DrewVerse Design</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We are a creative studio focused on delivering exceptional digital experiences
              that help brands stand out in today's competitive landscape.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* About Us / Our Story Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">About Us</h2>
              <div className="bg-drew-dark-gray/30 p-8 rounded-xl border border-drew-purple/20 shadow-glow">
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <p className="text-gray-300">
                  Founded in 2024 by Ddamba Ian, Drewverse Design was born from a passion for creative 
                  storytelling, digital innovation, and brand transformation. Based in Kampala, Uganda, 
                  we set out to redefine how businesses establish their online presence through cutting-edge 
                  website development and branding solutions.
                </p>
                <p className="text-gray-300 mt-4">
                  With a team of talented designers, developers, and strategists, we help brands create 
                  a strong digital footprint by blending creativity with functionality. Whether you're a 
                  startup looking for a bold identity or an established business seeking a digital 
                  transformation, we have the expertise to make it happen.
                </p>
              </div>
            </motion.section>

            {/* Mission & Vision Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-drew-dark-gray/30 p-8 rounded-xl border border-drew-purple/20 shadow-glow">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with visually stunning, high-performance websites and 
                  strategically crafted brand identities that captivate audiences and drive success.
                </p>
              </div>
              
              <div className="bg-drew-dark-gray/30 p-8 rounded-xl border border-drew-purple/20 shadow-glow">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Our Vision</h3>
                <p className="text-gray-300">
                  To be a leading creative agency that revolutionizes brand experiences in Africa 
                  and beyond by delivering world-class design and technology solutions.
                </p>
              </div>
            </motion.section>

            {/* Our Values Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-drew-dark-gray/30 p-6 rounded-xl border border-drew-purple/20 shadow-glow">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🔥</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Creativity & Innovation</h4>
                      <p className="text-gray-300">We push creative boundaries and stay ahead of digital trends.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-drew-dark-gray/30 p-6 rounded-xl border border-drew-purple/20 shadow-glow">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">💡</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Client-Centered Approach</h4>
                      <p className="text-gray-300">Your vision is at the heart of everything we create.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-drew-dark-gray/30 p-6 rounded-xl border border-drew-purple/20 shadow-glow">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🚀</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Quality & Excellence</h4>
                      <p className="text-gray-300">Every project is a masterpiece, built for impact.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-drew-dark-gray/30 p-6 rounded-xl border border-drew-purple/20 shadow-glow">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🌍</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Integrity & Transparency</h4>
                      <p className="text-gray-300">We believe in honest communication and delivering on our promises.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Why Work With Us Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Why Work With Us?</h2>
              <div className="bg-drew-dark-gray/30 p-8 rounded-xl border border-drew-purple/20 shadow-glow space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <p className="text-gray-300"><strong>Personalized Approach</strong> – Every project is unique, tailored to your brand's specific needs.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <p className="text-gray-300"><strong>A Team of Experts</strong> – We bring together top-tier talent in design, branding, and web development.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <p className="text-gray-300"><strong>End-to-End Solutions</strong> – From strategy and design to execution and support, we've got you covered.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <p className="text-gray-300"><strong>Proven Track Record</strong> – We've helped businesses establish a powerful digital presence.</p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold mb-6">🚀 Let's build something extraordinary together!</h2>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-drew-purple to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
