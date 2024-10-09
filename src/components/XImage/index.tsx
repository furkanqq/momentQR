import Image from 'next/image';

interface IProps {
  loading?: undefined | 'eager' | 'lazy';
  unoptimized?: undefined | boolean;
  priority?: undefined | boolean;
  className?: undefined | string;
  quality?: undefined | number;
  height?: undefined | number;
  fill?: undefined | boolean;
  width?: undefined | number;
  src: string;
  alt: string;
}

export const XImage: React.FC<IProps> = ({
  className,
  quality,
  height,
  width,
  fill,
  src,
  alt
}) => {
  return (
    <Image
      className={className}
      quality={quality}
      loading="eager"
      height={height}
      width={width}
      fill={fill}
      unoptimized
      src={src}
      alt={alt}
      priority
    />
  );
};
