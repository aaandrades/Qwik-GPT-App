import {
  $,
  component$,
  useSignal,
  useStylesScoped$,
  useStore,
} from "@builder.io/qwik";
import styles from "./dropdown-content.css?inline";
import { InputRange } from "../input-range/InputRange";

export const DropdownContent = component$(() => {
  useStylesScoped$(styles);
  const dropdown = useSignal(false);
  const store = useStore({ words: 300, randomness: 0.6 });

  const updateDropdown = $(() => {
    dropdown.value = !dropdown.value;
  });

  console.log(dropdown.value);

  const renderOptions = () => {
    return (
      <div class={dropdown.value ? "show" : "hide"}>
        <InputRange
          label="Number of words"
          min={2}
          max={600}
          value={store.words}
          onChange={$(
            ({ target }: any) =>
              (store.words = +(target as HTMLInputElement).value)
          )}
        />
        <InputRange
          label="Randomness"
          min={0}
          max={2}
          step="0.1"
          value={store.randomness}
          onChange={$(
            ({ target }: any) =>
              (store.randomness = +(target as HTMLInputElement).value)
          )}
        />
      </div>
    );
  };

  return (
    <article class="dropdown-container">
      <div
        role="button"
        tabIndex={0}
        onClick$={() => updateDropdown()}
        class="dropdown-container__button"
      >
        Advanced Options
      </div>
      {renderOptions()}
    </article>
  );
});
