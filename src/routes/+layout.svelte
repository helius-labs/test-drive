<style global>
    @import "../app.postcss";
</style>

<main>
    <nav
        class="sticky top-0 left-0 flex w-full items-center justify-between bg-black p-3"
    >
        <h1 class="text-xl">TESTDRIVE</h1>
        <div class="flex items-center">
            <a
                href=""
                class="link"
            >
                Link 1
            </a>
            <a
                href=""
                class="link"
            >
                Link 2
            </a>
        </div>
    </nav>
    <slot />
</main>
