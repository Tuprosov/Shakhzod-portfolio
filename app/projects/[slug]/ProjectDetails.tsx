"use client";

import { useState } from "react";
import useWindowSize from "@/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import { Copy } from "lucide-react";
import { copyTextToClipboard } from "@/lib/utils";
import type { ProjectDetails } from "@/lib/types";

export default function ProjectDetails({
  project,
}: {
  project: ProjectDetails;
}) {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async (text: string) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch {
      alert("Unable to copy!");
    }
  };

  return (
    <div className="relative mx-auto max-w-4xl p-8">
      <IconButton
        size={width && width < 768 ? "md" : "lg"}
        onClick={() => handleCopyClick(project.url)}
        showTooltip={isCopied}
        tooltipText="Copied!"
      >
        <Copy />
      </IconButton>
      <div className="flex flex-col gap-4">
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
          {project.technologies?.map((tech: string, i: number) => (
            <Tag key={i} label={tech} />
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
    </div>
  );
}
