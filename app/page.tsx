// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container>
        <ExampleJsx />
      </Container>
    </Section>
  );
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1>
        <Balancer>
          AI Product & Service Studio
        </Balancer>
      </h1>
      <p>
      AI studio with a scalable and structured approach to solve AI challenges for businesses and individuals.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://www.dextar.co/"
          target="_blank"
        >
          <Pen size={32} />
          <span>
            Dextar{" "}
            <span className="block text-sm text-muted-foreground">
              AI Engineering & Consulting
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://www.masterdexter.io/"
          target="_blank"

        >
          <File size={32} />
          <span>
            MasterDexter{" "}
            <span className="block text-sm text-muted-foreground">
            How to Build & Apply AI for You (and Your Business)
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://www.masterdexter.io/ai-engineer-hq"
          target="_blank"
        >
          <User size={32} />
          <span>
            AI Engineer HQ
{" "}
            <span className="block text-sm text-muted-foreground">
            AI Engineering Without Years of Struggle or a PhD!
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://newsletter.himanshuramchandani.co/subscribe"
          target="_blank"
        >
          <Tag size={32} />
          <span>
            AI Newsletter{" "}
            <span className="block text-sm text-muted-foreground">
            Get AI Leadership & Engineering how-to, case studies, insightful stories, news, research paper breakdowns, webinars, and resources.
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://god-level-python.notion.site/The-Elite-AI-Leadership-Accelerator-1adffb33c49580488ae2c6179178a51b?pvs=4"
          target="_blank"
        >
          <Tag size={32} />
          <span>
            The Elite [AI Leadership Accelerator]{" "}
            <span className="block text-sm text-muted-foreground">
            Build your second brain for Leading AI Products/Projects.
            </span>
          </span>
        </Link>
        {/* <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
          target="_blank"
        >
          <Boxes size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <Folder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a> */}
      </div>
    </article>
  );
};
