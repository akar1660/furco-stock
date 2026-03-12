const INIT_CONTAINERS = [
  {
    "id": 1,
    "number": "MRSU 3311640",
    "loadingDate": "2026-01-15",
    "arrivalDate": "2026-03-09",
    "arrived": false
  },
  {
    "id": 2,
    "number": "MSDU 6732375",
    "loadingDate": "2026-01-19",
    "arrivalDate": "2026-03-06",
    "arrived": false
  },
  {
    "id": 3,
    "number": "MRKU 2779602",
    "loadingDate": "2026-01-21",
    "arrivalDate": "2026-03-17",
    "arrived": false
  },
  {
    "id": 4,
    "number": "TLLU 7802940",
    "loadingDate": "2026-02-02",
    "arrivalDate": "2026-04-14",
    "arrived": false
  },
  {
    "id": 5,
    "number": "MRSU 3833901",
    "loadingDate": "2026-02-11",
    "arrivalDate": "2026-04-02",
    "arrived": false
  },
  {
    "id": 6,
    "number": "CAAU 6959239",
    "loadingDate": "2026-03-04",
    "arrivalDate": "2026-04-15",
    "arrived": false
  },
  {
    "id": 7,
    "number": "MSDU 6936614",
    "loadingDate": "2026-03-04",
    "arrivalDate": "2026-04-15",
    "arrived": false
  },
  {
    "id": 8,
    "number": "MEDU 4410963",
    "loadingDate": "2026-03-04",
    "arrivalDate": "2026-04-15",
    "arrived": false
  }
];
const INIT_PRODUCTS = [
  {
    "id": 1,
    "name": "PARMA GRAY SOFA",
    "sku": "FRC-0001",
    "category": "Concept Design",
    "qty": 15,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 2,
    "name": "PARMA GRAY LOVESEAT",
    "sku": "FRC-0002",
    "category": "Concept Design",
    "qty": 15,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 3,
    "name": "PARMA GRAY CHAIR",
    "sku": "FRC-0003",
    "category": "Concept Design",
    "qty": 12,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 4,
    "name": "PARMA DINING TABLE",
    "sku": "FRC-0004",
    "category": "Concept Design",
    "qty": 13,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 5,
    "name": "PARMA DINING CHAIR",
    "sku": "FRC-0005",
    "category": "Concept Design",
    "qty": 71,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 6,
    "name": "PARMA COFFEE TABLE",
    "sku": "FRC-0006",
    "category": "Concept Design",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 7,
    "name": "PARMA TV UNIT",
    "sku": "FRC-0007",
    "category": "Concept Design",
    "qty": 4,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 8,
    "name": "PARMA CONSOLE",
    "sku": "FRC-0008",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 9,
    "name": "PARMA CONSOLE MIRROR",
    "sku": "FRC-0009",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 10,
    "name": "PARMA HB & FRAME QUEEN SIZE",
    "sku": "FRC-0010",
    "category": "Bedroom",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 11,
    "name": "PARMA HB & FRAME KING SIZE",
    "sku": "FRC-0011",
    "category": "Bedroom",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 12,
    "name": "PARMA NIGHT STAND",
    "sku": "FRC-0012",
    "category": "Bedroom",
    "qty": 24,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 13,
    "name": "PARMA DRESSER",
    "sku": "FRC-0013",
    "category": "Bedroom",
    "qty": 8,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 14,
    "name": "PARMA DRESSER MIRROR",
    "sku": "FRC-0014",
    "category": "Bedroom",
    "qty": 8,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 15,
    "name": "PARMA CHEST",
    "sku": "FRC-0015",
    "category": "Bedroom",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5,
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 16,
    "name": "ZEN BEIGE SOFA",
    "sku": "FRC-0016",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 5
    },
    "hidden": false
  },
  {
    "id": 17,
    "name": "ZEN BEIGE LOVESEAT",
    "sku": "FRC-0017",
    "category": "Concept Design",
    "qty": 7,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 5
    },
    "hidden": false
  },
  {
    "id": 18,
    "name": "ZEN BEIGE CHAIR",
    "sku": "FRC-0018",
    "category": "Concept Design",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 5
    },
    "hidden": false
  },
  {
    "id": 19,
    "name": "ZEN DINING TABLE",
    "sku": "FRC-0019",
    "category": "Concept Design",
    "qty": 13,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 20,
    "name": "ZEN DINING TABLE (8 person)",
    "sku": "FRC-0020",
    "category": "Concept Design",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 21,
    "name": "ZEN DINING CHAIR",
    "sku": "FRC-0021",
    "category": "Concept Design",
    "qty": 54,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 22,
    "name": "ZEN COFFEE TABLE",
    "sku": "FRC-0022",
    "category": "Concept Design",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 8
    },
    "hidden": false
  },
  {
    "id": 23,
    "name": "ZEN TV UNIT",
    "sku": "FRC-0023",
    "category": "Concept Design",
    "qty": 7,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 24,
    "name": "ZEN CONSOLE",
    "sku": "FRC-0024",
    "category": "Concept Design",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 2
    },
    "hidden": false
  },
  {
    "id": 25,
    "name": "ZEN CONSOLE MIRROR",
    "sku": "FRC-0025",
    "category": "Concept Design",
    "qty": 4,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 2
    },
    "hidden": false
  },
  {
    "id": 26,
    "name": "ZEN HB & FRAME QUEEN SIZE",
    "sku": "FRC-0026",
    "category": "Bedroom",
    "qty": 4,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 3
    },
    "hidden": false
  },
  {
    "id": 27,
    "name": "ZEN HB & FRAME KING SIZE",
    "sku": "FRC-0027",
    "category": "Bedroom",
    "qty": 7,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 28,
    "name": "ZEN NIGHT STAND",
    "sku": "FRC-0028",
    "category": "Bedroom",
    "qty": 12,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 29,
    "name": "ZEN DRESSER",
    "sku": "FRC-0029",
    "category": "Bedroom",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MRSU 3833901": 5
    },
    "hidden": false
  },
  {
    "id": 30,
    "name": "ZEN DRESSER MIRROR",
    "sku": "FRC-0030",
    "category": "Bedroom",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 5
    },
    "hidden": false
  },
  {
    "id": 31,
    "name": "ZEN CHEST",
    "sku": "FRC-0031",
    "category": "Bedroom",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5,
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 32,
    "name": "MAXIM BEIGE SOFA",
    "sku": "FRC-0032",
    "category": "Concept Design",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3311640": 6,
      "MSDU 6732375": 14,
      "TLLU 7802940": 18,
      "MSDU 6936614": 4
    },
    "hidden": false
  },
  {
    "id": 33,
    "name": "MAXIM BEIGE LOVESEAT",
    "sku": "FRC-0033",
    "category": "Concept Design",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3311640": 6,
      "MSDU 6732375": 14,
      "TLLU 7802940": 18,
      "MSDU 6936614": 2
    },
    "hidden": false
  },
  {
    "id": 34,
    "name": "MAXIM BEIGE CHAIR",
    "sku": "FRC-0034",
    "category": "Concept Design",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3311640": 4,
      "MSDU 6732375": 16,
      "TLLU 7802940": 18,
      "MSDU 6936614": 4
    },
    "hidden": false
  },
  {
    "id": 35,
    "name": "MAXIM DINING CHAIR",
    "sku": "FRC-0035",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MRSU 3311640": 60,
      "MSDU 6732375": 60
    },
    "hidden": false
  },
  {
    "id": 36,
    "name": "MAXIMO BEIGE SOFA MECHANISM",
    "sku": "FRC-0036",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 5,
      "CAAU 6959239": 6
    },
    "hidden": false
  },
  {
    "id": 37,
    "name": "MAXIMO BEIGE LOVESEAT MECHANISM",
    "sku": "FRC-0037",
    "category": "Concept Design",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 2,
      "CAAU 6959239": 8
    },
    "hidden": false
  },
  {
    "id": 38,
    "name": "MAXIMO BEIGE CHAIR",
    "sku": "FRC-0038",
    "category": "Concept Design",
    "qty": 11,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 39,
    "name": "MAXIMO DINING TABLE",
    "sku": "FRC-0039",
    "category": "Concept Design",
    "qty": 18,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 40,
    "name": "MAXIMO DINING TABLE (8 person)",
    "sku": "FRC-0040",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 41,
    "name": "MAXIMO DINING CHAIR",
    "sku": "FRC-0041",
    "category": "Concept Design",
    "qty": 8,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "CAAU 6959239": 66
    },
    "hidden": false
  },
  {
    "id": 42,
    "name": "MAXIMO COFFEE TABLE",
    "sku": "FRC-0042",
    "category": "Concept Design",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 43,
    "name": "MAXIMO TV UNIT",
    "sku": "FRC-0043",
    "category": "Concept Design",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 3
    },
    "hidden": false
  },
  {
    "id": 44,
    "name": "MAXIMO CONSOLE",
    "sku": "FRC-0044",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 45,
    "name": "MAXIMO CONSOLE MIRROR",
    "sku": "FRC-0045",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 46,
    "name": "MAXIMO HB & FRAME QUEEN SIZE",
    "sku": "FRC-0046",
    "category": "Bedroom",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 47,
    "name": "MAXIMO HB & FRAME KING SIZE",
    "sku": "FRC-0047",
    "category": "Bedroom",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 48,
    "name": "MAXIMO NIGHT STAND",
    "sku": "FRC-0048",
    "category": "Bedroom",
    "qty": 24,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 2
    },
    "hidden": false
  },
  {
    "id": 49,
    "name": "MAXIMO DRESSER & MIRROR",
    "sku": "FRC-0049",
    "category": "Bedroom",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 50,
    "name": "MAXIMO CHEST",
    "sku": "FRC-0050",
    "category": "Bedroom",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 5,
      "CAAU 6959239": 5
    },
    "hidden": false
  },
  {
    "id": 51,
    "name": "MONZA HB & FRAME QUEEN SIZE",
    "sku": "FRC-0051",
    "category": "Bedroom",
    "qty": 10,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 52,
    "name": "MONZA HB & FRAME KING SIZE",
    "sku": "FRC-0052",
    "category": "Bedroom",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 53,
    "name": "MONZA NIGHT STAND",
    "sku": "FRC-0053",
    "category": "Bedroom",
    "qty": 18,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 54,
    "name": "MONZA DRESSER",
    "sku": "FRC-0054",
    "category": "Bedroom",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 55,
    "name": "MONZA DRESSER MIRROR",
    "sku": "FRC-0055",
    "category": "Bedroom",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 56,
    "name": "MONZA CHEST",
    "sku": "FRC-0056",
    "category": "Bedroom",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 57,
    "name": "ROMANCE BEIGE SOFA (KENZO 020)",
    "sku": "FRC-0057",
    "category": "Concept Design",
    "qty": 38,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 58,
    "name": "ROMANCE BEIGE LOVESEAT (KENZO 020)",
    "sku": "FRC-0058",
    "category": "Concept Design",
    "qty": 37,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 59,
    "name": "ROMANCE BEIGE CHAIR (KENZO 020)",
    "sku": "FRC-0059",
    "category": "Concept Design",
    "qty": 25,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 60,
    "name": "ROMANCE BEIGE SOFA (T.KENZO 020)",
    "sku": "FRC-0060",
    "category": "Concept Design",
    "qty": 31,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 61,
    "name": "ROMANCE BEIGE LOVESEAT (T.KENZO 020)",
    "sku": "FRC-0061",
    "category": "Concept Design",
    "qty": 27,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 62,
    "name": "ROMANCE BEIGE CHAIR (T.KENZO 020)",
    "sku": "FRC-0062",
    "category": "Concept Design",
    "qty": 27,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 63,
    "name": "NEW ROMANCE BEIGE SOFA (SIENA 030)",
    "sku": "FRC-0063",
    "category": "Concept Design",
    "qty": 6,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 64,
    "name": "NEW ROMANCE BEIGE LOVESEAT (SIENA 030)",
    "sku": "FRC-0064",
    "category": "Concept Design",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 65,
    "name": "NEW ROMANCE BEIGE CHAIR (SIENA 030)",
    "sku": "FRC-0065",
    "category": "Concept Design",
    "qty": 7,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 66,
    "name": "NEW ROMANCE GRAY SOFA (SIENA 680)",
    "sku": "FRC-0066",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 67,
    "name": "NEW ROMANCE GRAY LOVESEAT (SIENA 680)",
    "sku": "FRC-0067",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 68,
    "name": "NEW ROMANCE BEIGE CHAIR (SIENA 680)",
    "sku": "FRC-0068",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 69,
    "name": "ROMANCE DINING TABLE",
    "sku": "FRC-0069",
    "category": "Concept Design",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 70,
    "name": "ROMANCE BEIGE DINING CHAIR (T.KENZO 020)",
    "sku": "FRC-0070",
    "category": "Concept Design",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 71,
    "name": "NEW ROMANCE BEIGE DINING CHAIR (SIENA 030)",
    "sku": "FRC-0071",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 72,
    "name": "NEW ROMANCE GRAY DINING CHAIR (SIENA 680)",
    "sku": "FRC-0072",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": true
  },
  {
    "id": 73,
    "name": "ROMANCE COFFEE TABLE",
    "sku": "FRC-0073",
    "category": "Concept Design",
    "qty": 22,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 74,
    "name": "MILENYUM BEIGE SOFA",
    "sku": "FRC-0074",
    "category": "Sofa Set",
    "qty": 18,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5
    },
    "hidden": false
  },
  {
    "id": 75,
    "name": "MILENYUM BEIGE LOVESEAT",
    "sku": "FRC-0075",
    "category": "Sofa Set",
    "qty": 18,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 76,
    "name": "MILENYUM BEIGE CHAIR",
    "sku": "FRC-0076",
    "category": "Sofa Set",
    "qty": 12,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 7
    },
    "hidden": false
  },
  {
    "id": 77,
    "name": "MILENYUM LIGHT GRAY SOFA",
    "sku": "FRC-0077",
    "category": "Sofa Set",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 2
    },
    "hidden": false
  },
  {
    "id": 78,
    "name": "MILENYUM LIGHT GRAY LOVESEAT",
    "sku": "FRC-0078",
    "category": "Sofa Set",
    "qty": 8,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 79,
    "name": "MILENYUM LIGHT GRAY CHAIR",
    "sku": "FRC-0079",
    "category": "Sofa Set",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 10
    },
    "hidden": false
  },
  {
    "id": 80,
    "name": "GALERIA BEIGE SOFA",
    "sku": "FRC-0080",
    "category": "Sofa Set",
    "qty": 20,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 4
    },
    "hidden": false
  },
  {
    "id": 81,
    "name": "GALERIA BEIGE LOVESEAT",
    "sku": "FRC-0081",
    "category": "Sofa Set",
    "qty": 21,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 82,
    "name": "GALERIA BEIGE CHAIR",
    "sku": "FRC-0082",
    "category": "Sofa Set",
    "qty": 16,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 83,
    "name": "GALERIA LIGHT GRAY SOFA",
    "sku": "FRC-0083",
    "category": "Sofa Set",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 84,
    "name": "GALERIA LIGHT GRAY LOVESEAT",
    "sku": "FRC-0084",
    "category": "Sofa Set",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 85,
    "name": "GALERIA LIGHT GRAY CHAIR",
    "sku": "FRC-0085",
    "category": "Sofa Set",
    "qty": 10,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 86,
    "name": "MIRAGE BEIGE SOFA (SIENA 020)",
    "sku": "FRC-0086",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 87,
    "name": "MIRAGE BEIGE LOVESEAT (SIENA 20)",
    "sku": "FRC-0087",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 88,
    "name": "MIRAGE BEIGE CHAIR (SIENA 20)",
    "sku": "FRC-0088",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 89,
    "name": "MONZA BEIGE SOFA",
    "sku": "FRC-0089",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 90,
    "name": "MONZA BEIGE LOVESEAT",
    "sku": "FRC-0090",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 91,
    "name": "BELIZE BEIGE SOFA",
    "sku": "FRC-0091",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 92,
    "name": "BELIZE BEIGE LOVESEAT",
    "sku": "FRC-0092",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 93,
    "name": "LORIS BEIGE SOFA",
    "sku": "FRC-0093",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 94,
    "name": "LORIS BEIGE LOVESEAT",
    "sku": "FRC-0094",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 95,
    "name": "CANYON BEIGE SOFA",
    "sku": "FRC-0095",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 96,
    "name": "CANYON BEIGE LOVESEAT",
    "sku": "FRC-0096",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 97,
    "name": "SOHO BEIGE CHAIR",
    "sku": "FRC-0097",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 98,
    "name": "NEVA BEIGE SOFA (KENZO 020)",
    "sku": "FRC-0098",
    "category": "Sofa Set",
    "qty": 6,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 99,
    "name": "NEVA BEIGE LOVESEAT (KENZO 020)",
    "sku": "FRC-0099",
    "category": "Sofa Set",
    "qty": 13,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 100,
    "name": "NEVA BEIGE CHAIR (KENZO 020)",
    "sku": "FRC-0100",
    "category": "Sofa Set",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 101,
    "name": "NEVA BEIGE SOFA (T.KENZO 020)",
    "sku": "FRC-0101",
    "category": "Sofa Set",
    "qty": 19,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 102,
    "name": "NEVA BEIGE LOVESEAT (T.KENZO 020)",
    "sku": "FRC-0102",
    "category": "Sofa Set",
    "qty": 14,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 103,
    "name": "NEVA BEIGE CHAIR (T.KENZO 020)",
    "sku": "FRC-0103",
    "category": "Sofa Set",
    "qty": 24,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 104,
    "name": "NEVA DARK GRAY SOFA",
    "sku": "FRC-0104",
    "category": "Sofa Set",
    "qty": 6,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRKU 2779602": 2
    },
    "hidden": false
  },
  {
    "id": 105,
    "name": "NEVA DARK GRAY LOVESEAT",
    "sku": "FRC-0105",
    "category": "Sofa Set",
    "qty": 4,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRKU 2779602": 2
    },
    "hidden": false
  },
  {
    "id": 106,
    "name": "NEVA DARK GRAY CHAIR",
    "sku": "FRC-0106",
    "category": "Sofa Set",
    "qty": 6,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRKU 2779602": 2
    },
    "hidden": false
  },
  {
    "id": 107,
    "name": "NEVADA BEIGE SOFA (SIENA 30)",
    "sku": "FRC-0107",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 108,
    "name": "NEVADA BEIGE LOVESEAT (SIENA 30)",
    "sku": "FRC-0108",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 109,
    "name": "NEVADA BEIGE CHAIR (SIENA 30)",
    "sku": "FRC-0109",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 110,
    "name": "NEVADA GRAY SOFA (SIENA 680)",
    "sku": "FRC-0110",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 111,
    "name": "NEVADA GRAY LOVESEAT (SIENA 680)",
    "sku": "FRC-0111",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 112,
    "name": "NEVADA GRAY CHAIR (SIENA 680)",
    "sku": "FRC-0112",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 113,
    "name": "ARMONI VISON SOFA (Velvet 260 & Gold)",
    "sku": "FRC-0113",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 4,
      "MRSU 3833901": 1
    },
    "hidden": false
  },
  {
    "id": 114,
    "name": "ARMONI VISON LOVESEAT (Velvet 260 & Gold)",
    "sku": "FRC-0114",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5
    },
    "hidden": false
  },
  {
    "id": 115,
    "name": "ARMONI VISON CHAIR (Velvet 260 & Gold)",
    "sku": "FRC-0115",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5
    },
    "hidden": false
  },
  {
    "id": 116,
    "name": "ARMONI DARK GRAY SOFA (Velvet 412 & Gold)",
    "sku": "FRC-0116",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 3,
      "MRSU 3833901": 2
    },
    "hidden": false
  },
  {
    "id": 117,
    "name": "ARMONI DARK GRAY LOVESEAT (Velvet 412 & Gold)",
    "sku": "FRC-0117",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5
    },
    "hidden": false
  },
  {
    "id": 118,
    "name": "ARMONI DARK GRAY CHAIR (Velvet 412 & Gold)",
    "sku": "FRC-0118",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRKU 2779602": 5
    },
    "hidden": false
  },
  {
    "id": 119,
    "name": "RESITAL CREAM SOFA",
    "sku": "FRC-0119",
    "category": "Deluxe Group",
    "qty": 23,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 120,
    "name": "RESITAL CREAM LOVESEAT",
    "sku": "FRC-0120",
    "category": "Deluxe Group",
    "qty": 25,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 121,
    "name": "RESITAL CREAM CHAIR",
    "sku": "FRC-0121",
    "category": "Deluxe Group",
    "qty": 22,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 122,
    "name": "RESITAL DARK GRAY SOFA",
    "sku": "FRC-0122",
    "category": "Deluxe Group",
    "qty": 40,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 123,
    "name": "RESITAL DARK GRAY LOVESEAT",
    "sku": "FRC-0123",
    "category": "Deluxe Group",
    "qty": 37,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 124,
    "name": "RESITAL DARK GRAY CHAIR",
    "sku": "FRC-0124",
    "category": "Deluxe Group",
    "qty": 15,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 125,
    "name": "ASPENIA BEIGE SOFA",
    "sku": "FRC-0125",
    "category": "Deluxe Group",
    "qty": 11,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 7,
      "MEDU 4410963": 15
    },
    "hidden": false
  },
  {
    "id": 126,
    "name": "ASPENIA BEIGE LOVESEAT",
    "sku": "FRC-0126",
    "category": "Deluxe Group",
    "qty": 7,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 3,
      "MEDU 4410963": 9
    },
    "hidden": false
  },
  {
    "id": 127,
    "name": "ASPENIA BEIGE CHAIR",
    "sku": "FRC-0127",
    "category": "Deluxe Group",
    "qty": 41,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "CAAU 6959239": 38
    },
    "hidden": false
  },
  {
    "id": 128,
    "name": "ASPENIA DARK GRAY SOFA",
    "sku": "FRC-0128",
    "category": "Deluxe Group",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MRSU 3833901": 7,
      "MEDU 4410963": 13
    },
    "hidden": false
  },
  {
    "id": 129,
    "name": "ASPENIA DARK GRAY LOVESEAT",
    "sku": "FRC-0129",
    "category": "Deluxe Group",
    "qty": 10,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {
      "MEDU 4410963": 15
    },
    "hidden": false
  },
  {
    "id": 130,
    "name": "ASPENIA DARK GRAY CHAIR",
    "sku": "FRC-0130",
    "category": "Deluxe Group",
    "qty": 55,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "CAAU 6959239": 15
    },
    "hidden": false
  },
  {
    "id": 131,
    "name": "ROYAL BEIGE SOFA",
    "sku": "FRC-0131",
    "category": "Deluxe Group",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 4,
      "MEDU 4410963": 2
    },
    "hidden": false
  },
  {
    "id": 132,
    "name": "ROYAL BEIGE LOVESEAT",
    "sku": "FRC-0132",
    "category": "Deluxe Group",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 133,
    "name": "ROYAL DARK GRAY SOFA",
    "sku": "FRC-0133",
    "category": "Deluxe Group",
    "qty": 10,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3833901": 2
    },
    "hidden": false
  },
  {
    "id": 134,
    "name": "ROYAL DARK GRAY LOVESEAT",
    "sku": "FRC-0134",
    "category": "Deluxe Group",
    "qty": 9,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 135,
    "name": "OTHELLO BEIGE SOFA (Velvet 938 & Gold)",
    "sku": "FRC-0135",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 136,
    "name": "OTHELLO BEIGE LOVESEAT (Velvet 938 & Gold)",
    "sku": "FRC-0136",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 137,
    "name": "OTHELLO GRAY SOFA (Velvet 412 & Silver)",
    "sku": "FRC-0137",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 138,
    "name": "OTHELLO GRAY LOVESEAT (Velvet 412 & Silver)",
    "sku": "FRC-0138",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 139,
    "name": "SENFONI BEIGE SOFA (Velvet 938 & Gold)",
    "sku": "FRC-0139",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 140,
    "name": "SENFONI BEIGE LOVESEAT (Velvet 938 & Gold)",
    "sku": "FRC-0140",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 141,
    "name": "SENFONI GRAY SOFA (Velvet 412 & Silver)",
    "sku": "FRC-0141",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 142,
    "name": "SENFONI GRAY LOVESEAT (Velvet 412 & Silver)",
    "sku": "FRC-0142",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 143,
    "name": "CLARA BEIGE SOFA",
    "sku": "FRC-0143",
    "category": "Maxi Group",
    "qty": 30,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 144,
    "name": "CLARA BEIGE LOVESEAT",
    "sku": "FRC-0144",
    "category": "Maxi Group",
    "qty": 22,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 145,
    "name": "CLARA DARK GRAY SOFA",
    "sku": "FRC-0145",
    "category": "Maxi Group",
    "qty": 28,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 146,
    "name": "CLARA DARK GRAY LOVESEAT",
    "sku": "FRC-0146",
    "category": "Maxi Group",
    "qty": 24,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 147,
    "name": "BOSTON BEIGE SOFA",
    "sku": "FRC-0147",
    "category": "Maxi Group",
    "qty": 27,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 148,
    "name": "BOSTON BEIGE LOVESEAT",
    "sku": "FRC-0148",
    "category": "Maxi Group",
    "qty": 21,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 149,
    "name": "BOSTON DARK GRAY SOFA",
    "sku": "FRC-0149",
    "category": "Maxi Group",
    "qty": 23,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 150,
    "name": "BOSTON DARK GRAY LOVESEAT",
    "sku": "FRC-0150",
    "category": "Maxi Group",
    "qty": 16,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 151,
    "name": "TEDDY BEIGE CORNER (2+L) (Soft 03)",
    "sku": "FRC-0151",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 152,
    "name": "TEDDY BEIGE CORNER (L+2) (Soft 03)",
    "sku": "FRC-0152",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 153,
    "name": "STELLA BEIGE SOFA",
    "sku": "FRC-0153",
    "category": "Sofa Set",
    "qty": 27,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 154,
    "name": "STELLA BEIGE LOVESEAT",
    "sku": "FRC-0154",
    "category": "Sofa Set",
    "qty": 35,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 155,
    "name": "STELLA BEIGE CHAIR",
    "sku": "FRC-0155",
    "category": "Sofa Set",
    "qty": 30,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 156,
    "name": "STELLA DARK GRAY SOFA",
    "sku": "FRC-0156",
    "category": "Sofa Set",
    "qty": 28,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 157,
    "name": "STELLA DARK GRAY LOVESEAT",
    "sku": "FRC-0157",
    "category": "Sofa Set",
    "qty": 26,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 158,
    "name": "STELLA DARK GRAY CHAIR",
    "sku": "FRC-0158",
    "category": "Sofa Set",
    "qty": 40,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 159,
    "name": "NEW DREAMS BEIGE SOFA",
    "sku": "FRC-0159",
    "category": "Sofa Set",
    "qty": 29,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 160,
    "name": "NEW DREAMS BEIGE LOVESEAT",
    "sku": "FRC-0160",
    "category": "Sofa Set",
    "qty": 23,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 161,
    "name": "NEW DREAMS BEIGE CHAIR",
    "sku": "FRC-0161",
    "category": "Sofa Set",
    "qty": 20,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "Low Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 162,
    "name": "DREAMS GRAY SOFA (Velvet 412 & Gold)",
    "sku": "FRC-0162",
    "category": "Sofa Set",
    "qty": 17,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 163,
    "name": "DREAMS GRAY LOVESEAT (Velvet 412 & Gold)",
    "sku": "FRC-0163",
    "category": "Sofa Set",
    "qty": 17,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 164,
    "name": "DREAMS GRAY CHAIR (Velvet 412 & Gold)",
    "sku": "FRC-0164",
    "category": "Sofa Set",
    "qty": 17,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 165,
    "name": "NEW DREAMS DARK GRAY SOFA",
    "sku": "FRC-0165",
    "category": "Sofa Set",
    "qty": 22,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 166,
    "name": "NEW DREAMS DARK GRAY LOVESEAT",
    "sku": "FRC-0166",
    "category": "Sofa Set",
    "qty": 22,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 167,
    "name": "NEW DREAMS DARK GRAY CHAIR",
    "sku": "FRC-0167",
    "category": "Sofa Set",
    "qty": 23,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 168,
    "name": "NEW DREAMS LIGHT GRAY SOFA",
    "sku": "FRC-0168",
    "category": "Sofa Set",
    "qty": 14,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 169,
    "name": "NEW DREAMS LIGHT GRAY LOVESEAT",
    "sku": "FRC-0169",
    "category": "Sofa Set",
    "qty": 34,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 170,
    "name": "NEW DREAMS LIGHT GRAY CHAIR",
    "sku": "FRC-0170",
    "category": "Sofa Set",
    "qty": 14,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 171,
    "name": "LAGOS BEIGE SOFA (Casa 01 & Ceviz)",
    "sku": "FRC-0171",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 172,
    "name": "LAGOS BEIGE LOVESEAT (Casa 01 & Ceviz)",
    "sku": "FRC-0172",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 173,
    "name": "LAGOS BEIGE CHAIR (Casa 01 & Ceviz)",
    "sku": "FRC-0173",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 174,
    "name": "LAGOS GRAY SOFA (Casa 10 & Ceviz)",
    "sku": "FRC-0174",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 175,
    "name": "LAGOS GRAY LOVESEAT (Casa 10 & Ceviz)",
    "sku": "FRC-0175",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 176,
    "name": "LAGOS GRAY CHAIR (Casa 10 & Ceviz)",
    "sku": "FRC-0176",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 177,
    "name": "MASERATI BEIGE SOFA (Casa 01 & Ceviz)",
    "sku": "FRC-0177",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 178,
    "name": "MASERATI BEIGE LOVESEAT (Casa 01 & Ceviz)",
    "sku": "FRC-0178",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 179,
    "name": "MASERATI BEIGE CHAIR (Casa 01 & Ceviz)",
    "sku": "FRC-0179",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "MSDU 6936614": 5
    },
    "hidden": false
  },
  {
    "id": 180,
    "name": "CONCORD BEIGE SOFA",
    "sku": "FRC-0180",
    "category": "Accessories",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 181,
    "name": "CONCORD BEIGE LOVESEAT",
    "sku": "FRC-0181",
    "category": "Accessories",
    "qty": 4,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 182,
    "name": "CONCORD BEIGE CHAIR",
    "sku": "FRC-0182",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 183,
    "name": "CONCORD LIGHT GRAY SOFA",
    "sku": "FRC-0183",
    "category": "Accessories",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 184,
    "name": "CONCORD LIGHT GRAY LOVESEAT",
    "sku": "FRC-0184",
    "category": "Accessories",
    "qty": 2,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 185,
    "name": "CONCORD LIGHT GRAY CHAIR",
    "sku": "FRC-0185",
    "category": "Accessories",
    "qty": 1,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 186,
    "name": "ELIZA BEIGE SOFA",
    "sku": "FRC-0186",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 187,
    "name": "ELIZA BEIGE LOVESEAT",
    "sku": "FRC-0187",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 188,
    "name": "ELIZA BEIGE CHAIR",
    "sku": "FRC-0188",
    "category": "Accessories",
    "qty": 6,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 189,
    "name": "NIRVANA BEIGE SOFA (Star 553 & Gold)",
    "sku": "FRC-0189",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 190,
    "name": "NIRVANA BEIGE LOVESEAT (Star 553 & Gold)",
    "sku": "FRC-0190",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 191,
    "name": "NIRVANA BEIGE CHAIR (Star 553)",
    "sku": "FRC-0191",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 192,
    "name": "NIRVANA GRAY SOFA (Star 245 & Gold)",
    "sku": "FRC-0192",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 193,
    "name": "NIRVANA GRAY LOVESEAT (Star 245 & Gold)",
    "sku": "FRC-0193",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 194,
    "name": "NIRVANA GRAY CHAIR (Star 245)",
    "sku": "FRC-0194",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 195,
    "name": "NIRVANA BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0195",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 196,
    "name": "NIRVANA GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0196",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 197,
    "name": "LOFT BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0197",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 198,
    "name": "LOFT GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0198",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 199,
    "name": "OSCAR BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0199",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 200,
    "name": "OSCAR GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0200",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 201,
    "name": "ZEN BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0201",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 202,
    "name": "ZEN GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0202",
    "category": "Concept Design",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 203,
    "name": "CORDOBA BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0203",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 204,
    "name": "CORDOBA GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0204",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 205,
    "name": "GALINA BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0205",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 206,
    "name": "GALINA GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0206",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 207,
    "name": "QUATRO BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0207",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 208,
    "name": "QUATRO GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0208",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 209,
    "name": "OPERA BEIGE ARM (Star 553 & Gold)",
    "sku": "FRC-0209",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 210,
    "name": "OPERA GRAY ARM (Star 245 & Krom)",
    "sku": "FRC-0210",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 211,
    "name": "TINA BEIGE SOFA (Pınar 03)",
    "sku": "FRC-0211",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 212,
    "name": "TINA BEIGE LOVESEAT (Pınar 03)",
    "sku": "FRC-0212",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 213,
    "name": "TINA BEIGE CHAIR (Pınar 03)",
    "sku": "FRC-0213",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 214,
    "name": "TINA GRAY SOFA (Pınar 18)",
    "sku": "FRC-0214",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 215,
    "name": "TINA GRAY LOVESEAT (Pınar 18)",
    "sku": "FRC-0215",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 216,
    "name": "TINA GRAY CHAIR (Pınar 18)",
    "sku": "FRC-0216",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 217,
    "name": "TWIST BEIGE ARM (Pınar 03 & Gold)",
    "sku": "FRC-0217",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 218,
    "name": "TWIST GRAY ARM (Pınar 18 & Siyah)",
    "sku": "FRC-0218",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 219,
    "name": "FOCUS BEIGE ARM (Pınar 03 & Gold)",
    "sku": "FRC-0219",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 220,
    "name": "FOCUS GRAY ARM (Pınar 18 & Siyah)",
    "sku": "FRC-0220",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 221,
    "name": "TINA BEIGE ARM (Pınar 03 & Ceviz)",
    "sku": "FRC-0221",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 222,
    "name": "TINA BEIGE ARM (Pınar 18 & Ceviz)",
    "sku": "FRC-0222",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 223,
    "name": "ELIT BEIGE ARM (Pınar 03 & Ceviz)",
    "sku": "FRC-0223",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 224,
    "name": "ELIT BEIGE ARM (Pınar 18 & Siyah)",
    "sku": "FRC-0224",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 225,
    "name": "NEFES BEIGE ARM (Pınar 03 & Siyah)",
    "sku": "FRC-0225",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 226,
    "name": "NEFES BEIGE ARM (Pınar 18 & Siyah)",
    "sku": "FRC-0226",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 227,
    "name": "GOLD BEIGE ARM (Pınar 03 & Ceviz)",
    "sku": "FRC-0227",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 228,
    "name": "GOLD BEIGE ARM (Pınar 18 & Siyah)",
    "sku": "FRC-0228",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 229,
    "name": "DAMLA BEIGE ARM (Pınar 03 & Gold)",
    "sku": "FRC-0229",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 230,
    "name": "DAMLA BEIGE ARM (Pınar 18 & Krom)",
    "sku": "FRC-0230",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 231,
    "name": "DANTE BEIGE ARM (Pınar 03 & Gold)",
    "sku": "FRC-0231",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 232,
    "name": "DANTE BEIGE ARM (Pınar 18 & Krom)",
    "sku": "FRC-0232",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 233,
    "name": "AURA BEIGE ARM (Pınar 03 & Gold)",
    "sku": "FRC-0233",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 234,
    "name": "AURA BEIGE ARM (Pınar 18 & Krom)",
    "sku": "FRC-0234",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 235,
    "name": "TITAN BEIGE SOFA (Star 553 & Gold)",
    "sku": "FRC-0235",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 236,
    "name": "TITAN BEIGE LOVESEAT (Star 553 & Gold)",
    "sku": "FRC-0236",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 237,
    "name": "TITAN BEIGE CHAIR (Star 553 & Gold)",
    "sku": "FRC-0237",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 238,
    "name": "TITAN GRAY SOFA (Star 245 & Gold)",
    "sku": "FRC-0238",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 239,
    "name": "TITAN GRAY LOVESEAT (Star 245 & Gold)",
    "sku": "FRC-0239",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 240,
    "name": "TITAN GRAY CHAIR (Star 245 & Gold)",
    "sku": "FRC-0240",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 241,
    "name": "NEVA BEIGE SOFA (Star 553 & Gold)",
    "sku": "FRC-0241",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 242,
    "name": "NEVA BEIGE LOVESEAT (Star 553 & Gold)",
    "sku": "FRC-0242",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 243,
    "name": "NEVA GRAY SOFA (Star 245 & Gold)",
    "sku": "FRC-0243",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 244,
    "name": "NEVA GRAY LOVESEAT (Star 245 & Gold)",
    "sku": "FRC-0244",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 245,
    "name": "VALERO BEIGE SOFA (Star 553 & Gold)",
    "sku": "FRC-0245",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 246,
    "name": "VALERO BEIGE LOVESEAT (Star 553 & Gold)",
    "sku": "FRC-0246",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 247,
    "name": "VALERO GRAY SOFA (Star 245 & Gold)",
    "sku": "FRC-0247",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 248,
    "name": "VALERO GRAY LOVESEAT (Star 245 & Gold)",
    "sku": "FRC-0248",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 249,
    "name": "ARMADA PRO SOFA",
    "sku": "FRC-0249",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3311640": 20
    },
    "hidden": false
  },
  {
    "id": 250,
    "name": "ARMADA PRO LOVESEAT",
    "sku": "FRC-0250",
    "category": "Accessories",
    "qty": 21,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 251,
    "name": "ARMADA PRO CHAIR",
    "sku": "FRC-0251",
    "category": "Accessories",
    "qty": 10,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 252,
    "name": "ARMADA PRO CORNER SECTION",
    "sku": "FRC-0252",
    "category": "Accessories",
    "qty": 3,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {
      "MRSU 3311640": 2
    },
    "hidden": false
  },
  {
    "id": 253,
    "name": "ARMADA PRO L SHAPE SECTION",
    "sku": "FRC-0253",
    "category": "Accessories",
    "qty": 5,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 254,
    "name": "REGINA BEIGE SOFA BED",
    "sku": "FRC-0254",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 255,
    "name": "REGINA DARK GRAY SOFA BED",
    "sku": "FRC-0255",
    "category": "Accessories",
    "qty": 8,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "In Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 256,
    "name": "CANYON PUF (Soft 03 & Ceviz)",
    "sku": "FRC-0256",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 257,
    "name": "ASPENDOS PUF (Velvet 938 & Gold)",
    "sku": "FRC-0257",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 258,
    "name": "ASPENDOS PUF (Velvet 412 & Silver)",
    "sku": "FRC-0258",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 259,
    "name": "ASPENDOS PUF (New siena 30 & Gold)",
    "sku": "FRC-0259",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 260,
    "name": "ASPENDOS PUF (New siena 680 & Gold)",
    "sku": "FRC-0260",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 261,
    "name": "DREAMS 75X75 CM PUF (Velvet 938)",
    "sku": "FRC-0261",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 262,
    "name": "DREAMS 75X75 CM PUF (Velvet 412)",
    "sku": "FRC-0262",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 263,
    "name": "STELLA 75X75 CM PUF (Velvet 938)",
    "sku": "FRC-0263",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 264,
    "name": "STELLA 75X75 CM PUF (Velvet 412)",
    "sku": "FRC-0264",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 265,
    "name": "DREAMS 45X45 CM PUF (Velvet 938)",
    "sku": "FRC-0265",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 266,
    "name": "DREAMS 45X45 CM PUF (Velvet 412)",
    "sku": "FRC-0266",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 267,
    "name": "STELLA 45X45 CM PUF (Velvet 938)",
    "sku": "FRC-0267",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 268,
    "name": "STELLA 45X45 CM PUF (Velvet 412)",
    "sku": "FRC-0268",
    "category": "Sofa Set",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 269,
    "name": "HASIR 3 LU ZIGON SEHPA YUVARLAK (Onyx & Gold)",
    "sku": "FRC-0269",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 270,
    "name": "HASIR 3 LU ZIGON SEHPA YUVARLAK (Onyx & Silver)",
    "sku": "FRC-0270",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 271,
    "name": "HASIR 3 LU ZIGON SEHPA YUVARLAK (Beyaz Galaxy & Gold)",
    "sku": "FRC-0271",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 272,
    "name": "HASIR 3 LU ZIGON SEHPA YUVARLAK (Beyaz Galaxy & Silver)",
    "sku": "FRC-0272",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 273,
    "name": "HASIR 3 LU ZIGON SEHPA KARE (Onyx & Gold)",
    "sku": "FRC-0273",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 274,
    "name": "HASIR 3 LU ZIGON SEHPA KARE (Onyx & Silver)",
    "sku": "FRC-0274",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 275,
    "name": "HASIR 3 LU ZIGON SEHPA KARE (Beyaz Galaxy & Gold)",
    "sku": "FRC-0275",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 276,
    "name": "HASIR 3 LU ZIGON SEHPA KARE (Beyaz Galaxy & Silver)",
    "sku": "FRC-0276",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 277,
    "name": "HASIR YAN SEHPA YUVARLAK (Onyx & Gold)",
    "sku": "FRC-0277",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MEDU 4410963": 6
    },
    "hidden": false
  },
  {
    "id": 278,
    "name": "HASIR YAN SEHPA YUVARLAK (Onyx & Silver)",
    "sku": "FRC-0278",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MEDU 4410963": 6
    },
    "hidden": false
  },
  {
    "id": 279,
    "name": "HASIR YAN SEHPA YUVARLAK (Beyaz Galaxy & Gold)",
    "sku": "FRC-0279",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MEDU 4410963": 6
    },
    "hidden": false
  },
  {
    "id": 280,
    "name": "HASIR YAN SEHPA YUVARLAK (Beyaz Galaxy & Silver)",
    "sku": "FRC-0280",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MEDU 4410963": 6
    },
    "hidden": false
  },
  {
    "id": 281,
    "name": "HASIR YAN SEHPA KARE (Onyx & Gold)",
    "sku": "FRC-0281",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 282,
    "name": "HASIR YAN SEHPA KARE (Onyx & Silver)",
    "sku": "FRC-0282",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 283,
    "name": "HASIR YAN SEHPA KARE (Beyaz Galaxy & Gold)",
    "sku": "FRC-0283",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 284,
    "name": "HASIR YAN SEHPA KARE (Beyaz Galaxy & Silver)",
    "sku": "FRC-0284",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 285,
    "name": "HASIR ORTA SEHPA YUVARLAK (Onyx & Gold)",
    "sku": "FRC-0285",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 286,
    "name": "HASIR ORTA SEHPA YUVARLAK (Onyx & Silver)",
    "sku": "FRC-0286",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 287,
    "name": "HASIR ORTA SEHPA YUVARLAK (Beyaz Galaxy & Gold)",
    "sku": "FRC-0287",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 288,
    "name": "HASIR ORTA SEHPA YUVARLAK (Beyaz Galaxy & Silver)",
    "sku": "FRC-0288",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 289,
    "name": "HASIR ORTA SEHPA DİKDÖRTGEN (Onyx & Gold)",
    "sku": "FRC-0289",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 3,
      "MEDU 4410963": 3
    },
    "hidden": false
  },
  {
    "id": 290,
    "name": "HASIR ORTA SEHPA DİKDÖRTGEN (Onyx & Silver)",
    "sku": "FRC-0290",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 4,
      "MEDU 4410963": 2
    },
    "hidden": false
  },
  {
    "id": 291,
    "name": "HASIR ORTA SEHPA DİKDÖRTGEN (Beyaz Galaxy & Gold)",
    "sku": "FRC-0291",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 4,
      "MEDU 4410963": 2
    },
    "hidden": false
  },
  {
    "id": 292,
    "name": "HASIR ORTA SEHPA DİKDÖRTGEN (Beyaz Galaxy & Silver)",
    "sku": "FRC-0292",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 4,
      "MEDU 4410963": 2
    },
    "hidden": false
  },
  {
    "id": 293,
    "name": "MODERN ORTA SEHPA (Onyx & Gold)",
    "sku": "FRC-0293",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 294,
    "name": "MODERN ORTA SEHPA (Onyx & Silver)",
    "sku": "FRC-0294",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 295,
    "name": "MODERN ORTA SEHPA (Beyaz Galaxy & Gold)",
    "sku": "FRC-0295",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 296,
    "name": "MODERN ORTA SEHPA (Beyaz Galaxy & Silver)",
    "sku": "FRC-0296",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {
      "TLLU 7802940": 1,
      "MSDU 6936614": 6
    },
    "hidden": false
  },
  {
    "id": 297,
    "name": "OVAL SERVIS ARABASI (Beyaz Galaxy & Gold)",
    "sku": "FRC-0297",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 298,
    "name": "OVAL SERVIS ARABASI (Beyaz Galaxy & Silver)",
    "sku": "FRC-0298",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 299,
    "name": "OVAL SERVIS ARABASI (Beyaz Galaxy & Siyah)",
    "sku": "FRC-0299",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 300,
    "name": "ROYAL SERVIS SEHPASI (Beyaz Galaxy & Gold)",
    "sku": "FRC-0300",
    "category": "Deluxe Group",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 301,
    "name": "ROYAL SERVIS SEHPASI (Beyaz Galaxy & Silver)",
    "sku": "FRC-0301",
    "category": "Deluxe Group",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 302,
    "name": "ROYAL SERVIS SEHPASI (Beyaz Galaxy & Siyah)",
    "sku": "FRC-0302",
    "category": "Deluxe Group",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 303,
    "name": "KARE KISA LAMBADER (Beyaz Galaxy & Gold)",
    "sku": "FRC-0303",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 304,
    "name": "KARE KISA LAMBADER (Beyaz Galaxy & Silver)",
    "sku": "FRC-0304",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 305,
    "name": "KARE UZUN LAMBADER (Beyaz Galaxy & Gold)",
    "sku": "FRC-0305",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 306,
    "name": "KARE UZUN LAMBADER (Beyaz Galaxy & Silver)",
    "sku": "FRC-0306",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 307,
    "name": "SEHPA LAMBADER (Beyaz Galaxy & Gold)",
    "sku": "FRC-0307",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  },
  {
    "id": 308,
    "name": "SEHPA LAMBADER (Beyaz Galaxy & Silver)",
    "sku": "FRC-0308",
    "category": "Accessories",
    "qty": 0,
    "minQty": 3,
    "price": 0,
    "location": "",
    "note": "No Stock",
    "containerQtys": {},
    "hidden": false
  }
];


