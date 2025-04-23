import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

export function Button({ className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-gradient-to-r from-primary to-accent p-4 text-base font-semibold text-white dark:text-neutral-900 hover:from-primary-dark hover:to-accent-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-90 shadow-md hover:shadow-lg dark:shadow-primary/20 transition-all duration-300',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
