import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const context =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const textList = context.split(" ");

  const [highlightedText, setHighlightedText] = useState(
    new Array(textList.length).fill(0)
  );

  const toggleHighlight = (index) => {
    setHighlightedText((prev) => {
      const newHighlightedText = [...prev];
      newHighlightedText[index] = newHighlightedText[index] === 0 ? 1 : 0;
      return newHighlightedText;
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen max-w-screen-md mx-auto">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-bold">HightLight Demo</h1>
        <div className="text-lg">
          {textList.map((text, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <span
                  className={clsx(
                    highlightedText[index] !== 0 && "bg-yellow-300"
                  )}
                >
                  {text + " "}
                </span>
              </HoverCardTrigger>
              <HoverCardContent side="top">
                <div className="flex flex-row items-center gap-2">
                  <button
                    onClick={() => {
                      toggleHighlight(index);
                    }}
                  >
                    highlight
                  </button>
                  <button
                    onClick={() => {
                      toggleHighlight(index);
                    }}
                  >
                    undo
                  </button>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
}
