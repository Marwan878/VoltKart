import { useRef, useState, MouseEvent, FC } from "react";

type ZoomImageProps = {
  src: string;
  alt: string;
  zoomScale?: number;
  className?: string;
};

const ZoomImage: FC<ZoomImageProps> = ({
  src,
  alt,
  zoomScale = 2,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setBackgroundPosition("center");
  };

  return (
    <div
      className={className}
      ref={containerRef}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: isZoomed ? `${zoomScale * 100}%` : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition,
        cursor: "zoom-in",
        paddingInline: "1rem",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default ZoomImage;
