import { useEffect, useRef, useMemo } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

import brain from "../images/brain.svg";

/**
 * 使用命令式 Leaflet（L.map + cleanup 裡 map.remove()），
 * 避免 react-leaflet 的 MapContainer 在 Strict Mode 下對同一 DOM 重複初始化。
 */
function Map({ latitude, longitude }) {
  const containerRef = useRef(null);

  const customIcon = useMemo(
    () =>
      L.icon({
        iconUrl: brain,
        iconSize: [80, 80],
        iconAnchor: [45, 50],
        popupAnchor: [-3, -80],
      }),
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const map = L.map(el, {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
    }).setView([latitude, longitude], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    // 父層若為動態高度，可確保圖磚尺寸正確
    requestAnimationFrame(() => {
      map.invalidateSize();
    });

    return () => {
      map.remove();
    };
  }, [latitude, longitude, customIcon]);

  return (
    <div className="map-frame">
      <div
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
        role="presentation"
        aria-hidden
      />
    </div>
  );
}

export default Map;
