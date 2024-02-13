import ButtonProps from '@/types/components/buttons/ButtonProps'
import clsx from 'clsx'

export default function IconButton({ onClick, className, screenReaderText, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'rounded-lg p-2 backdrop-blur-sm backdrop-filter',
        'border border-slate-500/60 dark:border-slate-600/30',
        'bg-slate-100/10 dark:bg-slate-600/20',
        'hover:bg-slate-100/30 dark:hover:bg-slate-600/30'
      )}
      aria-label={screenReaderText}
    >
      <p className='sr-only'>{screenReaderText}</p>
      {icon}
    </button>
  )
}
