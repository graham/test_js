import { log, spawn, spawn_state, meta } from "core";

export const main = async (ctx, args) => {
    let id = await spawn(ctx, 'uuid', 'v4', {});

    return `Hello World ${id}`;
}
