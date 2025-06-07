import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetails from "./ProjectDetails";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
