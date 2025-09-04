'use client'
import { useState, useRef } from 'react'

interface ProcessingState {
  isProcessing: boolean
  progress: number
  stage: string
}

interface GeneratedMinute {
  title: string
  date: string
  participants: string[]
  summary: string
  keyPoints: string[]
  actionItems: string[]
  nextSteps: string[]
}

export default function AudioUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [processing, setProcessing] = useState<ProcessingState>({
    isProcessing: false,
    progress: 0,
    stage: ''
  })
  const [generatedMinute, setGeneratedMinute] = useState<GeneratedMinute | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      // Validar que sea un archivo de audio
      const audioTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/m4a', 'audio/ogg']
      if (audioTypes.includes(selectedFile.type) || selectedFile.name.match(/\.(mp3|wav|m4a|ogg)$/i)) {
        setFile(selectedFile)
        setGeneratedMinute(null)
      } else {
        alert('Por favor selecciona un archivo de audio válido (.mp3, .wav, .m4a, .ogg)')
      }
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      const audioTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/m4a', 'audio/ogg']
      if (audioTypes.includes(droppedFile.type) || droppedFile.name.match(/\.(mp3|wav|m4a|ogg)$/i)) {
        setFile(droppedFile)
        setGeneratedMinute(null)
      } else {
        alert('Por favor selecciona un archivo de audio válido (.mp3, .wav, .m4a, .ogg)')
      }
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const simulateProcessing = async () => {
    if (!file) return

    setProcessing({ isProcessing: true, progress: 0, stage: 'Subiendo archivo...' })
    
    // Simular subida
    await new Promise(resolve => setTimeout(resolve, 1000))
    setProcessing({ isProcessing: true, progress: 20, stage: 'Procesando audio...' })
    
    // Simular transcripción
    await new Promise(resolve => setTimeout(resolve, 2000))
    setProcessing({ isProcessing: true, progress: 50, stage: 'Transcribiendo contenido...' })
    
    // Simular análisis
    await new Promise(resolve => setTimeout(resolve, 1500))
    setProcessing({ isProcessing: true, progress: 80, stage: 'Generando minuta...' })
    
    // Simular finalización
    await new Promise(resolve => setTimeout(resolve, 1000))
    setProcessing({ isProcessing: true, progress: 100, stage: 'Completado' })
    
    // Generar minuta de ejemplo
    const mockMinute: GeneratedMinute = {
      title: "Reunión de Planificación Q1 2024",
      date: new Date().toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      participants: [
        "María González - Directora de Producto",
        "Carlos Rodríguez - Líder Técnico",
        "Ana Martínez - Diseñadora UX",
        "Luis Torres - Gerente de Marketing"
      ],
      summary: "Reunión para definir los objetivos y estrategias del primer trimestre de 2024. Se discutieron las prioridades del producto, la hoja de ruta técnica y las iniciativas de marketing para el lanzamiento de nuevas funcionalidades.",
      keyPoints: [
        "Lanzamiento de la nueva funcionalidad de colaboración en tiempo real programado para febrero",
        "Migración a la nueva arquitectura de microservicios completada en un 80%",
        "Campaña de marketing digital iniciará en enero con enfoque en redes sociales",
        "Presupuesto aprobado para contratar 2 desarrolladores adicionales",
        "Integración con herramientas de terceros será prioridad para marzo"
      ],
      actionItems: [
        "María: Finalizar especificaciones técnicas de la funcionalidad de colaboración - Fecha límite: 15 enero",
        "Carlos: Completar migración de microservicios restantes - Fecha límite: 31 enero", 
        "Ana: Crear mockups para nuevas interfaces de usuario - Fecha límite: 20 enero",
        "Luis: Preparar estrategia de contenido para campaña Q1 - Fecha límite: 10 enero"
      ],
      nextSteps: [
        "Reunión de seguimiento programada para el 25 de enero",
        "Revisión semanal de progreso todos los lunes a las 10:00 AM",
        "Demo interno de nuevas funcionalidades el 1 de febrero",
        "Presentación a stakeholders el 15 de febrero"
      ]
    }
    
    await new Promise(resolve => setTimeout(resolve, 500))
    setGeneratedMinute(mockMinute)
    setProcessing({ isProcessing: false, progress: 0, stage: '' })
  }

  const resetUpload = () => {
    setFile(null)
    setGeneratedMinute(null)
    setProcessing({ isProcessing: false, progress: 0, stage: '' })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Demo de Minutas AI
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Sube tu archivo de audio y obtén una minuta profesional en segundos
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {!generatedMinute ? (
            <div className="space-y-6">
              {/* Upload Area */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:border-gray-600 dark:hover:border-gray-500"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*,.mp3,.wav,.m4a,.ogg"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={processing.isProcessing}
                />
                
                <div className="space-y-4">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </div>
                  
                  {file ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Arrastra tu archivo de audio aquí
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        o haz clic para seleccionar
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        Formatos soportados: MP3, WAV, M4A, OGG
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Processing */}
              {processing.isProcessing && (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {processing.stage}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {processing.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-brand-500 h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${processing.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {file && !processing.isProcessing && (
                <div className="flex gap-4">
                  <button
                    onClick={simulateProcessing}
                    className="flex-1 bg-brand-500 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    Generar Minuta
                  </button>
                  <button
                    onClick={resetUpload}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
                  >
                    Cambiar archivo
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Generated Minute Display */
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      ¡Minuta generada exitosamente!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {generatedMinute.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {generatedMinute.date}
                  </p>
                </div>

                <div className="px-6 py-4 space-y-6">
                  {/* Participants */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 dark:text-white">
                      Participantes
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 dark:text-gray-300">
                      {generatedMinute.participants.map((participant, index) => (
                        <li key={index}>• {participant}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 dark:text-white">
                      Resumen
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {generatedMinute.summary}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 dark:text-white">
                      Puntos Clave
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 dark:text-gray-300">
                      {generatedMinute.keyPoints.map((point, index) => (
                        <li key={index}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Items */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 dark:text-white">
                      Tareas Asignadas
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 dark:text-gray-300">
                      {generatedMinute.actionItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Next Steps */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 dark:text-white">
                      Próximos Pasos
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 dark:text-gray-300">
                      {generatedMinute.nextSteps.map((step, index) => (
                        <li key={index}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex gap-4">
                    <button className="flex-1 bg-brand-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-700">
                      Descargar PDF
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-700">
                      Compartir
                    </button>
                    <button
                      onClick={resetUpload}
                      className="px-4 py-2 text-gray-500 text-sm font-medium hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Nueva minuta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
