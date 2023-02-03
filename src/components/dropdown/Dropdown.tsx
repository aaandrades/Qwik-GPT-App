import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./dropdown.css?inline";

interface IProps {
  options: { value: string; label: string }[];
  title: string;
  label: string;
}

export const Dropdown = component$(({ options, title, label }: IProps) => {
  useStylesScoped$(styles);
  return (
    <div class="dropdown-select">
      <label>{label}</label>
      <select title={title} class="dropdown-select__select">
        {options.map((option) => (
          <option class="dropdown-select__option" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
