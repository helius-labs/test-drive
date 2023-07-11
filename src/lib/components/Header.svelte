<style>
    .banner-new {
        background-image: linear-gradient(
            90deg,
            #f8b34b,
            #ec80b4 16%,
            #6157f8 32%,
            #6157f8 74%,
            #00a1c1
        );
        border-radius: 0%;
    }
</style>

<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    let isVisible = false;

    onMount(() => {
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
</script>

<div
    class="banner-new alert m-auto h-10 w-full justify-center border-none p-6 text-center text-white"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-info"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    <span class="justify-center text-sm"
        >Don't have an RPC? Get one for free, <a
            class="underline"
            href="https://dev.helius.xyz/dashboard/app"
            target="_blank"
            rel="noreferrer">here.</a
        ></span
    >
</div>

<div class="header-new flex justify-center">
    {#if isVisible}
        <div
            class="m-12 flex flex-col items-center"
            transition:fade={{ duration: 2500 }}
        >
            <h1
                class="mb-10 text-center text-7xl font-bold text-HeliusOrangeDark"
            >
                go faster
            </h1>
            <h2 class="-mt-4">Use Test Drive to race your RPCs.</h2>
            <!-- 
            <div class="flex w-screen justify-center">
                <video
                    class="w-full max-w-4xl rounded"
                    src="/helius.mp4"
                    autoplay
                    loop
                    muted
                />
            </div> -->
        </div>
    {/if}
</div>
