import { fg } from "../store.js"; 

//#region | Canvas Things
/** @type {CanvasRenderingContext2D} */
let ctx;
fg.subscribe((v)=>{
    ctx = v
});
const rect = (x,y, w,h, color="lime")=>{
    ctx.fillStyle = color;
    ctx.fillRect(x,y, w,h);
}
//#endregion

//#region | Window Event
window.addEventListener("click", ()=>{
    // createOrb();
});
//#endregion

const spawn_point = { x: 1020, y: 660 }

const region = (()=>{
    const newMod = (on=false)=> ({
        on: false,
        /** @type {Number[]} */
        tree: [],
    })

    return {
        one: newMod(true),
        two: newMod(),
        three: newMod(),
        four: newMod(),
        five: newMod(),
    }
})();

const orbs = [
    { ...spawn_point, vx: -10, vy: -20, destroy: false }
];

const physics = (orb, delta)=>{
    orb.x += orb.vx;
    orb.y += orb.vy;

    orb.vx *= orb.props.drag;
    orb.vy *= orb.props.drag;

    orb.vy += orb.props.gravity;

    const { x, y } = orb;
    if (x < 0) {
        orb.x = 0;
        orb.vx = Math.abs(orb.vx);
    }
    if (y < 0) {
        orb.y = 0;
        orb.vy = Math.abs(orb.vy);
    }
    if (x > 1080) {
        orb.x = 1080;
        orb.vx = Math.abs(orb.vx) * -1;
    }
    if (y > 720) {
        orb.y = 720;
        orb.vy = Math.abs(orb.vy) * -1;
    }

    if (orb.y >= 720) orb.destroy = true;
}

let tick = 0;
const update = (delta=0)=>{
    for (let i = orbs.length-1; i >= 0; i--) {
        const orb = orbs[i];
        
        if (orb.destroy === true) {
            orbs.splice(i, 1);
            continue;
        }
        
        rect(orb.x, orb.y, 10, 10);
        physics(orb, delta);
    }
}

export default {
    update,
}