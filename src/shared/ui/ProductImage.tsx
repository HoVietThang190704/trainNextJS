import Image from 'next/image';

interface ProductImageProps {
  src: string | undefined;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ProductImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = 'w-full h-64 object-cover rounded-lg mb-6',
}: ProductImageProps) {
  const fallbackSrc = '/images/default.jpg'; 

  return (
    <Image
      src={src || fallbackSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}