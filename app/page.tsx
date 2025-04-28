'use client';

import './i18n'; // import the i18n configuration
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Hero } from "./components/Hero"
import { Experiences } from "./components/Experiences"
import { Journey } from "./components/Journey"
import { Contact } from "./components/Contact"
import { Publication } from "./components/Publication"
import { LanguageSwitcher } from "./components/LanguageSwitcher"
export default function Home() {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <main>
      <Hero></Hero>
      <Experiences></Experiences>
      <Journey></Journey>
      <Journey></Journey>
      <Publication></Publication>
      <Contact></Contact>

    </main>

  );
}
