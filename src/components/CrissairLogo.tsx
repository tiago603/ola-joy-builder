const CrissairLogo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <span
      className={`font-display font-extrabold tracking-[0.25em] text-xl ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      CRISSAIR
    </span>
    <span
      className={`font-sans font-light text-xs tracking-[0.15em] ${
        light ? "text-primary-foreground/60" : "text-muted-foreground"
      }`}
    >
      Home Electro
    </span>
  </div>
);

export default CrissairLogo;
