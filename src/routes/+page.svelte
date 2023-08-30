<script>
    import Docs from "$lib/components/Docs.svelte";
    import Header from "$lib/components/Header.svelte";
    import RPCMenu from "$lib/components/RPCMenu.svelte";
    import Request from "$lib/components/Request.svelte";
    import Response from "$lib/components/Response.svelte";
    import { isOpen } from "$lib/stores/current-method";
</script>

<div class="min-h-screen overflow-x-hidden overflow-y-hidden bg-black">
    <Header />
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        {#if !$isOpen}
            <div class="col-span-1 md:col-span-2">
                <RPCMenu />
            </div>

            <div
                class="col-span-1 md:col-span-2 md:flex md:items-center md:justify-center"
            >
                <div
                    class="grid w-full grid-cols-1 gap-2 md:w-3/4 md:grid-cols-2"
                >
                    <Request />
                    <Response />
                </div>
            </div>
        {/if}
        {#if $isOpen}
            <p class="text-center opacity-20">.</p>
        {/if}
    </div>
    {#if !$isOpen}
        <Docs />
    {/if}
    <div class="fixed bottom-4 right-4 hidden md:block">
        <a
            href="https://github.com/helius-labs/test-drive.git"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="/github.svg"
                alt=""
                class="github-svg-hover-shadow w-1/3"
            />
        </a>
    </div>
</div>
