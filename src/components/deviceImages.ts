/**
 * Authentic Industrial IoT Equipment Vector SVG Images
 * Tailored for agricultural IoT sensing and automation devices
 */

const createSvgDataUrl = (svgContent: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

// 1. 智能环境温湿度变送器 (Wall-mount industrial temperature & humidity transmitter)
export const SVG_DEVICE_TH = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="bodyGradTH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="screenGradTH" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="probeGradTH" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <!-- Background Plate -->
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Wall Mounting Flanges -->
  <rect x="22" y="38" width="116" height="74" rx="6" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="28" cy="46" r="3" fill="#64748b"/>
  <circle cx="28" cy="104" r="3" fill="#64748b"/>
  <circle cx="132" cy="46" r="3" fill="#64748b"/>
  <circle cx="132" cy="104" r="3" fill="#64748b"/>
  
  <!-- Main Enclosure Body -->
  <rect x="36" y="30" width="88" height="90" rx="10" fill="url(#bodyGradTH)" stroke="#94a3b8" stroke-width="2"/>
  
  <!-- Top Waterproof Cable Gland -->
  <rect x="73" y="16" width="14" height="14" rx="2" fill="#475569"/>
  <rect x="71" y="12" width="18" height="5" rx="1" fill="#334155"/>
  <path d="M80 12 L80 4" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>

  <!-- LCD Display Screen -->
  <rect x="48" y="44" width="64" height="34" rx="4" fill="url(#screenGradTH)" stroke="#334155" stroke-width="1.5"/>
  <!-- Digital Telemetry Text Readout -->
  <text x="54" y="59" font-family="monospace" font-size="11" font-weight="bold" fill="#38bdf8">25.6℃</text>
  <text x="54" y="72" font-family="monospace" font-size="10" font-weight="bold" fill="#4ade80">68.2%</text>
  
  <!-- Status LEDs -->
  <circle cx="53" cy="88" r="2.5" fill="#22c55e"/>
  <text x="58" y="90" font-family="sans-serif" font-size="6" fill="#64748b">RUN</text>
  <circle cx="80" cy="88" r="2.5" fill="#3b82f6"/>
  <text x="85" y="90" font-family="sans-serif" font-size="6" fill="#64748b">NET</text>
  <circle cx="107" cy="88" r="2.5" fill="#f59e0b"/>
  
  <!-- Model Brand Badge -->
  <rect x="52" y="98" width="56" height="12" rx="2" fill="#0284c7"/>
  <text x="80" y="106.5" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">DEV-TH-01</text>
  
  <!-- Bottom Stainless Steel Mesh Probe Extension -->
  <rect x="72" y="120" width="16" height="8" fill="#475569"/>
  <rect x="70" y="128" width="20" height="24" rx="3" fill="url(#probeGradTH)" stroke="#64748b" stroke-width="1.5"/>
  <!-- Mesh Grill Lines on Probe -->
  <line x1="73" y1="133" x2="87" y2="133" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="73" y1="138" x2="87" y2="138" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="73" y1="143" x2="87" y2="143" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="73" y1="148" x2="87" y2="148" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
</svg>
`);

// 2. 多深度土壤墒情监测仪 (Multi-pin multi-depth soil moisture & temperature probe)
export const SVG_DEVICE_SOIL = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="soilHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Soil layers indicator background -->
  <path d="M12 110 L148 110" stroke="#b45309" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="14" y="106" font-family="sans-serif" font-size="8" fill="#b45309" font-weight="bold">地表土层 0cm</text>
  <rect x="12" y="112" width="136" height="38" rx="4" fill="#fef3c7" opacity="0.6"/>
  
  <!-- Top Heavy-Duty Sensor Handle / Potting Enclosure -->
  <rect x="52" y="24" width="56" height="58" rx="8" fill="url(#soilHeadGrad)" stroke="#1e293b" stroke-width="2"/>
  
  <!-- Top Cable Lead with Strain Relief -->
  <rect x="74" y="14" width="12" height="11" rx="2" fill="#475569"/>
  <path d="M80 14 C80 6, 96 6, 96 2" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>
  
  <!-- Head Label & Status Ring -->
  <rect x="58" y="32" width="44" height="22" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
  <text x="80" y="44" font-family="monospace" font-size="8" font-weight="bold" fill="#38bdf8" text-anchor="middle">SOIL-EC</text>
  <text x="80" y="51" font-family="sans-serif" font-size="5.5" fill="#94a3b8" text-anchor="middle">多深度墒情</text>
  <circle cx="80" cy="68" r="4" fill="#10b981"/>
  <circle cx="80" cy="68" r="2" fill="#a7f3d0"/>

  <!-- Metal Flange Coupling -->
  <rect x="62" y="82" width="36" height="8" rx="2" fill="#64748b" stroke="#475569" stroke-width="1.5"/>

  <!-- Stainless Steel Probe Needles (3 Pins) -->
  <!-- Pin 1 -->
  <rect x="66" y="90" width="5" height="60" rx="2" fill="url(#pinGrad)" stroke="#64748b" stroke-width="1"/>
  <polygon points="66,150 71,150 68.5,155" fill="#64748b"/>
  <!-- Pin 2 (Center) -->
  <rect x="77.5" y="90" width="5" height="60" rx="2" fill="url(#pinGrad)" stroke="#64748b" stroke-width="1"/>
  <polygon points="77.5,150 82.5,150 80,155" fill="#64748b"/>
  <!-- Pin 3 -->
  <rect x="89" y="90" width="5" height="60" rx="2" fill="url(#pinGrad)" stroke="#64748b" stroke-width="1"/>
  <polygon points="89,150 94,150 91.5,155" fill="#64748b"/>

  <!-- Depth Marker Laser Lines -->
  <line x1="64" y1="108" x2="96" y2="108" stroke="#0284c7" stroke-width="1.5"/>
  <text x="100" y="111" font-family="monospace" font-size="7" fill="#0284c7" font-weight="bold">10cm</text>
  <line x1="64" y1="126" x2="96" y2="126" stroke="#0284c7" stroke-width="1.5"/>
  <text x="100" y="129" font-family="monospace" font-size="7" fill="#0284c7" font-weight="bold">20cm</text>
  <line x1="64" y1="144" x2="96" y2="144" stroke="#0284c7" stroke-width="1.5"/>
  <text x="100" y="147" font-family="monospace" font-size="7" fill="#0284c7" font-weight="bold">40cm</text>
</svg>
`);

