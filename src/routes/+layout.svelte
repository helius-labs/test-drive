<style global>
    @import "../app.postcss";
</style>

<script>
    import Nav from "$lib/components/Nav.svelte";
</script>

<main class="h-full overflow-x-hidden overflow-y-hidden">
    <Nav />
    <slot />
</main>
