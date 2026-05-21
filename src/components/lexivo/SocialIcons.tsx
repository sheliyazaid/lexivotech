type Props = { size?: number; className?: string };

export function InstagramIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
export function LinkedinIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7" /><circle cx="8" cy="7" r="0.8" fill="currentColor"/>
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" /><path d="M12 10v7"/>
    </svg>
  );
}
export function ThreadsIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.3 11.1c-.1 0-.2-.1-.3-.1-.2-1.3-.8-2.3-1.7-3-1-.8-2.2-1.2-3.8-1.2-3 0-5 1.8-5 4.5 0 2.2 1.4 3.8 3.8 4.2.3.1.6.1 1 .1 1.5 0 2.8-.5 3.7-1.5.5-.5.8-1.2 1-1.9.7.4 1 .9 1 1.6 0 1.3-1.2 2.2-3 2.2-1.3 0-2.2-.5-2.8-1.5l-1.7 1.2c.9 1.5 2.4 2.3 4.5 2.3 3 0 5-1.7 5-4.3 0-1.8-.9-3.1-2.7-3.8Zm-3.5 2.2c-.5.6-1.2.9-2.1.9h-.5c-1.3-.2-2.1-1-2.1-2.3 0-1.5 1.1-2.4 2.8-2.4 1.7 0 2.7.9 2.9 2.7-.4 0-.7 0-1 .1Zm1.1-1.8v-.1.1Z" />
    </svg>
  );
}

export function XIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}