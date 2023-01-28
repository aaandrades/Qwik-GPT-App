import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./questions.css?inline";
import Header from "~/components/header/header";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <article>
          <h1>Questions</h1>
        </article>
      </section>
    </>
  );
});
