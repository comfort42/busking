import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Button,
} from "@material-tailwind/react";

import React, { useState } from "react";
import axios from "axios";

import { useUserStore, useMapStore } from "../../store";

export function Report() {
  const [reportContent, setReportContent] = useState("");
  const { location, busNum } = useUserStore();
  // 경도
  const lat = 1;
  // 위도
  const lng = 1231.3;
  const accessToken = localStorage.getItem("accessToken");

  // 신고 항목들 변수로 담기
  const [reportList, setReportList] = useState([
    "난폭 운전을 합니다",
    "예정 시간보다 빨리 출발했습니다.",
    "운전 중 위험한 행동을 합니다.",
    "응급 상황 발생 ( 교통사고, 환자 발생 등 )",
  ]);

  function sendReport(reportContent) {
    console.log(reportContent);

    axios
      .post(
        "/api/reports",
        {
          description: reportContent,
          lng: lng,
          lat: lat,
          busNum: 3,
          companyId: 1,
        },

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log("성공");
        // console.log(response)
        // console.log(222)
        console.log(response);
        console.log(response.data);
        // console.log(response.data.reportContent)
        // localStorage.setItem('accessToken', response.data.accessToken)
        // setUser(response.data.user)
      })
      .catch((error) => {
        console.log("되겠냐");
        console.log(error);
      });
  }

  function getReport() {
    axios
      .get("/api/reports", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="bg-gray-100">
      <div>
        <p>상단바 들어갈 자리</p>
        <img src="/ssabus_logo.png" alt="싸버지 logo" className="h-80 mt-10" />
        <p className="text-3xl my-20 text-blue-400 font-bold">신고하기</p>
        <Card>
          <List>
            {reportList.map((item, idx) => {
              return (
                <ListItem
                  key={idx}
                  className="p-0"
                  onClick={() => {
                    setReportContent(item);
                  }}
                >
                  <label
                    htmlFor={`vertical-list-${idx}`}
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        id={`vertical-list-${idx}`}
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {/* 신고 내용 각각을 list라는 이름으로 출력함 */}
                      {item}
                    </Typography>
                  </label>
                </ListItem>
              );
            })}
          </List>
        </Card>
        <Button
          onClick={() => {
            sendReport(reportContent);
          }}
          className="bg-red-400 mt-10"
        >
          신 고 하 기
        </Button>

        <Button
          onClick={() => {
            getReport();
          }}
        >
          {" "}
          신고조회해보자
        </Button>
      </div>
    </div>
  );
}
