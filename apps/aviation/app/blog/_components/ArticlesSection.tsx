"use client";

import { useState } from "react";
import { Calendar, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const articles = [
  {
    id: 1,
    slug: "future-of-aviation-africa",
    image: "/images/blog-article-future.png",
    category: "Industry Insights",
    title: "The Future of Aviation in Africa: Emerging Trends",
    description:
      "Exploring the latest developments in African aviation and what it means for industry stakeholders.",
    date: "April 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "safety-excellence-award",
    image: "/images/blog-article-safety.png",
    category: "Press Release",
    title: "Klock Aviation Receives Safety Excellence Award",
    description:
      "We are proud to announce that Klock Aviation has been recognized for its outstanding safety protocols and practices.",
    date: "April 2, 2025",
    readTime: "3 min read",
  },
  {
    id: 3,
    slug: "sustainability-private-aviation",
    image: "/images/blog-article-sustainability.png",
    category: "Sustainability",
    title: "Sustainability in Private Aviation: Our Commitment",
    description:
      "Learn about Klock Aviation initiatives to reduce environmental impact while maintaining premium service.",
    date: "March 20, 2025",
    readTime: "4 min read",
  },
  {
    id: 4,
    slug: "mining-logistics-case-study",
    image: "/images/blog-article-mining.png",
    category: "Case Study",
    title: "Case Study: Mining Logistics in Remote African Locations",
    description:
      "A comprehensive look at how Klock Aviation solves complex logistics challenges for mining operations.",
    date: "March 15, 2025",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "fleet-expansion-announcement",
    image: "/images/blog-article-fleet.png",
    category: "Company News",
    title: "Klock Aviation Expands Fleet with New Aircraft Acquisition",
    description:
      "We are pleased to announce the addition of a state-of-the-art aircraft to our growing fleet.",
    date: "March 8, 2025",
    readTime: "4 min read",
  },
  {
    id: 6,
    slug: "aircraft-management-benefits",
    image: "/images/blog-article-management.png",
    category: "Services",
    title: "The Benefits of Aircraft Management Services for Owners",
    description:
      "Exploring how professional aircraft management can optimize operations and reduce costs.",
    date: "February 27, 2025",
    readTime: "6 min read",
  },
];

const categories = [
  { name: "All Categories", count: 12 },
  { name: "Industry Insights", count: 4 },
  { name: "Press Releases", count: 3 },
  { name: "Company News", count: 2 },
  { name: "Case Studies", count: 2 },
  { name: "Sustainability", count: 1 },
  { name: "Services", count: 2 },
];

const recentPosts = [
  {
    id: 1,
    image: "/images/blog-recent-1.png",
    title: "The Future of Aviation in Africa: Emerging Trends",
    date: "April 15, 2025",
  },
  {
    id: 2,
    image: "/images/blog-recent-2.png",
    title: "Klock Aviation Receives Safety Excellence Award",
    date: "April 2, 2025",
  },
  {
    id: 3,
    image: "/images/blog-recent-3.png",
    title: "Sustainability in Private Aviation: Our Commitment",
    date: "March 20, 2025",
  },
];

export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Categories" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2
                className="text-[#091d42] text-2xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Latest Articles
              </h2>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-gray-200"
                />
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-[#FFC61B] text-[#091d42] hover:bg-[#FFC61B]">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-4">
                      <h3
                        className="text-[#091d42] text-xl leading-7 font-bold"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-6">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-500 text-sm">
                            {article.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-500 text-sm">
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1">
              <Button variant="ghost" size="sm" className="h-auto px-2.5 py-2.5">
                <ChevronLeft className="w-4 h-4" />
                <span className="font-medium">Previous</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="w-10 h-auto px-0 py-2.5 bg-white border-slate-200"
              >
                1
              </Button>

              <Button variant="ghost" size="sm" className="w-10 h-auto px-0 py-2.5">
                2
              </Button>

              <Button variant="ghost" size="sm" className="w-10 h-auto px-0 py-2.5">
                3
              </Button>

              <Button variant="ghost" size="sm" className="h-auto px-2.5 py-2.5">
                <span className="font-medium">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex flex-col gap-6">
            {/* Categories */}
            <Card className="shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <h3
                  className="text-[#091d42] text-xl font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Categories
                </h3>

                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`px-3 py-2 rounded-md text-left transition-colors ${
                        activeCategory === category.name
                          ? "bg-[#FFC61B] text-[#091d42]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <h3
                  className="text-[#091d42] text-xl font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Recent Posts
                </h3>

                <div className="flex flex-col gap-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-1 justify-center">
                        <h4
                          className="text-gray-700 text-sm leading-5 line-clamp-2 font-medium"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {post.title}
                        </h4>
                        <span className="text-gray-500 text-xs">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-linear-to-br from-[#091d42] to-[#05132d] shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <h3
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Subscribe to Newsletter
                </h3>

                <p className="text-gray-300 text-sm">
                  Stay updated with our latest news and insights.
                </p>

                <div className="flex flex-col gap-3">
                  <Input
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />

                  <Button className="w-full bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#091d42]">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}