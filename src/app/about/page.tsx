import { allAbouts } from "contentlayer/generated";

export default function About() {
  const aboutContent = allAbouts.find(
    (about) => about._raw.sourceFileName === "about.md"
  );

  return (
    <div className="flex-1 p-8">
      <div
        dangerouslySetInnerHTML={{ __html: aboutContent?.body.html || "" }}
      />
    </div>
  );
}