// ── CONFIG ──────────────────────────────────────
const ADMIN_PIN = "0482";
// ── FIREBASE CONFIG ──────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyApwBSh_c1whMawh5N0m6uKl39a-0DqydE",
  authDomain: "furco-inventory.firebaseapp.com",
  projectId: "furco-inventory",
  storageBucket: "furco-inventory.firebasestorage.app",
  messagingSenderId: "774721161473",
  appId: "1:774721161473:web:ab961832522e6afb123300"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestore collection refs
const PROD_DOC  = db.collection("furco").doc("products");
const CONT_DOC  = db.collection("furco").doc("containers");
const HIST_DOC  = db.collection("furco").doc("history");
// SK_CONT removed - using Firebase
const CATEGORIES = ["Concept Design","Sofa Set","Deluxe Group","Maxi Group","Bedroom","Accessories"];

// Products visible to public (non-admin)
const PUBLIC_BRANDS = [
  // Concept Design
  "PARMA","ZEN","MAXIM","MAXIMO","ROMANCE","NEW ROMANCE",
  // Sofa Set
  "GALERIA","MILENYUM","STELLA","DREAMS","NEW DREAMS","NEVA",
  // Deluxe Group
  "ROYAL","ASPENIA","RESITAL",
  // Maxi Group
  "BOSTON","CLARA",
  // Bedroom
  "MONZA",
];
// Public categories (no Accessories)
const PUBLIC_CATEGORIES = ["Concept Design","Sofa Set","Deluxe Group","Maxi Group","Bedroom"];

