import clsx from 'clsx'

type BorderProps<T extends React.ElementType> = {
  as?: T
  className?: string
  position?: 'top' | 'left'
  invert?: boolean
}

export function Border<T extends React.ElementType = 'div'>({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'lg:before:bg-white lg:after:bg-white/10'
          : 'lg:before:bg-green-900 lg:after:bg-green-900/10',
        position === 'top' &&
        'lg:before:left-0 lg:before:top-0 lg:before:h-px lg:before:w-6 lg:after:left-8 lg:after:right-0 lg:after:top-0 lg:after:h-px',
        position === 'left' &&
        'lg:before:left-0 lg:before:top-0 lg:before:h-6 lg:before:w-px lg:after:bottom-0 lg:after:left-0 lg:after:top-8 lg:after:w-px',
      )}
      {...props}
    />
  )
}
