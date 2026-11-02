import { SectionLabel } from './SectionLabel'

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl'
      }
    >
      {/* Label */}
      <div
        className={
          align === 'center'
            ? 'flex justify-center'
            : 'flex'
        }
      >
        <SectionLabel>{label}</SectionLabel>
      </div>

      {/* Title */}
      <h2 className="mt-1 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}