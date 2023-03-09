import { memo } from "react";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

function Tooltip(props: TooltipProps) {
  const { children, text } = props;
  return (
    <span className="flex group relative py-4  hover:scale-105 transition-all duration-1000  ease-out">
      <span className="text-xs pointer-events-none absolute z-10 -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-athens-gray-700 px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        {text}
      </span>
      {children}
    </span>
  );
}

export const MemoizedTooltip = memo(Tooltip);
