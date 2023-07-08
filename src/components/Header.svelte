<script>
    import HeliusCircles from "$lib/assets/heliusCircles.svg";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    let isVisible = false;

    onMount(() => {
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
</script>

<div class="flex justify-center">
    <!-- <div>
        <img
            src={HeliusCircles}
            alt="Helius Circles"
            class="p-5"
        />
    </div> -->
    {#if isVisible}
        <div
            class=" m-12 flex items-center"
            in:fade={{ delay: 500, duration: 1000 }}
        >
            <h1 class="text-center text-7xl font-bold text-HeliusOrangeDark">
                go faster
            </h1>
        </div>
    {/if}
    <!-- <div>
        <img
            src={HeliusCircles}
            alt="Helius Circles"
            class="p-5"
        />
    </div> -->
</div>
