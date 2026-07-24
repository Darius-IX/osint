import { useRef, useState } from "react";
import "./styles.css";

interface ImageProps {
  src: string;
  description: string;
  imageStyle?: Record<string, any>;
}

const Image = ({ src, description, imageStyle }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState(100);

  return (
    <div className="image" style={{ width: width, ...imageStyle }}>
      <img
        ref={imgRef}
        src={"assets/" + src}
        onLoad={() => {
          if (!imgRef.current) return;
          setWidth(imgRef.current.offsetWidth);
        }}
      ></img>
      {description ? <p className="description">{description}</p> : null}
    </div>
  );
};

export default Image;
