import type {
  Facility, Fact, GalleryImage, Offer, Room, StaffRole, Treatment,
} from '../types/content'

export const villa = {
  name: 'Villa Dhanika',
  tagline: 'A private oasis on the edge of Canggu’s rice fields',
  address: 'Batu Bolong, Canggu — Bali',

  /** From spreadsheet [18] Introduction + [7] About Villa. Max 3 paragraphs. */
  about: {
    eyebrow: 'Introduction',
    heading: 'Contemporary comfort in the heart of Canggu',
    paragraphs: [
      'A peaceful sanctuary in the heart of Bali’s popular Canggu area, families and friends will enjoy the best of both worlds at the beautiful Villa Dhanika. Newly built in 2024, this modern, six-bedroom, fully staffed luxury Bali villa overlooks glimmering rice fields, best enjoyed from the Olympic-sized swimming pool or leafy rooftop cabana. It’s also just a short stroll down a quiet lane to all the action of Bali’s hippest neighbourhood. A private chef is available on request, but with some of Bali’s most famous restaurants just minutes away, you may be content to discover for yourself why this district is a food paradise.',
      'Contemporary, elegant and wonderfully comfortable, Villa Dhanika is the perfect base to immerse yourself in all the fun of Bali’s most popular destination, Canggu. And when you’ve had enough of the buzz, the designer boutiques, the cool cafes and the world-class beach bars, simply retreat to your own private oasis perched on the edge of Bali’s famous rice fields.',
      'Float your cares away in the Olympic-sized swimming pool, and listen to your favourite music played through Bose speakers indoors and out. Bask in the cool breeze that wafts across the rice fields in the late afternoon; marvel at the streaks of sunset from the rooftop cabana; and then finish your day with a starlit soak in the jacuzzi.',
    ] as string[],
    image: 'intro.webp',
  },

  gallery: [
    { image: 'Villa Dhanica 1.webp', alt: 'Open-sided pool cabana with rattan dining chairs and woven pendant lamps' },
    { image: 'Villa Dhanica 3.webp', alt: 'Long wood dining table under a soaring woven ceiling with sculptural rattan lights' },
    { image: 'Villa Dhanica 2.webp', alt: 'Bedroom in soft whites with a macramé wall hanging and woven ceiling panel' },
    { image: 'Villa Dhanica 6.webp', alt: 'Bedroom with a dark textured wall, woven basket display and cane bedside drawers' },
    { image: 'Villa Dhanica 5.webp', alt: 'Ensuite bathroom with a freestanding tub opening onto a private garden' },
    { image: 'Villa Dhanica 8.webp', alt: 'Outdoor stone bathtub and rain shower in a planted courtyard' },
    { image: 'Villa Dhanica 4.webp', alt: 'Bathroom with stone vanity, natural stone walls and a frangipani garden view' },
    { image: 'Villa Dhanica 9.webp', alt: 'Traditional shingled bale with a round dining table overlooking the rice fields' },
    { image: 'Villa Dhanica 7.webp', alt: 'Cane bedside drawers and woven wall baskets in one of the garden bedrooms' },
  ] satisfies GalleryImage[],

  facts: [
    { icon: 'MapPin', label: 'Location', value: 'Batu Bolong, Canggu, Bali.' },
    { icon: 'Users', label: 'Capacity', value: '14 people (5 ensuite air-conditioned bedrooms: 3 with king-sized beds, 2 with twins, and 1 convertible entertainment room with arrangement for 4 beds).' },
    { icon: 'Waves', label: 'Pool', value: 'Olympic-size with wading area and adjacent jacuzzi.' },
    { icon: 'Sofa', label: 'Living Areas', value: 'Lounge room; expansive dining area; entertainment room; reception; open-sided pool cabana; rooftop lounge; sun decks with sun loungers and daybeds.' },
    { icon: 'UserCheck', label: 'Staff', value: 'Villa Manager; 4 villa attendants; 2 security staff.' },
    { icon: 'Ruler', label: 'Property Area', value: '1650sqm (villa), 1749sqm land.' },
    { icon: 'Wifi', label: 'Communication', value: 'WiFi internet access throughout the villa.' },
    { icon: 'ShieldCheck', label: 'Managed & Marketed by', value: 'WinniWonka' },
  ] satisfies Fact[],

  rooms: [
    { name: 'Master Bedrooms', description: 'Three ensuite bedrooms with king-sized beds, air conditioning and garden doors onto the rice fields.', image: 'king_bedroom.webp', alt: 'King-sized bed beneath a display of black woven discs, with garden doors and an ikat hanging' },
    { name: 'Twin Bedrooms', description: 'Two ensuite bedrooms with cane-headboard twin beds and built-in rattan wardrobes, ideal for children or friends sharing.', image: 'twin_bedroom.webp', alt: 'Two single beds with cane headboards and green cushions, framed by rattan wardrobe doors' },
    { name: 'Lounge Room', description: 'Deep linen sofas beneath a woven timber ceiling, opening on both sides to the garden.', image: 'entertain_room.webp', alt: 'Lounge with deep linen sofas under a woven ceiling, opening to the garden' },
    { name: 'Dining Pavilion', description: 'A seven-metre wood dining table seating sixteen, beneath a suspended rattan sculpture and soaring thatched roof.', image: 'dining_pavillion.webp', alt: 'Long wood dining table seating sixteen beneath a suspended rattan sculpture and thatched roof' },
    { name: 'Rooftop Cabana', description: 'Thatched lounge with a daybed and armchairs on a timber deck, looking straight across the rice fields.', image: 'rooftop_cabana.webp', alt: 'Thatched cabana with a daybed and armchairs on a timber deck, looking across the rice fields' },
    { name: 'Pool Cabana', description: 'Open-sided cabana lit at dusk beside the Olympic-size pool, on the edge of the rice fields.', image: 'pool_cabana.webp', alt: 'Lit pool cabana beside the swimming pool at dusk, with the rice fields behind' },
  ] satisfies Room[],

  facilities: [
    { icon: 'Tv', label: 'Entertainment', description: '34-inch cable/smart flat-screen TV in all bedrooms; 98-inch cable/smart flat-screen TV in Entertainment Room; complimentary outdoor theatre complete with beanbags set up by the pool on request; audio system with Bose speakers throughout indoor and outdoor living areas of the villa.' },
    { icon: 'Dumbbell', label: 'Gym', description: 'Gym with cross trainer, treadmill and weights.' },
    { icon: 'Wifi', label: 'Communication', description: 'WiFi internet access throughout the villa.' },
    { icon: 'Car', label: 'Transport', description: 'Safe and reasonably priced metered taxis are easily available; and full day or half-day car and driver hire can be arranged via your Villa Manager (additional costs apply).' },
    { icon: 'Sparkles', label: 'Additional Facilities', description: 'Barbecue; in-room safes; back-up generator.' },
    { icon: 'Baby', label: 'For Families', description: 'With a choice of six bedrooms spread over two levels, there is plenty of space for everyone. Facilities include Nintendo, baby cot and high-chair; wading area in the pool; pool inflatables; pool fence on request (extra charge applies).' },
  ] satisfies Facility[],

  wellness: {
    eyebrow: 'Spa & Gym, with Dermaster',
    heading: 'Wellness without leaving the villa',
    /** From spreadsheet [63]. Max 2 paragraphs. */
    paragraphs: [
      'Indulge in complete wellness during your stay at Villa Dhanika. Guests staying at the villa can choose from a variety of dermal treatments offered at Dermaster Clinic Seminyak, renowned for its radiance therapies.',
    ] as string[],
    treatments: [
      { name: 'Balinese Massage', description: 'Release built up tension with a traditional Balinese massage. Using a combination of gentle stretches, acupressure and aromatherapy oils to stimulate the flow of blood, oxygen and energy around your body, you will feel totally relaxed in no time.' },
      { name: 'Foot Reflexology', description: 'Foot reflexology is a natural healing art based on the principle that there are reflexes in the feet which correspond to every part of the body. Through application of pressure on these reflexes tension is relieved and circulation improved leaving you feeling balanced.' },
      { name: 'Manicure/Pedicure', description: 'Our hands and feet work hard for us every day but rarely get the attention they deserve. Treat them to a manicure or pedicure, which usually comes with the added bonus of a quick hand or foot massage.' },
      { name: 'Body Scrub', description: 'A full body scrub will exfoliate and hydrate your skin leaving it soft and smooth. A rejuvenating scrub combines an abrasive material such as salt, coffee, rice bran or pecan hulls with essential oils to remove any impurities and make your skin glow.' },
    ] satisfies Treatment[],
    offers: [
      { title: 'Complimentary Hydrafacial and More', description: 'Enjoy a complimentary Hydrafacial (worth IDR 2,750,000) when you stay for 5 nights or more at Villa Dhanika. For treatments exceeding IDR 10,000,000, we’ll include free transport to and from the clinic, ensuring a seamless spa experience.' },
      { title: 'Personalised Doctor’s Visit', description: 'For your ultimate convenience, spend a minimum of IDR 20,000,000 on villa treatments and receive a complimentary doctor’s visit at Villa Dhanika.' },
      { title: 'Free Online Consultation', description: 'Begin your wellness journey with a free online consultation with a skilled Dermaster doctor.' },
    ] satisfies Offer[],
  },

  /** From spreadsheet [9] Dining. Max 2 paragraphs. */
  dining: {
    eyebrow: 'Dining',
    heading: 'Breakfast by the pool, Canggu at your doorstep',
    paragraphs: [
      'Enjoy and savor a delicious continental breakfast in the dining room, rooftop cabana or poolside during your stay. Villa Dhanika’s attendants can also serve barista coffees, fresh juices and a small selection of snacks.',
      'For lunch or dinner, take advantage of the fabulous location to discover some of Bali’s best restaurants and cafes just minutes away. From bohemian health food cafes to traditional pizzerias, exciting Japanese fusion, sophisticated fine dining and everything in between, there is something for every mood and palate.',
    ] as string[],
    image: 'breakfast.webp',
  },


  location: {
    eyebrow: 'Location',
    heading: 'Rice fields on one side, Canggu on the other',
    /** From spreadsheet [20] Locale. Max 2 paragraphs. */
    paragraphs: [
      'With lovely views over rice paddies, lush banana plantations and the village of Berawa beyond, Villa Dhanika feels semi-rural and peaceful. But walk down the lane to find yourself right in the thick of all the action of Canggu, Bali’s most happening neighbourhood. A long strip of cafes, restaurants, boutiques, art markets and spa salons lead all the way to Batu Bolong Beach.',
      'Here you find a string of seafood restaurants and casual beach bars that are the perfect spot for catching a famous Bali sunset. Echo Beach is also nearby, as are the famous beach clubs of Berawa Beach, including Finns, Atlas and Cafe Del Mar. Taxis are easily arranged.',
    ] as string[],
    /** From spreadsheet [78] Things To Do, split into single-line items. */
    thingsToDo: [
      'Shop till you drop. Villa Dhanika is right in the heart of Canggu, a fantastic shopping district with an eclectic array of concept stores, designer boutiques, surf shops and art markets.',
      'Discover Bali’s top beach clubs. Canggu is home to world-class beach clubs that offer something for everyone.',
      'Visit the mystical Hotel Tugu Bali at Batu Bolong Beach. Bali’s first museum hotel is filled with priceless Indonesian artworks and antiques and its award-winning spa offers age-old Eastern therapies.',
      'Catch a famous Bali Sunset at Echo Beach, less than two kilometres from the villa. Enjoy the laid-back vibe at a casual beach bar as you sink into a beanbag with a Bintang beer, or savour a craft cocktail from one of the many bars and restaurants that straddle the beachfront.',
      'Acclaimed as the world’s best, the atmospheric Elephant Safari Park in Taro (north of Ubud) provides a sanctuary for elephants rescued from Sumatra, with opportunities for trekking, hand feeding, and photo taking.',
      'Covering 3.8 hectares of tropical parkland in Kuta, Waterbom Bali has 16 water slides (including The Climax with its 360-degree loop) to entertain the young and the young at heart.',
      'Drive westwards to explore the charming Tabanan Regency, revealing terraced rice fields of emerald green, volcanic mountains and black-sand beaches dotted with fishing communities.',
      'Explore Bali’s backroads, lakes, volcanoes, forests and beaches on the back of a Harley Davidson bike with Island Biker Tours.',
      'Head north to explore the volcanic lakes near the mountain town of Bedugul, including Lake Bratan with its photogenic and stunningly positioned Pura Ulun Danu, one of Bali’s most important temples.',
      'Join an exclusive trekking tour for breathtaking vistas and heart-warming encounters, while supporting sustainable social change in the once-forgotten villages of Muntigunung.',
    ] as string[],
    image: 'location.webp',
  },

  team: {
    eyebrow: 'Our Team',
    heading: 'Looked after from arrival to departure',
    /** From spreadsheet [70]. One paragraph. */
    intro: 'Villa Dhanika’s welcoming staff will look after you during your stay. All staff members are from the local area and will be happy to chat and share insider knowledge, but if you prefer a more discreet service let the Villa Manager know. It’s your holiday so your wish is our command.',
    roles: [
      { icon: 'UserCheck', role: 'Villa Manager', description: 'Villa Dhanika’s full-time manager oversees day to day operations at the villa including guest service. They will coordinate your requirements with other staff and can arrange transport, a private chef, and take care of all your special requests, big and small. When not on site, they are available by phone around the clock.' },
      { icon: 'Utensils', role: 'Villa Attendants', description: 'From serving meals to cleaning and tidying rooms, friendly professional villa attendants are on hand to take care of all your needs.' },
      { icon: 'ShieldCheck', role: 'Security', description: 'Offer 24 hour security at the villa.' },
    ] satisfies StaffRole[],
  },

  events: {
    capacity: 'Up to 30 guests seated or standing, inclusive of your 14 in-house party.',
    note: 'The grand Dining Room is ideal for intimate gatherings and private parties.',
  },
} as const
