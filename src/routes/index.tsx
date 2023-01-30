import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Welcome } from "~/components/welcome/Welcome";

export default component$(() => <Welcome />);

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
