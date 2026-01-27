'use client';

import { useEffect, useState } from "react";
import FloorPlanDesktop from "./FloorPlanDesktop";
import FloorPlanMobile from "./FloorPlanMobile";
import Banner1 from "./Banner";

export default function FloorPlan() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const hotspots = [
    {
      id: 1,
      name: "Entrance",
      x: "10%",
      y: "90%",
      images: [
        "/fix2.png",
        "/5.webp",
      ],
    },
    {
      id: 2,
      name: "Town Houses",
      x: "30%",
      y: "50%",
      images: [
        "/Townhouse/t1.jpg",
        "/Townhouse/t2.png",
        "/Townhouse/t3.png",
        "/Townhouse/t4.png",
        "/Townhouse/t5.jpg",
        "/Townhouse/t6.jpg",
        "/Townhouse/t7.jpg",
        "/Townhouse/t8.jpg",
        "/Townhouse/t9.jpg",
        "/Townhouse/t10.jpg",
        "/Townhouse/t11.png",
        "/Townhouse/t12.png",
        "/Townhouse/t13.png",
        "/Townhouse/t14.png",
        "/Townhouse/t15.png",
        
      ],
    },
    {
      id: 3,
      name: "Chalets",
      x: "52%",
      y: "40%",
      images: [
        "/Chalets/c1.jpg",
        "/Chalets/c2i.jpg",
        "/Chalets/c2ii.jpg",
        "/Chalets/c3.jpg",
        "/Chalets/c6.jpg",
        "/Chalets/c7.png",
        "/Chalets/c7i.png",
        "/Chalets/c8.png",
        "/Chalets/c9.png",
        "/Chalets/c10.png",
        "/Chalets/c11.png",
      ],
    },
    {
      id: 4,
      name: "LakeHouse",
      x: "68%",
      y: "20%",
      images: [
        "/Lakehouse/l1.jpg",
        "/Lakehouse/l2.jpg",
        "/Lakehouse/l3.jpg",
        "/Lakehouse/l4.jpg",
        "/Lakehouse/l5.png",
        "/Lakehouse/l6.png",
        "/Lakehouse/l7.png",
        "/Lakehouse/l8.png",
        "/Lakehouse/l9.png",
        "/Lakehouse/l10.png", 
        "/Lakehouse/l11.png",
        "/Lakehouse/l13.png",
        "/Lakehouse/l14.png",
        "/Lakehouse/l15.png",
        "/Lakehouse/l16.png",
        "/Lakehouse/l17.png",
        "/Lakehouse/l18.png",
        "/Lakehouse/l20.png",
        "/Lakehouse/l21.png",
      ],
    },
  ];

  return isMobile ? (
  <FloorPlanMobile hotspots={hotspots} />
) : (
  <>
    <Banner1 />
    <FloorPlanDesktop hotspots={hotspots} />
  </>
);
}
