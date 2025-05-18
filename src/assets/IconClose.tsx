import { IconType } from './type';

export const IconClose: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      height="24"
      fill="none"
      width="25"
      {...props}>
      <g
        clip-path="url(#AgRwQQwkjra)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke="currentColor"
        stroke-width="1.5">
        <path d="m9.25 15.25 6.5-6.5m0 6.5-6.5-6.5m3.25 12.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z" />
      </g>
      <defs>
        <clipPath id="AgRwQQwkjra">
          <path fill="currentColor" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
};
