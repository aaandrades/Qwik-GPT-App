import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          {/* Content of {children} */}
          <Slot />
        </section>
      </main>
      <footer>Made with ❤️ by Andres Andrade</footer>
    </>
  );
});
