import { IconType } from './type';

export const IconDownload: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M17.25 12.25V15.25C17.25 15.6478 17.092 16.0294 16.8107 16.3107C16.5294 16.592 16.1478 16.75 15.75 16.75H5.25C4.85218 16.75 4.47064 16.592 4.18934 16.3107C3.90804 16.0294 3.75 15.6478 3.75 15.25V12.25"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.75 8.5L10.5 12.25L14.25 8.5"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        d="M10.5 12.25V3.25"
        strokeWidth="1.5"
      />
    </svg>
  );
};
