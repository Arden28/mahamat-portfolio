'use-client';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon'; // Assuming you have or will create this component
import { Button } from '@/components/ui/button';

export const Experiences = () => {
    
    const { t } = useTranslation();

    return (


        <div id='projects' className='pt-2 mt-10 w-100 sm:mt-16 lg:mt-20'>
            <h2 className="mb-10 text-2xl font-bold leading-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500 drop-shadow-xl">
                {t('experiences.title')}
            </h2>
            <div className="flex flex-col min-h-full gap-3 p-4 pt-0 mx-auto mt-4 mb-6 w-100 sm:mt-4 lg:mt-4 sm:flex-row ">
                
                <div className="p-6 w-100 rounded-xl ring-1 ring-zinc-200/80 dark:ring-zinc-700/40 drop-shadow-xl sm:w-2/2 lg:w-100">
                    <h2 className="flex items-center font-semibold font-heading text-zinc-900 dark:text-zinc-100">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="flex-none w-6 h-6">
                            <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100/10 stroke-zinc-500" />
                            <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-500" />
                        </svg>
                        <span className="ml-3">{t('experiences.cardTitlte')}</span>
                    </h2>
                    <ol className="mt-6 space-y-4">

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.researchScientist.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.researchScientist.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.researchScientist.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.researchScientist.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.researchScientist.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.researchScientist.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.energyExpert.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.energyExpert.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.energyExpert.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.energyExpert.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.energyExpert.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.energyExpert.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.chiefOperatingOfficer.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.chiefOperatingOfficer.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.chiefOperatingOfficer.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.chiefOperatingOfficer.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.chiefOperatingOfficer.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.chiefOperatingOfficer.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.lecturerPartTimeMao.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.lecturerPartTimeMao.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.lecturerPartTimeMao.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.lecturerPartTimeMao.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.lecturerPartTimeMao.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.lecturerPartTimeMao.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.lecturerPartTimeIriba.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.lecturerPartTimeIriba.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.lecturerPartTimeIriba.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.lecturerPartTimeIriba.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.lecturerPartTimeIriba.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.lecturerPartTimeIriba.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.assistantNetworkManager.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.assistantNetworkManager.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.assistantNetworkManager.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.assistantNetworkManager.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.assistantNetworkManager.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.assistantNetworkManager.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.electricityProductionEngineerIntern.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.electricityProductionEngineerIntern.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.electricityProductionEngineerIntern.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.electricityProductionEngineerIntern.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.electricityProductionEngineerIntern.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.electricityProductionEngineerIntern.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.renewableEnergyEngineer.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.renewableEnergyEngineer.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.renewableEnergyEngineer.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.renewableEnergyEngineer.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.renewableEnergyEngineer.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.renewableEnergyEngineer.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.renewableEnergySpecialist.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.renewableEnergySpecialist.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.renewableEnergySpecialist.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.renewableEnergySpecialist.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.renewableEnergySpecialist.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.renewableEnergySpecialist.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.projectManagerAssistantEngineer.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.projectManagerAssistantEngineer.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.projectManagerAssistantEngineer.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.projectManagerAssistantEngineer.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.projectManagerAssistantEngineer.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.projectManagerAssistantEngineer.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.wellIntegritySupervisor.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.wellIntegritySupervisor.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.wellIntegritySupervisor.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.wellIntegritySupervisor.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.wellIntegritySupervisor.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.wellIntegritySupervisor.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>

                        <li className="flex gap-2">
                            <dl className="flex flex-col mb-4 gap-y-0.5 w-full">
                                <div className='flex w-full'>
                                    <div className='flex-1'>
                                        <dl className="flex-none w-full font-medium text-zinc-800 dark:text-zinc-100">{t('experiences.jobs.petroleumProductionIntern.title')}</dl>
                                        <dd className="text-xs text-zinc-500 group-hover:underline group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-200">{t('experiences.jobs.petroleumProductionIntern.where')}</dd>
                                        <dd className="text-xs text-zinc-400 dark:text-zinc-500">
                                            <time>{t('experiences.jobs.petroleumProductionIntern.when')}</time>
                                        </dd>
                                        <div className='text-sm'>
                                        
                                            <li className='mb-1'>
                                            {t('experiences.jobs.petroleumProductionIntern.point1')}
                                            </li>
                                            <li className='mb-2'>
                                            {t('experiences.jobs.petroleumProductionIntern.point2')}
                                            </li>
                                            <li className='mb-2' dangerouslySetInnerHTML={{ __html: t('experiences.jobs.petroleumProductionIntern.skills') }}>
                                            </li> 
                                        </div>
                                    </div>
                                </div>
                            </dl>
                        </li>
                    

                    </ol>
                    <a className="group mt-5 w-full inline-flex items-center justify-center rounded-md border drop-shadow-md py-2.5 px-3  outline-offset-2 transition font-medium bg-zinc-50 text-zinc-900 dark:text-zinc-300 hover:bg-primary hover:text-white" href="/files/cv-v2.pdf">
                        {t('experiences.download')}                  
                    </a>
                </div>
            </div>
        </div>
    )
};