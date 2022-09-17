<script>
    import { onMount } from "svelte";
    import Game from "./comps/Game.svelte";

    let main;

    onMount(()=>{
		window.onresize(null);
	});
	window.onresize = ()=>{
		let scale = 1;
		const w = document.body.clientWidth;
		const h = document.body.clientHeight;
		if (w*(720/1080) >= h) scale = h/720;
		else scale = w/1080;
		
		main.style.transform = `translate(-50%, -50%) scale(${scale}, ${scale})`;
	}
</script>

<main bind:this={main}>
    <Game />
</main>

<style>
    main {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 1080px;
        height: 720px;
        background-color: #333;
    }
</style>