// 3. 主管道高频水流水压变送器 (Stainless Steel Industrial Pressure Transmitter)
export const SVG_DEVICE_PRESS = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="steelBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="25%" stop-color="#f1f5f9"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="75%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="dinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Top Hirschmann DIN 43650 Connector Block -->
  <polygon points="62,14 98,14 104,36 56,36" fill="url(#dinGrad)" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="74" y="6" width="12" height="9" rx="1" fill="#475569"/>
  <!-- Central Lock Screw -->
  <circle cx="80" cy="24" r="3.5" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
  <line x1="78" y1="24" x2="82" y2="24" stroke="#1e293b" stroke-width="1.5"/>
  <!-- Cable gland sticking right -->
  <rect x="102" y="20" width="16" height="8" rx="2" fill="#1e293b"/>
  <path d="M118 24 L132 24" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>

  <!-- Hexagonal Nut Connector Base -->
  <rect x="68" y="36" width="24" height="8" fill="#64748b" stroke="#475569" stroke-width="1"/>
  
  <!-- Main Stainless Steel Cylindrical Housing -->
  <rect x="58" y="44" width="44" height="64" rx="5" fill="url(#steelBodyGrad)" stroke="#64748b" stroke-width="2"/>
  
  <!-- Digital Pressure Gauge Dial / Display on Body -->
  <rect x="64" y="54" width="32" height="22" rx="3" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
  <text x="80" y="66" font-family="monospace" font-size="8.5" font-weight="bold" fill="#ef4444" text-anchor="middle">0.45</text>
  <text x="80" y="73" font-family="sans-serif" font-size="5" font-weight="bold" fill="#38bdf8" text-anchor="middle">MPa (水压)</text>

  <!-- Technical Spec Laser Engraving on Cylinder -->
  <text x="80" y="87" font-family="sans-serif" font-size="5" fill="#334155" text-anchor="middle" font-weight="bold">DEV-PRESS-03</text>
  <text x="80" y="94" font-family="sans-serif" font-size="4.5" fill="#475569" text-anchor="middle">Range: 0-1.6MPa / 4-20mA</text>
  <text x="80" y="100" font-family="sans-serif" font-size="4.5" fill="#0284c7" text-anchor="middle">IP68 WATERPROOF</text>

  <!-- Hexagon Thread Adapter -->
  <!-- Hex nut representation -->
  <polygon points="60,108 100,108 104,118 98,124 62,124 56,118" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  
  <!-- Pipe Thread (M20x1.5 or G1/2) with Ribs -->
  <rect x="68" y="124" width="24" height="24" fill="url(#steelBodyGrad)" stroke="#475569" stroke-width="1.5"/>
  <line x1="68" y1="128" x2="92" y2="128" stroke="#64748b" stroke-width="1.5"/>
  <line x1="68" y1="133" x2="92" y2="133" stroke="#64748b" stroke-width="1.5"/>
  <line x1="68" y1="138" x2="92" y2="138" stroke="#64748b" stroke-width="1.5"/>
  <line x1="68" y1="143" x2="92" y2="143" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Pipe Seal Ring -->
  <ellipse cx="80" cy="148" rx="10" ry="3" fill="#1e293b"/>
