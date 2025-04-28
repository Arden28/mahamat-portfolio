"use client";
import '../i18n'; // Import i18n here
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedTitle() {
  const { t } = useTranslation();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('hero.title.phd'), t('hero.title.strategist')],
      typeSpeed: 200,
      backSpeed: 75,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500">
      <span ref={el} />
    </span>
  );
}
