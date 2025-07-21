import React from 'react';

const clientLogos = [
  {
    name: 'React',
    url: 'https://react.dev/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
];

const ClientsCarousel: React.FC = () => (
  <section className="bg-gray-950 py-16" id="clients">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">Trusted by forward-thinking teams</h2>
      <div className="flex flex-nowrap md:grid md:grid-cols-7 gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {clientLogos.map((client) => (
          <a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition group border border-gray-800 hover:border-blue-500"
            style={{ minWidth: 120 }}
          >
            <img
              src={client.img}
              alt={client.name}
              className="h-12 w-12 object-contain mb-2 opacity-60 group-hover:opacity-100 transition"
              loading="lazy"
            />
            <span className="text-xs text-gray-400 group-hover:text-blue-400 transition font-semibold">{client.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsCarousel; 