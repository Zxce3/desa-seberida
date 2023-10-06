<script>
  import { onMount } from "svelte";
  let isDarkMode = false;

  onMount(() => {
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
</script>

<header
  class={`flex items-center justify-between p-4 bg-${
    isDarkMode ? "black-800" : "white"
  }`}
>
  <a href="/" class="text-xl font-bold">Desa Seberida</a>
  <nav class="flex space-x-4">
    <a href="/" class="text-gray-700 hover:underline">Home</a>
    <a href="/about" class="text-gray-700 hover:underline">About</a>
    <a href="/contact" class="text-gray-700 hover:underline">Contact</a>
  </nav>
</header>
