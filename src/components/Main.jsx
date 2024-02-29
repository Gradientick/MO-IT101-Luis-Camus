import EmployeeList from "./EmployeeList";
import { useState } from "react";
import avatar from "../assets/avatar.png";
import SelectedEmployeeSection from "./SelectedEmployeeSection";
import SalaryComputationSection from "./SalaryComputationSection";
function Main() {
  // state that stores motorph employeeDB
  const [employees] = useState([
    {
      id: 1,
      lastName: "Garcia",
      firstName: "Manuel III",
      birthday: 30600,
      address: "Valero Carpark Building Valero Street 1227, Makati City",
      phoneNumber: "966-860-270",
      sss: "44-4506057-3",
      philhealth: 820126853951,
      tin: "442-605-657-000",
      pagibig: 691295330870,
      status: "Regular",
      position: "Chief Executive Officer",
      immediateSupervisor: "N/A",
      basicSalary: 90000,
      riceSubsidy: 1500,
      phoneAllowance: 2000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 45000,
      hourlyRate: 535.7142857,
    },
    {
      id: 2,
      lastName: "Lim",
      firstName: "Antonio",
      birthday: 32313,
      address:
        "San Antonio De Padua 2, Block 1 Lot 8 and 2, Dasmarinas, Cavite",
      phoneNumber: "171-867-411",
      sss: "52-2061274-9",
      philhealth: 331735646338,
      tin: "683-102-776-000",
      pagibig: 663904995411,
      status: "Regular",
      position: "Chief Operating Officer",
      immediateSupervisor: "Garcia, Manuel III",
      basicSalary: 60000,
      riceSubsidy: 1500,
      phoneAllowance: 2000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 30000,
      hourlyRate: 357.1428571,
    },
    {
      id: 3,
      lastName: "Aquino",
      firstName: "Bianca Sofia",
      birthday: 32724,
      address:
        "Rm. 402 4/F Jiao Building Timog Avenue Cor. Quezon Avenue 1100, Quezon City",
      phoneNumber: "966-889-370",
      sss: "30-8870406-2",
      philhealth: 177451189665,
      tin: "971-711-280-000",
      pagibig: 171519773969,
      status: "Regular",
      position: "Chief Finance Officer",
      immediateSupervisor: "Garcia, Manuel III",
      basicSalary: 60000,
      riceSubsidy: 1500,
      phoneAllowance: 2000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 30000,
      hourlyRate: 357.1428571,
    },
    {
      id: 4,
      lastName: "Reyes",
      firstName: "Isabella",
      birthday: 34501,
      address: "460 Solanda Street Intramuros 1000, Manila",
      phoneNumber: "786-868-477",
      sss: "40-2511815-0",
      philhealth: 341911411254,
      tin: "876-809-437-000",
      pagibig: 416946776041,
      status: "Regular",
      position: "Chief Marketing Officer",
      immediateSupervisor: "Garcia, Manuel III",
      basicSalary: 60000,
      riceSubsidy: 1500,
      phoneAllowance: 2000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 30000,
      hourlyRate: 357.1428571,
    },
    {
      id: 5,
      lastName: "Hernandez",
      firstName: "Eduard",
      birthday: 32774,
      address: "National Highway, Gingoog,  Misamis Occidental",
      phoneNumber: "088-861-012",
      sss: "50-5577638-1",
      philhealth: 957436191812,
      tin: "031-702-374-000",
      pagibig: 952347222457,
      status: "Regular",
      position: "IT Operations and Systems",
      immediateSupervisor: "Lim, Antonio",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
    {
      id: 6,
      lastName: "Villanueva",
      firstName: "Andrea Mae",
      birthday: 32187,
      address:
        "17/85 Stracke Via Suite 042, Poblacion, Las Piñas 4783 Dinagat Islands ",
      phoneNumber: "918-621-603",
      sss: "49-1632020-8",
      philhealth: 382189453145,
      tin: "317-674-022-000",
      pagibig: 441093369646,
      status: "Regular",
      position: "HR Manager",
      immediateSupervisor: "Lim, Antonio",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
    {
      id: 7,
      lastName: "San Jose",
      firstName: "Brad ",
      birthday: 35139,
      address: "99 Strosin Hills, Poblacion, Bislig 5340 Tawi-Tawi",
      phoneNumber: "797-009-261",
      sss: "40-2400714-1",
      philhealth: 239192926939,
      tin: "672-474-690-000",
      pagibig: 210850209964,
      status: "Regular",
      position: "HR Team Leader",
      immediateSupervisor: "Villanueva, Andrea Mae",
      basicSalary: 42975,
      riceSubsidy: 1500,
      phoneAllowance: 800,
      clothingAllowance: 800,
      grossSemiMonthlyRate: 21487.5,
      hourlyRate: 255.8035714,
    },
    {
      id: 8,
      lastName: "Romualdez",
      firstName: "Alice",
      birthday: 33738,
      address: "12A/33 Upton Isle Apt. 420, Roxas City 1814 Surigao del Norte ",
      phoneNumber: "983-606-799",
      sss: "55-4476527-2",
      philhealth: 545652640232,
      tin: "888-572-294-000",
      pagibig: 211385556888,
      status: "Regular",
      position: "HR Rank and File",
      immediateSupervisor: "San, Jose Brad",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 9,
      lastName: "Atienza",
      firstName: "Rosie ",
      birthday: 17800,
      address: "90A Dibbert Terrace Apt. 190, San Lorenzo 6056 Davao del Norte",
      phoneNumber: "266-036-427",
      sss: "41-0644692-3",
      philhealth: 708988234853,
      tin: "604-997-793-000",
      pagibig: 260107732354,
      status: "Regular",
      position: "HR Rank and File",
      immediateSupervisor: "San, Jose Brad",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 10,
      lastName: "Alvaro",
      firstName: "Roderick",
      birthday: 32232,
      address: "#284 T. Morato corner, Scout Rallos Street, Quezon City",
      phoneNumber: "053-381-386",
      sss: "64-7605054-4",
      philhealth: 578114853194,
      tin: "525-420-419-000",
      pagibig: 799254095212,
      status: "Regular",
      position: "Accounting Head",
      immediateSupervisor: "Aquino, Bianca Sofia ",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
    {
      id: 11,
      lastName: "Salcedo",
      firstName: "Anthony",
      birthday: 34226,
      address: "93/54 Shanahan Alley Apt. 183, Santo Tomas 1572 Masbate",
      phoneNumber: "070-766-300",
      sss: "26-9647608-3",
      philhealth: 126445315651,
      tin: "210-805-911-000",
      pagibig: 218002473454,
      status: "Regular",
      position: "Payroll Manager",
      immediateSupervisor: "Alvaro, Roderick",
      basicSalary: 50825,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 25412.5,
      hourlyRate: 302.5297619,
    },
    {
      id: 12,
      lastName: "Lopez",
      firstName: "Josie ",
      birthday: 31791,
      address: "49 Springs Apt. 266, Poblacion, Taguig 3200 Occidental Mindoro",
      phoneNumber: "478-355-427",
      sss: "44-8563448-3",
      philhealth: 431709011012,
      tin: "218-489-737-000",
      pagibig: 113071293354,
      status: "Regular",
      position: "Payroll Team Leader",
      immediateSupervisor: "Salcedo, Anthony",
      basicSalary: 38475,
      riceSubsidy: 1500,
      phoneAllowance: 800,
      clothingAllowance: 800,
      grossSemiMonthlyRate: 19237.5,
      hourlyRate: 229.0178571,
    },
    {
      id: 13,
      lastName: "Farala",
      firstName: "Martha",
      birthday: 15352,
      address: "42/25 Sawayn Stream, Ubay 1208 Zamboanga del Norte ",
      phoneNumber: "329-034-366",
      sss: "45-5656375-0",
      philhealth: 233693897247,
      tin: "210-835-851-000",
      pagibig: 631130283546,
      status: "Regular",
      position: "Payroll Rank and File",
      immediateSupervisor: "Salcedo, Anthony",
      basicSalary: 24000,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12000,
      hourlyRate: 142.8571429,
    },
    {
      id: 14,
      lastName: "Martinez",
      firstName: "Leila",
      birthday: 25760,
      address: "37/46 Kulas Roads, Maragondon 0962 Quirino ",
      phoneNumber: "877-110-749",
      sss: "27-2090996-4",
      philhealth: 515741057496,
      tin: "275-792-513-000",
      pagibig: 101205445886,
      status: "Regular",
      position: "Payroll Rank and File",
      immediateSupervisor: "Salcedo, Anthony",
      basicSalary: 24000,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12000,
      hourlyRate: 142.8571429,
    },
    {
      id: 15,
      lastName: "Romualdez",
      firstName: "Fredrick ",
      birthday: 31116,
      address: "22A/52 Lubowitz Meadows, Pililla 4895 Zambales",
      phoneNumber: "023-079-009",
      sss: "26-8768374-1",
      philhealth: 308366860059,
      tin: "598-065-761-000",
      pagibig: 223057707853,
      status: "Regular",
      position: "Account Manager",
      immediateSupervisor: "Lim, Antonio",
      basicSalary: 53500,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26750,
      hourlyRate: 318.452381,
    },
    {
      id: 16,
      lastName: "Mata",
      firstName: "Christian",
      birthday: 32071,
      address: "90 O'Keefe Spur Apt. 379, Catigbian 2772 Sulu ",
      phoneNumber: "783-776-744",
      sss: "49-2959312-6",
      philhealth: 824187961962,
      tin: "103-100-522-000",
      pagibig: 631052853464,
      status: "Regular",
      position: "Account Team Leader",
      immediateSupervisor: "Romualdez, Fredrick ",
      basicSalary: 42975,
      riceSubsidy: 1500,
      phoneAllowance: 800,
      clothingAllowance: 800,
      grossSemiMonthlyRate: 21487.5,
      hourlyRate: 255.8035714,
    },
    {
      id: 17,
      lastName: "De Leon",
      firstName: "Selena ",
      birthday: 27445,
      address: "89A Armstrong Trace, Compostela 7874 Maguindanao",
      phoneNumber: "975-432-139",
      sss: "27-2090208-8",
      philhealth: 587272469938,
      tin: "482-259-498-000",
      pagibig: 719007608464,
      status: "Regular",
      position: "Account Team Leader",
      immediateSupervisor: "Romualdez, Fredrick ",
      basicSalary: 41850,
      riceSubsidy: 1500,
      phoneAllowance: 800,
      clothingAllowance: 800,
      grossSemiMonthlyRate: 20925,
      hourlyRate: 249.1071429,
    },
    {
      id: 18,
      lastName: "San Jose",
      firstName: "Allison ",
      birthday: 31587,
      address: "08 Grant Drive Suite 406, Poblacion, Iloilo City 9186 La Union",
      phoneNumber: "179-075-129",
      sss: "45-3251383-0",
      philhealth: 745148459521,
      tin: "121-203-336-000",
      pagibig: 114901859343,
      status: "Regular",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 19,
      lastName: "Rosario",
      firstName: "Cydney ",
      birthday: 35344,
      address: "93A/21 Berge Points, Tapaz 2180 Quezon",
      phoneNumber: "868-819-912",
      sss: "49-1629900-2",
      philhealth: 579253435499,
      tin: "122-244-511-000",
      pagibig: 265104358643,
      status: "Regular",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 20,
      lastName: "Bautista",
      firstName: "Mark ",
      birthday: 33281,
      address: "65 Murphy Center Suite 094, Poblacion, Palayan 5636 Quirino",
      phoneNumber: "683-725-348",
      sss: "49-1647342-5",
      philhealth: 399665157135,
      tin: "273-970-941-000",
      pagibig: 260054585575,
      status: "Regular",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 23250,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11625,
      hourlyRate: 138.3928571,
    },
    {
      id: 21,
      lastName: "Lazaro",
      firstName: "Darlene ",
      birthday: 31376,
      address: "47A/94 Larkin Plaza Apt. 179, Poblacion, Caloocan 2751 Quirino",
      phoneNumber: "740-721-558",
      sss: "45-5617168-2",
      philhealth: 606386917510,
      tin: "354-650-951-000",
      pagibig: 104907708845,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 23250,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11625,
      hourlyRate: 138.3928571,
    },
    {
      id: 22,
      lastName: "Delos Santos",
      firstName: "Kolby ",
      birthday: 29277,
      address: "06A Gulgowski Extensions, Bongabon 6085 Zamboanga del Sur",
      phoneNumber: "739-443-033",
      sss: "52-0109570-6",
      philhealth: 357451271274,
      tin: "187-500-345-000",
      pagibig: 113017988667,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 24000,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12000,
      hourlyRate: 142.8571429,
    },
    {
      id: 23,
      lastName: "Santos",
      firstName: "Vella ",
      birthday: 30681,
      address: "99A Padberg Spring, Poblacion, Mabalacat 3959 Lanao del Sur",
      phoneNumber: "955-879-269",
      sss: "52-9883524-3",
      philhealth: 548670482885,
      tin: "101-558-994-000",
      pagibig: 360028104576,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 24,
      lastName: "Del Rosario",
      firstName: "Tomas",
      birthday: 28842,
      address: "80A/48 Ledner Ridges, Poblacion, Kabankalan 8870 Marinduque",
      phoneNumber: "882-550-989",
      sss: "45-5866331-6",
      philhealth: 953901539995,
      tin: "560-735-732-000",
      pagibig: 913108649964,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "Mata, Christian",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 25,
      lastName: "Tolentino",
      firstName: "Jacklyn ",
      birthday: 30821,
      address: "96/48 Watsica Flats Suite 734, Poblacion, Malolos 1844 Ifugao",
      phoneNumber: "675-757-366",
      sss: "47-1692793-0",
      philhealth: 753800654114,
      tin: "841-177-857-000",
      pagibig: 210546661243,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 24000,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12000,
      hourlyRate: 142.8571429,
    },
    {
      id: 26,
      lastName: "Gutierrez",
      firstName: "Percival ",
      birthday: 25920,
      address: "58A Wilderman Walks, Poblacion, Digos 5822 Davao del Sur",
      phoneNumber: "512-899-876",
      sss: "40-9504657-8",
      philhealth: 797639382265,
      tin: "502-995-671-000",
      pagibig: 210897095686,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 24750,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12375,
      hourlyRate: 147.3214286,
    },
    {
      id: 27,
      lastName: "Manalaysay",
      firstName: "Garfield ",
      birthday: 31652,
      address:
        "60 Goyette Valley Suite 219, Poblacion, Tabuk 3159 Lanao del Sur",
      phoneNumber: "948-628-136",
      sss: "45-3298166-4",
      philhealth: 810909286264,
      tin: "336-676-445-000",
      pagibig: 211274476563,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 24750,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12375,
      hourlyRate: 147.3214286,
    },
    {
      id: 28,
      lastName: "Villegas",
      firstName: "Lizeth ",
      birthday: 29932,
      address: "66/77 Mann Views, Luisiana 1263 Dinagat Islands",
      phoneNumber: "332-372-215",
      sss: "40-2400719-4",
      philhealth: 934389652994,
      tin: "210-395-397-000",
      pagibig: 122238077997,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 24000,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 12000,
      hourlyRate: 142.8571429,
    },
    {
      id: 29,
      lastName: "Ramos",
      firstName: "Carol ",
      birthday: 28722,
      address: "72/70 Stamm Spurs, Bustos 4550 Iloilo",
      phoneNumber: "250-700-389",
      sss: "60-1152206-4",
      philhealth: 351830469744,
      tin: "395-032-717-000",
      pagibig: 212141893454,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 30,
      lastName: "Maceda",
      firstName: "Emelia ",
      birthday: 26768,
      address: "50A/83 Bahringer Oval Suite 145, Kiamba 7688 Nueva Ecija",
      phoneNumber: "973-358-041",
      sss: "54-1331005-0",
      philhealth: 465087894112,
      tin: "215-973-013-000",
      pagibig: 515012579765,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 31,
      lastName: "Aguilar",
      firstName: "Delia ",
      birthday: 32535,
      address: "95 Cremin Junction, Surallah 2809 Cotabato",
      phoneNumber: "529-705-439",
      sss: "52-1859253-1",
      philhealth: 136451303068,
      tin: "599-312-588-000",
      pagibig: 110018813465,
      status: "Probationary",
      position: "Account Rank and File",
      immediateSupervisor: "De Leon, Selena",
      basicSalary: 22500,
      riceSubsidy: 1500,
      phoneAllowance: 500,
      clothingAllowance: 500,
      grossSemiMonthlyRate: 11250,
      hourlyRate: 133.9285714,
    },
    {
      id: 32,
      lastName: "Castro",
      firstName: "John Rafael",
      birthday: 33643,
      address: "Hi-way, Yati, Liloan Cebu",
      phoneNumber: "332-424-955 ",
      sss: "26-7145133-4",
      philhealth: 601644902402,
      tin: "404-768-309-000",
      pagibig: 697764069311,
      status: "Regular",
      position: "Sales & Marketing",
      immediateSupervisor: "Reyes, Isabella",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
    {
      id: 33,
      lastName: "Martinez",
      firstName: "Carlos Ian",
      birthday: 33193,
      address: "Bulala, Camalaniugan",
      phoneNumber: "078-854-208",
      sss: "11-5062972-7",
      philhealth: 380685387212,
      tin: "256-436-296-000",
      pagibig: 993372963726,
      status: "Regular",
      position: "Supply Chain and Logistics",
      immediateSupervisor: "Reyes, Isabella",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
    {
      id: 34,
      lastName: "Santos",
      firstName: "Beatriz",
      birthday: 33092,
      address: "Agapita Building, Metro Manila",
      phoneNumber: "526-639-511",
      sss: "20-2987501-5",
      philhealth: 918460050077,
      tin: "911-529-713-000",
      pagibig: 874042259378,
      status: "Regular",
      position: "Customer Service and Relations",
      immediateSupervisor: "Reyes, Isabella",
      basicSalary: 52670,
      riceSubsidy: 1500,
      phoneAllowance: 1000,
      clothingAllowance: 1000,
      grossSemiMonthlyRate: 26335,
      hourlyRate: 313.5119048,
    },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [storedGrossSalary, setStoredGrossSalary] = useState(0);

  // states for handling Salary Computation Data
  const [storedNetSalary, setStoredNetSalary] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [totalSssDeductions, setTotalSssDeduction] = useState(0);
  const [totalPhilhealthDeductions, setTotalPhilhealthDeductions] = useState(0);
  const [totalPagibigDeductions, setTotalPagibigDeductions] = useState(0);
  const [totalTaxDeductions, setTotalTaxDeductions] = useState(0);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setStoredGrossSalary(0);
    setStoredNetSalary(0);
    console.log(employee);
  };

  const automatedSalaryComputation = (
    hours,
    riceSubsidy,
    phoneAllowance,
    clothingAllowance,
    hourlyRate
  ) => {
    const grossSalary =
      hours * hourlyRate + riceSubsidy + phoneAllowance + clothingAllowance;

    // below is the deduction logic for sss deudctions
    const sssDeductions = (grossSalary) => {
      let totalSssDeduction = 0;
      switch (true) {
        case grossSalary <= 3250:
          totalSssDeduction = 135;
          break;
        case grossSalary <= 3750:
          totalSssDeduction = 157;
          break;
        case grossSalary <= 4250:
          totalSssDeduction = 180;
          break;
        case grossSalary <= 4750:
          totalSssDeduction = 202.5;
          break;
        case grossSalary <= 5250:
          totalSssDeduction = 225;
          break;
        case grossSalary <= 5750:
          totalSssDeduction = 247.5;
          break;
        case grossSalary <= 6250:
          totalSssDeduction = 270;
          break;
        case grossSalary <= 6750:
          totalSssDeduction = 292.5;
          break;
        case grossSalary <= 7250:
          totalSssDeduction = 315;
          break;
        case grossSalary <= 7750:
          totalSssDeduction = 337.5;
          break;
        case grossSalary <= 8250:
          totalSssDeduction = 360;
          break;
        case grossSalary <= 8750:
          totalSssDeduction = 382.5;
          break;
        case grossSalary <= 9250:
          totalSssDeduction = 405;
          break;
        case grossSalary <= 9750:
          totalSssDeduction = 427.5;
          break;
        case grossSalary <= 10250:
          totalSssDeduction = 450;
          break;
        case grossSalary <= 10750:
          totalSssDeduction = 472.5;
          break;
        case grossSalary <= 11250:
          totalSssDeduction = 495;
          break;
        case grossSalary <= 11750:
          totalSssDeduction = 517.5;
          break;
        case grossSalary <= 12250:
          totalSssDeduction = 540;
          break;
        case grossSalary <= 12750:
          totalSssDeduction = 562.5;
          break;
        case grossSalary <= 13250:
          totalSssDeduction = 585;
          break;
        case grossSalary <= 13750:
          totalSssDeduction = 607.5;
          break;
        case grossSalary <= 14250:
          totalSssDeduction = 630;
          break;
        case grossSalary <= 14750:
          totalSssDeduction = 652.5;
          break;
        case grossSalary <= 15250:
          totalSssDeduction = 675;
          break;
        case grossSalary <= 15750:
          totalSssDeduction = 697.5;
          break;
        case grossSalary <= 16250:
          totalSssDeduction = 720;
          break;
        case grossSalary <= 16750:
          totalSssDeduction = 742.5;
          break;
        case grossSalary <= 17250:
          totalSssDeduction = 765;
          break;
        case grossSalary <= 17750:
          totalSssDeduction = 787.5;
          break;
        case grossSalary <= 18250:
          totalSssDeduction = 810;
          break;
        case grossSalary <= 18750:
          totalSssDeduction = 832.5;
          break;
        case grossSalary <= 19250:
          totalSssDeduction = 855;
          break;
        case grossSalary <= 19750:
          totalSssDeduction = 877.5;
          break;
        case grossSalary <= 20250:
          totalSssDeduction = 922.5;
          break;
        case grossSalary <= 20750:
          totalSssDeduction = 945;
          break;
        case grossSalary <= 21250:
          totalSssDeduction = 967.5;
          break;
        case grossSalary <= 21750:
          totalSssDeduction = 990;
          break;
        case grossSalary <= 22250:
          totalSssDeduction = 1012.5;
          break;
        case grossSalary <= 22750:
          totalSssDeduction = 1035;
          break;
        case grossSalary <= 23250:
          totalSssDeduction = 1057.5;
          break;
        case grossSalary <= 23750:
          totalSssDeduction = 1080;
          break;
        case grossSalary <= 24250:
          totalSssDeduction = 1102.5;
          break;
        case grossSalary < 24750:
          totalSssDeduction = 1102.5;
          break;
        case grossSalary >= 24750:
          totalSssDeduction = 1125;
          break;
      }
      return totalSssDeduction;
    };

    // below is the deduction logic for philhealth deudctions
    const philhealthDeductions = (grossSalary) => {
      const valueOfDeduction = grossSalary * 0.03;
      const employeeShare = valueOfDeduction / 2;
      const totalDeduction = valueOfDeduction + employeeShare;
      console.log(totalDeduction);
      return totalDeduction;
    };

    // below is the deduction logic for tin deudctions
    const withHoldingTaxDeductions = (grossDeductedSalary) => {
      let withholdingTax = 0;
      let total = 0;
      let minusExcess = 0;
      if (grossDeductedSalary <= 20832) {
        total = 0;
      } else if (grossDeductedSalary < 33333) {
        minusExcess = grossDeductedSalary - 20833;
        total = minusExcess * 0.2;
      } else if (grossDeductedSalary < 66667) {
        minusExcess = grossDeductedSalary - 33333;
        withholdingTax = minusExcess * 0.25;
        total = withholdingTax + 2500;
      } else if (grossDeductedSalary < 166667) {
        minusExcess = grossDeductedSalary - 66667;
        withholdingTax = minusExcess * 0.3;
        total = withholdingTax + 10833;
      } else if (grossDeductedSalary < 666667) {
        minusExcess = grossDeductedSalary - 166667;
        withholdingTax = minusExcess * 0.32;
        total = withholdingTax + 40833.33;
      } else if (grossDeductedSalary >= 666667) {
        minusExcess = grossDeductedSalary - 666667;
        withholdingTax = minusExcess * 0.35;
        total = withholdingTax + 200833.33;
      }
      return total;
    };
    // below is the deduction logic for pagibig deudctions
    const pagIbigDeductions = (grossSalary) => {
      let totalPagIbigDeduction = 0;
      if (grossSalary == 1000 && grossSalary <= 1500) {
        totalPagIbigDeduction = grossSalary * 0.03;
      } else {
        totalPagIbigDeduction = grossSalary * 0.04;
      }
      return totalPagIbigDeduction;
    };

    let totalDeductionsBeforeTax =
      sssDeductions(grossSalary) +
      philhealthDeductions(grossSalary) +
      pagIbigDeductions(grossSalary);

    let totalDeductionsMinusGross = grossSalary - totalDeductionsBeforeTax;

    let netSalary = grossSalary - totalDeductionsBeforeTax;
    setStoredGrossSalary(grossSalary);
    console.log("gross salary state: " + storedGrossSalary);
    setStoredNetSalary(netSalary);
    console.log("net salary state: " + storedNetSalary);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`SSS Deduction: ${sssDeductions(grossSalary)}`);
    console.log(`philhealth Deduction: ${philhealthDeductions(grossSalary)}`);
    console.log(`Pagibig Deduction: ${pagIbigDeductions(grossSalary)}`);
    console.log(`Total Deductions: ${totalDeductionsBeforeTax}`);
    console.log(`Total Deductions minus Gross: ${totalDeductionsMinusGross}`);
    console.log(
      `Withholding Tax Deduction: ${withHoldingTaxDeductions(
        totalDeductionsMinusGross
      )}`
    );
    console.log(`Net Salary: ${netSalary}`);
    return {
      grossSalary,
      netSalary,
      sssDeductions,
      philhealthDeductions,
      pagIbigDeductions,
      withHoldingTaxDeductions,
    };
  };

  return (
    <div className="bg-wh h-5/6 pt-20">
      <div className=" flex gap-3 px-5 py-2">
        <EmployeeList
          employees={employees}
          onEmployeeClick={handleEmployeeClick}
        />
        <div className="w-1/2 h-screen rounded-lg  mt-3 flex flex-col gap-3">
          <SelectedEmployeeSection selectedEmployee={selectedEmployee} />
          <SalaryComputationSection
            selectedEmployee={selectedEmployee}
            calculateSalary={automatedSalaryComputation}
            storedGrossSalary={storedGrossSalary}
            storedNetSalary={storedNetSalary}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