</svg>
`);

// 4. 红外二氧化碳浓度分析仪 (NDIR Infrared CO2 Gas Sensor / Analyzer)
export const SVG_DEVICE_CO2 = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="co2Body" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <radialGradient id="meshGrad">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </radialGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Wall Mount Bracket -->
  <rect x="26" y="24" width="108" height="112" rx="12" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Main Enclosure -->
  <rect x="34" y="30" width="92" height="100" rx="10" fill="url(#co2Body)" stroke="#94a3b8" stroke-width="2"/>
  
  <!-- Digital Segment Display Window -->
  <rect x="46" y="42" width="68" height="32" rx="4" fill="#09090b" stroke="#3f3f46" stroke-width="1.5"/>
  <text x="80" y="59" font-family="monospace" font-size="14" font-weight="bold" fill="#22c55e" text-anchor="middle">650</text>
  <text x="80" y="69" font-family="sans-serif" font-size="7" font-weight="bold" fill="#a1a1aa" text-anchor="middle">PPM  CO2 (NDIR)</text>
  
  <!-- NDIR Optical Gas Diffusion Chamber Windows (Dual Sintered Disks) -->
  <circle cx="62" cy="98" r="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <circle cx="62" cy="98" r="10" fill="url(#meshGrad)" opacity="0.6"/>
  <!-- Gold Plated Mesh Pattern -->
  <path d="M54 98 L70 98 M62 90 L62 106" stroke="#854d0e" stroke-width="1"/>
  <circle cx="62" cy="98" r="6" stroke="#854d0e" stroke-width="1" fill="none"/>
  
  <!-- Control / Indicator Cluster -->
  <circle cx="96" cy="88" r="3.5" fill="#22c55e"/>
  <text x="103" y="90.5" font-family="sans-serif" font-size="6.5" fill="#475569" font-weight="bold">正常</text>

  <circle cx="96" cy="100" r="3.5" fill="#e2e8f0"/>
  <text x="103" y="102.5" font-family="sans-serif" font-size="6.5" fill="#94a3b8">告警</text>
  
  <rect x="88" y="112" width="28" height="10" rx="2" fill="#0284c7"/>
  <text x="102" y="119.5" font-family="sans-serif" font-size="6" font-weight="bold" fill="#ffffff" text-anchor="middle">DEV-CO2</text>
  
  <!-- Top Vent Openings -->
  <line x1="50" y1="36" x2="110" y2="36" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
</svg>
`);

