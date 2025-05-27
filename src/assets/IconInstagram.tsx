import { IconType } from './type';

export const IconInstagram: React.FC<IconType> = (props) => {
  return (
    <svg
      className="feather feather-instagram"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      height="24"
      fill="none"
      width="24"
      {...props}>
      <rect height="20" width="20" rx="5" ry="5" x="2" y="2"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x2="17.51" x1="17.5" y1="6.5" y2="6.5"></line>
    </svg>
  );
};
