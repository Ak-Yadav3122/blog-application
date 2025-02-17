"use client";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { Input } from "../ui/input";

export function BlogFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-indigo-950 border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 dark:from-indigo-400 dark:to-red-400 bg-clip-text text-transparent">
                Blogify
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Where ideas meet innovation. Dive into a world of insightful
              articles written by passionate thinkers and industry experts.
            </p>

            <div className="mt-6 flex gap-2">
              {/* button for twitter */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://x.com/AichchhikY?t=mnlyjuEc3rXQdYtS3WvFfQ&s=09",
                    "_blank"
                  )
                }
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </Button>
              {/* button for github */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/Ak-Yadav3122", "_blank")
                }
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </Button>

              {/* button for linkdin */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aichchhik-kumar/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </div>
          {/* Newsletter */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Stay-update
              </span>
            </h3>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                 className="pl-10 pr-4 py-6 focus:ring-2 focus:ring-indigo-600 rounded-md caret-white dark:caret-black"
                />
                <Mail className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blogify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
