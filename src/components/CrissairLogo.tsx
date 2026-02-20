import crissairLogo from "@/assets/crissair-logo.png";

const CrissairLogo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img
      src={crissairLogo}
      alt="Crissair Home Electro"
      className={`h-16 md:h-20 w-auto ${light ? "brightness-0 invert" : ""}`}
    />
  </div>
);

export default CrissairLogo;
