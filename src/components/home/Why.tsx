import { CodeBlock } from '@/components/ui/code-block';
import PageHeading from '@/components/ui/page-heading';

import {
  StickyContentItem,
  StickyScroll,
} from '../ui/sticky-scroll-reveal';

const RealWorldProjects = () => {
    return (
        <div>
            <CodeBlock
                language="js"
                filename="dataDashboard.js"
                code={`const data = [42, 36, 78];
const avg = data.reduce((a, b) => a + b, 0) / data.length;
console.log(\`📊 Avg: \${avg}\`);

if (avg > 50) {
    console.log("Real-world insights achieved!");
}`}
            />
        </div>
    );
};

const ImpactfulProjects = () => {
    return (
        <div>
            <CodeBlock
                language="go"
                filename="impact.go"
                code={`package main
import "fmt"

func main() {
    tasks := []string{"build", "contribute", "impact"}
    for _, t := range tasks { fmt.Println("🚀", t) }
}`}
            />
        </div>
    );
};

const CareerPortfolio = () => {
    return (
        <div>
            <CodeBlock
                language="rust"
                filename="portfolio.rs"
                code={`fn main() {
      let name = "AISOC";
      let skills = ["Rust", "AI", "Mentorship"];
      println!("🧠 Portfolio from {}:", name);
      for skill in skills.iter() {
          println!("- {}", skill);
      }
  }`}
            />
        </div>
    );
};

const content: StickyContentItem[] = [
    {
        title: "Work on real-world projects",
        description:
            "Step beyond textbooks and dive into the real world. Discover how programming is used to solve high-impact challenges. You'll get guidance from experts working in research, industry and academia.",
        component: <RealWorldProjects />,
    },
    {
        title: "Contribute to impactful projects",
        description:
            "Tackle real problems submitted by startups, researchers, and government bodies. This is your chance to collaborate with mentors and build things that matter.",
        component: <ImpactfulProjects />,
    },
    {
        title: "Build your portfolio",
        description:
            "AISOC opens doors. Gain industry exposure, mentorship from professionals. Your project can become the start of your portfolio, your network, or even your startup.",
        component: <CareerPortfolio />,
    },
];

export function Why() {
    return (
        <div className="mt-20">
            <PageHeading
                smallHeading="Join AISOC"
                bigHeading="Get experience and mentorship with real-world impact"
            />
            <StickyScroll content={content} />;
        </div>
    );
}