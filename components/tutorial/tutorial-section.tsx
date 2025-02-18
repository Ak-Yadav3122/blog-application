"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const TutorialPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {/* Back to Home Button */}
      <div className="container mx-auto px-6 py-6 flex justify-start">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Blog
            </span>
            <span className="text-foreground">ify</span>
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 text-center bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">Master New Skills</h1>
        <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
          Explore step-by-step tutorials to level up your knowledge in web
          development, design, and technology.
        </p>
      </div>

      {/* Tutorial Categories */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Explore Categories
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
              <Link href={category.link}>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Tutorials */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Latest Tutorials
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                width={500}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tutorial.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {tutorial.description}
                </p>
                <Link href={tutorial.link}>
                  <Button className="mt-4">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Dummy Data
// link: "/tutorials/web-dev"
const categories = [
  {
    title: "Web Development",
    description:
      "Build modern websites with HTML, CSS, JavaScript, and frameworks.",
    link: "/tutorials",
  },
  {
    title: "UI/UX Design",
    description:
      "Learn the principles of designing stunning and user-friendly interfaces.",
    link: "/tutorials",
  },
  {
    title: "Backend Development",
    description: "Master Node.js, Express, Databases, and API development.",
    link: "/tutorials",
  },
];

const tutorials = [
  {
    title: "React Hooks Explained",
    description: "A deep dive into useState, useEffect, and custom hooks.",
    image: "/react-image.avif",
    link: "/tutorials",
  },
  {
    title: "Tailwind CSS Best Practices",
    description: "How to style efficiently with Tailwind CSS.",
    image: "/tailwind-images.jpeg",
    link: "/tutorials",
  },
  {
    title: "Building a REST API with Node.js And MongoDB",
    description: "Step-by-step guide to create a robust API.",
    image: "/restAPI-image.webp",
    link: "/tutorials",
  },
];

const faqs = [
  {
    question: "Are these tutorials beginner-friendly?",
    answer: "Yes! We cover everything from the basics to advanced topics.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Some tutorials require prior knowledge, but we have beginner-friendly guides as well.",
  },
  {
    question: "Can I contribute to the tutorials?",
    answer: "Absolutely! You can submit your own tutorials or suggest topics.",
  },
];

export default TutorialPage;
