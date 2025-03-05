import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Karan Soni",
  
};

export default function Projects() {
  
  return (
    <Container>
      {/* Contact details */}
  <div>
    <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Email:</h3>
    <a href="mailto:bussinesskaran6@gmail.com">bussinesskaran6@gmail.com</a>
  </div>

  <div style={{ marginTop: "20px" }}>
    <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Phone:</h3>
    <p>+91 9403343224</p>
  </div>
    </Container>
  );
}
