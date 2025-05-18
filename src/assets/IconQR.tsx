import { IconType } from './type';

export const IconQR: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 430 430"
      height="430"
      width="430"
      fill="none"
      {...props}>
      <g stroke-linejoin="round" stroke-linecap="round" stroke-width="12">
        <path d="M188.22 375.22V241.78H54.78v133.44z" stroke="#fff" />
        <path d="M122.401 268.47h39.13v80.06h-80.06v-80.06z" stroke="#e5f67a" />
        <path d="M188.22 55.28H54.78v133.44h133.44z" stroke="#fff" />
        <path d="M81.47 121.1V82h80.061v80h-80.06z" stroke="#e5f67a" />
        <path d="M241.28 55.28v133.44h133.44V55.28z" stroke="#fff" />
        <path d="M307.1 162H268V82h80v80z" stroke="#e5f67a" />
        <path
          d="M268.38 321.68v53.2m80.04-53.34c0-23.33.08-53.66.08-53.66h-80.12v27.66"
          stroke="#fff"
        />
        <path
          d="M375.1 268.59c0 38.91-.1 106.29-.1 106.29h-80V295h27.06v53h25.71"
          stroke="#fff"
        />
        <path d="M241.69 374.88V241.69h132.8" stroke="#fff" />
      </g>
    </svg>
  );
};
