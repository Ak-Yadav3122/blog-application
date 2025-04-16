"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";


const AboutSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: About Content */}
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              About <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Blogify</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Welcome to Blogify, a place where knowledge meets creativity. Our platform is dedicated to sharing insights, industry trends, and inspiring stories from thought leaders worldwide.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re here to learn, share, or explore new perspectives, Blogify is your gateway to valuable content that sparks curiosity and innovation.
            </p>
            
            {/* Call to Action */}
            <div className="mt-6">
              <Link href="/">
              <Button className="px-6 py-3 text-lg font-semibold">
                Learn More
              </Button>
              </Link>
              
            </div>
          </div>

          {/* Right: About Image */}
          <div className="flex justify-center">
            <Image 
              src="/blog-about.avif" 
              alt="About Blogify" 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>

        </div>

        {/* Divider */}
        <div className="border-t my-16"></div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get in <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question? Want to collaborate? We&apos;d love to hear from you!
          </p>
        </div>

        {/* Grid Layout for Contact Form & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Contact Form */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground">Name</label>
                <Input type="text" placeholder="Enter your name" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="Enter your email" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">Message</label>
                <Textarea placeholder="Write your message here..." rows={5} required />
              </div>

              <Button className="w-full text-lg font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a href="mailto:contact@blogify.com" className="text-lg font-semibold text-foreground hover:underline">
                    aichchhik12@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href="tel:+1234567890" className="text-lg font-semibold text-foreground hover:underline">
                    +91 8576834748
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold text-foreground">
                    Delhi NCR
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
export default AboutSection;

