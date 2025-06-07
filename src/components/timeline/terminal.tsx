import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";
export function SideTerminal() {
    return (
        <Terminal>
            <TypingAnimation className="text-[#D4D4D4]">
                &gt; pnpm dlx aisoc@latest init
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Validating AISOC environment...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Student identity verified.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Mentor pool connected.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Fetched active project proposals.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Loading AI modules and starter kits.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Creating project workspace...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Applied mentor guidelines and rubrics.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ Preparing community channels and dashboards.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Finalizing setup...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-orange-400">
                <span>ℹ AISOC project initialized successfully</span>
            </AnimatedSpan>

            <TypingAnimation delay={6500} className="text-muted-foreground">
                You are ready to start contributing.
            </TypingAnimation>
        </Terminal>
    );
}