<script>
    import { onMount } from "svelte";


    /** @type {HTMLCanvasElement} */
    let canvas;
    /** @type {CanvasRenderingContext2D} */
    export let ctx;

    onMount(()=>{
        ctx = canvas.getContext("2d");
        canvas.width = 1080;
        canvas.height = 720;
    })

</script>
    
<canvas bind:this={canvas}></canvas>
    
<style>
</style>