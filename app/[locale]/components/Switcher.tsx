'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../navbar.module.css'; // Custom styles

const locales = ['en', 'id'];

export default function Switcher() {
  const pathname = usePathname();
  if (!pathname) return null;

  // Get the base path without the locale prefix
  const getBasePath = () => {
    const segments = pathname.split('/');
    return '/' + segments.slice(2).join('/');
  };

  return (
    <div className="d-none d-lg-block">
      {locales.map((locale, index) => {
        // Check if the current locale matches the beginning of the pathname
        const isActive = pathname.startsWith(`/${locale}`);

        // Build the new URL with the new locale
        const newLocalePath = `/${locale}${getBasePath()}`;

        return (
          <span key={locale}>
            <Link
              href={newLocalePath || '/'}
              className={`fw-bold text-light mx-2 ${isActive ? `${styles.active}` : 'opacity-50'}`}
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
