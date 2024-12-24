"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { chevronUp } from "@/svgs";

// Dynamically import ReactApexChart to prevent SSR issues with Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RevenueChart = () => {
  const [colorsLables] = useState(Array(12).fill("#7E8299"));
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Revenue",
        data: [1200, 1400, 1600, 1800, 2200], // Example revenue data for 5 records (every 3 days)
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        width: 515,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3E97FF"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-04-01T00:00:00.000Z", // Day 1
          "2023-04-04T00:00:00.000Z", // Day 4 (3 days after Day 1)
          "2023-04-07T00:00:00.000Z", // Day 7 (3 days after Day 4)
          "2023-04-10T00:00:00.000Z", // Day 10 (3 days after Day 7)
          "2023-04-13T00:00:00.000Z", // Day 13 (3 days after Day 10)
        ], // Dates every 3 days
        labels: {
          format: "MMM dd", // Format as Month Day (e.g. Apr 01)
          style: {
            fontSize: "12px",
            fontWeight: 600,
            colors: colorsLables,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        offsetX: 25, // Move labels slightly to the right
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          formatter: (val) => (val === 0 ? "$ 0" : `$ ${val.toLocaleString()}`), // Format as currency
          style: {
            fontSize: "12px",
            fontWeight: 600,
            colors: ["#7E8299"],
          },
        },
      },
      grid: {
        borderColor: "#e0e0e0",
        strokeDashArray: 4,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
  });

  return (
    <div className="flex h-full flex-col justify-between py-2.5 border border-gray-300 rounded-2xl lg:w-full">
      <div className="flex flex-col mt-4 ml-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">Seller Sales Growth</h1>

          <div className="flex items-center gap-5">
            <h1 className="text-[40px] leading-[28px] text-mainLight font-bold my-4">
              <sup className="text-[24px] text-grayDark font-semibold">$</sup>
              {chartData.series[0].data
                .reduce((acc, curr) => acc + curr, 0)
                .toLocaleString()}{" "}
              {/* Total Revenue */}
            </h1>
            <p
              className={`flex gap-3 px-3 text-p1 rounded-lg w-fit py-2 ${"bg-greenLight text-greenText"}    items-center font-semibold`}
            >
              {chevronUp}
              {Math.abs(100)}%
            </p>
          </div>
        </div>
        <p className="text-grayDark">Total Discounted Sales This Month</p>
      </div>
      <div id="chart" className="w-full">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={220}
        />
      </div>
    </div>
  );
};

export default RevenueChart;
