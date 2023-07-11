<style>
    .nav-new {
        background-color: rgba(27, 27, 27, 0.26);
        backdrop-filter: blur(10px);
    }
</style>

<script>
    // WILL BE IMPLEMENTED IN THE FUTURE
    // import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="nav-new sticky top-0 left-0 flex h-16 w-full flex-wrap items-center justify-between p-1 md:flex-nowrap"
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
                class="btn bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-sm"
                on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
                Launch Dev Portal
            </button>
        </div>
    </div>
</nav>
