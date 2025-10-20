"use client";

import { useState, useEffect } from "react";
import IconText from "../../../common/IconText";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import { getProjects } from "@/lib/firebase/firestore";
import type { Project } from "@/lib/firebase/collections";

export default function ProjectSection({ id }: { id?: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id={id} className="bg-black md:px-20 lg:px-40 py-40 px-10 md:rounded-t-[4rem] sm:rounded-t-[2rem] rounded-t-[2rem]">
        <div className="text-white text-center">Loading projects...</div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id={id} className="bg-black md:px-20 lg:px-40 py-40 px-10 md:rounded-t-[4rem] sm:rounded-t-[2rem] rounded-t-[2rem]">
        <IconText
          iconSrc="/icons/winterSecond.svg"
          color="text-sky-500"
          text="LAYANAN KAMI"
        />
        <div className="text-white font-anta text-xl md:text-2xl lg:text-4xl">
          <h1 className="flex flex-col gap-2">
            Proyek Kami Membantu
            <span className="text-sky-500 block">Mereka Go Digital</span>
          </h1>
        </div>
        <div className="text-white text-center mt-10">No projects available at the moment.</div>
      </section>
    );
  }

  // Separate projects by type for different display styles
  const featuredProjects = projects.filter(project => project.isFeatured);
  const regularProjects = projects.filter(project => !project.isFeatured);

  return (
    <section className="bg-black md:px-20 lg:px-40 py-40 px-10 md:rounded-t-[4rem] sm:rounded-t-[2rem] rounded-t-[2rem]">
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />

      <div className="text-white font-anta text-xl md:text-2xl lg:text-4xl">
        <h1 className="flex flex-col gap-2">
          Proyek Kami Membantu
          <span className="text-sky-500 block">Mereka Go Digital</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-5 md:grid-rows-5">
        {/* Featured Project Slider 1 */}
        {featuredProjects[0] && (
          <div className="md:col-span-3 md:row-span-2">
            <ProjectSlider
              images={featuredProjects[0].imageUrl ? [featuredProjects[0].imageUrl] : ["/images/dummy.webp"]}
              navClass="1"
            />
          </div>
        )}

        {/* Regular Project Card 1 */}
        {regularProjects[0] && (
          <div className="md:col-span-2 md:row-span-2 md:col-start-4">
            <ProjectCard
              title={regularProjects[0].title}
              description={regularProjects[0].description}
            />
          </div>
        )}

        {/* Regular Project Card 2 */}
        {regularProjects[1] && (
          <div className="md:col-span-2 md:row-span-2 md:row-start-3">
            <ProjectCard
              title={regularProjects[1].title}
              description={regularProjects[1].description}
              bgColor="bg-blue-500"
            />
          </div>
        )}

        {/* Featured Project Slider 2 */}
        {featuredProjects[1] && (
          <div className="md:col-span-3 md:row-span-2 md:col-start-3">
            <ProjectSlider
              images={featuredProjects[1].imageUrl ? [featuredProjects[1].imageUrl] : ["/images/dummy.webp"]}
              navClass="4"
            />
          </div>
        )}

        {/* Fallback: If no featured projects, show regular projects in sliders */}
        {featuredProjects.length === 0 && regularProjects[0] && (
          <div className="md:col-span-3 md:row-span-2">
            <ProjectSlider
              images={regularProjects[0].imageUrl ? [regularProjects[0].imageUrl] : ["/images/dummy.webp"]}
              navClass="1"
            />
          </div>
        )}

        {featuredProjects.length < 2 && regularProjects[2] && (
          <div className="md:col-span-3 md:row-span-2 md:col-start-3">
            <ProjectSlider
              images={regularProjects[2].imageUrl ? [regularProjects[2].imageUrl] : ["/images/dummy.webp"]}
              navClass="4"
            />
          </div>
        )}
      </div>
    </section>
  );
}
