<script>
    import Docs from "../components/Docs.svelte";
    import Header from "../components/Header.svelte";
    import RPCMenu from "../components/RPCMenu.svelte";
    import Request from "../components/Request.svelte";
    import Response from "../components/Response.svelte";
</script>

<div class="min-h-screen bg-white">
    <Header />
    <RPCMenu />
    <div class="grid grid-cols-1 md:grid-cols-2">
        <Request />
        <Response />
    </div>
    <Docs />
</div>
