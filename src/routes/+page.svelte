<script>
    import Docs from "$lib/components/Docs.svelte";
    import Header from "$lib/components/Header.svelte";
    import RPCMenu from "$lib/components/RPCMenu.svelte";
    import Request from "$lib/components/Request.svelte";
    import Response from "$lib/components/Response.svelte";
</script>

<div class="min-h-screen overflow-y-hidden bg-black">
    <Header />

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="col-span-1 md:col-span-2">
            <RPCMenu />
        </div>
        <div
            class="col-span-1 md:col-span-2 md:flex md:items-center md:justify-center"
        >
            <div class="grid w-full grid-cols-1 gap-2 md:w-3/4 md:grid-cols-2">
                <Request />
                <Response />
            </div>
        </div>
    </div>

    <Docs />
</div>
