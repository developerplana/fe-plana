'use client';

import Link from 'next/link';// Use this if you're using next-intl for localized routing
import { usePathname } from 'next/navigation';
import styles from '../navbar.module.css'; // Custom styles
const locales = ['en', 'id'];

export default function Switcher() {
  const pathname = usePathname();
  console.log("ini pathname", pathname)
  if (!pathname) return null;

  const getBasePath = () => {
    const segments = pathname.split('/');
    return '/' + segments.slice(2).join('/');
  };

  return (
    <div className="d-none d-lg-block">
    {locales.map((locale, index) => {
      const isActive = pathname.startsWith(`/${locale}`);
      return (
        <span key={locale}>
          <Link
            href={getBasePath() || '/'}
            locale={locale}
            className={`fw-bold text-light mx-2 ${isActive ? `${styles.active} ` : 'opacity-50'}`}
          >
            {locale.toUpperCase()}
          </Link>
          {index < locales.length - 1 && (
            <span className="text-white fw-bold border-end border-white pe-2" />
          )}
        </span>
      );
    })}
  </div>
  );
}
