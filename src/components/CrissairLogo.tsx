import crissairDesde1991 from "@/assets/crissair-desde1991.jpg";

const CrissairLogo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img
      src={crissairDesde1991}
      alt="Crissair Home Electro - Desde 1991"
      className={`h-16 md:h-20 w-auto ${light ? "brightness-0 invert" : ""}`}
    />
  </div>
);

export default CrissairLogo;
