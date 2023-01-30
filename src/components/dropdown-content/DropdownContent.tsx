import { Slot, component$ } from "@builder.io/qwik";

export const DropdownContent = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
