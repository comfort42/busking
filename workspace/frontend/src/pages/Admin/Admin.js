import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { LiaBusSolid } from 'react-icons/lia';
import { GiBusStop } from "react-icons/gi";

import { UserList } from "../../components/Admin/UserList";
import RTC from "./../../components/RTC/RTC";
import { ReportList } from "./../../components/Admin/ReportList";
import { BusList } from "./../../components/Admin/BusList";
import { Map } from "./../../pages/Map/Map";
import { useUserStore } from "../../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





export function Admin() {

  const { user } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => { 
    console.log(user)
    if (user == null){
      navigate('/')
    }
    else if (user.role != 'COMPANY_ADMIN'){
      if (user.role == 'EMPLOYEE'){
        navigate('/usermap');
      }
      else if (user.role == 'DRIVER'){
        navigate('/knightselect');
      }
    }
  }, [])



  const [display, setDisplay] = useState("UserList");

  return (
    <div className="admin">
      <div className="flex">
        <div className="LeftsideBar">
          <Card className="h-full min-h-[45rem] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2 bg-blue-400 rounded-lg">
              <Typography variant="h5" color="white">
                관리자 메뉴
              </Typography>
            </div>
            <List>
              <ListItem onClick={() => setDisplay("UserList")}>
                <ListItemPrefix>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>
                </ListItemPrefix>
                교육생 전체 조회
              </ListItem>
              <ListItem onClick={() => setDisplay("BusList")}>
                <ListItemPrefix>
                  <LiaBusSolid className="w-5 h-5" />
                </ListItemPrefix>
                버스 정보 조회
              </ListItem>
              <ListItem onClick={() => setDisplay("RegisterBusRoute")}>
                <ListItemPrefix>
                  <GiBusStop className="w-5 h-5" />
                </ListItemPrefix>
                버스 노선 등록
              </ListItem>
              <ListItem onClick={() => setDisplay("ReportList")}>
                <ListItemPrefix>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

                </ListItemPrefix>
                신고 내역 조회
                <ListItemSuffix>
                  <Chip
                    value="1"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem onClick={() => setDisplay("RTC")}>
                <ListItemPrefix>
                  <UserCircleIcon className="w-5 h-5" />
                </ListItemPrefix>
                긴급 화상 통화
                <ListItemSuffix>
                  <Chip
                    value="0"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </List>
          </Card>
        </div>

        <div className="flex flex-col flex-grow p-4 pl-4 pr-8 mt-1">
          {display === "UserList" && <UserList />}
          {display === "BusList" && <BusList />}
          {display === "RegisterBusRoute" && <Map />}
          {display === "ReportList" && <ReportList />}
          <div className="flex items-center justify-center h-full">
            {display === "RTC" && <RTC />}
          </div>
        </div>
      </div>
    </div>
  );
}
