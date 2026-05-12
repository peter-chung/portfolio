export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125 110"
      width="40"
      height="40"
      aria-label="Peter Chung logo"
      className="overflow-hidden transition-transform duration-200 hover:scale-110"
    >
      <text
        x="4"
        y="76"
        className="font-(family-name:--font-brand) text-[96px]"
      >
        <tspan className="fill-primary">p{"}"}</tspan>
      </text>
    </svg>
  );
}
