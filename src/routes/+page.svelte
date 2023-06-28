<script>
    import Header from "../components/Header.svelte";
    import RPCMenu from "../components/RPCMenu.svelte";
    import Request from "../components/Request.svelte";
    import Response from "../components/Response.svelte";
</script>

<div class="min-h-screen bg-white">
    <Header />
    <RPCMenu />
    <div class="flex justify-center">
        <Request />
        <Response />
    </div>

    <div class="mx-auto max-w-xl">
        <!-- <p>This is a page</p>
        <button class="btn">Button</button>
        <button class="btn-primary btn">Button</button>
        <button class="btn-secondary btn">Button</button> -->
    </div>
</div>
