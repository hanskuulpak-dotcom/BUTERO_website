import { Partner, PartnerLogo, ProductFeature, ProductVariant, Location } from './types';

export const NAV_LINKS = [
  { name: 'Avaleht', href: '#hero' },
  { name: 'Toode', href: '#product' },
  { name: 'Toote valik', href: '#product-selection' },
  { name: 'Meie lugu', href: '#story' },
  { name: 'Müügikohad', href: '#locations' },
  { name: 'Kontakt', href: '#contact' },
];

export const FEATURES: ProductFeature[] = [
  {
    title: '100% Eesti Koorevõi',
    description: 'Valmistatud puhtast, kvaliteetsest ja rasvasest Eesti rõõsast koorest.',
    icon: 'droplet'
  },
  {
    title: 'Käsitööna Valminud',
    description: 'Iga võipakk on valminud meistrite hoolika pilgu ja käte all.',
    icon: 'hand'
  },
  {
    title: 'Ei Mingeid Lisaaineid',
    description: 'Puhas maitse ilma säilitus-, värvi- ja maitseaineteta. Ainult loodus.',
    icon: 'leaf'
  }
];

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'plain',
    name: 'Maitsestamata',
    image: 'https://www.upload.ee/image/19023333/Butero_maitsestamata.png', 
    description: 'Klassikaline ja puhas.'
  },
  {
    id: 'garlic',
    name: 'Küüslauguga',
    image: 'https://www.upload.ee/image/19026457/Butero_kuuslauk.png',
    description: 'Aromaatne ja särtsakas.'
  },
  {
    id: 'chili',
    name: 'Tšilliga',
    image: 'https://www.upload.ee/image/19026488/Butero_tsilliga.png',
    description: 'Mõnusalt vürtsikas.'
  },
  {
    id: 'seasalt',
    name: 'Meresoolaga',
    image: 'https://www.upload.ee/image/19026490/Butero_meresool.png',
    description: 'Krõmpsuva soolaga.'
  },
  {
    id: 'dill',
    name: 'Tilliga',
    image: 'https://www.upload.ee/image/19026491/Butero_tilliga.png',
    description: 'Suviselt värske.'
  }
];

