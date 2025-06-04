import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectTitle } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: getProjectTitle(project.name),
    description: project.description,
  };
}
type Params = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Params) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-4 text-4xl font-bold">{project.name}</h1>
      <Image
        src={project.previewImage}
        alt={`${project.name} preview`}
        width={800}
        height={450}
        className="rounded-lg"
      />
      <p className="mt-6">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-blue-600 underline"
      >
        Visit Live Project
      </Link>
      <br />
      <Link
        href={project.gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-600 underline"
      >
        View Source Code
      </Link>
    </div>
  );
}
