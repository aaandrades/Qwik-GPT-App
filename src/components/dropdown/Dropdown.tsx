import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./dropdown.css?inline";
import { ArrowIcon } from "../icons/Arrow";

interface IProps {
  options: { value: string; label: string }[];
  title: string;
  label: string;
  style?: string;
  onChange: any;
}

export const Dropdown = component$(
  ({ style = "", options, title, label, onChange }: IProps) => {
    const store = useStore({ isOpen: false });
    useStylesScoped$(styles);

    return (
      <div class={`dropdown-select ${style}`}>
        <label class="dropdown-select__label">{label}</label>
        <div class="dropdown-select__arrow">
          <ArrowIcon open={store.isOpen} />
        </div>
        <select
          title={title}
          class="dropdown-select__select"
          onFocusin$={$(() => (store.isOpen = true))}
          onFocusout$={$(() => (store.isOpen = false))}
          onChange$={$((event: any) => onChange(event.target.value))}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }
);
