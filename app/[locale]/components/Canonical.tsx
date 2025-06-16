// components/Canonical.tsx
'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

export default function Canonical() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plana.vision';
  const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`.split('?')[0];

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
