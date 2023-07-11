<script>
    // WILL BE IMPLEMENTED IN THE FUTURE
    // import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="sticky top-0 left-0 flex h-16 w-full items-center justify-between border-b border-zinc-900 bg-black p-4 md:flex-nowrap"
>
    <div class="flex w-32 items-center sm:w-32 md:w-1/6">
        <img
            class="w-full"
            src="/logo.png"
            alt="Logo"
        />
    </div>
    <div class="ml-auto">
        <div class="mr-2">
            <button
                class="animate-fade btn-sm btn flex h-11 items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-400 px-2 duration-200 hover:bg-orange-300 md:space-x-4 md:px-4 xl:px-6"
                on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
                <img
                    class="w-4 sm:w-6"
                    src="/heliusWhite.svg"
                    alt="Logo"
                />
                <span
                    class="xl:text-md text-xs font-medium tracking-widest text-white sm:text-sm "
                    >LAUNCH PORTAL</span
                >
            </button>
        </div>
    </div>
</nav>
