import { IconType } from './type';

export const IconLeft: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        d="M15.75 10H5.25"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 15.25L5.25 10L10.5 4.75"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
