import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="header-container">
      <h1>Interview Ace</h1>
    </header>
  );
});
