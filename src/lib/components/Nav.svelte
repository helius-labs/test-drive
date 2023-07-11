<script>
    // WILL BE IMPLEMENTED IN THE FUTURE
    // import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="bg-black border-b border-zinc-900 sticky top-0 left-0 flex h-24 w-full flex-wrap items-center justify-between p-4 md:flex-nowrap"
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
            class="flex items-center justify-center rounded-lg bg-orange-400 hover:bg-orange-300 duration-200 animate-fade px-4 xl:px-6 h-12 space-x-4"
            on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
            <img
                class="w-6"
                src="/HeliusDarkLogo.svg"
                alt="Logo"
            />
            <span class='text-black tracking-widest font-medium text-sm xl:text-md '>LAUNCH PORTAL</span>
        </button>
        </div>
    </div>
</nav>
