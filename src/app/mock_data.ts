export const Machines = [
  {
    name: 'Powder filling',
    downtime: '25/06/2023 8:00 to 25/06/2023 8:00',
    image: '../../assets/image/m1.png', // 图像的相对路径
    oee: '80.82%', // 用实际数据替换
    availability: '90.5%', // 用实际数据替换
    performance: '85.3%', // 用实际数据替换
    quality: '94.7%' // 用实际数据替换
  },
  {
    name: 'Liquid filling',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m2.png',
    oee: '75.21%', // 用实际数据替换
    availability: '88.9%', // 用实际数据替换
    performance: '79.8%', // 用实际数据替换
    quality: '92.7%' // 用实际数据替换

  },
  {
    name: 'Label printer',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m3.png',
    oee: '88.12%', // 用实际数据替换
    availability: '92.3%', // 用实际数据替换
    performance: '91.5%', // 用实际数据替换
    quality: '96.0%' // 用实际数据替换
  }, {
    name: 'Pouch magazine',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m4.png',
    oee: '92.43%', // 用实际数据替换
    availability: '96.8%', // 用实际数据替换
    performance: '94.7%', // 用实际数据替换
    quality: '98.2%' // 用实际数据替换

  },
  {
    name: 'Check weigher',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m5.png',
    oee: '79.55%', // 用实际数据替换
    availability: '89.6%', // 用实际数据替换
    performance: '88.7%', // 用实际数据替换
    quality: '91.4%' // 用实际数据替换
  },
  {
    name: 'Pouch inspection',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m6.png',
    oee: '86.23%', // 用实际数据替换
    availability: '91.2%', // 用实际数据替换
    performance: '90.4%', // 用实际数据替换
    quality: '95.3%' // 用实际数据替换
  },
  {
    name: 'Tote filling and transfer',
    downtime: '26/06/2023 9:00 to 26/06/2023 10:00',
    image: '../../assets/image/m7.png',
    oee: '94.67%', // 用实际数据替换
    availability: '97.5%', // 用实际数据替换
    performance: '96.2%', // 用实际数据替换
    quality: '98.8%' // 用实际数据替换

  },
  // 添加其他机器的数据
];

export const Machines_overall = 
  {
    name: 'OVERALL',
    oee: '80.82%', // 用实际数据替换
    availability: '90.5%', // 用实际数据替换
    performance: '85.3%', // 用实际数据替换
    quality: '94.7%' // 用实际数据替换
  };

export const Dates = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const Bar_positions = [
  { left: 650, top: 180, text: 'Maintenance', width: 350 },
  { left: 1150, top: 265, text: 'Maintenance', width: 270 },
  { left: 750, top: 440, text: 'Inspection', width: 270 },
  { left: 1150, top: 525, text: 'Inspection', width: 350 },
  { left: 560, top: 610, text: 'Part Replacement', width: 350 },
  { left: 950, top: 700, text: 'Battery Replacement', width: 270 },
  // 添加更多位置数据...
];

export const GrayRectanglePositions = [
  { left: 635, top: 170 },
  { left: 1234, top: 170 }, // 指定位置的left和top值
];

export const Sale_orders = [
  {
    sale_order: 'SO_00003' ,
    customer_name: 'GE VIP TOUR',
    quantity: '1 Spicy Hotsa',
    time: '10/09/2023 8:00', 
    status: '100%', // 用实际数据替换
  },
  {
    sale_order: 'SO_00004' ,
    customer_name: 'JOHN',
    quantity: '5 Saucey Browney',
    time: '25/08/2023 8:00', 
    status: '90%', // 用实际数据替换

  },
  {
    sale_order: 'SO_00005' ,
    customer_name: 'LINDA',
    quantity: '1 Spicy Hotsa, 5 Saucey Browney',
    time: '25/07/2023 8:00', 
    status: '100%', // 用实际数据替换
  }, {
    sale_order: 'SO_00006' ,
    customer_name: 'JACK',
    quantity: '5 Saucey Browney',
    time: '25/06/2023 8:00', 
    status: '85%', // 用实际数据替换

  },];


  export const Work_orders = [
    {
      work_order: 'WO_00003' ,
      process: 'INSPECTION',
      product: 'Spicy Hotsa',
      time: '10/09/2023 9:00', 
      status: '100%', // 用实际数据替换
    },
    {
      work_order: 'WO_00004' ,
      process: 'POUCH SEALING',
      product: 'Spicy Hotsa',
      time: '10/09/2023 9:00', 
      status: '100%', // 用实际数据替换
  
    },
    {
      work_order: 'WO_00005' ,
      process: 'POUCH FILLING',
      product: 'Spicy Hotsa',
      time: '10/09/2023 9:00', 
      status: '100%', // 用实际数据替换
    }, {
      work_order: 'WO_00006' ,
      process: 'PRINTING & LABELLING',
      product: 'Spicy Hotsa',
      time: '10/09/2023 9:00', 
      status: '100%', // 用实际数据替换
  
    },];


  