import { DisconnectPacket } from "bdsx/bds/packets";
import { serverInstance } from "bdsx/bds/server";
import { events } from "bdsx/event";
import { disconnect } from "process";

events.playerJoin.on(ev => {
    const player = ev.player.getName()
    if (player.length > 21 ) serverInstance.disconnectClient

    });