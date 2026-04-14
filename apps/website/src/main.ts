import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <nav class="navbar">
    <div class="nav-left">
      <div class="logo">HackerRank<div class="logo-square"></div></div>
      <ul class="nav-links">
        <li><a href="#">Products</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>
    <div class="nav-right">
      <a href="#" class="for-devs">
        For Developers 
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <button class="btn btn-dark">Request Demo</button>
      <button class="btn btn-green">Sign Up</button>
    </div>
  </nav>

  <main class="hero">
    <h1 class="hero-title">
      <span class="dim">The future</span><br>
      <span class="dim">of development</span><br>
      <span class="dim">is</span>
      <span class="highlight">
        <svg class="hero-icon icon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>
        human +
        <svg class="hero-icon icon-cyan" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
        AI
      </span>
    </h1>
    <p class="hero-subtitle">
      We help you map the skills you need, track the skills you have, and close your gaps to thrive in a GenAI world.
    </p>
    <button id="counter" type="button" class="btn-glow">Join The Community</button>
  </main>

  <div class="cookie-banner">
    <div class="cookie-text">
      We set essential cookies to help run our websites and services. By clicking Accept, you consent to the use of additional cookies for analytics and marketing. Feel free to update your settings at any time. Read more in our <a href="#">Cookie Policy</a>.
    </div>
    <div class="cookie-actions">
      <button class="btn btn-dark">Decline</button>
      <button class="btn btn-green">Accept</button>
    </div>
  </div>
`;

// Attaching the counter from your boilerplate to the new CTA button
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
