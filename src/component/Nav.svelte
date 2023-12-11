<script>
  import { onMount } from "svelte";
  let isDarkMode = false;
  import { base } from "$app/paths";
  onMount(() => {
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
</script>

<header
  class={`flex items-center justify-between p-4 bg-${
    isDarkMode ? "black-800" : "white"
  }`}
>
  <a href="{base}/" class="text-xl font-bold">Desa Seberida</a>
  <nav class="flex space-x-4">
    <a href="{base}/" class="text-gray-700 hover:underline">Home</a>
    <a href="{base}/about" class="text-gray-700 hover:underline">About</a>
    <a href="{base}/contact" class="text-gray-700 hover:underline">Contact</a>
    <a href="{base}/history" class="text-gray-700 hover:underline">History</a>
  </nav>
</header>
