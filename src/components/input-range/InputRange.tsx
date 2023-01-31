import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./input-range.css?inline";

interface IProps {
  label: string;
  value: number;
  onChange: any;
  min: number;
  max: number;
  step?: string;
}

export const InputRange = component$(
  ({ label, value, onChange, min, max, step = "1" }: IProps) => {
    useStylesScoped$(styles);

    return (
      <div class="input-range-container">
        <label>{label}</label>
        <input
          title={label}
          type="range"
          value={value}
          onInput$={onChange}
          min={min}
          max={max}
          step={step}
        />
        <span>{value}</span>
      </div>
    );
  }
);
