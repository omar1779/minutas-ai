'use client'
import AudioUpload from "@/components/audio-upload";
import Link from "next/link";

export default function DemoPage() {
  return (
    <>
      {/* Header simple para la demo */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125-1.125 1.125H11.25a9 9 0 0 1-9-9V3.375c0-.621.504-1.125 1.125-1.125Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Actas AI</span>
            </Link>
            
            <Link 
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Componente principal de upload */}
      <AudioUpload />
      
      {/* Footer simple */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2025 Actas AI. Versión demo para pruebas.
          </p>
        </div>
      </div>
    </>
  );
}
