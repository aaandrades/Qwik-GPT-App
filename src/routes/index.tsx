import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LandingIcon } from "~/components/icons/Landing";

export default component$(() => {
  const fetchService = $(async () => {
    try {
      const value = await fetch("api");
      const data = await value.json();
      console.log(data);
    } catch (error) {
      console.log("Falle");
    }
  });

  return (
    <div>
      <h1>AI Suggester</h1>
      <LandingIcon width={200} height={200} />
      <button type="button" onClick$={() => fetchService()}>
        Click me
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