export const LOCATIONS: Location[] = [
  // MUHU PAGARID
  {
    id: 101,
    name: "Muhu Pagarid (Liiva)",
    city: "Muhu",
    address: "Liiva küla, Muhu saar",
    group: "Saaremaa",
    link: "https://muhuleib.ee",
    googleMapsLink: "https://maps.app.goo.gl/FdvY4iaowqJu1oam7",
    lat: 58.6053,
    lng: 23.2356
  },
  {
    id: 102,
    name: "Muhu Pagarid (Tartu Lõunakeskus)",
    city: "Tartu",
    address: "Lääneringtee 39",
    group: "Tartu",
    link: "https://muhuleib.ee",
    googleMapsLink: "https://maps.app.goo.gl/j9eXafMJsAHSQR1x8",
    lat: 58.3575,
    lng: 26.6806
  },
  // TALUTURG
  {
    id: 201,
    name: "Taluturg (Tartu Lõunakeskus)",
    city: "Tartu",
    address: "Lääneringtee 39",
    group: "Tartu",
    link: "https://taluturg.ee",
    googleMapsLink: "https://maps.app.goo.gl/QJGZCwUtEabNm24r9",
    lat: 58.3575,
    lng: 26.6806
  },
  {
    id: 202,
    name: "Taluturg (Pärnu Keskus)",
    city: "Pärnu",
    address: "Aida 7",
    group: "Pärnu",
    link: "https://taluturg.ee",
    googleMapsLink: "https://maps.app.goo.gl/pozNVLNorN2gpFGr9",
    lat: 58.3852,
    lng: 24.5028
  },
  {
    id: 203,
    name: "Taluturg (Solaris)",
    city: "Tallinn",
    address: "Estonia pst 9",
    group: "Tallinn",
    link: "https://taluturg.ee",
    googleMapsLink: "https://maps.app.goo.gl/WRKfohpE28WmW9kw8",
    lat: 59.4330,
    lng: 24.7520
  },
  // KAUBAMAJA
  {
    id: 301,
    name: "Kaubamaja Toidumaailm",
    city: "Tallinn",
    address: "Gonsiori 2",
    group: "Tallinn",
    link: "https://www.kaubamaja.ee",
    googleMapsLink: "https://maps.app.goo.gl/jhknL5ZPL1pMub1K8",
    lat: 59.4349,
    lng: 24.7576
  },
  {
    id: 302,
    name: "Tartu Kaubamaja Toidumaailm",
    city: "Tartu",
    address: "Riia 1",
    group: "Tartu",
    link: "https://tartukaubamaja.ee",
    googleMapsLink: "https://maps.app.goo.gl/6hmXXPKRdy3vHnoS8",
    lat: 58.3776,
    lng: 26.7290
  },
  // BUXHÖWDEN
  {
    id: 401,
    name: "Buxhöwden Pagar (Nõmme Turg)",
    city: "Tallinn",
    address: "Turu plats 5",
    group: "Tallinn",
    link: "https://buxhowden.ee",
    googleMapsLink: "https://maps.app.goo.gl/R2cz7vu13XZ5rZyY9",
    lat: 59.3875,
    lng: 24.6853
  },
  {
    id: 402,
    name: "Buxhöwden Pagar (Saue)",
    city: "Saue",
    address: "Pärnasalu 19",
    group: "Harjumaa",
    link: "https://buxhowden.ee",
    googleMapsLink: "https://maps.app.goo.gl/kRbMrVAnNGFgy2BU9",
    lat: 59.3204,
    lng: 24.5555
  },
  {
    id: 403,
    name: "Buxhöwden Pagar (Viimsi)",
    city: "Viimsi",
    address: "Randvere tee 6",
    group: "Harjumaa",
    link: "https://buxhowden.ee",
    googleMapsLink: "https://maps.app.goo.gl/HHW5HXv3FmABjf6V6",
    lat: 59.5036,
    lng: 24.8315
  },
  // NOP
  {
    id: 501,
    name: "Kohvik NOP",
    city: "Tallinn",
    address: "J. Köleri 1",
    group: "Tallinn",
    link: "https://nop.ee",
    googleMapsLink: "https://maps.app.goo.gl/TPto9cm5hV4WC6er6",
    lat: 59.4373,
    lng: 24.7788
  },
  // HANSA GURMEE
  {
    id: 601,
    name: "Hansa Gurmee",
    city: "Tabasalu",
    address: "Klooga mnt 10b",
    group: "Harjumaa",
    link: "#",
    googleMapsLink: "https://maps.app.goo.gl/MMdQY38SxhPjDHEN6",
    lat: 59.4286,
    lng: 24.5458
  },
  // VIIMSI LIHAPOOD
  {
    id: 701,
    name: "Viimsi Lihapood",
    city: "Viimsi",
    address: "Randvere tee 6",
    group: "Harjumaa",
    link: "#",
    googleMapsLink: "https://maps.app.goo.gl/MdFMA9qcQrR6TEMA7",
    lat: 59.5015,
    lng: 24.8340
  },
  // SÖÖ JA SÄRA
  {
    id: 801,
    name: "Söö ja Sära",
    city: "Tallinn",
    address: "Turu plats 5",
    group: "Tallinn",
    link: "#",
    googleMapsLink: "https://maps.app.goo.gl/R2cz7vu13XZ5rZyY9",
    lat: 59.3875,
    lng: 24.6853
  },
  // STOCKMANN
  {
    id: 901,
    name: "Stockmann Delikatess",
    city: "Tallinn",
    address: "Liivalaia 53",
    group: "Tallinn",
    link: "https://www.stockmann.ee",
    googleMapsLink: "https://maps.app.goo.gl/gWmvcCkV181tdXED8",
    lat: 59.4304,
    lng: 24.7587
  },
  // LENNUJAAM
  {
    id: 1001,
    name: "Tallinna Lennujaam (Hää Eesti Asi)",
    city: "Tallinn",
    address: "Tartu mnt 101",
    group: "Tallinn",
    link: "https://tallinn-airport.ee",
    googleMapsLink: "https://maps.app.goo.gl/dJyVSZmZMwBJXx9PA",
    lat: 59.4164,
    lng: 24.7986
  },
  // SELVER
  {
    id: 1101,
    name: "Pirita Selver",
    city: "Tallinn",
    address: "Rummu tee 4",
    group: "Tallinn",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/iMZWNGTYmukf1mzR7",
    lat: 59.4627,
    lng: 24.8258
  },
  {
    id: 1102,
    name: "Viimsi Selver",
    city: "Viimsi",
    address: "Sõpruse tee 15",
    group: "Harjumaa",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/cUv8ePChJm9nuqJJA",
    lat: 59.5012,
    lng: 24.8236
  },
  {
    id: 1103,
    name: "Mustakivi Selver",
    city: "Tallinn",
    address: "Mustakivi tee 3a",
    group: "Tallinn",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/i2yfp8hndaWy6evc8",
    lat: 59.4353,
    lng: 24.8579
  },
  {
    id: 1104,
    name: "Torupilli Selver",
    city: "Tallinn",
    address: "Vesivärava 37",
    group: "Tallinn",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/qg536NExbRkZ2yrH9",
    lat: 59.4278,
    lng: 24.7770
  },
  {
    id: 1105,
    name: "Peetri Selver",
    city: "Peetri",
    address: "Veesaare tee 2",
    group: "Harjumaa",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/it9Hmhydjh2kGNjNA",
    lat: 59.4005,
    lng: 24.8093
  },
  {
    id: 1106,
    name: "Järve Selver",
    city: "Tallinn",
    address: "Pärnu mnt 238",
    group: "Tallinn",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/6HiC1u5rSHk9nUm26",
    lat: 59.3934,
    lng: 24.7176
  },
  {
    id: 1107,
    name: "Kadaka Selver",
    city: "Tallinn",
    address: "Kadaka tee 56a",
    group: "Tallinn",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/FVCRmjsGYL4hVFHE6",
    lat: 59.4087,
    lng: 24.6601
  },
  {
    id: 1108,
    name: "Keila Selver",
    city: "Keila",
    address: "Piiri 12",
    group: "Harjumaa",
    link: "https://www.selver.ee",
    googleMapsLink: "https://maps.app.goo.gl/NNUd1qoZ33Thju4e7",
    lat: 59.3087,
    lng: 24.4284
  },
  // DELICE
  {
    id: 1201,
    name: "Viimsi Delice",
    city: "Viimsi",
    address: "Randvere tee 6",
    group: "Harjumaa",
    link: "https://www.delice.ee",
    googleMapsLink: "https://maps.app.goo.gl/tL8znhwRgr2vQjcUA",
    lat: 59.5036,
    lng: 24.8315
  },
  {
    id: 1202,
    name: "Solaris Delice",
    city: "Tallinn",
    address: "Estonia pst 9",
    group: "Tallinn",
    link: "https://www.delice.ee",
    googleMapsLink: "https://maps.app.goo.gl/kS6R7P6rndmRoTsY9",
    lat: 59.4330,
    lng: 24.7520
  }
];

