'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page's DOM render before observing
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      const els = document.querySelectorAll('.section-fade');
      els.forEach((el) => {
        // Reset visibility so elements animate in on new page
        el.classList.remove('visible');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]); // re-run on every route change

  return null;
}
