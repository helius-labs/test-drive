<style>
    .nav-new {
        background-color: rgba(27, 27, 27, 0.26);
        backdrop-filter: blur(10px);
    }
</style>

<script>
    // import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="nav-new sticky top-0 left-0 flex h-16 w-full items-center justify-between p-1"
>
    <div class="flex items-center">
        <img
            class="w-1/6"
            src="/logo.png"
            alt="Logo"
        />
    </div>
    <div class="flex">
        <!-- <RaceModal /> -->
        <div class="mx-2 flex items-center justify-center">
            <button
                class="btn mx-5 bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-sm"
                on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
                Launch Dev Portal
            </button>
        </div>
    </div>
</nav>
