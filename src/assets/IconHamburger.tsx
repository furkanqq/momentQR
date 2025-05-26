import { IconType } from './type';

export const IconHamburger: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather feather-menu"
      strokeLinejoin="round"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      height="24"
      fill="none"
      width="24"
      {...props}>
      <line y1="12" x2="21" y2="12" x1="3"></line>
      <line x2="21" x1="3" y1="6" y2="6"></line>
      <line y1="18" x2="21" y2="18" x1="3"></line>
    </svg>
  );
};
