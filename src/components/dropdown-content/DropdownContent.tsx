import {
  $,
  component$,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./dropdown-content.css?inline";
import { InputRange } from "../input-range/InputRange";
import { Dropdown } from "../dropdown/Dropdown";

export const DropdownContent = component$(() => {
  useStyles$(styles);
  const dropdown = useSignal(true);
  const store = useStore({ words: 300, randomness: 0.6 });

  const updateDropdown = $(() => {
    dropdown.value = !dropdown.value;
  });

  const renderOptions = () => {
    return (
      <div class={`dropdown-container ${dropdown.value ? "show" : "hide"}`}>
        <div class="dropdown-container__ranges">
          <InputRange
            label="Number of words"
            min={2}
            style="dropdown-container__input-range"
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
            style="dropdown-container__input-range"
            max={2}
            step="0.1"
            value={store.randomness}
            onChange={$(
              ({ target }: any) =>
                (store.randomness = +(target as HTMLInputElement).value)
            )}
          />
        </div>
        <Dropdown
          title="Select your model"
          label="Model"
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
          ]}
        />
      </div>
    );
  };

  return (
    <article>
      <div
        role="button"
        tabIndex={0}
        onClick$={() => updateDropdown()}
        class="dropdown-container__button"
        onKeyDown$={(event: any) => {
          event.key === "Enter" || event.key === " " ? updateDropdown() : null;
        }}
      >
        Advanced Options
      </div>
      {renderOptions()}
    </article>
  );
});
