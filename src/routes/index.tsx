import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Welcome } from "~/components/welcome/Welcome";

export default component$(() => {
  // const fetchService = $(async () => {
  //   try {
  //     const value = await fetch("api");
  //     const data = await value.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Falle");
  //   }
  // });

  return (
    <Welcome />
    //  <button type="button" onClick$={() => fetchService()}>
    //   Click me
    // </button>
  );
});

export const head: DocumentHead = {
  title: "AI interview Ace",
  meta: [
    {
      name: "description",
      content:
        "AI interview partner helps you to prepare for your next interview",
    },
  ],
};
