/* ============================================================================
   RiseCon ADU MODEL CATALOG — single source of truth for every page.
   Homepage, ADU Models page, and individual model pages all read from here.

   All specifications below were transcribed from the supplied plan PDFs in
   ./assets/plans/. Fields not stated on a plan are left null, never estimated.

   ASSET CONTRACT (one folder per kind, keyed by slug — adding ADU #14 means
   dropping four files in and appending one object below):
     image → ./assets/models/<slug>-exterior.png   full-res exterior (hero, blown up)
     cover → ./assets/models/<slug>-cover.jpg       light card cover (gallery grids)
     glb   → ./assets/glb/<slug>.glb               roofless interactive model
     pdf   → ./assets/plans/<slug>.pdf             architectural plan set
     plan  → ./assets/plans/<slug>.png             optional flat fallback

   planViews drives the sheet selector and the deep-zoom plan viewer. Each entry
   names one drawing that actually exists on that ADU's PDF; `rect` is in PDF
   points with a top-left origin and crops that drawing out of the sheet. All
   large-format sheets here are 2592 x 1728 pt (36" x 24"); the Spanish Style
   Studio set is two 792 x 612 pt letter sheets.
   ========================================================================= */

export const MODELS = [
  {
    slug: 'adu-240',
    name: 'ADU 240',
    style: 'Contemporary',
    sqft: 240,
    sqftLabel: '240 sq. ft.',
    sizeBucket: 'under-600',
    beds: 0,
    baths: 1,
    stories: 1,
    configLabel: 'Studio · 1 Bath',
    dimensions: "20'-0\" × 12'-0\"",
    coveredPorch: null,
    storage: 11,
    rooms: ['Living', 'Kitchen', 'Bath'],
    description: 'A studio footprint — 229 sq. ft. of living area plus 11 sq. ft. of storage — with an open living and kitchen area and a full bath. Plans draw two exterior treatments: a gable roof with tile and stone veneer, and a shed roof with corrugated metal siding.',
    specs: [
      ['Living area', '229 sq. ft.'],
      ['Storage', '11 sq. ft.'],
      ['Total', '240 sq. ft.'],
      ['Configuration', 'Studio · 1 Bath'],
      ['Footprint', "20'-0\" × 12'-0\""],
      ['Ceiling height', "8'-0\""],
      ['Exterior options', 'Gable roof w/ tile & stone veneer, or shed roof w/ corrugated metal'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '40-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-240.png',
    image: './assets/models/adu-240-exterior.png',
    cover: './assets/models/adu-240-cover.jpg',
    video: null,
    glb: './assets/glb/adu-240.glb',
    pdf: './assets/plans/adu-240.pdf',
    planViews: [
      { id: 'floor',  label: 'Floor Plan',      page: 1, rect: { x: 1800, y: 1190, w: 600, h: 530 } },
      { id: 'front',  label: 'Front',           page: 1, rect: { x: 1770, y: 20,   w: 600, h: 375 } },
      { id: 'rear',   label: 'Rear',            page: 1, rect: { x: 1120, y: 20,   w: 630, h: 375 } },
      { id: 'left',   label: 'Left',            page: 1, rect: { x: 1265, y: 505,  w: 455, h: 360 } },
      { id: 'right',  label: 'Right',           page: 1, rect: { x: 1880, y: 505,  w: 420, h: 360 } },
      { id: 'alt',    label: 'Alt Elevations',  page: 1, rect: { x: 565,  y: 890,  w: 1190, h: 810 } },
      { id: 'sched',  label: 'Schedules',       page: 1, rect: { x: 1850, y: 925,  w: 520, h: 285 } },
      { id: 'notes',  label: 'Keynotes',        page: 1, rect: { x: 165,  y: 15,   w: 1015, h: 720 } }
    ],
    gallery: [],
    featured: false
  },
  {
    slug: 'adu-320',
    name: 'ADU 320',
    style: 'Board & Batten',
    sqft: 320,
    sqftLabel: '320 sq. ft.',
    sizeBucket: 'under-600',
    beds: 1,
    baths: 1,
    stories: 1,
    configLabel: '1 Bed · 1 Bath',
    dimensions: "16'-0\" × 20'-0\"",
    coveredPorch: null,
    storage: 12,
    rooms: ['Bedroom', 'Bath', 'Kitchen', 'Living'],
    description: 'One bedroom and one bath with an open living and kitchen area, a stacked washer and dryer, and 12 sq. ft. of storage. Plans show a 6:12 composition shingle roof over board-and-batten siding.',
    specs: [
      ['Living area', '320 sq. ft.'],
      ['Storage', '12 sq. ft.'],
      ['Configuration', '1 Bed · 1 Bath'],
      ['Footprint', "16'-0\" × 20'-0\""],
      ['Laundry', 'Stacked washer and dryer'],
      ['Roof', 'Class A composition shingle, 6:12 pitch'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '40-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-320.png',
    image: './assets/models/adu-320-exterior.png',
    cover: './assets/models/adu-320-cover.jpg',
    video: null,
    glb: './assets/glb/adu-320.glb',
    pdf: './assets/plans/adu-320.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1770, y: 980, w: 710, h: 740 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1760, y: 10,  w: 700, h: 370 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 950,  y: 10,  w: 665, h: 370 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 950,  y: 440, w: 670, h: 380 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 1760, y: 440, w: 670, h: 380 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1285, y: 855, w: 1000, h: 130 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 1250, y: 980, w: 515, h: 730 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-495',
    name: 'ADU 495',
    style: 'Board & Batten',
    sqft: 495,
    sqftLabel: '495 sq. ft.',
    sizeBucket: 'under-600',
    beds: 1,
    baths: 1,
    stories: 1,
    configLabel: '1 Bed · 1 Bath',
    dimensions: "33'-0\" × 15'-0\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Bedroom', 'Bath', 'Kitchen', 'Living'],
    description: 'A single-level one bedroom, one bath plan with a separate living area, full kitchen, tiled shower, and stacked washer and dryer. Plans call for R-21 wall and R-38 attic insulation.',
    specs: [
      ['Living area', '495 sq. ft.'],
      ['Configuration', '1 Bed · 1 Bath'],
      ['Footprint', "33'-0\" × 15'-0\""],
      ['Bath', "3×3 tile shower, 48\" vanity"],
      ['Laundry', 'Stacked washer and dryer'],
      ['Insulation', 'R-21 walls, R-38 attic'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '40-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-495.png',
    image: './assets/models/adu-495-exterior.png',
    cover: './assets/models/adu-495-cover.jpg',
    video: null,
    glb: './assets/glb/adu-495.glb',
    pdf: './assets/plans/adu-495.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1495, y: 1090, w: 890, h: 615 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1665, y: 15,   w: 700, h: 380 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1665, y: 395,  w: 700, h: 365 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 1235, y: 15,   w: 445, h: 380 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 1250, y: 395,  w: 430, h: 365 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1280, y: 845,  w: 985, h: 205 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 95,   y: 15,   w: 730, h: 845 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-660',
    name: 'ADU 660',
    style: 'Board & Batten',
    sqft: 660,
    sqftLabel: '660 sq. ft.',
    sizeBucket: '600-800',
    beds: 2,
    baths: 1,
    stories: 1,
    configLabel: '2 Bed · 1 Bath',
    dimensions: "44'-0\" × 15'-0\"",
    coveredPorch: 33,
    storage: null,
    rooms: ['Primary bedroom', 'Bedroom 2', 'Bath', 'Kitchen', 'Living', 'Covered porch'],
    description: 'Two bedrooms at opposite ends of a central living and kitchen area, with one bath, a stacked washer and dryer, and a 33 sq. ft. covered porch.',
    specs: [
      ['Living area', '660 sq. ft.'],
      ['Covered porch', '33 sq. ft.'],
      ['Configuration', '2 Bed · 1 Bath'],
      ['Footprint', "44'-0\" × 15'-0\""],
      ['Bath', '3×3 tile shower'],
      ['Laundry', 'Stacked washer and dryer'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '50-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-660.png',
    image: './assets/models/adu-660-exterior.png',
    cover: './assets/models/adu-660-cover.jpg',
    video: null,
    glb: './assets/glb/adu-660.glb',
    pdf: './assets/plans/adu-660.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1385, y: 235,  w: 1055, h: 620 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1370, y: 895,  w: 1020, h: 380 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1370, y: 1315, w: 1020, h: 360 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 865,  y: 540,  w: 460,  h: 320 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 865,  y: 195,  w: 475,  h: 350 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1385, y: 40,   w: 1055, h: 155 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 50,   y: 25,   w: 805,  h: 785 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-740',
    name: 'ADU 740',
    style: 'Board & Batten',
    sqft: 740,
    sqftLabel: '740 sq. ft.',
    sizeBucket: '600-800',
    beds: 2,
    baths: 2,
    stories: 1,
    configLabel: '2 Bed · 2 Bath',
    dimensions: "37'-0\" × 22'-0\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Primary bedroom', 'Primary bath', 'Bedroom 2', 'Bath', 'Kitchen', 'Living'],
    description: 'A split two-bedroom plan where each bedroom has its own bath, arranged around a central living area and kitchen. Plans show board-and-batten siding under a pitched composition shingle roof.',
    specs: [
      ['Living area', '740 sq. ft.'],
      ['Configuration', '2 Bed · 2 Bath'],
      ['Footprint', "37'-0\" × 22'-0\""],
      ['Baths', "3×5 tile shower, 48\" vanity"],
      ['Laundry', 'Stacked washer and dryer'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', 'Electric']
    ],
    plan: './assets/plans/adu-740.png',
    image: './assets/models/adu-740-exterior.png',
    cover: './assets/models/adu-740-cover.jpg',
    video: null,
    glb: './assets/glb/adu-740.glb',
    pdf: './assets/plans/adu-740.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1530, y: 945, w: 925, h: 775 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1560, y: 105, w: 830, h: 375 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1560, y: 475, w: 830, h: 355 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 865,  y: 105, w: 490, h: 375 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 865,  y: 475, w: 490, h: 355 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 145,  y: 760, w: 530, h: 390 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 145,  y: 15,  w: 640, h: 760 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-768',
    name: 'ADU 768',
    style: 'Board & Batten',
    sqft: 768,
    sqftLabel: '768 sq. ft.',
    sizeBucket: '600-800',
    beds: 1,
    baths: 1,
    stories: 1,
    configLabel: '1 Bed · 1 Bath',
    dimensions: "36'-0\" × 22'-0\"",
    coveredPorch: 132,
    storage: null,
    rooms: ['Bedroom', 'Bath', 'Kitchen', 'Living', 'Laundry', 'Covered porch'],
    description: 'A one bedroom, one bath plan with a generous open living and kitchen area, a dedicated laundry room, and a 132 sq. ft. covered porch with a wood deck. Plans show an ADA prefab shower and a solar tube.',
    specs: [
      ['Living area', '768 sq. ft.'],
      ['Covered porch', '132 sq. ft.'],
      ['Configuration', '1 Bed · 1 Bath'],
      ['Footprint', "36'-0\" × 22'-0\""],
      ['Bath', 'ADA prefab shower'],
      ['Laundry', 'Dedicated laundry room'],
      ['Daylighting', 'Solar tube'],
      ['Foundation', 'Raised'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '40-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-768.png',
    image: './assets/models/adu-768-exterior.png',
    cover: './assets/models/adu-768-cover.jpg',
    video: null,
    glb: './assets/glb/adu-768.glb',
    pdf: './assets/plans/adu-768.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1400, y: 975, w: 1025, h: 745 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1400, y: 15,  w: 1035, h: 400 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1400, y: 415, w: 1035, h: 390 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 835,  y: 15,  w: 500,  h: 400 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 835,  y: 415, w: 500,  h: 390 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1335, y: 800, w: 1055, h: 180 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 145,  y: 15,  w: 665,  h: 795 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-880',
    name: 'ADU 880',
    style: 'Contemporary',
    sqft: 880,
    sqftLabel: '880 sq. ft.',
    sizeBucket: '800-plus',
    beds: 2,
    baths: 2,
    stories: 1,
    configLabel: '2 Bed · 2 Bath',
    dimensions: "44'-0\" × 22'-0\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Bedroom 1', 'Bath 1', 'Bedroom 2', 'Bath 2', 'Kitchen', 'Living'],
    description: 'Two bedrooms with private baths at either end of a central kitchen and living area. Plans draw two exterior treatments — a shed roof with vertical siding, and a gable roof with cement plaster — plus an instant electric water heater.',
    specs: [
      ['Living area', '880 sq. ft.'],
      ['Configuration', '2 Bed · 2 Bath'],
      ['Footprint', "44'-0\" × 22'-0\""],
      ['Baths', 'Bathtub / shower combo'],
      ['Laundry', 'Stacked washer and dryer'],
      ['Exterior options', 'Shed roof w/ vertical siding, or gable roof w/ cement plaster'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', 'Instant electric'],
      ['Flooring', 'Luxury vinyl']
    ],
    plan: './assets/plans/adu-880.png',
    image: './assets/models/adu-880-exterior.png',
    cover: './assets/models/adu-880-cover.jpg',
    video: null,
    glb: './assets/glb/adu-880.glb',
    pdf: './assets/plans/adu-880.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan',     page: 1, rect: { x: 1335, y: 925,  w: 1090, h: 795 } },
      { id: 'front', label: 'Front',          page: 2, rect: { x: 1270, y: 10,   w: 1025, h: 385 } },
      { id: 'rear',  label: 'Rear',           page: 2, rect: { x: 1270, y: 410,  w: 1025, h: 440 } },
      { id: 'left',  label: 'Left',           page: 2, rect: { x: 620,  y: 10,   w: 575,  h: 385 } },
      { id: 'right', label: 'Right',          page: 2, rect: { x: 620,  y: 410,  w: 575,  h: 440 } },
      { id: 'alt',   label: 'Alt Elevations', page: 2, rect: { x: 615,  y: 875,  w: 1690, h: 840 } },
      { id: 'sched', label: 'Schedules',      page: 1, rect: { x: 1545, y: 10,   w: 895,  h: 375 } },
      { id: 'notes', label: 'Keynotes',       page: 1, rect: { x: 2225, y: 10,   w: 215,  h: 515 } }
    ],
    gallery: [],
    featured: false
  },
  {
    slug: 'adu-884',
    name: 'ADU 884',
    style: 'Stucco & Stone',
    sqft: 884,
    sqftLabel: '884 sq. ft.',
    sizeBucket: '800-plus',
    beds: 2,
    baths: 1,
    stories: 1,
    configLabel: '2 Bed · 1 Bath',
    dimensions: "31'-6\" × 28'-0\"",
    coveredPorch: 24,
    storage: null,
    rooms: ['Bedroom 1', 'Bedroom 2', 'Bath', 'Hall', 'Kitchen', 'Living', 'Covered patio'],
    description: 'A two bedroom, one bath layout with a hall separating the bedrooms from an open kitchen and living area, plus a 24 sq. ft. covered patio.',
    specs: [
      ['Living area', '884 sq. ft.'],
      ['Covered patio', '24 sq. ft.'],
      ['Configuration', '2 Bed · 1 Bath'],
      ['Footprint', "31'-6\" × 28'-0\""],
      ['Bath', '3×3 tile shower'],
      ['Laundry', 'Washer and dryer'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '50-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-884.png',
    image: './assets/models/adu-884-exterior.png',
    cover: './assets/models/adu-884-cover.jpg',
    video: null,
    glb: './assets/glb/adu-884.glb',
    pdf: './assets/plans/adu-884.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1595, y: 840, w: 830, h: 880 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1030, y: 20,  w: 630, h: 425 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1030, y: 445, w: 630, h: 375 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 1660, y: 445, w: 730, h: 375 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 1660, y: 20,  w: 730, h: 425 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1030, y: 840, w: 585, h: 435 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 145,  y: 20,  w: 875, h: 775 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-891',
    name: 'ADU 891',
    style: 'Stone & Batten',
    sqft: 891,
    sqftLabel: '891 sq. ft.',
    sizeBucket: '800-plus',
    beds: 2,
    baths: 2,
    stories: 1,
    configLabel: '2 Bed · 2 Bath',
    dimensions: "39'-0\" × 27'-0\"",
    coveredPorch: 81,
    storage: null,
    rooms: ['Bedroom 1', 'Bedroom 2', 'Bath', 'Bath', 'Hall', 'Laundry', 'Kitchen', 'Living', 'Covered porch'],
    description: 'Two bedrooms, two baths, a dedicated laundry room, and an 81 sq. ft. covered porch — 972 sq. ft. of total roofed area. Plans show stone veneer wainscot with board-and-batten siding above.',
    specs: [
      ['Living area', '891 sq. ft.'],
      ['Covered porch', '81 sq. ft.'],
      ['Total roofed area', '972 sq. ft.'],
      ['Configuration', '2 Bed · 2 Bath'],
      ['Footprint', "39'-0\" × 27'-0\""],
      ['Baths', 'Bathtub / shower combo'],
      ['Laundry', 'Dedicated laundry room'],
      ['Exterior', 'Stone veneer wainscot, board-and-batten siding'],
      ['Flooring', 'Laminate']
    ],
    plan: './assets/plans/adu-891.png',
    image: './assets/models/adu-891-exterior.png',
    cover: './assets/models/adu-891-cover.jpg',
    video: null,
    glb: './assets/glb/adu-891.glb',
    pdf: './assets/plans/adu-891.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1480, y: 835, w: 910, h: 885 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1465, y: 20,  w: 895, h: 405 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1465, y: 425, w: 895, h: 375 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 755,  y: 425, w: 575, h: 375 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 755,  y: 20,  w: 575, h: 405 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 865,  y: 825, w: 645, h: 455 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 145,  y: 20,  w: 570, h: 665 } }
    ],
    gallery: [],
    featured: false
  },
  {
    slug: 'adu-896',
    name: 'ADU 896',
    style: 'Board & Batten',
    sqft: 896,
    sqftLabel: '896 sq. ft.',
    sizeBucket: '800-plus',
    beds: 2,
    baths: 1,
    stories: 1,
    configLabel: '2 Bed · 1 Bath',
    dimensions: "32'-0\" × 28'-0\"",
    coveredPorch: null,
    storage: 14,
    rooms: ['Bedroom', 'Bedroom', 'Bath', 'Hall', 'Utility', 'Kitchen', 'Living'],
    description: 'A two bedroom plan with a utility room, a full kitchen with a prep sink, and 14 sq. ft. of storage. Plans show a raised foundation with board-and-batten siding and full-height built-in cabinetry.',
    specs: [
      ['Living area', '896 sq. ft.'],
      ['Storage', '14 sq. ft.'],
      ['Configuration', '2 Bed · 1 Bath'],
      ['Footprint', "32'-0\" × 28'-0\""],
      ['Kitchen', 'Prep sink, full-height built-in cabinet'],
      ['Bath', '3×3 tile shower'],
      ['Laundry', 'Stacked washer and dryer'],
      ['Foundation', 'Raised'],
      ['Water heater', '50-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-896.png',
    image: './assets/models/adu-896-exterior.png',
    cover: './assets/models/adu-896-cover.jpg',
    video: null,
    glb: './assets/glb/adu-896.glb',
    pdf: './assets/plans/adu-896.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1635, y: 855, w: 800, h: 865 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 915,  y: 30,  w: 800, h: 420 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 915,  y: 435, w: 800, h: 390 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 1770, y: 435, w: 665, h: 390 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 1770, y: 30,  w: 665, h: 420 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1095, y: 850, w: 560, h: 445 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 205,  y: 30,  w: 700, h: 795 } }
    ],
    gallery: [],
    featured: false
  },
  {
    slug: 'adu-1050',
    name: 'ADU 1050',
    style: 'Board & Batten',
    sqft: 1050,
    sqftLabel: '1,050 sq. ft.',
    sizeBucket: '800-plus',
    beds: 3,
    baths: 2,
    stories: 1,
    configLabel: '3 Bed · 2 Bath',
    dimensions: "35'-0\" × 28'-0\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Primary bedroom', 'Bedroom 2', 'Bedroom 3', 'Bath 1', 'Bath 2', 'Kitchen', 'Living'],
    description: 'Three bedrooms across the rear of the plan with two baths and an open kitchen and living area. Plans include an accessible ADA ramp at 1:12 slope and a barn door at the primary suite.',
    specs: [
      ['Living area', '1,050 sq. ft.'],
      ['Configuration', '3 Bed · 2 Bath'],
      ['Footprint', "35'-0\" × 28'-0\""],
      ['Accessibility', 'ADA ramp, 1:12 slope'],
      ['Baths', 'Bathtub / shower combo'],
      ['Laundry', 'Stacked washer and dryer'],
      ['Siding', 'Board and batten'],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', '50-gallon hybrid heat pump electric']
    ],
    plan: './assets/plans/adu-1050.png',
    image: './assets/models/adu-1050-exterior.png',
    cover: './assets/models/adu-1050-cover.jpg',
    video: null,
    glb: './assets/glb/adu-1050.glb',
    pdf: './assets/plans/adu-1050.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1530, y: 840, w: 895, h: 880 } },
      { id: 'front', label: 'Front',      page: 1, rect: { x: 1495, y: 10,  w: 925, h: 370 } },
      { id: 'rear',  label: 'Rear',       page: 1, rect: { x: 1495, y: 375, w: 925, h: 375 } },
      { id: 'left',  label: 'Left',       page: 1, rect: { x: 770,  y: 375, w: 550, h: 375 } },
      { id: 'right', label: 'Right',      page: 1, rect: { x: 770,  y: 10,  w: 550, h: 370 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 700,  y: 850, w: 530, h: 380 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 145,  y: 850, w: 570, h: 725 } }
    ],
    gallery: [],
    featured: true
  },
  {
    slug: 'adu-1188',
    name: 'ADU 1188',
    style: 'Lap Siding',
    sqft: 1188,
    sqftLabel: '1,188 sq. ft.',
    sizeBucket: '800-plus',
    beds: 3,
    baths: 2,
    stories: 1,
    configLabel: '3 Bed · 2 Bath',
    dimensions: "33'-0\" × 36'-0\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bath 1', 'Bath 2', 'Kitchen', 'Pantry', 'Laundry', 'Living room'],
    description: 'The largest plan in the collection: three bedrooms, two baths, a walk-in pantry, a dedicated laundry room, and a kitchen island opening onto the living room. Plans show central HVAC rather than mini splits.',
    specs: [
      ['Living area', '1,188 sq. ft.'],
      ['Configuration', '3 Bed · 2 Bath'],
      ['Footprint', "33'-0\" × 36'-0\""],
      ['Kitchen', 'Island with seating, walk-in pantry'],
      ['Baths', 'Bathtub / shower combo'],
      ['Laundry', 'Dedicated laundry room'],
      ['Heating / cooling', 'Central HVAC'],
      ['Water heater', 'Electric'],
      ['Flooring', 'Luxury vinyl']
    ],
    plan: './assets/plans/adu-1188.png',
    image: './assets/models/adu-1188-exterior.png',
    cover: './assets/models/adu-1188-cover.jpg',
    video: null,
    glb: './assets/glb/adu-1188.glb',
    pdf: './assets/plans/adu-1188.pdf',
    planViews: [
      { id: 'floor', label: 'Floor Plan', page: 1, rect: { x: 1400, y: 640,  w: 1055, h: 1080 } },
      { id: 'front', label: 'Front',      page: 2, rect: { x: 1525, y: 475,  w: 840,  h: 440 } },
      { id: 'rear',  label: 'Rear',       page: 2, rect: { x: 1525, y: 1185, w: 840,  h: 440 } },
      { id: 'left',  label: 'Left',       page: 2, rect: { x: 330,  y: 475,  w: 865,  h: 440 } },
      { id: 'right', label: 'Right',      page: 2, rect: { x: 330,  y: 1185, w: 865,  h: 440 } },
      { id: 'sched', label: 'Schedules',  page: 1, rect: { x: 1415, y: 10,   w: 605,  h: 470 } },
      { id: 'notes', label: 'Keynotes',   page: 1, rect: { x: 2000, y: 10,   w: 445,  h: 480 } }
    ],
    gallery: [],
    featured: false
  },
  {
    slug: 'spanish-style-studio',
    name: 'Spanish Style Studio',
    style: 'Spanish',
    sqft: null,                       // not stated on plan
    sqftLabel: 'Studio',
    sizeBucket: 'under-600',
    beds: 0,
    baths: 1,
    stories: 1,
    configLabel: 'Studio · 1 Bath',
    dimensions: "16'-10\" × 12'-3\"",
    coveredPorch: null,
    storage: null,
    rooms: ['Living', 'Kitchen', 'Bath'],
    description: 'A compact studio with an open living and kitchen area and a full bath with a walk-in tile shower. Plans show a 10\'-0" ceiling, mini-split heating and cooling, and an instant electric water heater.',
    specs: [
      ['Configuration', 'Studio · 1 Bath'],
      ['Footprint', "16'-10\" × 12'-3\""],
      ['Ceiling height', "10'-0\""],
      ['Heating / cooling', 'Mini split'],
      ['Water heater', 'Instant electric'],
      ['Flooring', 'Luxury vinyl']
    ],
    plan: './assets/plans/spanish-style-studio.png',
    image: './assets/models/spanish-style-studio-exterior.png',
    cover: './assets/models/spanish-style-studio-cover.jpg',
    video: './assets/models/spanish-style-studio-walkthrough.mp4',
    glb: './assets/glb/spanish-style-studio.glb',
    pdf: './assets/plans/spanish-style-studio.pdf',
    planViews: [
      { id: 'floor',   label: 'Floor Plan', page: 1, rect: { x: 498, y: 332, w: 205, h: 234 } },
      { id: 'front',   label: 'Front',      page: 2, rect: { x: 320, y: 58,  w: 175, h: 132 } },
      { id: 'rear',    label: 'Rear',       page: 2, rect: { x: 320, y: 199, w: 178, h: 118 } },
      { id: 'left',    label: 'Left',       page: 2, rect: { x: 503, y: 199, w: 182, h: 118 } },
      { id: 'right',   label: 'Right',      page: 2, rect: { x: 503, y: 58,  w: 182, h: 132 } },
      { id: 'section', label: 'Section',    page: 2, rect: { x: 320, y: 322, w: 182, h: 122 } },
      { id: 'sheet1',  label: 'Sheet A2.1', page: 1, rect: { x: 0,   y: 0,   w: 792, h: 612 } },
      { id: 'sheet2',  label: 'Sheet A2.2', page: 2, rect: { x: 0,   y: 0,   w: 792, h: 612 } }
    ],
    gallery: [],
    featured: true
  }
];

export const SIZE_FILTERS = [
  { id: 'all', label: 'View All' },
  { id: 'under-600', label: 'Under 600 sq. ft.' },
  { id: '600-800', label: '600–800 sq. ft.' },
  { id: '800-plus', label: '800+ sq. ft.' }
];

export const FEATURED = MODELS.filter((m) => m.featured).slice(0, 6);

export const bySlug = (slug) => MODELS.find((m) => m.slug === slug) || null;

export const modelHref = (slug) => `./ADU Model.dc.html?model=${slug}`;

/* ── PRICING ────────────────────────────────────────────────────────────────
   One rate drives every price on the site. Prices are derived from each plan's
   verified square footage, so correcting a footprint corrects its price too.
   A plan that does not state its area gets no number rather than a guess. */
export const PRICE_PER_SQFT = 280;

export const startingPrice = (m) => (m && m.sqft ? m.sqft * PRICE_PER_SQFT : null);

export const priceLabel = (m) => {
  const p = startingPrice(m);
  return p ? `Starting at $${p.toLocaleString('en-US')}` : 'Pricing on request';
};

export const PRICE_BASIS = `Based on $${PRICE_PER_SQFT}/sq. ft. with RiseCon's standard finish and amenity package.`;

export const PRICE_DISCLAIMER = `Pricing shown is based on $${PRICE_PER_SQFT} per square foot and includes RiseCon's standard selected finishes, fixtures, and amenities. Finishes, fixtures, features, and amenities can be upgraded or customized. Any upgrades, additions, site-specific requirements, or custom selections may increase the final project price.`;

/* The compact horizontal specification strip on a model page — only fields the
   plans actually state, so a missing value drops out rather than being faked. */
export const quickSpecs = (m) => [
  m.sqft ? { label: 'Square Feet', value: m.sqft.toLocaleString() } : null,
  { label: 'Bedrooms', value: m.beds === 0 ? 'Studio' : String(m.beds) },
  { label: 'Bathrooms', value: String(m.baths) },
  { label: 'Building Dimensions', value: m.dimensions },
  m.coveredPorch ? { label: 'Covered Porch', value: `${m.coveredPorch} sq. ft.` } : null,
  m.storage ? { label: 'Storage', value: `${m.storage} sq. ft.` } : null,
  { label: 'Stories', value: String(m.stories) }
].filter(Boolean);

/* Aerial "dollhouse" framing used by both the gallery hover preview and the
   model page viewer. model-viewer resolves `auto` radius from the loaded
   model's bounding box, so each ADU is framed to its own footprint. */
export const AERIAL_ORBIT = '-22deg 14deg auto';
export const AERIAL_ORBIT_HOVER = '0deg 12deg auto';
export const ENV_IMAGE = './assets/env/architectural-daylight.png';
