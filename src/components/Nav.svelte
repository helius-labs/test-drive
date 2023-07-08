<script>
    import RaceModal from "./RaceModal.svelte";
</script>

<nav
    class="sticky top-0 left-0 flex w-full items-center justify-between bg-[#242934] p-2"
>
    <div class="flex items-center">
        <img
            class="w-100 mx-2 mr-2 h-20"
            src="/logo.png"
            alt="Logo"
        />
    </div>
    <div class="flex">
        <RaceModal />
        <div class="mx-4 flex items-center justify-center">
            <button
                class="btn bg-gradient-to-r from-orange-400 to-orange-600 p-2 text-white shadow-sm"
                on:click={() =>
                    window.open("https://dev.helius.xyz/dashboard/app")}
            >
                Launch Dev Portal
            </button>
        </div>
    </div>
</nav>
