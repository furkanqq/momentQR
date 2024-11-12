import { IconType } from './type';

export const IconCamera: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M18.75 15.25C18.75 15.6478 18.592 16.0294 18.3107 16.3107C18.0294 16.592 17.6478 16.75 17.25 16.75H3.75C3.35218 16.75 2.97064 16.592 2.68934 16.3107C2.40804 16.0294 2.25 15.6478 2.25 15.25V7C2.25 6.60218 2.40804 6.22064 2.68934 5.93934C2.97064 5.65804 3.35218 5.5 3.75 5.5H6.75L8.25 3.25H12.75L14.25 5.5H17.25C17.6478 5.5 18.0294 5.65804 18.3107 5.93934C18.592 6.22064 18.75 6.60218 18.75 7V15.25Z"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 13.75C12.1569 13.75 13.5 12.4069 13.5 10.75C13.5 9.09315 12.1569 7.75 10.5 7.75C8.84315 7.75 7.5 9.09315 7.5 10.75C7.5 12.4069 8.84315 13.75 10.5 13.75Z"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
