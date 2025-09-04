'use client'
import Header from "@/components/header";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Image from "next/image";
import Waitlist from "@/components/waitlist";

export default function Home() {
  return (
    <>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
            className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-40"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
            className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-40"
          />
        </div>
        <p className="text-sm/6 text-gray-900 dark:text-gray-100">
          <a 
            href="#lista-espera" 
            className="hover:text-gray-600 dark:hover:text-white scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <strong className="font-semibold">Beta privada</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            ¡Regístrate para acceder antes que nadie!&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate overflow-hidden bg-linear-to-b from-brand-100/20 dark:from-brand-900/10">
          <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  {/* <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-lg bg-brand-500 flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125-1.125 1.125H11.25a9 9 0 0 1-9-9V3.375c0-.621.504-1.125 1.125-1.125Z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Actas AI</span>
                  </div> */}
                  <div className="mt-24 sm:mt-32 lg:mt-16">
                    <a 
                      href="#lista-espera" 
                      className="inline-flex space-x-6 scroll-smooth"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm/6 font-semibold text-brand-600 ring-1 ring-brand-600/20 ring-inset dark:bg-brand-500/10 dark:text-brand-400 dark:ring-brand-500/25">
                        Beta privada
                      </span>
                      <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                        <span>Acceso anticipado disponible</span>

                      </span>
                    </a>
                  </div>
                  <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                    Sube tu audio.<br />Recibe tu resumen en segundos.
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                    Estamos en lanzamiento. <span className="text-brand-600 font-semibold dark:text-brand-400">Solo 50 lugares disponibles.</span>
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#lista-espera"
                      className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:bg-brand-500 dark:hover:bg-brand-400 dark:focus-visible:outline-brand-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Quiero mi acceso gratuito
                    </a>
                    <a 
                      href="/demo" 
                      className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      Ver demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  
                  {/* Prueba social */}
                  <div className="mt-8 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white dark:border-gray-900"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-white dark:border-gray-900"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white dark:border-gray-900"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <span className="font-medium">+8,000 personas ya mostraron interés esta semana 🚀</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-brand-600/10 ring-brand-50 md:-mr-20 lg:-mr-36 dark:bg-gray-800/30 dark:shadow-brand-400/10 dark:ring-white/5"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-brand-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-brand-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                  />
                  <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                      <Image src="/note.jpg" alt="Ejemplo de acta" width={1000} height={1000} />
                    </div>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl dark:ring-white/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" />
        </div>
      </div>
      <Features />
      <Waitlist />
      <Footer />
    </>
  );
}
