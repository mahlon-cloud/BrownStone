'use client';

import { useRef, useState } from "react";
import HotspotMobile from "./HotspotMobile";
import ImageSlider from "./ImageSlider";
import BannerMobile from "./BannerMobile";

const hotspots = [
	{
		id: 1,
		name: "Entrance",
		x: "10%", // ← Change horizontal position
		y: "68%", // ← Change vertical position
		images: [
        "/fix2.png",
        "/5.webp",
      ],
    },
    {
      id: 2,
      name: "Town Houses",
      x: "40%",
      y: "65%",
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
      x: "48%",
      y: "35%",
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
      x: "65%",
      y: "28%",
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

export default function FloorPlanMobile() {
	const [activeRoom, setActiveRoom] = useState(null);
	const mapRef = useRef(null);

	return (
		<>
		<div className="mobile-map-viewport" style={{ marginBottom: '0' }}>
				
					<img
						src="/plan4.jpg"
						className="mobile-map-image"
					/>

					{hotspots.map((spot) => (
						<HotspotMobile key={spot.id} spot={spot} onClick={setActiveRoom} />
					))}
				

				{activeRoom && (
					<ImageSlider
						images={activeRoom.images}
						title={activeRoom.name}
						onClose={() => setActiveRoom(null)}
					/>
				)}
			</div>
			<BannerMobile />
		</>
	);
}
