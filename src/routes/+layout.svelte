<style global>
    @import "../app.postcss";
</style>

<script>
    import Nav from "../components/Nav.svelte";
</script>

<main class="h-full">
    <Nav />
    <slot />
</main>
