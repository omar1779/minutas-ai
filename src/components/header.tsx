'use client'

import { useState } from 'react'
import ThemeToggle from './theme-toggle'

const navigation = [
  { name: 'Proximamente', href: '#lista-espera' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">MinutasAI</span>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125-1.125 1.125H11.25a9 9 0 0 1-9-9V3.375c0-.621.504-1.125 1.125-1.125Z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Actas AI</span>
            </div>
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation?.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <span className="sr-only">Abrir menú principal</span>
          </button>
        </div>
        <div className="hidden lg:flex">
          <a href="#lista-espera" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Únete a la lista de espera <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  )
}
