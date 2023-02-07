import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from "./dropdown-content.css?inline";
import { InputRange } from "../input-range/InputRange";
import { Dropdown } from "../dropdown/Dropdown";
import type { IStore } from "~/interface/general.interfaces";

interface IProps {
  store: IStore;
}

export const DropdownContent = component$(({ store }: IProps) => {
  useStyles$(styles);
  const dropdown = useSignal<boolean>(false);

  const updateDropdown = $(() => {
    dropdown.value = !dropdown.value;
  });

  const renderOptions = () => {
    return (
      <div class={`dropdown-container ${dropdown.value ? "show" : "hide"}`}>
        {dropdown.value && (
          <>
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
              style="dropdown-container__input-range mt-10"
              onChange={$((value: string) => (store.model = value))}
              options={[
                {
                  value: "xlarge",
                  label: "xlarge",
                },
                {
                  value: "command-xlarge-nightly",
                  label: "command-xlarge-nightly",
                },
                {
                  value: "medium",
                  label: "medium",
                },
              ]}
            />
          </>
        )}
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
