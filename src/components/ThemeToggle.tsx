import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import { useState } from "react";

const applyDarkmode = () => {
  document.documentElement.style.setProperty(
    "--color-primary",
    "var(--bg-dark)",
  );
  document.documentElement.style.setProperty(
    "--color-accent-light",
    "var(--boxes-dark)",
  );
  document.documentElement.style.setProperty(
    "--color-accent-dark",
    "var(--borders)",
  );
  document.documentElement.style.setProperty(
    "--color-contrast",
    "var(--button-normal)",
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--text-dark)",
  );
  document.documentElement.style.setProperty(
    "--color-text-opp",
    "var(--text-light)",
  );
  document.documentElement.style.setProperty(
    "--color-links",
    "var(--links-dark)",
  );
};

const applyLightmode = () => {
  document.documentElement.style.setProperty(
    "--color-primary",
    "var(--bg-light)",
  );
  document.documentElement.style.setProperty(
    "--color-accent-light",
    "var(--boxes-light)",
  );
  document.documentElement.style.setProperty(
    "--color-accent-dark",
    "var(--borders)",
  );
  document.documentElement.style.setProperty(
    "--color-contrast",
    "var(--button-normal)",
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--text-light)",
  );
  document.documentElement.style.setProperty(
    "--color-text-opp",
    "var(--text-dark)",
  );
  document.documentElement.style.setProperty(
    "--color-links",
    "var(--links-light)",
  );
};

const ThemeToggle = () => {
  const [isLeft, setIsLeft] = useState(false);

  return (
    <button
      onClick={() => {
        setIsLeft((wasLeft) => {
          if (wasLeft) {
            applyDarkmode();
          } else {
            applyLightmode();
          }
          return !wasLeft;
        });
      }}
      className="theme-toggle-wrapper"
    >
      <span
        className="left-span"
        style={{
          background: isLeft ? "#aabbaa" : "",
        }}
      >
        <SunIcon size={24}></SunIcon>
      </span>
      <span
        className="right-span"
        style={{
          background: isLeft ? "" : "#aabbaa",
        }}
      >
        <MoonStarsIcon size={24}></MoonStarsIcon>
      </span>
    </button>
  );
};

export default ThemeToggle;