export const PARTNERS: Partner[] = [
  { id: 1, name: 'Eesti Taluliit', logoText: 'Taluliit' },
  { id: 2, name: 'Organic Estonia', logoText: 'Organic' },
  { id: 3, name: 'Umami', logoText: 'Umami' },
  { id: 4, name: 'Visit Estonia', logoText: 'VisitEST' },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  // Left Cluster - Major Retailers & Brands
  { id: 1, name: "Selver", placeholder: "S", link: "https://www.selver.ee", image: "https://www.upload.ee/image/19040703/selver-logo.png" },
  { id: 2, name: "Kaubamaja", placeholder: "K", link: "https://www.kaubamaja.ee", image: "https://www.upload.ee/image/19040710/Kaubamaja_logo.jpg" },
  { id: 3, name: "Stockmann", placeholder: "ST", link: "https://www.stockmann.ee", image: "https://www.upload.ee/image/19040718/Stockmann-Logo.png" },
  { id: 4, name: "Delice", placeholder: "D", link: "https://www.delice.ee", image: "https://www.upload.ee/image/19040780/Delice_logo.png" },
  { id: 5, name: "Prisma", placeholder: "P", link: "https://www.prismamarket.ee", image: "https://www.upload.ee/image/19040733/Prisma_logo.jpg" },
  { id: 6, name: "Hää Eesti Asi", placeholder: "HEA", link: "https://tallinn-airport.ee", image: "https://www.upload.ee/image/19082152/HAA_EESTI_ASI_LOGO.png" },
  { id: 7, name: "Buxhöwden", placeholder: "BP", link: "https://buxhowden.ee", image: "https://www.upload.ee/image/19082144/BUXHOWDEN_logo.jfif" },

  // Right Cluster - Artisan & Specialty Shops
  { id: 8, name: "Muhu Pagarid", placeholder: "MP", link: "https://muhuleib.ee", image: "https://www.upload.ee/image/19082156/MuhuPagarid_logo.png" },
  { id: 9, name: "NOP", placeholder: "N", link: "https://nop.ee", image: "https://www.upload.ee/image/19040744/NOPiLogo.jpg" },
  { id: 10, name: "Hansa Gurmee", placeholder: "HG", link: "#", image: "https://www.upload.ee/image/19040770/hansagurmee_logo.jpeg" },
  { id: 11, name: "Söö ja Sära", placeholder: "SS", link: "#", image: "https://www.upload.ee/image/19040826/soo_sara_logo.jfif" },
  { id: 12, name: "Taluturg", placeholder: "TT", link: "https://taluturg.ee", image: "https://www.upload.ee/image/19082164/Taluturg_logo.jfif" },
  { id: 13, name: "Viimsi Lihapood", placeholder: "VL", link: "#", image: "https://www.upload.ee/image/19082168/Lihapood_logo.png" },
  { id: 14, name: "Pärnu Turg", placeholder: "PT", link: "#", image: "" },
];