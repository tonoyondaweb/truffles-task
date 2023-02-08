export interface IAppProps {
  className: string;
}

export default function App({ className }: IAppProps) {
  return (
    <svg
      className={className}
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.25 9.375H3.75V11.7188H11.25V9.375ZM14.7266 3.84521L10.9023 0.256348C10.7266 0.0915527 10.4883 0 10.2383 0H10V4.6875H15V4.46411C15 4.2334 14.9023 4.01001 14.7266 3.84521ZM8.75 4.98047V0H0.9375C0.417969 0 0 0.391846 0 0.878906V17.8711C0 18.3582 0.417969 18.75 0.9375 18.75H14.0625C14.582 18.75 15 18.3582 15 17.8711V5.85938H9.6875C9.17188 5.85938 8.75 5.46387 8.75 4.98047ZM2.5 2.63672C2.5 2.47485 2.63984 2.34375 2.8125 2.34375H5.9375C6.11016 2.34375 6.25 2.47485 6.25 2.63672V3.22266C6.25 3.38452 6.11016 3.51562 5.9375 3.51562H2.8125C2.63984 3.51562 2.5 3.38452 2.5 3.22266V2.63672ZM2.5 4.98047C2.5 4.8186 2.63984 4.6875 2.8125 4.6875H5.9375C6.11016 4.6875 6.25 4.8186 6.25 4.98047V5.56641C6.25 5.72827 6.11016 5.85938 5.9375 5.85938H2.8125C2.63984 5.85938 2.5 5.72827 2.5 5.56641V4.98047ZM12.5 16.1133C12.5 16.2751 12.3602 16.4062 12.1875 16.4062H9.0625C8.88984 16.4062 8.75 16.2751 8.75 16.1133V15.5273C8.75 15.3655 8.88984 15.2344 9.0625 15.2344H12.1875C12.3602 15.2344 12.5 15.3655 12.5 15.5273V16.1133ZM12.5 8.78906V12.3047C12.5 12.6284 12.2203 12.8906 11.875 12.8906H3.125C2.77969 12.8906 2.5 12.6284 2.5 12.3047V8.78906C2.5 8.46533 2.77969 8.20312 3.125 8.20312H11.875C12.2203 8.20312 12.5 8.46533 12.5 8.78906Z" />
    </svg>
  );
}