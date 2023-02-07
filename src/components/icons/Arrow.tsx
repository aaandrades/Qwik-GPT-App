interface IProps {
  open: boolean;
}
export const ArrowIcon = ({ open }: IProps) => (
  <svg
    width="20px"
    height="20px"
    class={`arrow-icon__${open ? "open" : "close"}`}
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#ff006e"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="#ff006e"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);
