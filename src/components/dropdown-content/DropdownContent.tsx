import {
  $,
  component$,
  useSignal,
  useStylesScoped$,
  useStore,
} from "@builder.io/qwik";
import styles from "./dropdown-content.css?inline";

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
        <label>Number of words</label>
        <input
          type="range"
          min="2"
          max="600"
          title="TLC"
          value={store.words}
          onInput$={$(
            ({ target }: any) =>
              (store.words = +(target as HTMLInputElement).value)
          )}
        />
        {store.words}
        <label>Randomness</label>
        <input
          type="range"
          min="0"
          max="2"
          title="TLC"
          value={store.randomness}
          step="0.1"
          onInput$={$(
            ({ target }: any) =>
              (store.randomness = +(target as HTMLInputElement).value)
          )}
        />
        {store.randomness}
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
