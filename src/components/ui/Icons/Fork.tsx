import { cn } from 'lib/utils';

const Fork = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={cn('w-4 h-4', className)}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
    ></path>
    <path fill="currentColor" fillRule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z"></path>
  </svg>
);

export default Fork;
