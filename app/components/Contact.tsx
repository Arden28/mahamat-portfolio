'use-client';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export const Contact = () => {
    
    const {t} = useTranslation();
    
    return (
        <div id="contact" className="max-w-2xl min-h-full pt-2 mx-auto mt-10 mb-20 sm:mt-16 lg:mt-20 sm:max-w-4xl">
            <h2 className="mb-10 text-2xl font-bold leading-8 text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-sky-500 drop-shadow-xl">
                {t('contact.title')}
            </h2>

            <div className="mx-3 border mockup-window bg-base-50 border-base-800">
                <div className="border-b mockup-toolbar bg-base-50 border-base-800"></div>

                <div className="my-3">
                    {/* User chat bubble */}
                    <div className="mx-3 chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image 
                                    alt="User avatar" 
                                    src="/images/avatar.jpg" 
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            You
                            <time className="ml-1 text-xs opacity-50">10:45</time>
                        </div>
                        <div className="text-black bg-gray-300 border chat-bubble drop-shadow-md">Hey Mahamat</div>
                    </div>

                    {/* Follow-up question */}
                    <div className="mx-3 chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image 
                                    alt="User avatar" 
                                    src="/images/avatar.jpg" 
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="text-black bg-gray-300 border chat-bubble drop-shadow-md">
                            How can I reach out to you?
                        </div>
                        <div className="opacity-50 chat-footer">Delivered</div>
                    </div>

                    {/* Response from Mahamat */}
                    <div className="mx-3 chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image 
                                    src="/images/mahamat.png" 
                                    alt="Mahamat avatar" 
                                    className="object-cover rounded-full" 
                                    width={40} 
                                    height={40} 
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            Mahamat  
                            <time className="ml-1 text-xs opacity-50">10:56</time>
                        </div>
                        <div className="text-white border chat-bubble bg-primary drop-shadow-md">
                            <p>
                                Hello, you can email me at  
                                <a className="ml-1 font-extrabold text-white" href="mailto:mahamatadoumabdoulaye1@gmail.com">mahamatadoumabdoulaye1@gmail.com</a>
                                <br />
                                or message me on  
                                <a className="ml-1 font-extrabold text-white" href="https://www.linkedin.com/in/mahamat-adoum-abdoulaye-1a590599/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Closing message */}
                    <div className="mx-3 mt-1 chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image 
                                    src="/images/mahamat.png" 
                                    alt="Mahamat avatar" 
                                    className="object-cover rounded-full" 
                                    width={40} 
                                    height={40} 
                                />
                            </div>
                        </div>
                        <div className="text-white border chat-bubble bg-primary drop-shadow-md">
                            See you there!
                        </div>
                        <div className="opacity-50 chat-footer">Seen at 10:56</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
