<script>
    import Docs from "../components/Docs.svelte";
    import Header from "../components/Header.svelte";
    import RPCMenu from "../components/RPCMenu.svelte";
    import Request from "../components/Request.svelte";
    import Response from "../components/Response.svelte";
</script>

<div class="bg-white">
    <Header />
    <RPCMenu />
    <div class="flex justify-center">
        <div class="grid max-w-7xl grid-cols-2 gap-3">
            <Request />
            <Response />
        </div>
    </div>
    <Docs />
</div>
