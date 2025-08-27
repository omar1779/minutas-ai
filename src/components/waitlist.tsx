'use client'
import { useState } from 'react'

export default function Waitlist() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        
        try {
            // Aquí puedes integrar con tu servicio de email preferido
            // Por ahora, simulamos el envío y guardamos en localStorage
            const emails = JSON.parse(localStorage.getItem('waitlist-emails') || '[]')
            emails.push({
                email,
                timestamp: new Date().toISOString(),
                source: 'landing-page'
            })
            localStorage.setItem('waitlist-emails', JSON.stringify(emails))
            
            setStatus('success')
            setMessage('¡Gracias! Te avisaremos cuando esté listo.')
            setEmail('')
            
            // También puedes enviar a tu backend aquí
            console.log('Email capturado:', email)
            
        } catch (error) {
            setStatus('error')
            setMessage('Hubo un error. Inténtalo de nuevo.')
        }
    }

    return (
        <div id="lista-espera" className="bg-white py-16 sm:py-24 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
                    <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Únete a la lista de espera
                    </h2>
                    <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                        Sé de los primeros en probar Actas AI y recibe minutos ilimitados durante la beta.
                    </p>
                    
                    {status === 'success' ? (
                        <div className="mx-auto mt-10 max-w-md text-center">
                            <div className="rounded-md bg-green-500/10 p-4 ring-1 ring-green-500/20">
                                <p className="text-green-400 font-medium">{message}</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Correo electrónico
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Correo electrónico"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading'}
                                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6 dark:outline-white/20 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Enviando...' : 'Avisarme'}
                            </button>
                        </form>
                    )}
                    
                    {status === 'error' && (
                        <div className="mx-auto mt-4 max-w-md text-center">
                            <p className="text-red-400 text-sm">{message}</p>
                        </div>
                    )}
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient
                                r={1}
                                cx={0}
                                cy={0}
                                id="759c1415-0410-454c-8f7c-9a820de03641"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)"
                            >
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}