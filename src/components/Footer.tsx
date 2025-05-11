import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin className="text-xl" />, href: 'https://www.linkedin.com/in/akshatajmera07' },
  { name: 'GitHub', icon: <FaGithub className="text-xl" />, href: 'https://github.com/akshatajmera7' },
  { name: 'Email', icon: <FaEnvelope className="text-xl" />, href: 'mailto:akshatajmera777@gmail.com' },
  { name: 'Instagram', icon: <FaInstagram className="text-xl" />, href: 'https://www.instagram.com/akshatajmera07/' },
  { name: 'Facebook', icon: <FaFacebook className="text-xl" />, href: 'https://www.facebook.com/people/Akshat-Ajmera/pfbid02B62nqCRhEGGmPaUT5n2sv6UvVezwEBY848gzaAZ9urWyLLZ9FEyPbUWsFw48ozhBl/' },
  { name: 'Twitter', icon: <FaTwitter className="text-xl" />, href: 'https://x.com/AkshatAjme47165' },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-black py-8 px-6 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AA</span>
              </div>
              <span className="text-white font-bold text-xl">Akshat Ajmera</span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md text-sm">
              Sophomore at BITS Pilani Hyderabad | Software Developer
            </p>
          </div>

          <div>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Akshat Ajmera
          {/* Designed with ❤️ */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
