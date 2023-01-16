import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 0 });
  return (
    <button onClick$={() => store.count++} title="Advance">
      {store.count}
    </button>
  );
});
