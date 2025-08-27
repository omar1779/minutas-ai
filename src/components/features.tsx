import { FiMic } from "react-icons/fi";
import { MdOutlineSummarize } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsShare } from "react-icons/bs";
const features = [
  {
    name: 'Transcripción precisa',
    description:
      'Convierte audio a texto con IA en más de 50 idiomas.',
    icon: FiMic,
  },
  {
    name: 'Resúmenes inteligentes',
    description:
      'Obtén actas estructuradas (título, asistentes, tareas) en segundos.',
    icon: MdOutlineSummarize,
  },
  {
    name: 'Formato editable',
    description:
      'Descarga actas en Word para editar libremente.',
    icon: HiOutlineDocumentText,
  },
  {
    name: 'Comparte con tu equipo',
    description:
      'Exporta PDF o Word con un clic.',
    icon: BsShare,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Beneficios clave
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-500 dark:bg-brand-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
