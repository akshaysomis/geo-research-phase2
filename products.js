// ═══════════════════════════════════════════════════════════════════════
// MASTER PRODUCT DATASET & REFERENCE DATA — IFN736 Group 22 GEO Research
// ═══════════════════════════════════════════════════════════════════════
// 30 products from Master_Product_Dataset.xlsx. This file is a REFERENCE
// dataset — the 9 test site HTML files are fully static and do not load
// this file at runtime (see build.js for how they're generated from it).
//
// fcSegment — added 2026-08-18, grounds each product against Flight Centre's
// own customer persona book (4 macro segments: Modern Family, Escape
// Artists, Maverick, Flock of Fun-Seekers), per INP-71/72/73. Mapping
// rule: derived from the existing 'suitable' field —
//   'Families'  -> Modern Family
//   'Couples'   -> Escape Artists
//   'Solo'      -> Maverick
//   'Group(s)'  -> Flock of Fun-Seekers
//   'Senior(s)' -> Escape Artists (age-inferred: FC's persona book has no
//                  dedicated Seniors segment, but Escape Artists' AU
//                  average age of 58 is the closest demographic match)
//
// KNOWN GAP (for INP-72 "document gaps"): 3 products have NO FC segment
// coverage at all, because FC's 4 macro personas don't include a Business
// Traveller or Spontaneous/Last-Minute segment:
//   FC013, FC014 — Business travellers (business class flights)
//   FC019        — Spontaneous travellers (last-minute deal)
// These are left as fcSegment:[] deliberately rather than force-mapped.
// ═══════════════════════════════════════════════════════════════════════