var HIDDEN_PRODUCTS = ["ROYAL SERVIS SEHPASI", "MAXIMO DINING TABLE", "NEW ROMANCE BEIGE CHAIR (SIENA 680)", "NEW ROMANCE GRAY DINING CHAIR (SIENA 680)", "ZEN BEIGE ARM (STAR 553 & GOLD)", "ZEN GRAY ARM (STAR 245 & KROM)"];

function isPublicProduct(p){
  var n = p.name.toUpperCase();
  // Must be in a public category
  if(PUBLIC_CATEGORIES.indexOf(p.category) === -1) return false;
  // Must match a public brand
  if(!PUBLIC_BRANDS.some(function(b){ return n.startsWith(b+" ") || n.startsWith(b+"-") || n === b; })) return false;
  // Hide specific products
  if(HIDDEN_PRODUCTS.some(function(h){ return n.indexOf(h) !== -1; })) return false;
  // Hide manually hidden products
  if(p.hidden) return false;
  // Hide out-of-stock Sofa Set products
  if(p.category === "Sofa Set" && p.qty === 0) return false;
  return true;
}

// ── STATE ────────────────────────────────────────
let isAdmin = false;
let curPage = "dashboard";
let editId = null;
let editContId = null;
let adjId = null;
let adjType = "add";
let delId = null;
let arriveContId = null;
let pinBuf = "";
let quickOutId = null;

