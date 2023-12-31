import React, { useState, useEffect } from "react";
import { useAdminStore } from "../../store";
import axios from "axios";
import {
  Card,
  Typography,
  Button,
  Dialog,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  IconButton,
} from "@material-tailwind/react";


// 버스정보조회 페이지

const TABLE_HEAD = ["호차", "노선 이름", "상세 정보"];


export function BusList() {
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [busInformation, setBusInformation] = useState([]);

  console.log(TABLE_ROWS)

  useEffect(() => {
    getDefaultBusList();
}, []);


function getDefaultBusList() {
    
  axios
  .get("/api/companies/1/buses")
  .then((res) => {
      console.log(res.data);
      setTABLE_ROWS(res.data);
      setBusInformation(res.data);

      
  })
  .catch((err) => {
      console.log(err);
  });
}

useEffect(() => {
  console.log(busInformation);
}, [busInformation]);

  return (
    <div className="flex flex-col flex-grow p-4 pl-4 pr-8">
    <Card className="w-full h-full mt-4 overflow-y-auto">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((bus, index) => (
            <tr key={bus.id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {bus.id.no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                {bus.routes[0]?.name || '미정'} / {bus.routes[1]?.name || '미정'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
  )
}