import { BlogFooter } from "@/components/home/blogfooter";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { AllArticlesPageSkeleton } from "../articles/page";

const page = async () => {
  return (
    <main>
      <HeroSection />
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-indigo-950  py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold relative tracking-tight text-indigo-700 dark:text-indigo-200 transition-colors duration-500 ease-in-out sm:text-4xl">
            Featured Articles
            </h2>

            <p className="mt-4 text-lg text-pink-500 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>

          {/* Top Articles */}
          <Suspense fallback={<AllArticlesPageSkeleton />}>
            <TopArticles />
          </Suspense>

          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                // variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default page;
