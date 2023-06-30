<script>
    import Docs from "../components/Docs.svelte";
    import Header from "../components/Header.svelte";
    import RPCMenu from "../components/RPCMenu.svelte";
    import Request from "../components/Request.svelte";
    import Response from "../components/Response.svelte";
</script>

<div class=" h-screen bg-white">
    <Header />
    <RPCMenu />
    <div class="flex justify-center">
        <!-- Need help from qudo on getting these two components to be the correct width -->
        <div class="margin-auto m-2 w-2/3">
            <!-- <div class="margin-auto grid w-10/12 grid-cols-2 gap-3">-->
            <!-- <Request /> -->
            <Response />
        </div>
    </div>
</div>