// 5. 超声波农田微气象多合一监测桩 (Ultrasonic Integrated Weather Station Mast)
export const SVG_DEVICE_WEATHER = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Mast Pole (Stainless Steel Tube) -->
  <rect x="76" y="20" width="8" height="130" fill="#94a3b8" stroke="#64748b" stroke-width="1"/>
  
  <!-- Ground Mounting Flange -->
  <polygon points="56,150 104,150 96,142 64,142" fill="#475569"/>
  <circle cx="62" cy="146" r="2" fill="#e2e8f0"/>
  <circle cx="98" cy="146" r="2" fill="#e2e8f0"/>

  <!-- Top Ultrasonic Wind Speed / Direction Crown -->
  <rect x="66" y="14" width="28" height="6" rx="2" fill="#334155"/>
  <!-- 3 Ultrasonic Transducer Arms -->
  <line x1="68" y1="20" x2="68" y2="32" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="20" x2="80" y2="32" stroke="#334155" stroke-width="2"/>
  <line x1="92" y1="20" x2="92" y2="32" stroke="#334155" stroke-width="2"/>
  <circle cx="68" cy="32" r="2.5" fill="#0284c7"/>
  <circle cx="80" cy="32" r="2.5" fill="#0284c7"/>
  <circle cx="92" cy="32" r="2.5" fill="#0284c7"/>
  <rect x="62" y="32" width="36" height="5" rx="1.5" fill="#475569"/>

  <!-- Solar Radiation Shield Louvers (White Stack Plates) -->
  <ellipse cx="80" cy="46" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="80" cy="53" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="80" cy="60" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="80" cy="67" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="80" cy="74" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="80" cy="81" rx="26" ry="4" fill="url(#shieldGrad)" stroke="#94a3b8" stroke-width="1"/>
  
  <!-- Mini Solar Panel on Side Bracket -->
  <line x1="84" y1="92" x2="114" y2="82" stroke="#475569" stroke-width="3"/>
  <polygon points="106,64 140,56 134,88 100,96" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
  <!-- Solar cell grids -->
  <line x1="123" y1="60" x2="117" y2="92" stroke="#60a5fa" stroke-width="1"/>
  <line x1="103" y1="80" x2="137" y2="72" stroke="#60a5fa" stroke-width="1"/>

  <!-- Rain Tipping Bucket Funnel on other side -->
  <line x1="76" y1="102" x2="48" y2="102" stroke="#475569" stroke-width="3"/>
  <path d="M34 94 L62 94 L54 112 L42 112 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
  <rect x="44" y="112" width="8" height="6" fill="#475569"/>

  <!-- IP67 Data Acquisition Enclosure on Mast -->
  <rect x="70" y="112" width="20" height="24" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="80" cy="120" r="2" fill="#22c55e"/>
  <text x="80" y="130" font-family="sans-serif" font-size="4" font-weight="bold" fill="#0284c7" text-anchor="middle">MET-05</text>
</svg>
`);

// 6. 水质酸碱度pH/EC在线检测仪 (Water Quality pH & EC Dual Probe Instrument)
export const SVG_DEVICE_PHEC = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="waterScreen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>

  <!-- Wall-mount Controller Box -->
  <rect x="42" y="18" width="76" height="62" rx="8" fill="#f1f5f9" stroke="#0284c7" stroke-width="2"/>
  
  <!-- Top Bezel / Header -->
  <rect x="42" y="18" width="76" height="14" rx="6" fill="#0284c7"/>
  <text x="80" y="28" font-family="sans-serif" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">水质 pH/EC 分析仪</text>

  <!-- Dual Value Screen -->
  <rect x="50" y="36" width="60" height="26" rx="3" fill="url(#waterScreen)" stroke="#334155" stroke-width="1"/>
  <text x="56" y="47" font-family="monospace" font-size="9" font-weight="bold" fill="#38bdf8">pH: 6.85</text>
  <text x="56" y="58" font-family="monospace" font-size="8.5" font-weight="bold" fill="#4ade80">EC: 1.42 <tspan font-size="6">mS/cm</tspan></text>

  <!-- Keypad Buttons -->
  <circle cx="60" cy="70" r="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="73" cy="70" r="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="86" cy="70" r="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="99" cy="70" r="3" fill="#22c55e"/>

  <!-- Dual Waterproof Cable Glands & Cables Down -->
  <rect x="54" y="80" width="10" height="8" rx="2" fill="#334155"/>
  <rect x="96" y="80" width="10" height="8" rx="2" fill="#334155"/>
  
  <!-- Cable to pH Probe -->
  <path d="M59 88 C59 100, 48 105, 48 116" stroke="#1e293b" stroke-width="3" fill="none"/>
  <!-- Cable to EC Probe -->
  <path d="M101 88 C101 100, 112 105, 112 116" stroke="#1e293b" stroke-width="3" fill="none"/>

  <!-- Probe 1: Glass Bulb pH Electrode -->
  <rect x="42" y="116" width="12" height="26" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="48" cy="144" r="5" fill="#38bdf8" opacity="0.8" stroke="#0284c7" stroke-width="1.5"/>
  <text x="48" y="130" font-family="sans-serif" font-size="6" font-weight="bold" fill="#0284c7" text-anchor="middle">pH</text>

  <!-- Probe 2: Dual Platinum Ring EC Electrode -->
  <rect x="106" y="116" width="12" height="30" rx="3" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="105" y="132" width="14" height="3" fill="#f8fafc" stroke="#94a3b8" stroke-width="0.5"/>
  <rect x="105" y="139" width="14" height="3" fill="#f8fafc" stroke="#94a3b8" stroke-width="0.5"/>
  <text x="112" y="128" font-family="sans-serif" font-size="6" font-weight="bold" fill="#38bdf8" text-anchor="middle">EC</text>
  
  <!-- Water Waves Base Graphic -->
  <path d="M26 150 Q45 146 64 150 T102 150 T140 150" stroke="#0284c7" stroke-width="2" fill="none" opacity="0.4"/>
</svg>
`);

