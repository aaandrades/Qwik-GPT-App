import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./input-range.css?inline";

interface IProps {
  label: string;
  value: number;
  onChange: any;
  min: number;
  max: number;
  step?: string;
  style?: string;
}

export const InputRange = component$(
  ({ label, value, onChange, min, max, step = "1", style = "" }: IProps) => {
    useStylesScoped$(styles);

    return (
      <div class={`input-range-container ${style}`}>
        <label class="input-range-container__label">{label}</label>
        <input
          title={label}
          type="range"
          value={value}
          onInput$={onChange}
          min={min}
          max={max}
          step={step}
          name={label}
        />
        <output class="input_range-container__value" for={label}>
          {value}
        </output>
      </div>
    );
  }
);
