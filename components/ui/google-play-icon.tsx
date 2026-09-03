type GooglePlayIconProps = {
  className?: string
}

export function GooglePlayIcon({ className }: GooglePlayIconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3.5 2.8 14.2 13.5 3.5 21.2c-.3-.3-.5-.8-.5-1.4V4.2c0-.6.2-1.1.5-1.4Z" fill="#42A5F5" />
      <path d="m14.2 13.5 3.1-3.1 3.4 1.9c1 .6 1 1.4 0 2l-3.4 1.9-3.1-2.7Z" fill="#FFCA28" />
      <path d="M3.5 2.8c.4-.4 1-.3 1.6 0l12.2 6.9-3.1 3.8L3.5 2.8Z" fill="#66BB6A" />
      <path d="M3.5 21.2c.4.4 1 .3 1.6 0l12.2-6.9-3.1-3.8L3.5 21.2Z" fill="#EF5350" />
    </svg>
  )
}