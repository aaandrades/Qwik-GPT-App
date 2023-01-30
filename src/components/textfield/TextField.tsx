import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./textfield.css?inline";

interface IProps {
  onChange: any;
  label: string;
  placeholder: string;
  value: string;
  style?: string;
}

export const TextField = component$(
  ({ onChange, label, value, placeholder, style = "" }: IProps) => {
    useStylesScoped$(styles);

    return (
      <div class={`textfield-container ${style}`}>
        <label for={label} class="textfield-container__label">
          {label}
        </label>
        <input
          class="textfield-container__input"
          id={label}
          placeholder={placeholder || ""}
          value={value}
          onInput$={({ target }) =>
            onChange((target as HTMLInputElement).value)
          }
        />
      </div>
    );
  }
);