// 7. 植物冠层光合有效辐射监测仪 (PAR Photosynthesis Quantum Radiometer)
export const SVG_DEVICE_PAR = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <radialGradient id="domeGrad" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </radialGradient>
    <linearGradient id="baseMetal" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>
  
  <!-- Sun Rays Radiating onto Sensor -->
  <path d="M80 8 L80 18 M56 16 L64 24 M104 16 L96 24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Optical Cosine-Corrected Diffuser Dome -->
  <path d="M50 72 C50 38, 110 38, 110 72 Z" fill="url(#domeGrad)" stroke="#94a3b8" stroke-width="2"/>
  <ellipse cx="80" cy="72" rx="30" ry="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>

  <!-- Anodized Aluminum Collar Ring -->
  <rect x="46" y="74" width="68" height="12" rx="3" fill="url(#baseMetal)" stroke="#334155" stroke-width="1.5"/>
  <line x1="50" y1="80" x2="110" y2="80" stroke="#334155" stroke-width="1"/>

  <!-- Broad Leveling Base Plate with Flange -->
  <rect x="30" y="86" width="100" height="18" rx="4" fill="url(#baseMetal)" stroke="#334155" stroke-width="2"/>
  
  <!-- Leveling Spirit Bubble (Green Circular Vial) -->
  <circle cx="50" cy="95" r="6" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="51" cy="94" r="2.5" fill="#bbf7d0"/>

  <!-- Model Badge -->
  <text x="82" y="98" font-family="sans-serif" font-size="7" font-weight="bold" fill="#0f172a">PAR-QUANTUM</text>
  <text x="82" y="107" font-family="monospace" font-size="6" fill="#0284c7">DEV-PAR-07</text>

  <!-- Precision Leveling Thumb Screws (Left & Right) -->
  <rect x="36" y="104" width="8" height="24" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1"/>
  <line x1="36" y1="110" x2="44" y2="110" stroke="#475569" stroke-width="1"/>
  <line x1="36" y1="116" x2="44" y2="116" stroke="#475569" stroke-width="1"/>
  <line x1="36" y1="122" x2="44" y2="122" stroke="#475569" stroke-width="1"/>
  <circle cx="40" cy="130" r="5" fill="#475569"/>

  <rect x="116" y="104" width="8" height="24" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="1"/>
  <line x1="116" y1="110" x2="124" y2="110" stroke="#475569" stroke-width="1"/>
  <line x1="116" y1="116" x2="124" y2="116" stroke="#475569" stroke-width="1"/>
  <line x1="116" y1="122" x2="124" y2="122" stroke="#475569" stroke-width="1"/>
  <circle cx="120" cy="130" r="5" fill="#475569"/>
  
  <!-- Shielded Cable Outlet -->
  <rect x="74" y="104" width="12" height="10" rx="2" fill="#1e293b"/>
  <path d="M80 114 C80 126, 92 134, 92 148" stroke="#1e293b" stroke-width="3.5" fill="none"/>
