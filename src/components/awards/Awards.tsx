import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { AwardsCard } from "./AwardsCard";

interface AwardsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Awards({ range, exclude }: AwardsProps) {
  let allProjects = getPosts(["src", "app", "awards", "data"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <AwardsCard
          priority={index < 2}
          href={`/awards/${post.slug}`}
          key={post.slug}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
        />
      ))}
    </Column>
  );
}
