import { IconType } from './type';

export const IconCamera: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 430 430"
      height="430"
      width="430"
      fill="none"
      {...props}>
      <g stroke-linejoin="round" stroke-width="12">
        <path d="M53.5 342.5H375v-213H53.5z" stroke="#fff" />
        <path
          d="M295.1 236c0 44.2-35.9 80.1-80.1 80.1s-80.1-35.9-80.1-80.1 35.9-80.1 80.1-80.1 80.1 35.9 80.1 80.1"
          stroke-miterlimit="12.8856"
          stroke-linecap="round"
          stroke="#e5f67a"
        />
        <path
          d="M269.5 236c0 30.1-24.4 54.5-54.5 54.5s-54.5-24.4-54.5-54.5 24.4-54.5 54.5-54.5 54.5 24.4 54.5 54.5m81.5-72.2c0 9.1-7.3 16.4-16.4 16.4s-16.4-7.3-16.4-16.4 7.3-16.4 16.4-16.4c9 0 16.4 7.3 16.4 16.4"
          stroke-miterlimit="12.8856"
          stroke-linecap="round"
          stroke="#e5f67a"
        />
        <path
          d="M87.6 128.9v-25.6h33.7v25.6m32.6 0 8.2-21 8.2-21h89.5l16.4 42"
          stroke-miterlimit="12.8856"
          stroke-linecap="round"
          stroke="#fff"
        />
      </g>
    </svg>
  );
};
