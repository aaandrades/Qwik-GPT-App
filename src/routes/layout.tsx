import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          {/* Content of {children} */}
          <Slot />
        </section>
      </main>
      <footer>Made with ❤️ by Andres Andrade</footer>
    </>
  );
});
