'use-client';
import '../i18n';
import { useTranslation } from 'react-i18next';

export const Publication = () => {
    
    const {t} = useTranslation();
    const posts = [
        {
          id: 1,
          title: t('publications.posts.post1.title'),
          href: 'https://doi.org/10.1016/j.apenergy.2024.123201',
          description: t('publications.posts.post1.desc'),
          date: t('publications.posts.post1.date'),
          datetime: '2020-03-16',
          author: {
            name: t('publications.posts.post1.author'),
            // role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://i1.rgstatic.net/ii/profile.image/11431281128155130-1679316562878_Q512/Mahamat-Adoum-Abdoulaye.jpg',
          },
        },
        {
          id: 2,
          title: t('publications.posts.post2.title'),
          href: 'https://doi.org/10.61435/ijred.2024.60169',
          description: t('publications.posts.post2.desc'),
          date: t('publications.posts.post2.date'),
          datetime: '2020-03-16',
          author: {
            name: t('publications.posts.post1.author'),
            // role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://i1.rgstatic.net/ii/profile.image/11431281128155130-1679316562878_Q512/Mahamat-Adoum-Abdoulaye.jpg',
          },
        },
        {
          id: 3,
          title: t('publications.posts.post3.title'),
          href: 'https://www.scirp.org/journal/paperinformation?paperid=101925',
          description: t('publications.posts.post3.desc'),
          date: t('publications.posts.post3.date'),
          datetime: '2020-03-16',
          author: {
            name: t('publications.posts.post1.author'),
            // role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
              'https://i1.rgstatic.net/ii/profile.image/11431281128155130-1679316562878_Q512/Mahamat-Adoum-Abdoulaye.jpg',
          },
        },
      ]

    return (
        <div id='journey' className='max-w-4xl min-h-full pt-2 mx-auto mt-10 sm:mt-16 lg:mt-20 '>
            <h2 className="mb-10 text-2xl font-bold leading-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500 drop-shadow-xl">
                {t('publications.title')}
            </h2>
            <div className="flex flex-col max-w-4xl min-h-full gap-3 p-4 pt-0 mx-auto mt-4 mb-6 sm:mt-4 lg:mt-4 sm:flex-row ">
                <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.id} className="flex flex-col items-start justify-between max-w-xl">
                    <div className="flex items-center text-xs gap-x-4">
                        <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                        </time>
                    </div>
                    <div className="relative group">
                        <h3 className="mt-3 font-semibold text-gray-900 text-lg/6 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                        </h3>
                        <p className="mt-5 text-gray-600 line-clamp-3 text-sm/6">{post.description}</p>
                    </div>
                    <div className="relative flex items-center mt-8 gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="rounded-full size-10 bg-gray-50" />
                        <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </a>
                        </p>
                        {/* <p className="text-gray-600">{post.author.role}</p> */}
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
        
    // <div className="py-24 bg-white sm:py-32">
    //   <div className="px-6 mx-auto max-w-7xl lg:px-8">
    //     <div className="max-w-2xl mx-auto lg:mx-0">
    //       <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">From the blog</h2>
    //       <p className="mt-2 text-gray-600 text-lg/8">Learn how to grow your business with our expert advice.</p>
    //     </div>


        
    //   </div>
    // </div>
    )
};