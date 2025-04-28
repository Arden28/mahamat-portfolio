'use-client';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon'; // Assuming you have or will create this component
import { Button } from '@/components/ui/button';

export const Journey = () => {
    
    const { t } = useTranslation();
    
    return (


        <div id='journey' className='max-w-4xl min-h-full pt-2 mx-auto mt-10 sm:mt-16 lg:mt-20 '>
            <h2 className="mb-10 text-2xl font-bold leading-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500 drop-shadow-xl">
                {t('educations.title')}
            </h2>
            <div className="flex flex-col max-w-4xl min-h-full gap-3 p-4 pt-0 mx-auto mt-4 mb-6 sm:mt-4 lg:mt-4 sm:flex-row ">
                
                <ol className="relative border-gray-200 border-s dark:border-gray-700">  

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school1.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school1.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school1.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school1.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school2.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school2.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school2.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school2.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school3.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school3.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school3.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school3.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school4.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school4.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school4.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school4.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school5.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school5.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school5.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school5.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school6.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school6.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school6.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school6.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school7.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school7.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school7.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school7.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school8.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school8.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school8.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school8.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school9.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school9.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school9.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school9.detail')}
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school10.when')}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('educations.schools.school10.title')}</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{t('educations.schools.school10.where')}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {t('educations.schools.school10.detail')}
                        </p>
                    </li>

                </ol>


            </div>
        </div>
        
    )
    
};
