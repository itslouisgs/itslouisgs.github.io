import ProjectProps from '@/types/ProjectProps'
import clsx from 'clsx'

export default function ListCard({ title, description, techStacks, links }: ProjectProps) {
  const techStacksEntry = techStacks.map((techStack, index) => (
    <li
      key={index}
      className={clsx(
        'mr-4 last-of-type:mr-0',
        'text-base font-medium text-blue-700 dark:text-blue-300'
      )}
    >
      {techStack}
    </li>
  ))

  const linksEntry = links.map((link, index) => (
    <li
      key={index}
      className='z-10'
    >
      <a
        href={link.url}
        target='_blank'
        rel='noreferrer'
        aria-label={link.label}
      >
        {link.icon}
      </a>
    </li>
  ))

  return (
    <li
      className={clsx(
        'w-full p-4 sm:p-6',
        'flex flex-col justify-between',
        'transform duration-300',
        'rounded-xl border border-slate-500/60 dark:border-slate-600/30',
        'bg-slate-100/10 dark:bg-slate-600/20',
        'hover:bg-slate-100/30 dark:hover:bg-slate-600/30',
        'cursor-pointer backdrop-filter'
      )}
    >
      <header>
        <h3 className='pb-4 text-lg font-bold md:text-xl'>
          <a
            href={
              links.find(({ label }) => label === 'Source code')?.url ??
              links.find(({ label }) => label === 'Live')?.url
            }
            className={clsx(
              'no-default z-0',
              'before:absolute before:left-0 before:top-0 before:h-full before:w-full'
            )}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </h3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <ul className='mb-4 flex flex-wrap'>{techStacksEntry}</ul>
        <ul className='flex space-x-4'>{linksEntry}</ul>
      </footer>
    </li>
  )
}
