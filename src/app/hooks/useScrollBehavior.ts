'use client';
import { useEffect } from 'react';

export function useScrollBehavior() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    const scrollHeader = document.getElementById('scrollHeader');

    function applyScrollBehavior() {
      // Navbar scroll behavior
      if (navbar) {
        const fixednav = navbar.offsetTop;
        if (window.pageYOffset > fixednav) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
      }

      // Header scroll behavior on mobile
      if (header) {
        if (window.innerWidth < 768) {
          const fixedHeader = header.offsetTop;
          if (window.pageYOffset > fixedHeader) {
            scrollHeader?.classList.remove('bg-[#93928e]')
            header.classList.add('navbar-fixed');
          } else {
            header.classList.remove('navbar-fixed');
          }
        } else {
          header.classList.remove('navbar-fixed');
        }
      }
    }

    window.addEventListener('scroll', applyScrollBehavior);
    window.addEventListener('resize', applyScrollBehavior);

    applyScrollBehavior();

    return () => {
      window.removeEventListener('scroll', applyScrollBehavior);
      window.removeEventListener('resize', applyScrollBehavior);
    };
  }, []);
}
