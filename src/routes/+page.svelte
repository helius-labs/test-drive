<script>
    import Docs from "../components/Docs.svelte";
    import Header from "../components/Header.svelte";
    import RPCMenu from "../components/RPCMenu.svelte";
    import Request from "../components/Request.svelte";
    import Response from "../components/Response.svelte";
</script>

<div class="min-h-screen overflow-y-hidden bg-black">
    <Header />

    <div class="grid grid-cols-2 gap-3">
        <div class="col-span-2">
            <RPCMenu />
        </div>
        <div class="min-h-100 col-span-2 flex items-center justify-center">
            <div class="grid w-3/4 grid-cols-2 gap-3">
                <div class="col-span-1">
                    <Request />
                </div>
                <div class="col-span-1">
                    <Response />
                </div>
            </div>
        </div>
    </div>
    <Docs />
</div>
