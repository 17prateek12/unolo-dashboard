"use client";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import dynamic from "next/dynamic";

const HighchartsReact = dynamic(() => import("highcharts-react-official"), {
  ssr: false,
});

interface SemiCircleDonutProps {
  options: Highcharts.Options;
}

const SemiCircleDonut: React.FC<SemiCircleDonutProps> = ({ options }) => {
  const [chartOptions, setChartOptions] = useState(options);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chartSize, setChartSize] = useState<number>(300); // Default size

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size = 300; // Default size for desktop

      if (width < 640) {
        size = 200; // Small screens (mobile)
      } else if (width < 1024) {
        size = 250; // Tablets
      } else {
        size = 300; // Large screens
      }

      setChartSize(size);
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        chart: {
          ...prevOptions.chart,
          width: size,
          height: size,
        },
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <div className="w-full h-full overflow-x-scroll overflow-y-auto px-0 mx-0 my-0 py-0">
        <div className="min-w-[300px]">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
  );
};

export default SemiCircleDonut;
