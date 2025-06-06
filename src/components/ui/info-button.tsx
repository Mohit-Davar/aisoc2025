import { Code2 } from "lucide-react";

export default function InfoButton() {
    return (
        <button className="inline-block relative bg-green-500 p-px rounded-full font-semibold text-green-500 text-xs no-underline leading-6 cursor-pointer">
            <div className="z-10 flex items-center gap-2 bg-white px-4 py-0.5 rounded-full">
                <Code2 size={15} />
                <span>
                    Solve real-world problems with code
                </span>
            </div>
        </button>
    )
}