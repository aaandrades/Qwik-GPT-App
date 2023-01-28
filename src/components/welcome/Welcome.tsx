import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLottie } from "qwik-lottie";
import styles from "./welcome.css?inline";

// Animation
import chatbot from "../../../public/chatbot.json";

export const Welcome = component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="welcome-container">
      <article class="welcome-container__items">
        <h1 class="welcome-title">Interview Ace</h1>
        <p class="welcome-description">
          Interview Prep Tool: Practice with prompted questions and receive
          instant feedback!
        </p>
      </article>
      <article class="welcome-container__items">
        <div class="lottie-container">
          <QwikLottie
            options={{
              animationData: chatbot,
              name: "chatbot",
            }}
          />
        </div>
        <Link href="/questions">
          <button type="button" title="Go ahead!" class="navigation-button">
            Let's go for it!
          </button>
        </Link>
      </article>
    </section>
  );
});
