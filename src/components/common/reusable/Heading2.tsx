import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function Heading2({ id, className, children }: ComponentProps) {
  return (
    // prettier-ignore
    <h2
      id={id}
      className={clsx(
        className,
        'pb-4 pt-3 md:pb-6 md:pt-4',
        'text-2xl font-bold md:text-3xl'
      )}
    >
      {children}
    </h2>
  )
}
