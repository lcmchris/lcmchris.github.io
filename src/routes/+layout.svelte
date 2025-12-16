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
        display: flex;
        justify-content: center;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
    }
   
</style>