// ── FIREBASE SAVE/LOAD ───────────────────────────
function saveP(){
  PROD_DOC.set({data: JSON.stringify(products)}).catch(function(e){ console.error("saveP error:", e); });
}
function saveC(){
  CONT_DOC.set({data: JSON.stringify(containers)}).catch(function(e){ console.error("saveC error:", e); });
}
function loadHist(){
  return JSON.parse(localStorage.getItem("furco_hist_local")||"[]");
}
function saveHist(h){
  var trimmed = h.slice(0,200);
  localStorage.setItem("furco_hist_local", JSON.stringify(trimmed));
  HIST_DOC.set({data: JSON.stringify(trimmed)}).catch(function(){});
}

// Dummy loadP kept for init (overridden by Firebase listener below)
function loadP(key, init){ return init.map(function(x){ return Object.assign({},x); }); }
function addHist(type, prodName, qty, note){
  var h=loadHist();
  h.unshift({type:type, prodName:prodName, qty:qty, note:note||"", date:new Date().toISOString(), user: isAdmin?"Admin":"Warehouse"});
  saveHist(h);
}

// Products & containers start from INIT, then Firebase overwrites via onSnapshot
let products = INIT_PRODUCTS.map(function(x){ return Object.assign({},x); });
let containers = INIT_CONTAINERS.map(function(x){ return Object.assign({},x); });

