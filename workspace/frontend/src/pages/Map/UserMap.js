import React from "react";
import { FindMe } from "../../common/FindMe.js";
import { BusInfo } from "../../components/Map/BusInfo";
import { BusNum } from "../../components/Map/BusNum";
import { Dial } from "../../components/Map/Dial";
import { MapLayer } from "../../components/Map/MapLayer";
import { TopBar } from "../../components/Map/TopBar";
import { DragMarker } from "../../components/Map/DragMarker";
import { AdminPath } from "../../components/Map/AdminPath";
import { CreateMarker } from "../../components/Map/CreateMarker";
import { useAdminStore } from "../../store.js";
import { IconButton, Button } from "@material-tailwind/react";

export function UserMap() {
  return (
    <div className="relative">
      <MapLayer FindMe={<FindMe />} Dial={<Dial></Dial>}></MapLayer>
      <div
        className="absoulte fixed top-2 left-2 right-2"
        style={{ zIndex: 400 }}
      >
        <TopBar content={"실시간 버스 위치"} page={"usermap"}></TopBar>
      </div>

      <div className="absoulute fixed bottom-0" style={{ zIndex: 400 }}>
        <BusNum></BusNum>
      </div>
    </div>
  );
}