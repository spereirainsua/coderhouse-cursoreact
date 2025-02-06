const products = [
  {
    id: 1,
    title: 'Memoria Kingston Fury Beast DDR4 8GB 3200MHz RGB',
    price: '1144',
    category: 'memorias',
    description: 'Serie: Beast RGB Color: Negro Capacidad: 8 GB Bus: 3200 MHz Velocidad: DDR4 Tipo: 288 Pin Voltaje: 1.35 V',
    image: '/img/memoria_1.jpg',
  },
  {
    id: 2,
    title: 'Memoria Kingston Fury Beast DDR4 16GB 3200MHz',
    price: '1628',
    category: 'memorias',
    description: 'Serie: Beast Color: Negro Capacidad: 16 GB Bus: 3200 MHz Velocidad: DDR4 Tipo: 288 Pin Voltaje: 1.35 V',
    image: '/img/memoria_2.jpg',
  },
  {
    id: 3,
    title: 'Procesador AMD Ryzen 9 7900X Box 4.7Ghz AM5',
    price: '17820',
    category: 'procesadores',
    description: 'Incluye Radeon Graphics Numero de núcleos de CPU: 12 Numero de hilos: 24 Reloj base: 4.7GHz Reloj de aumento máx: Hasta 5.6GHz SIN FAN Caché L1 total: 768KB Caché L2 total: 12MB Caché L3 total: 64MB Socket: AM5 Versión de PCI Express: PCIe 5.0 TDP/TDP predeterminado: 65W Temp. máx.: 95°C',
    image: '/img/procesador_1.jpg',
  },
  {
    id: 4,
    title: 'Procesador AMD Ryzen 5 8500G Box 3.5Ghz AM5',
    price: '7304',
    category: 'procesadores',
    description: 'Incluye Radeon Graphics. Video: Tarjeta grafica AMD RADEON 740M Numero de núcleos de CPU: 6 Numero de subprocesos: 12 Reloj base: 3.5GHz Reloj de aumento máx: Hasta 5.0GHz Resolucion Maxima: 7680 x 4320 (60 Hz) Caché L2 total: 6MB Caché L3 total: 16MB Socket: AM5 Versión de PCI Express: PCIe 4.0 TDP/TDP predeterminado: 45-65W Temp. máx.: 95°C',
    image: '/img/procesador_2.jpg',
  },
  {
    id: 5,
    title: 'Procesador Intel Core i7 14700 Box 2.1Ghz LGA1700',
    price: '20196',
    category: 'procesadores',
    description: 'Número de procesador 14700 14a generacion Cantidad de núcleos 20 Frecuencia 2.50 GHz (5.40 GHz con turbo) Caché Intel inteligente 28 MB Socket: FCLGA1700 Conjunto de instrucciones 64-bit Intel SSE4.1, Intel SSE4.2, Intel AVX2',
    image: '/img/procesador_3.jpg',
  },
  {
    id: 6,
    title: 'Mother MSI B760 Gaming Plus Wifi LGA 1700',
    price: '7310',
    category: 'motherboards',
    description: 'Formato: Micro ATX Compatibilidad: Intel Core, Pentium Gold y Celeron de 14a, 13a,y 12a generación Socket: LGA 1700 Chipset: Intel B760 Memoria: DDR5 (4 canales) (capacidad maxima total: 256GB) Almacenamiento: 2 x M.2 y 4 x SATA de 6 (Gb/s) Resolucion maxima: 4K 60Hz Audio: Realtek ALC897 Codec Intel Wi-Fi 6E Bluetooth 5.3 PCIe 4.0 X16 Conector de alimentacion: ATX de 24 pines',
    image: '/img/motherboard_1.jpg',
  },
  {
    id: 7,
    title: 'Mother Biostar H610MHP LGA 1700',
    price: '3080',
    category: 'motherboards',
    description: 'Formato: Micro ATX Compatibilidad: Intel Core de 12a, 13a y 14a generacion, Pentium Gold y Celeron. Socket: LGA 1700 Chipset: Intel H610 Memoria: DDR4 (Dual channel) Almacenamiento: 1 x M.2 y 4 x SATA de 6 (Gb/s) Graficos: Processor Intel HD integrados (soporta DX12 y HDCP) Audio: Realtek High Definition integrado PCIe 4.0 X 16 - 3.0 x 1 Conector de alimentacion: 1 x 8 pines / 1 x 24 pines',
    image: '/img/motherboard_2.jpg',
  },
  {
    id: 8,
    title: 'Tarjeta Video Palit RTX 4070Ti Super 16GB',
    price: '42856',
    category: 'graficas',
    description: 'Serie: Super GameRock OmniBlack. Memoria: 16GB Tipo: GDDR6X Resolucion maxima: 4K at 240Hz o 8K at 60Hz Interfaz: 256 bit Reloj de graficos: 2340 MHz Reloj de boost: 2610 MHz Reloj de memoria: 21 Gbps DirectX 12 Ultimate Medidas: 329.4 x 137.5 x 71.5 mm PCI-E 4.0 Conector: 16 pin Potencia: 295W',
    image: '/img/grafica_1.png',
  },
  {
    id: 9,
    title: 'Tarjeta Video Palit RTX 3050 StormX 6GB',
    price: '8536',
    category: 'graficas',
    description: 'Serie: StormX Memoria: 6GB Tipo: GDDR6 Resolucion maxima: 7680 x 4320 Interfaz: 192 bit Reloj de graficos: 1042 MHz Reloj de boost: 1470 MHz Reloj de memoria: 14 Gbps DirectX 12 Ultimate Medidas: 162 x 117 x 40 mm PCI-E 4.0 Potencia: 70W',
    image: '/img/grafica_2.png',
  },
  {
    id: 10,
    title: 'Tarjeta Video Biostar GTX1050 4GB GDDR5',
    price: '6248',
    category: 'graficas',
    description: 'Memoria: 4GB Tipo de memoria: GDDR5 Bus: 128 Bits Clock de memoria: 7Gbps Clock del núcleo: 1354Mhz Procesamiento NVIDIA super 640 CUDA Compatibilidad con DisplayPort 1.4a Interfaz de bus PCI Express 3.0 x16 Compatibilidad con NVIDIA PuroVideo HD Technology DirectX 12 completo Soporta NVIDIA PhyX y CUDA Technology',
    image: '/img/grafica_3.jpg',
  },
  {
    id: 11,
    title: 'Disco SSD Kingston 960GB A400',
    price: '2420',
    category: 'almacenamiento',
    description: 'Capacidad: 960 GB Litografia: 3D TLC Velocidad de lectura: 550 mb /s Velocidad de escritura: 500 mb / s Interfaz: Sata 3.0 6 GB / S',
    image: '/img/almacenamiento_1.jpg',
  },
  {
    id: 12,
    title: 'Disco SSD Kingston 250GB NVMe PCIe M2 2280',
    price: '1760',
    category: 'almacenamiento',
    description: 'Formato: M2 2280 Capacidad: 250 GB Interfaz: PCIe 4.0x4 NVMe Medidas: 80 x 22 x 1.35 mm Peso: 7.0 gr',
    image: '/img/almacenamiento_2.jpg',
  },
  {
    id: 13,
    title: 'Disco Seagate 2TB SkyHawk surveillance',
    price: '2992',
    category: 'almacenamiento',
    description: 'Capacidad 2TB. Tamaño 3.5 mm Transferencia 6GB/s Interfaz Serial ATA. 256MB cache. Velocidad de rotación 5900 RPM.',
    image: '/img/almacenamiento_3.png',
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == id));
    }, 1000);
  });
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
      //va a retornar un array de prods que cumplan con esa condicion
    }, 1000);
  });
};
