import { MapLayer } from "./../../components/Map/MapLayer";
import { Button } from "@material-tailwind/react";

export function KnightMap() {
  return (
    <div>
      <h1>KnightMap</h1>
      <div className="z-0">
        <MapLayer></MapLayer>
      </div>
      {/* 나중에 zindex 조정하기 */}
      <div className="flex fixed bottom-6 left-20" style={{ zIndex: 1000 }}>
        <Button>관리자와의 화상통화 연결</Button>
        <Button color="red">운행 종료</Button>
      </div>
    </div>
  );
}
