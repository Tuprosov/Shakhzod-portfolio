import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
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
    <div className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <Typography variant="h1">{project.name}</Typography>
      <Image
        src={project.previewImage}
        alt={`${project.name} preview`}
        width={800}
        height={450}
        className="rounded-lg shadow-2xl"
      />
      <Typography>{project.description}</Typography>
      <div className="flex flex-wrap gap-2">
        {project.technologies?.map((technology, index) => (
          <Tag key={index} label={technology} />
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
