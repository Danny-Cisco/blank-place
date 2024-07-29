<script>
  import { fly } from "svelte/transition";
  import Bishop from "./Bishop.svelte"; // Import the Bishop component
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome"; // Import the FontAwesomeIcon component
  import { faXmark } from "@fortawesome/free-solid-svg-icons"; // Import the faXmark icon

  let isExpanded = false;

  function toggleExpansion() {
    isExpanded = !isExpanded;
  }
</script>

<div class="absolute isolate z-50 right-[5px]">
  {#if isExpanded}
    <div
      class="flex overflow-hidden flex-col h-[90vh] w-[400px] rounded-2xl border-2 shadow-lg bg-white items-stretch justify-between"
      transition:fly={{ y: "-100%", duration: 300 }}
    >
      <div class="flex items-center justify-center">
        <img src="/default_avatar.png" alt="Avatar" class="w-12 h-12" />
        <div class="text-center text-gray-300">BISHOP</div>
      </div>
      <Bishop />
    </div>
  {/if}
  <button
    class="fixed btn btn-secondary marker:btn-outline bottom-2 right-4 {isExpanded
      ? ''
      : 'shadow-md'}"
    on:click={toggleExpansion}
  >
    {#if isExpanded}
      <FontAwesomeIcon icon={faXmark} class="w-8 h-8" />
    {:else}
      <img src="/default_avatar.png" alt="Avatar" class="w-12 h-12" />
    {/if}
  </button>
</div>