// ── INIT ─────────────────────────────────────────
document.getElementById("dateText").textContent = new Date().toLocaleDateString("tr-TR",{weekday:"long",year:"numeric",month:"long",day:"numeric"});

// Populate category selects
["fCat","fCatF"].forEach(id=>{
  const el=document.getElementById(id);
  if(!el) return;
  if(id==="fCat") el.innerHTML='<option value="">All Categories</option>';
  else el.innerHTML="";
  CATEGORIES.forEach(c=>{ const o=document.createElement("option"); o.value=c; o.textContent=c; el.appendChild(o); });
});

renderNav(); renderAll();
showPage("list");

// ── NAVIGATION ───────────────────────────────────
function renderNav(){
  const items = isAdmin ? [
    {id:"dashboard",label:"Overview",icon:"⊞"},
    {id:"list",label:"Stock List",icon:"☰"},
    {id:"containers",label:"Containers",icon:"🚢"},
    {id:"history",label:"Activity Log",icon:"📋"},
    {id:"logout",label:"Logout",icon:"↩"},
  ] : [
    {id:"list",label:"Stock List",icon:"☰"},
    {id:"login",label:"Admin Login",icon:"⚿"},
  ];
  const dn=document.getElementById("deskNav");
  const mn=document.getElementById("mobNav");
  dn.innerHTML=""; mn.innerHTML="";
  items.forEach(item=>{
    const a=curPage===item.id?"active":"";
    const b=document.createElement("button");
    b.className=`nb ${a}`; b.innerHTML=`<span>${item.icon}</span>${item.label}`; b.onclick=()=>nav(item.id); dn.appendChild(b);
    const m=document.createElement("div");
    m.className=`mob-item ${a}`; m.innerHTML=`<span>${item.icon}</span>${item.label}`; m.onclick=()=>{nav(item.id);closeMob();}; mn.appendChild(m);
  });
  if(isAdmin){ const ch=document.createElement("span"); ch.className="admin-chip"; ch.textContent="ADMIN"; dn.appendChild(ch); }
  const ab=document.getElementById("addBtn"); if(ab) ab.style.display=isAdmin?"inline-flex":"none";
  const cb=document.getElementById("addContBtn"); if(cb) cb.style.display=isAdmin?"inline-flex":"none";
  const qbBtn=document.getElementById("qbExportBtn"); if(qbBtn) qbBtn.style.display=isAdmin?"inline-flex":"none";
  const banner=document.getElementById("publicBanner"); if(banner) banner.style.display=isAdmin?"none":"flex";
  const listTitle=document.getElementById("listPageTitle"); if(listTitle) listTitle.textContent=isAdmin?"Stock List":"Product Catalogue";
  const lu=document.getElementById("lastUpdate"); if(lu) lu.textContent=new Date().toLocaleDateString("en-CA",{day:"2-digit",month:"long",year:"numeric"});
  const sf=document.getElementById("fStatus"); if(sf) sf.style.display=isAdmin?"block":"none";
  // Toggle search bars
  var ps=document.getElementById("publicSearch"); if(ps) ps.style.display=isAdmin?"none":"block";
  var af=document.getElementById("adminFilters"); if(af) af.style.display=isAdmin?"flex":"none";
  if(!isAdmin) renderCatPills(""); // reset pill selection
  // list head
  const lh=document.getElementById("listHead");
  if(lh){ lh.innerHTML=`<span>Product</span><span class="hide-m">Kategori</span><span>Stok</span><span class="hide-m">Durum</span>${isAdmin?'<span>Actions</span>':''}`; }
}

function nav(id){
  if(id==="logout"){ isAdmin=false; showPage("dashboard"); toast("Logged out","warn"); renderNav(); renderAll(); return; }
  showPage(id);
}

function showPage(id){
  curPage=id;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const pg=document.getElementById("page-"+id);
  if(pg) pg.classList.add("active");
  renderNav();
  if(id==="dashboard") renderDash();
  if(id==="list") renderList();
  if(id==="containers") renderConts();
  if(id==="history") renderHistory();
}

function toggleMob(){
  const mn=document.getElementById("mobNav");
  const open=mn.style.display==="block";
  mn.style.display=open?"none":"block";
  document.querySelector(".hamburger").textContent=open?"☰":"✕";
}
function closeMob(){ document.getElementById("mobNav").style.display="none"; document.querySelector(".hamburger").textContent="☰"; }

// ── RENDER ALL ────────────────────────────────────
function renderAll(){ if(isAdmin) renderAlerts(); else document.getElementById("alertBox").innerHTML=""; renderDash(); renderList(); renderConts(); }

function renderAlerts(){
  const low=products.filter(p=>p.qty>0&&p.qty<=p.minQty);
  const none=products.filter(p=>p.qty===0);
  const box=document.getElementById("alertBox");
  if(!low.length&&!none.length){ box.innerHTML=""; return; }
  let html="";
  if(none.length) html+=`<div class="alert-box" style="background:#F9EBEA;border-color:#E74C3C;margin-bottom:8px;"><span style="font-size:18px;">🚫</span><div><strong style="color:#C0392B;">${none.length} products are out of stock.</strong> <span style="color:#922B21;font-size:13px;">${none.slice(0,5).map(p=>p.name).join(", ")}${none.length>5?` +${none.length-5} more`:""}</span></div></div>`;
  if(low.length) html+=`<div class="alert-box"><span style="font-size:18px;">⚠️</span><div><strong style="color:#C0392B;">${low.length} products are running low:</strong> <span style="color:#922B21;font-size:13px;">${low.slice(0,5).map(p=>p.name).join(", ")}${low.length>5?` +${low.length-5} more`:""}</span></div></div>`;
  box.innerHTML=html;
}