</svg>
`);

// 8. 大棚电动卷膜开合行程定位器 (Greenhouse Film Roll Electric Motor & Positioning Actuator)
export const SVG_DEVICE_MOTOR = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="motorBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="gearHead" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>

  <!-- Heavy Duty Aluminum Gearbox Head -->
  <rect x="24" y="52" width="34" height="56" rx="6" fill="url(#gearHead)" stroke="#475569" stroke-width="2"/>
  
  <!-- Drive Output Splined Axle Coupling (Connects to greenhouse roll pipe) -->
  <rect x="10" y="68" width="14" height="24" rx="2" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="17" cy="80" r="4" fill="#94a3b8"/>
  <line x1="17" y1="74" x2="17" y2="86" stroke="#1e293b" stroke-width="2"/>

  <!-- Cylindrical 24V DC Planetary Motor Body with Cooling Fins -->
  <rect x="58" y="56" width="70" height="48" rx="6" fill="url(#motorBody)" stroke="#1e40af" stroke-width="2"/>
  
  <!-- Cooling Fin Grooves -->
  <line x1="68" y1="56" x2="68" y2="104" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="78" y1="56" x2="78" y2="104" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="88" y1="56" x2="88" y2="104" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="98" y1="56" x2="98" y2="104" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="108" y1="56" x2="108" y2="104" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="118" y1="56" x2="118" y2="104" stroke="#1d4ed8" stroke-width="2"/>

  <!-- Limit Switch & Encoder Travel Calibration Dial Cover -->
  <rect x="128" y="62" width="18" height="36" rx="4" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="137" cy="74" r="4" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
  <line x1="137" y1="74" x2="139" y2="72" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="137" cy="86" r="4" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
  <line x1="137" y1="86" x2="135" y2="88" stroke="#d97706" stroke-width="1.5"/>

  <!-- Motor Spec Plate -->
  <rect x="74" y="70" width="40" height="20" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="94" y="80" font-family="sans-serif" font-size="6" font-weight="bold" fill="#0f172a" text-anchor="middle">ROLL-MOTOR</text>
  <text x="94" y="87" font-family="monospace" font-size="5" fill="#2563eb" text-anchor="middle">24V DC / 100W</text>

  <!-- Power & Limit Signal Cable Outlet -->
  <rect x="90" y="104" width="10" height="8" rx="2" fill="#1e293b"/>
  <path d="M95 112 C95 126, 115 130, 115 144" stroke="#0f172a" stroke-width="3" fill="none"/>
  
  <!-- Rotational Motion Arrow Indicator -->
  <path d="M38 42 C45 38, 55 42, 52 48" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" fill="none"/>
  <polygon points="54,48 48,46 51,42" fill="#f59e0b"/>
</svg>
`);

// 9. 密闭育苗室负离子臭氧消毒机 (Ozone & Negative Ion Air Sterilizer)
export const SVG_DEVICE_OZONE = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="chassisOzone" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>

  <!-- Wall-mount Stainless Steel Sterilizer Cabinet -->
  <rect x="32" y="24" width="96" height="112" rx="10" fill="url(#chassisOzone)" stroke="#64748b" stroke-width="2"/>
  
  <!-- Top Vent Exhaust Louvers -->
  <rect x="42" y="34" width="76" height="30" rx="4" fill="#334155"/>
  <line x1="46" y1="40" x2="114" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="46" y1="46" x2="114" y2="46" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="46" y1="52" x2="114" y2="52" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="46" y1="58" x2="114" y2="58" stroke="#94a3b8" stroke-width="1.5"/>

  <!-- High-Voltage Ozone / Ion Discharge Indicator Symbol -->
  <polygon points="78,42 84,42 81,49 86,49 76,60 79,52 74,52" fill="#38bdf8"/>

  <!-- Digital Timer / Concentration Dial Panel -->
  <rect x="42" y="72" width="76" height="38" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
  <text x="80" y="87" font-family="monospace" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">O3: 15.0 <tspan font-size="7">mg/m³</tspan></text>
  <text x="80" y="98" font-family="sans-serif" font-size="7" fill="#4ade80" text-anchor="middle">● 杀菌净化中 45 min</text>
  <circle cx="48" cy="84" r="2.5" fill="#22c55e"/>

  <!-- Bottom Control Switches -->
  <rect x="46" y="118" width="16" height="8" rx="2" fill="#ef4444"/>
  <text x="54" y="124.5" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ffffff" text-anchor="middle">电源</text>

  <rect x="68" y="118" width="18" height="8" rx="2" fill="#0284c7"/>
  <text x="77" y="124.5" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ffffff" text-anchor="middle">负离子</text>

  <rect x="92" y="118" width="18" height="8" rx="2" fill="#8b5cf6"/>
  <text x="101" y="124.5" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ffffff" text-anchor="middle">臭氧</text>
