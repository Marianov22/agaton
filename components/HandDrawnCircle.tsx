interface HandDrawnCircleProps {
  className?: string;
}

export default function HandDrawnCircle({ className }: HandDrawnCircleProps) {
  return (
    <svg
      className={className}
      width="200"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20 C 20 0, 180 0, 190 20 C 180 40, 20 40, 10 20"
        stroke="red"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
} 