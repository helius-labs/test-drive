<script>
    import Docs from "$lib/components/Docs.svelte";
    import Header from "$lib/components/Header.svelte";
    import RPCMenu from "$lib/components/RPCMenu.svelte";
    import Request from "$lib/components/Request.svelte";
    import Response from "$lib/components/Response.svelte";
</script>

<div class="min-h-screen overflow-y-hidden bg-black">
    <Header />

    <div class="grid grid-cols-2 gap-3">
        <div class="col-span-2">
            <RPCMenu />
        </div>
        <div class="col-span-2 flex items-center justify-center">
            <div class="min-h-100 w-3/4 grid-cols-2 gap-3">
                <div class="grid h-full grid-cols-2 gap-2">
                    <Request />
                    <Response />
                </div>
            </div>
        </div>
    </div>
    <Docs />
</div>
