'use client';

import { usePathname } from 'next/navigation';

export default function Canonical() {
  const pathname = usePathname();
  const canonicalUrl = `${process.env.BASE_URL}${pathname}`;

  return (
      <link rel="canonical" href={canonicalUrl} />
  );
}
