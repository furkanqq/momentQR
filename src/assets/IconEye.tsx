import { IconType } from './type';

export const IconEye: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M2.25 10C2.25 10 5.25 4 10.5 4C15.75 4 18.75 10 18.75 10C18.75 10 15.75 16 10.5 16C5.25 16 2.25 10 2.25 10Z"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 12.25C11.7426 12.25 12.75 11.2426 12.75 10C12.75 8.75736 11.7426 7.75 10.5 7.75C9.25736 7.75 8.25 8.75736 8.25 10C8.25 11.2426 9.25736 12.25 10.5 12.25Z"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
