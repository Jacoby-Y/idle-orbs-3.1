<script>
    import { onMount } from "svelte";
    import Background from "./Background.svelte";
    import Foreground from "./Foreground.svelte";
    import OrbM from "../lib/orbs.js";
    import { fg, bg } from "../store.js";
    
    let last_frame = -1;
    const update = (this_frame)=>{
        let delta = 0;
        if (last_frame < 0) {
            last_frame = this_frame
            delta = 16
        }
        else delta = Math.round(this_frame - last_frame);

        $fg.clearRect(0,0, 1080, 720);

        OrbM.update(delta);

        last_frame = this_frame;
        requestAnimationFrame(update);
    }

    onMount(()=>{
        requestAnimationFrame(update);
    })
    
</script>
    
<main>
    <Background bind:ctx={$bg} />
    <Foreground bind:ctx={$fg} />
</main>
    
<style>
    
</style>