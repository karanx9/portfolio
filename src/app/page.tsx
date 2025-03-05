import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I am &apos;Karan Soni</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Software developement in test (SDET) that loves{" "}
        <Highlight>Quality Analysis of Software or Web</Highlight> which can impact the whole product and give the customer a better experience of Bug-Free Software or Web.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Associate QA Engineer with{" "}
        <Highlight>1 years of experience</Highlight> Ensuring the quality of product by performing vast testing with Agile Methodologies.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
