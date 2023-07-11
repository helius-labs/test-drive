<style global>
    @import "../app.postcss";
</style>

<script>
    import Nav from "../components/Nav.svelte";
</script>

<main class="h-full overflow-hidden">
    <Nav />
    <slot />
</main>