// ── DASHBOARD ─────────────────────────────────────
function renderDash(){
  var today = new Date();
  var el = document.getElementById("dateText");
  if(el) el.textContent = today.toLocaleDateString("en-CA",{weekday:"long",year:"numeric",month:"long",day:"numeric"});

  var instock  = products.filter(function(p){ return p.qty > p.minQty; }).length;
  var low      = products.filter(function(p){ return p.qty > 0 && p.qty <= p.minQty; }).length;
  var none     = products.filter(function(p){ return p.qty === 0; }).length;
  var totalQty = products.reduce(function(s,p){ return s+p.qty; }, 0);
  var pending  = containers.filter(function(c){ return !c.arrived; }).length;
  var totalInbound = 0;
  containers.filter(function(c){ return !c.arrived; }).forEach(function(c){
    products.forEach(function(p){
      var cq = (p.containerQtys||{})[c.number];
      if(cq) totalInbound += cq;
    });
  });

  var stats = [
    {lbl:"Total SKUs",   val:products.length,           icon:"📦", accent:"#1C1A17"},
    {lbl:"Units on Hand",val:totalQty.toLocaleString(),  icon:"🏭", accent:"#8B6914"},
    {lbl:"In Stock",     val:instock,                    icon:"✅", accent:"#1a7a3c"},
    {lbl:"Low Stock",    val:low,                        icon:"⚠️", accent:"#E67E22"},
    {lbl:"Out of Stock", val:none,                       icon:"🚫", accent:"#C0392B"},
  ];

  var sg = document.getElementById("statsGrid");
  if(sg){
    sg.innerHTML = "";
    stats.forEach(function(s){
      var card = document.createElement("div");
      card.className = "stat-card";
      card.style.setProperty("--accent", s.accent);
      card.innerHTML =
        '<div class="stat-icon">'+s.icon+'</div>'+
        '<div class="stat-val" style="color:'+s.accent+';">'+s.val+'</div>'+
        '<div class="stat-lbl">'+s.lbl+'</div>';
      sg.appendChild(card);
    });
  }

  // Category bars
  var catTotals = CATEGORIES.map(function(c){
    return products.filter(function(p){ return p.category===c; }).reduce(function(s,p){ return s+p.qty; },0);
  });
  var maxQ = Math.max.apply(null, [1].concat(catTotals));
  var cb = document.getElementById("catBars");
  if(cb){
    cb.innerHTML = CATEGORIES.map(function(cat, ci){
      var ps = products.filter(function(p){ return p.category===cat; });
      if(!ps.length) return "";
      var total = catTotals[ci];
      var pct   = Math.round((total/maxQ)*100);
      var oos   = ps.filter(function(p){ return p.qty===0; }).length;
      var lowC  = ps.filter(function(p){ return p.qty>0 && p.qty<=p.minQty; }).length;
      return '<div style="margin-bottom:16px;">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">'+
          '<span style="font-weight:600;font-size:13px;">'+cat+'</span>'+
          '<div style="display:flex;gap:6px;align-items:center;">'+
            (oos?'<span style="font-size:10px;background:#FDECEA;color:#C0392B;border-radius:4px;padding:2px 6px;font-weight:700;">'+oos+' OOS</span>':'')+
            (lowC?'<span style="font-size:10px;background:#FEF5E4;color:#B7770D;border-radius:4px;padding:2px 6px;font-weight:700;">'+lowC+' LOW</span>':'')+
            '<span style="font-size:12px;color:#AAA;">'+total+' pcs</span>'+
          '</div>'+
        '</div>'+
        '<div style="background:#F0ECE4;border-radius:6px;height:8px;">'+
          '<div style="background:linear-gradient(90deg,#1C1A17,#D4960A);height:8px;border-radius:6px;width:'+pct+'%;transition:width .6s ease;"></div>'+
        '</div>'+
      '</div>';
    }).join("");
  }

  // Stock health panel
  var sh = document.getElementById("stockHealth");
  if(sh){
    var total = products.length;
    var healthPct = Math.round((instock/total)*100);
    var lowPct  = Math.round((low/total)*100);
    var oosPct  = Math.round((none/total)*100);
    sh.innerHTML =
      // Big health score
      '<div style="text-align:center;padding:10px 0 20px;">'+
        '<div style="font-size:52px;font-weight:800;font-family:Georgia,serif;color:'+(healthPct>=70?"#1a7a3c":healthPct>=40?"#E67E22":"#C0392B")+';">'+healthPct+'%</div>'+
        '<div style="font-size:12px;color:#AAA;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-top:4px;">Products In Stock</div>'+
      '</div>'+
      // Stacked bar
      '<div style="height:12px;border-radius:8px;overflow:hidden;display:flex;margin-bottom:16px;">'+
        '<div style="background:#1a7a3c;width:'+healthPct+'%;transition:width .6s;"></div>'+
        '<div style="background:#E67E22;width:'+lowPct+'%;"></div>'+
        '<div style="background:#C0392B;width:'+oosPct+'%;"></div>'+
      '</div>'+
      // Legend
      '<div style="display:flex;flex-direction:column;gap:8px;">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;">'+
          '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:2px;background:#1a7a3c;"></div><span style="font-size:13px;">In Stock</span></div>'+
          '<span style="font-weight:700;font-size:14px;">'+instock+'</span>'+
        '</div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;">'+
          '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:2px;background:#E67E22;"></div><span style="font-size:13px;">Low Stock</span></div>'+
          '<span style="font-weight:700;font-size:14px;color:#E67E22;">'+low+'</span>'+
        '</div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;">'+
          '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:2px;background:#C0392B;"></div><span style="font-size:13px;">Out of Stock</span></div>'+
          '<span style="font-weight:700;font-size:14px;color:#C0392B;">'+none+'</span>'+
        '</div>'+
        (pending?
        '<div style="margin-top:8px;padding-top:8px;border-top:1px solid #F0ECE4;display:flex;justify-content:space-between;align-items:center;">'+
          '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:2px;background:#2471A3;"></div><span style="font-size:13px;">Inbound (containers)</span></div>'+
          '<span style="font-weight:700;font-size:14px;color:#2471A3;">+'+totalInbound+'</span>'+
        '</div>':'')+
      '</div>';
  }

  // Critical stock table
  var low2 = products.filter(function(p){ return p.qty <= p.minQty; });
  var lt = document.getElementById("lowTable");
  if(!lt) return;
  if(!low2.length){ lt.innerHTML = ""; return; }

  var rows = low2.map(function(p){
    var isOOS = p.qty === 0;
    return '<div style="display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #F5F2ED;">'+
      '<div>'+
        '<div style="font-weight:600;font-size:13px;">'+p.name+'</div>'+
        '<div style="font-size:11px;color:#AAA;margin-top:2px;">'+p.category+' · '+p.sku+'</div>'+
      '</div>'+
      '<div style="text-align:right;">'+
        '<span class="badge '+(isOOS?"b-none":"b-low")+'" style="font-size:12px;">'+p.qty+' units</span>'+
        '<div style="font-size:10px;color:#AAA;margin-top:3px;">Min: '+p.minQty+'</div>'+
      '</div>'+
      '<button class="btn btn-outline btn-sm" onclick="openAdj('+p.id+')" style="white-space:nowrap;">± Stock</button>'+
    '</div>';
  }).join("");

  lt.innerHTML =
    '<div class="card card-body">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">'+
        '<div style="font-weight:700;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:#C0392B;">⚠ Critical Stock</div>'+
        '<span style="font-size:12px;color:#AAA;">'+low2.length+' products need attention</span>'+
      '</div>'+
      rows+
    '</div>';
}

// ── PUBLIC SEARCH & PILLS ────────────────────────
var activePillCat = "";
function syncSearch(){
  var v = document.getElementById("srchPublic").value;
  var el = document.getElementById("srch");
  if(el) el.value = v;
  renderList();
}
function renderCatPills(selected){
  activePillCat = selected;
  var el = document.getElementById("catPills");
  if(!el) return;
  el.innerHTML = "";
  var cats = [""].concat(PUBLIC_CATEGORIES);
  cats.forEach(function(c){
    var isActive = c === selected;
    var btn = document.createElement("button");
    btn.textContent = c || "All Products";
    btn.style.cssText = "padding:8px 18px;border-radius:22px;border:2px solid "+(isActive?"#111":"#E5E0D8")+";background:"+(isActive?"#111":"white")+";color:"+(isActive?"white":"#666")+";font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;box-shadow:0 2px 6px rgba(0,0,0,.06);";
    btn.onclick = (function(cat){ return function(){ renderCatPills(cat); }; })(c);
    el.appendChild(btn);
  });
  var fc = document.getElementById("fCat");
  if(fc) fc.value = selected;
  renderList();
}
function selectPill(cat){ renderCatPills(cat); }

// ── LIST ──────────────────────────────────────────
function renderList(){
  var _srchVal = isAdmin
    ? ((document.getElementById("srch")||{}).value||"")
    : ((document.getElementById("srchPublic")||{}).value||"");
  const srch = _srchVal.toLowerCase();
  const cat = isAdmin ? ((document.getElementById("fCat")||{value:""}).value) : activePillCat;
  const status = (document.getElementById("fStatus")||{value:""}).value;
  const sort = (document.getElementById("fSort")||{value:"name"}).value;

  var baseProducts = isAdmin ? products : products.filter(isPublicProduct);

  let list = baseProducts
    .filter(p => !cat || p.category === cat)
    .filter(p => !status || (status === "hidden" ? p.hidden : p.note === status))
    .filter(p => p.name.toLowerCase().includes(srch) || p.sku.toLowerCase().includes(srch));

  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name,"en"));
  else if(sort==="qty") list.sort((a,b)=>a.qty-b.qty);
  else if(sort==="cat") list.sort((a,b)=>a.category.localeCompare(b.category,"en"));

  const tb = document.getElementById("listBody");
  if(!tb) return;

  if(!list.length){
    tb.innerHTML = '<div style="padding:48px;text-align:center;color:#AAA;font-size:15px;">No products found</div>';
    document.getElementById("rowCount").textContent = "0 products shown";
    return;
  }

  if(isAdmin){
    // ── ADMIN: card-style rows for mobile ──
    tb.innerHTML = list.map(p => {
      const bdg = p.qty===0?"b-none":p.qty<=p.minQty?"b-low":p.qty<=p.minQty*2?"b-warn":"b-ok";
      const inbound = Object.keys(p.containerQtys||{}).length
        ? `<span style="font-size:11px;color:#2980B9;display:inline-flex;align-items:center;gap:3px;margin-top:3px;">📦 ${Object.values(p.containerQtys).reduce((a,b)=>a+b,0)} inbound</span>`
        : "";
      const hiddenBadge = p.hidden ? `<span style="font-size:10px;background:#FEF0E0;color:#E67E22;border-radius:4px;padding:1px 6px;font-weight:700;margin-left:4px;">HIDDEN</span>` : "";
      return `<div class="admin-row">
        <div class="admin-row-main">
          <div>
            <div class="prod-name">${p.name}${hiddenBadge}</div>
            <div style="font-size:11px;color:#AAA;margin-top:2px;">${p.sku} · <span style="color:#888;">${p.category}</span></div>
            <div>${inbound}</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
            <span class="badge ${bdg}" style="font-size:14px;padding:5px 12px;">${p.qty}</span>
          </div>
        </div>
        <div class="admin-row-actions">
          <button class="action-btn action-out" onclick="openQuickOut(${p.id})">− Out</button>
          <button class="action-btn action-stock" onclick="openAdj(${p.id})">± Stock</button>
          <button class="action-btn action-eye" title="${p.hidden?'Show to customers':'Hide from customers'}" onclick="toggleHidden(${p.id})">${p.hidden?'🙈':'👁'}</button>
          <button class="action-btn action-edit" onclick="openForm(${p.id})">✎</button>
          <button class="action-btn action-del" onclick="openDel(${p.id})">✕</button>
        </div>
      </div>`;
    }).join("");
  } else {
    // ── PUBLIC: clean 2-col ──
    tb.innerHTML = list.map(p => {
      const avail = p.qty===0 ? "b-none" : p.qty<=p.minQty ? "b-low" : "b-ok";
      const availTxt = p.qty===0 ? "Out of Stock" : p.qty<=p.minQty ? "Low Stock" : "Available";
      const inbound = Object.keys(p.containerQtys||{}).length
        ? `<span style="font-size:11px;color:#2980B9;display:inline-flex;align-items:center;gap:3px;margin-top:2px;">📦 ${Object.values(p.containerQtys).reduce((a,b)=>a+b,0)} inbound</span>`
        : "";
      return `<div class="tbl-row" style="grid-template-columns:1fr 110px;">
        <div>
          <div class="prod-name">${p.name}</div>
          <div style="font-size:11px;color:#B8A882;font-weight:600;margin-top:2px;">${p.category}</div>
          <div>${inbound}</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:flex-end;">
          <span class="badge ${avail}" style="font-size:12px;padding:5px 10px;text-align:center;">${availTxt}</span>
        </div>
      </div>`;
    }).join("");
  }

  // Update header for admin
  const lh = document.getElementById("listHead");
  if(lh){
    if(isAdmin){
      lh.style.gridTemplateColumns = "1fr";
      lh.innerHTML = `<span>${list.length} products</span>`;
      lh.style.background = "transparent";
      lh.style.padding = "0 0 8px 4px";
      lh.style.fontSize = "12px";
      lh.style.color = "#AAA";
      lh.style.fontWeight = "600";
      lh.style.textTransform = "uppercase";
      lh.style.letterSpacing = ".06em";
      lh.style.borderBottom = "none";
    } else {
      lh.style = "";
      lh.style.gridTemplateColumns = "1fr 110px";
      lh.innerHTML = `<span>Product</span><span>Availability</span>`;
    }
  }

  document.getElementById("rowCount").textContent = list.length + " products shown";
}

