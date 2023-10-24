<script>
  import { onMount } from "svelte";

  const releaseDate = new Date("2023-11-20T00:00:00.000Z");

  let daysRemaining = 0;
  let hoursRemaining = 0;
  let minutesRemaining = 0;
  let secondsRemaining = 0;

  onMount(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = releaseDate - now;

      daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      hoursRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutesRemaining = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    };

    updateCountdown();

    setInterval(updateCountdown, 1000);
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="py-4 px-6">
    <h2 class="text-4xl font-bold text-gray-800">Coming Soon</h2>
    <p class="mt-2 text-lg text-gray-600">
      We are working hard to bring you an amazing website. Stay tuned!
    </p>
  </div>

  <div class="countdown py-4 px-6">
    <div class="flex flex-wrap gap-4 justify-center items-center">
      <div class="border rounded-lg px-4 py-2">
        <div id="days" class="font-bold font-mono text-2xl text-gray-800">
          {daysRemaining}d
        </div>
      </div>
      <div class="border rounded-lg px-4 py-2">
        <div id="hours" class="font-bold font-mono text-2xl text-gray-800">
          {hoursRemaining}h
        </div>
      </div>
      <div class="border rounded-lg px-4 py-2">
        <div id="minutes" class="font-bold font-mono text-2xl text-gray-800">
          {minutesRemaining}m
        </div>
      </div>
      <div class="border rounded-lg px-4 py-2">
        <div id="seconds" class="font-bold font-mono text-2xl text-gray-800">
          {secondsRemaining}s
        </div>
      </div>
    </div>
  </div>
</div>
