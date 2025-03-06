import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Contact | Karan Soni",
};

export default function Projects() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className="space-y-6">
          {/* Email Section */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <FaEnvelope className="w-8 h-8 mb-3 text-blue-600" />
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <a 
              href="mailto:bussinesskaran6@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              bussinesskaran6@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <FaPhone className="w-8 h-8 mb-3 text-blue-600" />
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <a 
              href="tel:+919403343224"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              +91 9403343224
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/karanx9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/karan-soni-6263412b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