// ── CONTAINERS ────────────────────────────────────
function renderConts(){
  const pending=containers.filter(c=>!c.arrived);
  const arrived=containers.filter(c=>c.arrived);
  const grid=document.getElementById("contGrid");

  if(!pending.length){
    grid.innerHTML='<div style="padding:30px;text-align:center;color:#AAA;background:white;border-radius:12px;border:1px solid #DDD8CE;">Bekleyen konteyner yok</div>';
  } else {
    grid.innerHTML=pending.map(c=>{
      const items=getContItems(c.number);
      const totalPcs=items.reduce((s,i)=>s+i.qty,0);
      const eta=c.arrivalDate?new Date(c.arrivalDate):null;
      const today=new Date(); today.setHours(0,0,0,0);
      const daysLeft=eta?Math.ceil((eta-today)/(1000*60*60*24)):null;
      const etaColor=daysLeft===null?"#666":daysLeft<0?"#C0392B":daysLeft<=7?"#E67E22":"#27AE60";
      return `<div class="cont-card">
        <div class="cont-number">
          <span>📦 ${c.number}</span>
          ${daysLeft!==null?`<span style="font-size:13px;color:${etaColor};font-weight:700;">${daysLeft<0?"Overdue":daysLeft===0?"Today":daysLeft+" days"}</span>`:""}
        </div>
        <div class="cont-dates">
          <div class="cont-date-box"><div class="cont-date-lbl">Loading</div><div class="cont-date-val">${formatDate(c.loadingDate)}</div></div>
          <div class="cont-date-box"><div class="cont-date-lbl">ETA</div><div class="cont-date-val">${formatDate(c.arrivalDate)}</div></div>
        </div>
        <div class="cont-items">${items.length?items.map(i=>`<div style="display:flex;justify-content:space-between;font-size:12px;padding:2px 0;"><span>${i.name}</span><span style="font-weight:600;color:#8B6914;">+${i.qty}</span></div>`).join(""):`<span style="color:#AAA;font-size:12px;">No items listed</span>`}</div>
        <div class="cont-footer">
          <span class="badge b-blue">${totalPcs} pcs · ${items.length} types</span>
          ${isAdmin?`<button class="btn btn-dark btn-sm" style="margin-left:auto;" onclick="openArrive(${c.id})">✓ Arrived</button>`:'<span style="margin-left:auto;font-size:12px;color:#AAA;">Admin approval required</span>'}
          ${isAdmin?`<button class="btn btn-outline btn-sm" onclick="openContForm(${c.id})">✎</button>`:""}
        </div>
      </div>`;
    }).join("");
  }

  const as=document.getElementById("arrivedSection");
  if(!arrived.length){ as.innerHTML=""; return; }
  as.innerHTML=`<div style="margin-top:28px;"><div class="section-title"><span>✅</span> Received Containers</div>
    <div class="cont-grid">${arrived.map(c=>{
      const items=getContItems(c.number);
      return `<div class="cont-card arrived">
        <div class="cont-number"><span>✅ ${c.number}</span><span class="badge b-ok">Received</span></div>
        <div class="cont-dates">
          <div class="cont-date-box"><div class="cont-date-lbl">Loading</div><div class="cont-date-val">${formatDate(c.loadingDate)}</div></div>
          <div class="cont-date-box"><div class="cont-date-lbl">Arrival</div><div class="cont-date-val">${formatDate(c.arrivalDate)}</div></div>
        </div>
        <div class="cont-items">${items.length?items.slice(0,5).map(i=>`<div style="font-size:12px;color:#888;">${i.name} (+${i.qty})</div>`).join("")+( items.length>5?`<div style="font-size:11px;color:#AAA;">+${items.length-5} more items..."</div>`:""):`<span style="color:#AAA;font-size:12px;">—</span>`}</div>
      </div>`;
    }).join("")}</div></div>`;
}

function getContItems(contNumber){
  const items=[];
  products.forEach(p=>{
    const q=(p.containerQtys||{})[contNumber];
    if(q&&q>0) items.push({name:p.name,qty:q,id:p.id});
  });
  return items;
}

function formatDate(d){
  if(!d) return "—";
  try{ return new Date(d).toLocaleDateString("tr-TR",{day:"2-digit",month:"short",year:"numeric"}); }
  catch(e){ return d; }
}

