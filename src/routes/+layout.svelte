<script>
    import { Footer } from "$lib/components/Footer";
    import { Header } from "$lib/components/Header";

    let { children } = $props();
</script>

<div class="wrapper">
    <Header />
    <main class="main-blob">
        {@render children?.()}
    </main>

    <Footer />
</div>

<style>
    .main-blob {
        flex-grow: 1;
        background-color: var(--primary);
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100dvh;
    }
</style>
