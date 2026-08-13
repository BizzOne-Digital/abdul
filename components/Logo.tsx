import Link from 'next/link';

interface LogoProps {
  className?: string;
  height?: number;
  href?: string;
  linked?: boolean;
}

export default function Logo({
  className = '',
  height = 52,
  href = '/',
  linked = true,
}: LogoProps) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-white.png"
      alt="Titan Logistics LLC"
      height={height}
      style={{
        height: `${height}px`,
        width: 'auto',
        mixBlendMode: 'screen',
      }}
      className={`object-contain object-left block ${className}`}
    />
  );

  if (linked) {
    return (
      <Link href={href} className="inline-flex items-center shrink-0">
        {image}
      </Link>
    );
  }

  return <span className="inline-flex items-center shrink-0">{image}</span>;
}