// ── ARRIVE ────────────────────────────────────────
function openArrive(id){
  arriveContId=id;
  const c=containers.find(x=>x.id===id);
  document.getElementById("arriveName").textContent=c.number;
  const items=getContItems(c.number);
  document.getElementById("arriveItemList").innerHTML=items.length?
    items.map(i=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #F0ECE4;font-size:13px;"><span>${i.name}</span><span style="font-weight:700;color:#27AE60;">+${i.qty} adet</span></div>`).join(""):
    '<p style="color:#AAA;font-size:13px;">No products listed for this container.</p>';
  document.getElementById("arriveOverlay").style.display="flex";
}
function closeArrive(){ document.getElementById("arriveOverlay").style.display="none"; }
function confirmArrive(){
  const c=containers.find(x=>x.id===arriveContId);
  const items=getContItems(c.number);
  // Add stock
  items.forEach(item=>{
    products=products.map(p=>{
      if(p.id!==item.id) return p;
      const newQty=p.qty+item.qty;
      const newCQ={...p.containerQtys};
      delete newCQ[c.number];
      return {...p,qty:newQty,containerQtys:newCQ};
    });
  });
  // Mark arrived
  containers=containers.map(x=>x.id===arriveContId?{...x,arrived:true}:x);
  addHist("arrive", c.number+" konteyneri", items.reduce(function(s,i){return s+i.qty;},0), items.length+" product types added to stock");
  saveP(); saveC(); closeArrive(); renderAll();
  toast(c.number+" received! "+items.length+" products added to stock ✓","blue");
}

// ── CONT FORM ─────────────────────────────────────
// Temporary items being edited: {productId: qty}
let cfItems = {};

function openContForm(id){
  editContId=id;
  cfItems={};
  document.getElementById("contFormTitle").textContent=id?"Edit Container":"Add New Container";
  if(id){
    const c=containers.find(x=>x.id===id);
    document.getElementById("cfNum").value=c.number;
    document.getElementById("cfLoad").value=c.loadingDate;
    document.getElementById("cfEta").value=c.arrivalDate;
    // Load existing product quantities from this container
    products.forEach(function(p){
      var q=(p.containerQtys||{})[c.number];
      if(q&&q>0) cfItems[p.id]=q;
    });
  } else {
    document.getElementById("cfNum").value="";
    document.getElementById("cfLoad").value="";
    document.getElementById("cfEta").value="";
  }
  // Populate product dropdown
  var sel=document.getElementById("cfProdSel");
  sel.innerHTML='<option value="">-- Select a product --</option>';
  var sorted=[].concat(products).sort(function(a,b){return a.name.localeCompare(b.name,"tr");});
  sorted.forEach(function(p){
    var o=document.createElement("option");
    o.value=p.id; o.textContent=p.name+" (Warehouse: "+p.qty+")";
    sel.appendChild(o);
  });
  document.getElementById("cfProdQty").value="";
  renderCfItems();
  showPage("contform");
}

function renderCfItems(){
  var el=document.getElementById("cfItemList");
  var keys=Object.keys(cfItems);
  if(!keys.length){
    el.innerHTML='<div style="padding:12px;text-align:center;color:#AAA;font-size:13px;background:#F8F5EF;border-radius:8px;">No products added yet</div>';
    return;
  }
  // Build using DOM to avoid quote escaping issues
  el.innerHTML="";
  keys.forEach(function(pid){
    var p=products.find(function(x){return x.id==pid;});
    if(!p) return;
    var row=document.createElement("div");
    row.style.cssText="display:flex;align-items:center;gap:10px;padding:9px 12px;background:#F8F5EF;border-radius:8px;margin-bottom:8px;";
    
    var info=document.createElement("div");
    info.style.flex="1";
    info.innerHTML='<div style="font-weight:600;font-size:13px;">'+p.name+'</div><div style="font-size:11px;color:#888;">'+p.category+'</div>';
    
    var ctrl=document.createElement("div");
    ctrl.style.cssText="display:flex;align-items:center;gap:6px;";
    
    var btnDec=document.createElement("button");
    btnDec.textContent="−"; btnDec.style.cssText="width:28px;height:28px;border-radius:6px;border:1.5px solid #DDD;background:white;cursor:pointer;font-size:16px;";
    btnDec.onclick=(function(id){return function(){cfDecQty(id);};})(pid);
    
    var qtySpan=document.createElement("span");
    qtySpan.textContent=cfItems[pid]; qtySpan.style.cssText="font-weight:700;font-size:15px;min-width:28px;text-align:center;";
    
    var btnInc=document.createElement("button");
    btnInc.textContent="+"; btnInc.style.cssText="width:28px;height:28px;border-radius:6px;border:1.5px solid #DDD;background:white;cursor:pointer;font-size:16px;";
    btnInc.onclick=(function(id){return function(){cfIncQty(id);};})(pid);
    
    var btnRem=document.createElement("button");
    btnRem.textContent="✕"; btnRem.style.cssText="width:28px;height:28px;border-radius:6px;border:none;background:#FDECEA;color:#C0392B;cursor:pointer;font-size:14px;margin-left:4px;";
    btnRem.onclick=(function(id){return function(){cfRemItem(id);};})(pid);
    
    ctrl.appendChild(btnDec); ctrl.appendChild(qtySpan); ctrl.appendChild(btnInc); ctrl.appendChild(btnRem);
    row.appendChild(info); row.appendChild(ctrl);
    el.appendChild(row);
  });
}


function cfAddItem(){
  var sel=document.getElementById("cfProdSel");
  var pid=parseInt(sel.value);
  var qty=parseInt(document.getElementById("cfProdQty").value)||1;
  if(!pid){ alert("Please select a product."); return; }
  if(qty<1){ alert("Quantity must be at least 1."); return; }
  cfItems[pid]=(cfItems[pid]||0)+qty;
  document.getElementById("cfProdSel").value="";
  document.getElementById("cfProdQty").value="";
  renderCfItems();
}

function cfIncQty(pid){ cfItems[pid]=(cfItems[pid]||1)+1; renderCfItems(); }
function cfDecQty(pid){ if(cfItems[pid]>1){ cfItems[pid]--; } else { delete cfItems[pid]; } renderCfItems(); }
function cfRemItem(pid){ delete cfItems[pid]; renderCfItems(); }

function saveCont(){
  var num=document.getElementById("cfNum").value.trim();
  if(!num){ alert("Container number is required."); return; }
  var loadDate=document.getElementById("cfLoad").value;
  var etaDate=document.getElementById("cfEta").value;

  if(editContId){
    var oldNum=containers.find(function(c){return c.id===editContId;}).number;
    containers=containers.map(function(c){
      return c.id===editContId?{...c,number:num,loadingDate:loadDate,arrivalDate:etaDate}:c;
    });
    // Update containerQtys in products: rename old key to new key, set new quantities
    products=products.map(function(p){
      var newCQ=Object.assign({},p.containerQtys||{});
      // Remove old container name
      if(oldNum!==num){ delete newCQ[oldNum]; }
      // Set new quantities
      if(cfItems[p.id]){ newCQ[num]=cfItems[p.id]; }
      else { delete newCQ[num]; }
      return Object.assign({},p,{containerQtys:newCQ});
    });
    toast("Container updated ✓");
  } else {
    var newId=Date.now();
    containers.push({id:newId,number:num,loadingDate:loadDate,arrivalDate:etaDate,arrived:false});
    // Set quantities in products
    products=products.map(function(p){
      var newCQ=Object.assign({},p.containerQtys||{});
      if(cfItems[p.id]){ newCQ[num]=cfItems[p.id]; }
      return Object.assign({},p,{containerQtys:newCQ});
    });
    toast("Container added ✓");
  }
  saveP(); saveC(); cfItems={}; editContId=null; showPage("containers");
}

// ── PRODUCT FORM ──────────────────────────────────
function openForm(id){
  editId=id;
  document.getElementById("formTitle").textContent=id?"Edit Product":"Add New Product";
  if(id){
    const p=products.find(x=>x.id===id);
    document.getElementById("fName").value=p.name;
    document.getElementById("fSku").value=p.sku;
    document.getElementById("fCatF").value=p.category;
    document.getElementById("fQty").value=p.qty;
    document.getElementById("fMin").value=p.minQty;
    document.getElementById("fPrice").value=p.price;
    document.getElementById("fLoc").value=p.location||"";
    document.getElementById("fNote").value=p.note||"";
  } else {
    ["fName","fSku","fQty","fMin","fPrice","fLoc","fNote"].forEach(f=>document.getElementById(f).value="");
    document.getElementById("fCatF").value=CATEGORIES[0];
  }
  showPage("form");
}
function saveProduct(){
  const name=document.getElementById("fName").value.trim();
  const sku=document.getElementById("fSku").value.trim();
  if(!name){ alert("Product name is required."); return; }
  const d={name,sku:sku||name.slice(0,10).toUpperCase().replace(/ /g,"-"),category:document.getElementById("fCatF").value,qty:parseInt(document.getElementById("fQty").value)||0,minQty:parseInt(document.getElementById("fMin").value)||3,price:parseFloat(document.getElementById("fPrice").value)||0,location:document.getElementById("fLoc").value.trim(),note:document.getElementById("fNote").value.trim()};
  if(editId){ products=products.map(p=>p.id===editId?{...p,...d}:p); toast("Product updated ✓"); }
  else { products.push({...d,id:Date.now(),containerQtys:{}}); toast("Product added ✓"); }
  saveP(); editId=null; showPage("list"); renderAlerts();
}

// ── ADJUST ────────────────────────────────────────
function openAdj(id){
  adjId=id; adjType="add";
  const p=products.find(x=>x.id===id);
  document.getElementById("adjProdName").innerHTML=`${p.name} &nbsp;·&nbsp; Current: <strong>${p.qty} units</strong>`;
  document.getElementById("adjQty").value="";
  setAdjType("add");
  document.getElementById("adjOverlay").style.display="flex";
}
function closeAdj(){ document.getElementById("adjOverlay").style.display="none"; }
function setAdjType(t){
  adjType=t;
  document.getElementById("adjBtnAdd").style.cssText=`flex:1;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;font-family:inherit;font-size:14px;background:${t==="add"?"#E8F8EF":"white"};border:2px solid ${t==="add"?"#27AE60":"#DDD"};color:${t==="add"?"#27AE60":"#555"};`;
  document.getElementById("adjBtnSub").style.cssText=`flex:1;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;font-family:inherit;font-size:14px;background:${t==="sub"?"#FDECEA":"white"};border:2px solid ${t==="sub"?"#C0392B":"#DDD"};color:${t==="sub"?"#C0392B":"#555"};`;
}
function confirmAdj(){
  const n=parseInt(document.getElementById("adjQty").value);
  if(!n||n<=0) return;
  products=products.map(p=>p.id!==adjId?p:{...p,qty:adjType==="add"?p.qty+n:Math.max(0,p.qty-n)});
  var p2=products.find(function(x){return x.id===adjId;});
  addHist(adjType==="add"?"add":"sub", p2?p2.name:"?", n, adjType==="add"?"Stock added":"Stock reduced");
  saveP(); closeAdj(); renderAll(); toast("Stock updated ✓");
}

// ── DELETE ────────────────────────────────────────
function openDel(id){ delId=id; const p=products.find(x=>x.id===id); document.getElementById("delProdName").innerHTML=`<strong>"${p.name}"</strong> will be permanently deleted.`; document.getElementById("delOverlay").style.display="flex"; }
function closeDel(){ document.getElementById("delOverlay").style.display="none"; }
function confirmDel(){ products=products.filter(p=>p.id!==delId); saveP(); closeDel(); renderAll(); toast("Product deleted","warn"); }

// ── PIN ───────────────────────────────────────────
function pp(n){
  if(pinBuf.length>=4) return;
  pinBuf+=n; upd();
  if(pinBuf.length===4){
    setTimeout(()=>{
      if(pinBuf===ADMIN_PIN){ isAdmin=true; pinBuf=""; upd(); document.getElementById("pinErr").style.display="none"; showPage("dashboard"); renderNav(); renderAll(); toast("Admin login successful ✓"); }
      else { document.getElementById("pinErr").style.display="block"; pinBuf=""; upd(); }
    },200);
  }
}
function pb(){ pinBuf=pinBuf.slice(0,-1); upd(); document.getElementById("pinErr").style.display="none"; }
function upd(){ for(let i=0;i<4;i++) document.getElementById("d"+i).classList.toggle("filled",i<pinBuf.length); }

// ── EXPORT ───────────────────────────────────────
function exportQB(){
  const hdr=["Item Name","Item Type","Description","Sales Price","Purchase Cost","Qty On Hand","Reorder Point","Location","Category","SKU","Status"];
  const rows=products.map(function(p){
    var name = p.name.replace(/"/g,"'");
    var note = (p.note||p.name).replace(/"/g,"'");
    var loc = (p.location||"").replace(/"/g,"'");
    return [
      '"'+name+'"',
      "Inventory Part",
      '"'+note+'"',
      (p.price||0),
      (p.price||0),
      p.qty,
      p.minQty,
      '"'+loc+'"',
      '"'+p.category+'"',
      '"'+p.sku+'"',
      '"'+(p.note||"")+'"'
    ].join(",");
  });
  var csv = [hdr.join(",")].concat(rows).join("\n");
  var blob = new Blob(["\uFEFF"+csv], {type:"text/csv;charset=utf-8;"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href=url;
  a.download="furco_inventory_"+new Date().toISOString().slice(0,10)+".csv";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("QuickBooks CSV downloaded ✓");
}

// ── HISTORY ──────────────────────────────────────
function renderHistory(){
  var el=document.getElementById("historyList");
  var h=loadHist();
  if(!h.length){
    el.innerHTML='<div style="padding:30px;text-align:center;color:#AAA;">No activity recorded yet.</div>';
    return;
  }
  var typeMap={add:{label:"Stock Added",cls:"hist-add"},sub:{label:"Stock Out",cls:"hist-sub"},edit:{label:"Edited",cls:"hist-edit"},arrive:{label:"Container Arrived",cls:"hist-arrive"},out:{label:"Sales/Out",cls:"hist-sub"}};
  el.innerHTML=h.map(function(r){
    var t=typeMap[r.type]||{label:r.type,cls:"hist-edit"};
    var d=new Date(r.date);
    var ds=d.toLocaleDateString("tr-TR")+' '+d.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});
    return '<div class="hist-row">'+
      '<div class="hist-dot '+t.cls+'"></div>'+
      '<div style="flex:1;">'+
        '<div style="font-size:13px;font-weight:600;">'+r.prodName+'</div>'+
        '<div style="font-size:12px;color:#888;margin-top:2px;">'+
          '<span style="color:'+(r.type==="sub"||r.type==="out"?"#C0392B":"#27AE60")+';font-weight:600;">'+t.label+(r.qty?(r.type==="sub"||r.type==="out"?" −":" +")+r.qty+" adet":"")+'</span>'+
          (r.note?' &nbsp;·&nbsp; '+r.note:'')+
        '</div>'+
      '</div>'+
      '<div style="font-size:11px;color:#AAA;text-align:right;white-space:nowrap;">'+r.user+'<br>'+ds+'</div>'+
    '</div>';
  }).join("");
}
function clearHistory(){ if(confirm("Clear all activity history? This cannot be undone.")){ saveHist([]); renderHistory(); toast("History cleared","warn"); } }

// ── TOGGLE HIDDEN ────────────────────────────────
function toggleHidden(id){
  products = products.map(function(p){
    if(p.id !== id) return p;
    var nowHidden = !p.hidden;
    toast(nowHidden ? "Hidden from customers 🙈" : "Visible to customers 👁", nowHidden ? "warn" : "ok");
    return Object.assign({}, p, {hidden: nowHidden});
  });
  saveP(); renderList();
}

// ── QUICK OUT ─────────────────────────────────────
function openQuickOut(id){
  quickOutId=id;
  var p=products.find(function(x){return x.id===id;});
  document.getElementById("quickOutName").innerHTML=p.name+' &nbsp;·&nbsp; Current: <strong>'+p.qty+' units</strong>';
  document.getElementById("quickOutQty").value="";
  document.getElementById("quickOutNote").value="";
  document.getElementById("quickOutOverlay").style.display="flex";
}
function closeQuickOut(){ document.getElementById("quickOutOverlay").style.display="none"; }
function confirmQuickOut(){
  var n=parseInt(document.getElementById("quickOutQty").value);
  var note=document.getElementById("quickOutNote").value.trim();
  if(!n||n<=0) return;
  var p=products.find(function(x){return x.id===quickOutId;});
  var newQty=Math.max(0,p.qty-n);
  products=products.map(function(x){return x.id===quickOutId?Object.assign({},x,{qty:newQty}):x;});
  addHist("out", p.name, n, note||"Stock out");
  saveP(); closeQuickOut(); renderAll(); toast("Stock out: −"+n+" units","warn");
}

// ── TOAST ─────────────────────────────────────────
let tTimer=null;
function toast(msg,type="ok"){
  const el=document.getElementById("toastEl");
  el.textContent=msg; el.className=`toast t-${type}`; el.style.display="block";
  if(tTimer) clearTimeout(tTimer);
  tTimer=setTimeout(()=>el.style.display="none",3500);
}

// ── INIT ──────────────────────────────────────────
(function(){
  // Populate category dropdowns
  ["fCat","fCatF"].forEach(function(id){
    var el = document.getElementById(id);
    if(!el) return;
    if(id==="fCat") el.innerHTML = '<option value="">All Categories</option>';
    else el.innerHTML = "";
    var catList = (id==="fCat" && !isAdmin) ? PUBLIC_CATEGORIES : CATEGORIES;
    catList.forEach(function(c){
      var o = document.createElement("option");
      o.value = c; o.textContent = c; el.appendChild(o);
    });
  });

  // Show loading overlay
  var overlay = document.getElementById("loadingOverlay");
  if(overlay) overlay.style.display = "flex";

  renderNav();
  showPage("list");

  // ── Firebase real-time listener: PRODUCTS ──
  PROD_DOC.onSnapshot(function(doc){
    if(doc.exists && doc.data() && doc.data().data){
      try {
        products = JSON.parse(doc.data().data);
      } catch(e){ console.error("products parse error", e); }
    } else {
      // First run — seed Firestore with INIT_PRODUCTS
      PROD_DOC.set({data: JSON.stringify(products)});
    }
    renderAll();
    if(overlay) overlay.style.display = "none";
  }, function(err){
    console.error("Firestore products error:", err);
    if(overlay) overlay.style.display = "none";
    renderAll();
  });

  // ── Firebase real-time listener: CONTAINERS ──
  CONT_DOC.onSnapshot(function(doc){
    if(doc.exists && doc.data() && doc.data().data){
      try { containers = JSON.parse(doc.data().data); } catch(e){}
    } else {
      CONT_DOC.set({data: JSON.stringify(containers)});
    }
    renderConts();
    if(typeof renderDash === "function") renderDash();
  }, function(err){ console.error("Firestore containers error:", err); });

})();