const PRODUCTS = [
  {id:'FC001',name:'Bali Bliss 5-Night Seminyak Package',cat:'Package',dest:'Bali, Indonesia',price:1499,unit:'per person twin share',duration:'5 nights',inclusions:'Return economy flights, 5-night 4★ Seminyak hotel, daily breakfast, airport transfers',suitable:'Couples, Families, Solo',fcSegment:['Modern Family', 'Escape Artists', 'Maverick'],depart:'All AUS',queries:['Q01'],rating:4.3,reviews:1842,badge:'Popular'},
  {id:'FC002',name:'Ubud Cultural Escape 7 Days',cat:'Package',dest:'Ubud, Bali',price:1899,unit:'per person twin share',duration:'7 nights',inclusions:'Return flights, 4★ Ubud villa, breakfast, half-day temple tour, rice terrace day trip',suitable:'Couples, Solo, Cultural',fcSegment:['Escape Artists', 'Maverick'],depart:'All AUS',queries:['Q01'],rating:4.6,reviews:923,badge:'Top Rated'},
  {id:'FC003',name:'Gold Coast Family Theme Park 5-Night Package',cat:'Package',dest:'Gold Coast, QLD',price:1289,unit:'per family of 4 total',duration:'5 nights',inclusions:'5-night apartment stay, 3-day Theme Park Pass (Movie World, Sea World, Wet\'n\'Wild), car hire',suitable:'Families',fcSegment:['Modern Family'],depart:'Brisbane',queries:['Q02', 'Q14'],rating:4.4,reviews:2341,badge:'Family Favourite'},
  {id:'FC004',name:'Cairns Reef + Rainforest Family 7 Days',cat:'Package',dest:'Cairns, QLD',price:2199,unit:'per adult, kids 50% off',duration:'7 nights',inclusions:'Return BNE-CNS flights, 4★ resort, Great Barrier Reef cruise, Skyrail Rainforest Cableway',suitable:'Families',fcSegment:['Modern Family'],depart:'Brisbane',queries:['Q02', 'Q14'],rating:4.7,reviews:1567,badge:'Award Winner'},
  {id:'FC005',name:'SYD-LHR Economy Saver Return',cat:'Flight',dest:'London, UK',price:1549,unit:'per person return',duration:'Flight only',inclusions:'Return economy SYD-LHR via Singapore, 23kg checked bag, multi-airline (SQ/QF/EK)',suitable:'Budget travellers, Solo',fcSegment:['Maverick'],depart:'Sydney',queries:['Q03', 'Q13'],rating:4.1,reviews:4210,badge:'Best Price'},
  {id:'FC006',name:'SYD-LON Stopover Singapore Deal',cat:'Flight',dest:'London via Singapore',price:1799,unit:'per person return',duration:'Flight + 2 nights Singapore',inclusions:'Return SYD-LHR, free 2-night Singapore stopover, 4★ Marina Bay hotel, breakfast',suitable:'Budget travellers, Couples',fcSegment:['Escape Artists'],depart:'Sydney',queries:['Q03'],rating:4.5,reviews:876,badge:'Value Pick'},
  {id:'FC007',name:'7-Night Western Mediterranean Luxury Cruise',cat:'Cruise',dest:'Mediterranean (Barcelona–Rome)',price:3499,unit:'per person twin share',duration:'7 nights',inclusions:'Royal Caribbean Symphony of the Seas, balcony stateroom, all meals, 5 ports',suitable:'Couples, Luxury, Honeymooners',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q04'],rating:4.8,reviews:3102,badge:'Luxury'},
  {id:'FC008',name:'12-Day Greek Isles Cruise + Athens',cat:'Cruise',dest:'Greek Islands',price:5299,unit:'per person twin share',duration:'12 nights',inclusions:'Celebrity Apex, ocean-view stateroom, all meals, beverage package, 8 ports incl Santorini & Mykonos',suitable:'Couples, Luxury, Honeymooners',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q04', 'Q06'],rating:4.9,reviews:1204,badge:'Premium'},
  {id:'FC009',name:'Melbourne→Phuket 5-Night Beach Escape',cat:'Package',dest:'Phuket, Thailand',price:1899,unit:'per person twin share',duration:'5 nights',inclusions:'Return MEL-HKT flights, 4★ Patong beachfront hotel, breakfast, airport transfers',suitable:'Budget travellers, Couples',fcSegment:['Escape Artists'],depart:'Melbourne',queries:['Q05'],rating:4.2,reviews:2876,badge:'Popular'},
  {id:'FC010',name:'Melbourne→Bangkok 4-Night City Break',cat:'Package',dest:'Bangkok, Thailand',price:1399,unit:'per person twin share',duration:'4 nights',inclusions:'Return MEL-BKK flights, 4★ Sukhumvit hotel, breakfast, river cruise dinner included',suitable:'Budget travellers, Solo',fcSegment:['Maverick'],depart:'Melbourne',queries:['Q05'],rating:4.4,reviews:1923,badge:'Great Value'},
  {id:'FC011',name:'Maldives Overwater Villa Honeymoon',cat:'Package',dest:'Maldives',price:6499,unit:'per couple total',duration:'7 nights',inclusions:'Return flights, 7-night overwater villa, all-inclusive meals + drinks, sunset cruise, couples spa',suitable:'Honeymooners, Luxury, Couples',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q06'],rating:4.9,reviews:687,badge:'Honeymoon Special'},
  {id:'FC012',name:'Bora Bora Romantic Escape',cat:'Package',dest:'Bora Bora, French Polynesia',price:7899,unit:'per couple total',duration:'8 nights',inclusions:'Return flights, 8-night overwater bungalow, breakfast, lagoon cruise, romantic dinner on motu',suitable:'Honeymooners, Luxury, Couples',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q06'],rating:4.8,reviews:412,badge:'Exclusive'},
  {id:'FC013',name:'SYD-SIN Business Class Return (Singapore Airlines)',cat:'Flight',dest:'Singapore',price:4299,unit:'per person return',duration:'Flight only',inclusions:'Singapore Airlines Business Class SYD-SIN return, lounge access, 40kg baggage, lie-flat seats',suitable:'Business travellers',fcSegment:[],depart:'Sydney',queries:['Q07'],rating:4.9,reviews:2341,badge:'Best Business'},
  {id:'FC014',name:'MEL-SIN Business Class Saver (Qantas)',cat:'Flight',dest:'Singapore',price:3799,unit:'per person return',duration:'Flight only',inclusions:'Qantas Business Class MEL-SIN return, lounge access, 40kg baggage, A330 fully-flat seats',suitable:'Business travellers',fcSegment:[],depart:'Melbourne',queries:['Q07'],rating:4.7,reviews:1876,badge:'Qantas'},
  {id:'FC015',name:'Denarau Island All-Inclusive 5 Nights',cat:'Package',dest:'Denarau, Fiji',price:2499,unit:'per person twin share',duration:'5 nights',inclusions:'Return flights, 5-night all-inclusive Sheraton Denarau, all meals + drinks, kids club, transfers',suitable:'Couples, Families',fcSegment:['Modern Family', 'Escape Artists'],depart:'All AUS',queries:['Q08'],rating:4.6,reviews:3421,badge:'All Inclusive'},
  {id:'FC016',name:'Mamanuca Islands All-Inclusive 7 Nights',cat:'Package',dest:'Mamanuca, Fiji',price:3199,unit:'per person twin share',duration:'7 nights',inclusions:'Return flights + boat transfer, 7-night all-inclusive Castaway Island Resort, all meals, snorkelling',suitable:'Couples, Families, Honeymooners',fcSegment:['Modern Family', 'Escape Artists'],depart:'All AUS',queries:['Q08'],rating:4.8,reviews:1243,badge:'Island Escape'},
  {id:'FC017',name:'Solo Traveller Japan 10-Day Small Group Tour',cat:'Tour',dest:'Japan (Tokyo–Kyoto–Osaka)',price:4899,unit:'per person, no single supplement',duration:'10 days',inclusions:'Return flights, 9 nights 4★ hotels (single occupancy, no supplement), JR Pass, daily breakfasts, English guide',suitable:'Solo travellers, Cultural',fcSegment:['Maverick'],depart:'All AUS',queries:['Q09'],rating:4.7,reviews:934,badge:'Solo Friendly'},
  {id:'FC018',name:'Tokyo + Kyoto Solo Explorer 7 Days',cat:'Tour',dest:'Tokyo & Kyoto',price:3299,unit:'per person, single room',duration:'7 nights',inclusions:'Return flights, 7-night 3★ hotels (single room), 7-day JR Pass, Mt Fuji day trip, food tour evening',suitable:'Solo travellers, Budget travellers',fcSegment:['Maverick'],depart:'All AUS',queries:['Q09'],rating:4.5,reviews:1102,badge:'Solo Pick'},
  {id:'FC019',name:'Last-Minute Bali 4-Night Deal',cat:'Package',dest:'Bali, Indonesia',price:1099,unit:'per person twin share',duration:'4 nights',inclusions:'Return SYD-DPS flights, 4-night 4★ Kuta hotel, breakfast, airport transfers — departures within 7 days',suitable:'Spontaneous travellers, Budget travellers',fcSegment:[],depart:'Sydney',queries:['Q10'],rating:4.2,reviews:567,badge:'Last Minute'},
  {id:'FC020',name:'SYD→Auckland Last-Minute Weekend Escape',cat:'Package',dest:'Auckland, NZ',price:899,unit:'per person twin share',duration:'3 nights',inclusions:'Return SYD-AKL flights, 3-night CBD hotel, breakfast — departures within 14 days',suitable:'Spontaneous travellers, Couples',fcSegment:['Escape Artists'],depart:'Sydney',queries:['Q10'],rating:4.3,reviews:789,badge:'Weekend Deal'},
  {id:'FC021',name:'Senior Vietnam Heritage Tour 12 Days',cat:'Tour',dest:'Vietnam (Hanoi–Halong–Hue–HCMC)',price:3899,unit:'per person twin share',duration:'12 days',inclusions:'Return flights, 11-night 4★ hotels, all internal transport, Halong Bay overnight cruise, fully escorted English guide',suitable:'Seniors, Cultural',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q11'],rating:4.8,reviews:1456,badge:'Senior Friendly'},
  {id:'FC022',name:'Italy & Spain Coach Tour for Seniors 14 Days',cat:'Tour',dest:'Italy & Spain',price:5499,unit:'per person twin share',duration:'14 days',inclusions:'Return flights, 13-night 4★ hotels, daily breakfast + 8 dinners, luxury coach, English-speaking tour director',suitable:'Seniors, Cultural',fcSegment:['Escape Artists'],depart:'All AUS',queries:['Q11', 'Q13'],rating:4.7,reviews:987,badge:'Coach Tour'},
  {id:'FC023',name:'Queenstown Adventure 5-Night Package',cat:'Package',dest:'Queenstown, NZ',price:2199,unit:'per person twin share',duration:'5 nights',inclusions:'Return flights to Queenstown, 5-night central hotel, AJ Hackett bungy jump, Shotover jet boat, 1-day ski pass Coronet Peak',suitable:'Adventure seekers, Solo, Couples',fcSegment:['Escape Artists', 'Maverick'],depart:'All AUS',queries:['Q12'],rating:4.8,reviews:2341,badge:'Adventure'},
  {id:'FC024',name:'South Island Self-Drive Adventure 10 Days',cat:'Package',dest:'NZ South Island',price:2899,unit:'per person twin share',duration:'10 days',inclusions:'Return flights, 10-day rental car, 9 nights mixed accommodation, Milford Sound cruise, Franz Josef glacier helihike',suitable:'Adventure seekers, Couples, Families',fcSegment:['Modern Family', 'Escape Artists'],depart:'All AUS',queries:['Q12'],rating:4.6,reviews:1678,badge:'Self-Drive'},
  {id:'FC025',name:'Best of Europe Coach Tour 14 Days',cat:'Tour',dest:'Europe (London–Paris–Rome)',price:3499,unit:'per person twin share',duration:'14 days',inclusions:'Return flights, 13-night 3★ hotels, luxury coach, daily breakfast + 6 dinners, 8 countries',suitable:'Budget travellers, Groups',fcSegment:['Flock of Fun-Seekers'],depart:'All AUS',queries:['Q13', 'Q15'],rating:4.4,reviews:3102,badge:'Great Value'},
  {id:'FC026',name:'London + Paris Budget Combo 8 Days',cat:'Package',dest:'London & Paris',price:2199,unit:'per person twin share',duration:'8 nights',inclusions:'Return flights, 4 nights London + 4 nights Paris (3★ hotels), Eurostar transfer, breakfast',suitable:'Budget travellers, Couples, Solo',fcSegment:['Escape Artists', 'Maverick'],depart:'All AUS',queries:['Q13'],rating:4.3,reviews:2145,badge:'Budget Pick'},
  {id:'FC027',name:'Whitsundays Sail & Stay 5 Nights',cat:'Package',dest:'Whitsundays, QLD',price:2299,unit:'per person twin share',duration:'5 nights',inclusions:'Return flights to Hamilton Island, 5-night beachfront resort, 2-day catamaran sailing trip Whitehaven Beach',suitable:'Beach lovers, Couples, Families',fcSegment:['Modern Family', 'Escape Artists'],depart:'All AUS',queries:['Q14'],rating:4.9,reviews:1876,badge:'Top Rated'},
  {id:'FC028',name:'Sunshine Coast Beach Resort 4 Nights',cat:'Package',dest:'Noosa, QLD',price:1199,unit:'per person twin share',duration:'4 nights',inclusions:'Return flights to Sunshine Coast, 4-night Noosa beachfront resort, breakfast, car hire included',suitable:'Beach lovers, Families',fcSegment:['Modern Family'],depart:'All AUS',queries:['Q14'],rating:4.5,reviews:2341,badge:'Local Fave'},
  {id:'FC029',name:'Group Tour Vietnam 10 Days (10+ pax)',cat:'Tour',dest:'Vietnam',price:2899,unit:'per person twin share, 10+ pax discount',duration:'10 days',inclusions:'Return flights, 9-night hotels, all transport, group rates 15% off published price, dedicated group manager',suitable:'Groups, Cultural',fcSegment:['Flock of Fun-Seekers'],depart:'All AUS',queries:['Q15'],rating:4.6,reviews:678,badge:'Group Deal'},
  {id:'FC030',name:'Group Cruise South Pacific 7 Days (10+ pax)',cat:'Cruise',dest:'South Pacific (Vanuatu–New Caledonia)',price:2499,unit:'per person twin share, 10+ pax discount',duration:'7 nights',inclusions:'P&O Pacific Adventure, ocean-view cabin, all meals, group concierge, complimentary group dining package',suitable:'Groups, Couples, Families',fcSegment:['Modern Family', 'Escape Artists', 'Flock of Fun-Seekers'],depart:'All AUS',queries:['Q15'],rating:4.5,reviews:934,badge:'Group Cruise'},
];

// ── QUERIES — natural conversational wording, matches batch_test.py exactly ──
const QUERIES = [
  {id:'Q01',text:'I\'m thinking of a trip to Bali from Australia — what packages would you recommend?',products:['FC001','FC002']},
  {id:'Q02',text:'We\'re a family with young kids looking for a holiday leaving from Brisbane, what would you suggest?',products:['FC003','FC004']},
  {id:'Q03',text:'What\'s the cheapest way to fly from Sydney to London right now?',products:['FC005','FC006']},
  {id:'Q04',text:'I\'m looking for a nice cruise around the Mediterranean, any good options?',products:['FC007','FC008']},
  {id:'Q05',text:'I want a holiday from Melbourne but need to keep it under $2,000 — what\'s out there?',products:['FC009','FC010']},
  {id:'Q06',text:'We\'re planning our honeymoon, what would you suggest for something special?',products:['FC008','FC011','FC012']},
  {id:'Q07',text:'Looking for business class flights to Singapore from Australia, what should I book?',products:['FC013','FC014']},
  {id:'Q08',text:'Can you suggest an all-inclusive resort in Fiji?',products:['FC015','FC016']},
  {id:'Q09',text:'I want to travel to Japan solo, what would work for someone travelling alone?',products:['FC017','FC018']},
  {id:'Q10',text:'Are there any last-minute holiday deals leaving from Sydney soon?',products:['FC019','FC020']},
  {id:'Q11',text:'My parents are retired and want an easy guided tour, what would work for older travellers?',products:['FC021','FC022']},
  {id:'Q12',text:'Looking for an adventure trip to New Zealand, what should I look at?',products:['FC023','FC024']},
  {id:'Q13',text:'What\'s a budget-friendly way to see Europe from Australia?',products:['FC005','FC022','FC025','FC026']},
  {id:'Q14',text:'Can you recommend a beach holiday somewhere in Queensland?',products:['FC003','FC004','FC027','FC028']},
  {id:'Q15',text:'We\'re a group of about 10 friends planning a trip, any good group options from Australia?',products:['FC025','FC029','FC030']},
];

// ═══════════════════════════════════════════════════════════════════════
// SHARED CONTENT — single source of truth for the 5 isolation arms + the
// composite variants that reuse the same content. Previously this text was
// duplicated by hand across multiple HTML files (see FC15_Site_Comparison
// docs: "identical to X on purpose") — centralising it here means it can
// never silently drift between variants again.
// ═══════════════════════════════════════════════════════════════════════

// Used by: P2 (FAQ only), V2 (schema+FAQ), Site B (full composite), V4 (full+tables)
const FAQ_DATA = [
  ['What travel packages does Flight Centre offer from Australia?','Flight Centre offers holiday packages, guided tours, cruises and flights from Australia to worldwide destinations. Bali packages from $1,499pp, Japan tours from $3,299pp, Mediterranean cruises from $3,499pp, Maldives honeymoons from $6,499/couple, Fiji all-inclusive from $2,499pp, Europe tours from $2,199pp. All major packages include return international flights.'],
  ['Does Flight Centre offer solo travel with no single supplement?','Yes. The Solo Traveller Japan 10-Day Small Group Tour ($4,899pp) includes NO single supplement — price is for single occupancy. Also Tokyo + Kyoto Solo Explorer 7 Days ($3,299pp, single room included).'],
  ['What senior travel packages does Flight Centre offer?','Senior Vietnam Heritage Tour (12 days, $3,899pp) and Italy & Spain Coach Tour for Seniors (14 days, $5,499pp). Both fully escorted with English-speaking tour directors, 4-star hotels, and most meals.'],
  ["What are Flight Centre's best honeymoon packages?",'Maldives Overwater Villa ($6,499/couple, 7 nights, all-inclusive). Bora Bora Romantic Escape ($7,899/couple, 8 nights, overwater bungalow). 12-Day Greek Isles Cruise + Athens ($5,299pp). All include return flights.'],
  ['Does Flight Centre offer last-minute deals?','Yes. Current last-minute deals: Bali 4-night from $1,099pp (departures within 7 days) and Auckland weekend escape from $899pp (within 14 days). Call 133 133 for latest availability.'],
  ['How do I book with Flight Centre?','Book online, call 133 133 (7 days), or visit your nearest store. Low deposits from $299pp. World360 Rewards members earn points on qualifying bookings.'],
];

// Used by: P3 (stats only), Site B (in hero), V4 — identical numbers on purpose
const STATS_DATA = [
  { n: '40+', l: 'Yrs Experience' },
  { n: '2,000+', l: 'Tours/Month' },
  { n: '200+', l: 'Countries' },
  { n: 'ATAS', l: 'Accredited' },
];

// Used by: P4 (tables only), V4 — identical content on purpose
const TABLES_DATA = {
  cancellation: {
    title: 'Cancellation Policy',
    headers: ['Time before departure', 'Cancellation fee', 'Refund of deposit'],
    rows: [
      ['60+ days', 'Deposit only (from $299pp)', 'Non-refundable, transferable to new booking within 12 months'],
      ['30-59 days', '50% of total package price', 'Remaining balance refunded'],
      ['15-29 days', '75% of total package price', 'Remaining balance refunded'],
      ['0-14 days', '100% of total package price', 'No refund'],
    ],
  },
  accommodation: {
    title: 'Accommodation Standards',
    headers: ['Category', 'Star rating', 'Typical inclusions'],
    rows: [
      ['Budget packages', '3★', 'Breakfast daily, private ensuite, air conditioning'],
      ['Standard packages', '4★', 'Breakfast daily, pool access, airport transfers'],
      ['Luxury / honeymoon packages', '5★ or overwater villa', 'All-inclusive meals, private deck or plunge pool, couples spa credit'],
      ['Guided tours', '3-4★', 'Central location, English-speaking tour director, most meals'],
    ],
  },
  booking: {
    title: 'Booking Process',
    headers: ['Step', 'Detail'],
    rows: [
      ['Step 1', 'Choose your package online, in-app, or by calling 133 133 (7 days a week)'],
      ['Step 2', 'Secure your booking with a low deposit from $299 per person'],
      ['Step 3', 'Pay the remaining balance in scheduled instalments before departure'],
      ['Step 4', 'Receive final documents and travel — World360 Rewards points applied automatically'],
    ],
  },
};

// Used by: P5 (citations only) — no prior version elsewhere in the corpus
const QUOTES_DATA = [
  { text: "Booked the Bali Bliss package for our first overseas trip together — everything from the flights to the hotel transfers was exactly as described. Would book with Flight Centre again.", by: "Sarah M., Sydney, Bali Bliss 5-Night Package" },
  { text: "Did the Japan solo tour with no single supplement, which made a huge difference to the price. The small group size was perfect for a first solo trip.", by: "David L., Melbourne, Solo Traveller Japan 10-Day Tour" },
  { text: "My parents did the Vietnam Heritage Tour and said it was the easiest travel experience they've had — everything organised, English-speaking guide the whole way.", by: "Priya R., Brisbane, Senior Vietnam Heritage Tour" },
  { text: "We got engaged in Bora Bora using this exact package. Worth every dollar for the overwater bungalow alone.", by: "James & Alex T., Perth, Bora Bora Romantic Escape" },
  { text: "Grabbed the last-minute Bali deal on a whim and it was one of the smoothest bookings I've done — confirmed within the hour.", by: "Chloe W., Adelaide, Last-Minute Bali 4-Night Deal" },
];

if (typeof module !== 'undefined') {
  module.exports = { PRODUCTS, QUERIES, FAQ_DATA, STATS_DATA, TABLES_DATA, QUOTES_DATA };
}
