import type { Map } from "maplibre-gl"
import map from "maplibre-gl"

import { useCallback, useRef } from "react"

export function useMap() {
  const mapRef = useRef<Map | null>(null)

  return {
    container: useCallback((container: HTMLDivElement) => {
      if (mapRef.current != null) {
        return
      }

      const apiKey =
        "v1.public.eyJqdGkiOiJmYzQ2MWE0Ny0zZGJlLTQzYjYtOTRjZi03ZDM3ZWUwOTg5ZWUifT90eNe2ievl4wYJ0joiiBiPCAEmDZ4od0kvmpuz-QdM6wELh0vSg111ZjkJyfrSj46g5dmzdxCnq2_olTjymJrimEMlGn1I2OhDpbSs4Rtw6I5Hr-jgoM-9yXAEOcE7RymhKnl6tX9fkuIo6wqEBUveVV-n30GGJuN72dxzNcoxa26zzNs9RzS2vBw2fJpCdfo8cezXG5_brDNnNkISG-9oi90dBqH9odp7AtF2gaAI8NoJId1CCthpD6HSmnCwmwWZUX8Tni3Mf7wGDZCqPAFFKf0AuOQD96irLLvSbrmvNwEPVqFJlTBgmOQGTNT8CBLYECC-BVXTDs2y812EoZg.MzRjYzZmZGUtZmY3NC00NDZiLWJiMTktNTc4YjUxYTFlOGZi"
      const mapName = "pasali"
      const region = "ap-southeast-1"

      const theMap = new map.Map({
        container,
        style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
        center: [121.1674801, 13.9472956],
        zoom: 12,
      })

      theMap.addControl(new map.NavigationControl({ showCompass: false }), "top-left")
      theMap.dragRotate.disable()

      mapRef.current = theMap
    }, []),
  }
}
