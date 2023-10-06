<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Header from "../component/Nav.svelte";
  import Footer from "../component/Footer.svelte";
  let isDarkMode = false;

  onMount(() => {
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
</script>

<div class={`h-screen flex flex-col bg-${isDarkMode ? "gray-900" : "white"}`}>
  <Header />
  <main class="flex-1 flex justify-center items-center">
    <slot />
  </main>
  <Footer />
</div>