</svg>
`);

// 10. 有害气体与甲烷浓度安全监控仪 (Explosion-Proof Combustible & Toxic Gas Detector)
export const SVG_DEVICE_GAS = createSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="exBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="beaconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="50%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="16" fill="#f8fafc"/>

  <!-- Top Red Audible/Visual Alarm Strobe Beacon -->
  <rect x="68" y="24" width="24" height="6" rx="2" fill="#475569"/>
  <path d="M66 24 C66 12, 94 12, 94 24 Z" fill="url(#beaconGrad)" stroke="#991b1b" stroke-width="1.5"/>
  <!-- Strobe Fresnel Lens Ribs -->
  <line x1="72" y1="18" x2="88" y2="18" stroke="#fecaca" stroke-width="1.5"/>
  <line x1="70" y1="21" x2="90" y2="21" stroke="#fecaca" stroke-width="1.5"/>

  <!-- Heavy Cast Aluminum Explosion-Proof Junction Body (Safety Yellow) -->
  <rect x="36" y="32" width="88" height="82" rx="12" fill="url(#exBody)" stroke="#92400e" stroke-width="2.5"/>
  
  <!-- Ex d IICT6 Explosion-Proof Bolt Lugs (4 Corners) -->
  <circle cx="44" cy="40" r="3.5" fill="#475569" stroke="#1e293b" stroke-width="1"/>
  <circle cx="116" cy="40" r="3.5" fill="#475569" stroke="#1e293b" stroke-width="1"/>
  <circle cx="44" cy="106" r="3.5" fill="#475569" stroke="#1e293b" stroke-width="1"/>
  <circle cx="116" cy="106" r="3.5" fill="#475569" stroke="#1e293b" stroke-width="1"/>

  <!-- Central Circular Sealed Glass Viewing Window -->
  <circle cx="80" cy="72" r="28" fill="#0f172a" stroke="#78350f" stroke-width="3"/>
  <text x="80" y="67" font-family="monospace" font-size="12" font-weight="bold" fill="#22c55e" text-anchor="middle">0.0</text>
  <text x="80" y="78" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#fde047" text-anchor="middle">% LEL / CH4</text>
  <text x="80" y="87" font-family="sans-serif" font-size="5" fill="#94a3b8" text-anchor="middle">EX SAFE NORMAL</text>

  <!-- Bottom Stainless Steel Flame Arrestor / Sintered Sensor Chamber -->
  <rect x="68" y="114" width="24" height="10" fill="#475569"/>
  <rect x="64" y="124" width="32" height="24" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
  <!-- Sintered Metal Mesh Pattern -->
  <circle cx="72" cy="132" r="1.5" fill="#475569"/>
  <circle cx="80" cy="132" r="1.5" fill="#475569"/>
  <circle cx="88" cy="132" r="1.5" fill="#475569"/>
  <circle cx="76" cy="138" r="1.5" fill="#475569"/>
  <circle cx="84" cy="138" r="1.5" fill="#475569"/>
  <circle cx="72" cy="144" r="1.5" fill="#475569"/>
  <circle cx="80" cy="144" r="1.5" fill="#475569"/>
  <circle cx="88" cy="144" r="1.5" fill="#475569"/>

  <!-- Ex Proof Rating Badge on Front -->
  <rect x="52" y="36" width="24" height="8" rx="2" fill="#1e293b"/>
  <text x="64" y="42" font-family="sans-serif" font-size="5" font-weight="bold" fill="#fde047" text-anchor="middle">Ex d IICT6</text>
</svg>
`);

// Preset image map by device ID or name
export const DEVICE_IMAGE_MAP: Record<string, string> = {
  'dt-1': SVG_DEVICE_TH,
  'dt-2': SVG_DEVICE_SOIL,
  'dt-3': SVG_DEVICE_PRESS,
  'dt-4': SVG_DEVICE_CO2,
  'dt-5': SVG_DEVICE_WEATHER,
  'dt-6': SVG_DEVICE_PHEC,
  'dt-7': SVG_DEVICE_PAR,
  'dt-8': SVG_DEVICE_MOTOR,
  'dt-9': SVG_DEVICE_OZONE,
  'dt-10': SVG_DEVICE_GAS,
};

export const getDeviceImage = (idOrIndex: string | number, fallback?: string): string => {
  if (typeof idOrIndex === 'string' && DEVICE_IMAGE_MAP[idOrIndex]) {
    return DEVICE_IMAGE_MAP[idOrIndex];
  }
  const key = `dt-${idOrIndex}`;
  if (DEVICE_IMAGE_MAP[key]) {
    return DEVICE_IMAGE_MAP[key];
  }
  return fallback || SVG_DEVICE_TH;
};
