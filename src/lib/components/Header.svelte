<style>
    .banner-new {
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

{#if isVisible}
    <div
        class="banner-new alert m-auto h-auto w-full justify-center border-none bg-zinc-900 p-4 text-center text-white md:h-8"
        transition:fade={{ duration: 2500 }}
    >
        <div class="flex items-center justify-center space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6 shrink-0 stroke-info opacity-80"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span class="justify-center tracking-widest text-sm text-zinc-300">
                Don't have an RPC? Get one for free, <a
                    class="underline"
                    href="https://dev.helius.xyz/dashboard/app"
                    target="_blank"
                    rel="noreferrer">here.</a
                >
            </span>
        </div>
    </div>

    <div class="header-new flex justify-center">
        <div
            class="m-12 flex flex-col items-center"
            transition:fade={{ duration: 2500 }}
        >
            <h1
                class="mb-10 text-center text-7xl font-extrabold tracking-wider text-[#E84125]"
            >
                go faster
            </h1>
            <h2 class="-mt-4 text-center tracking-widest">
                {"The Ultimate Tool for Testing Solana RPCs."}
            </h2>
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
    </div>
{/if}
