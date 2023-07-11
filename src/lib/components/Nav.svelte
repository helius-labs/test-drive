<script>
    // WILL BE IMPLEMENTED IN THE FUTURE
    // import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="sticky top-0 left-0 flex h-24 w-full flex-wrap items-center justify-between border-b border-zinc-900 bg-black p-4 md:flex-nowrap"
>
    <div class="flex flex-1 items-center">
        <img
            class="w-1/2 sm:w-1/6 md:w-1/6"
            src="/logo.png"
            alt="Logo"
        />
    </div>
    <div class="ml-auto">
        <div class="mr-2">
            <button
                class="animate-fade flex h-12 items-center justify-center space-x-4 rounded-lg bg-[#E84125] px-4 duration-200 hover:bg-orange-300 xl:px-6"
                on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
                <img
                    class="w-6"
                    src="/HeliusDarkLogo.svg"
                    alt="Logo"
                />
                <span
                    class="xl:text-md text-sm font-medium tracking-widest text-black "
                    >LAUNCH PORTAL</span
                >
            </button>
        </div>
    </div>
</nav>
