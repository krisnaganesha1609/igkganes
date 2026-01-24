import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, awards } from "@/resources";
import { Awards } from "@/components/awards/Awards";

export async function generateMetadata() {
  return Meta.generate({
    title: awards.title,
    description: awards.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(awards.title)}`,
    path: awards.path,
  });
}

export default function AwardsPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={awards.path}
        title={awards.title}
        description={awards.description}
        image={`/api/og/generate?title=${encodeURIComponent(awards.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {awards.title}
      </Heading>
      <Awards />
    </Column>
  );
}
