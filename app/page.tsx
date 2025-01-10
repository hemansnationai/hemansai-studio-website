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
          href="/"
          target="_blank"

        >
          <File size={32} />
          <span>
            MasterDexter{" "}
            <span className="block text-sm text-muted-foreground">
              Agentic AI Assisted Learning Platform
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://god-level-python.notion.site/Neurons-to-GenerativeAI-Bootcamp-Live-Self-paced-V2-a59ec2f641084c488179271fc077f0c4?pvs=4"
          target="_blank"
        >
          <User size={32} />
          <span>
            AI Leadership Academy
{" "}
            <span className="block text-sm text-muted-foreground">
              Be in the top 1% of AI Leaders
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
              Actionable Tips and Insights about AI Leadership, building AI Teams/Products.
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
