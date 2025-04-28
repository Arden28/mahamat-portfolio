
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="items-center max-w-4xl p-4 m-auto rounded-t-lg shadow-lg footer text-neutral-content bg-white/0 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <div className="flex flex-col items-center justify-between w-full md:flex-row">
                
                {/* Left Side: Logo and Copyright */}
                <aside className="flex items-center">
            
                    <Image src="/images/mahamat.jpg" alt="logo" className="mr-5 rounded-full" width={30} height={30} />
                    <p className="text-zinc-800"> Copyright © PhD. MAHAMAT ADOUM ABDOULAYE {new Date().getFullYear()} - All rights reserved </p>
                </aside>
            </div>
        </footer>
    );
};

