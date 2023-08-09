import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { FindMe } from '../../common/FindMe.js';
import { BusInfo } from '../../components/Map/BusInfo';
import { BusNum } from '../../components/Map/BusNum';
import { Dial } from '../../components/Map/Dial';
import { MapLayer } from '../../components/Map/MapLayer';
import { TopBar } from '../../components/Map/TopBar';
import { DragMarker } from '../../components/Map/DragMarker';
import { AdminPath } from '../../components/Map/AdminPath';
import { CreateMarker } from '../../components/Map/CreateMarker';
import { useAdminStore } from '../../store.js';
import { IconButton, Button } from '@material-tailwind/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { PathContainer } from '../../components/Map/PathContainer.js'

export function Map() {
    const { hintPath, stopCreate, setStopCreate } = useAdminStore()
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <PathContainer></PathContainer>
            </DndProvider>
            <Button onClick={() => {
                if (hintPath.length < 2){
                    alert('아직 경로 생성이 안됐습니다.')
                }
                else {
                    
                }
            }}>한번에 되라</Button>
            <MapLayer 
            // FindMe={<FindMe></FindMe>}
            Dial={<Dial></Dial>}
            // BusNum={<BusNum></BusNum>}
            CreateMarker={<CreateMarker></CreateMarker>}
            // DragMarker={<DragMarker></DragMarker>}
            AdminPath={<AdminPath></AdminPath>}
            />
        </div>
    )
}

