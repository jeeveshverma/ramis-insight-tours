import type { Bi } from '../i18n';
import type { PlaceId } from './places';

/**
 * The nine packages from the old site, with their prices as published there (USD per person unless
 * `couple`). The flat activity lists were regrouped into days; the 14/16/21-night pages already
 * carried day groupings and those were kept. Names in quotes are proposals pending Rami's approval.
 */
export type TourId =
  | 'cairo-essentials' | 'cairo-and-the-coast' | 'pharaohs-trail' | 'nile-to-red-sea' | 'grand-egypt'
  | 'sacred-egypt' | 'the-complete-egypt' | 'honeymoon' | 'design-your-own';

export type Region = 'cairo' | 'nile' | 'redsea' | 'desert';
export type Style = 'classic' | 'spiritual' | 'honeymoon' | 'custom';
export type StayKind = 'guesthouse' | 'hotel' | 'hotel5' | 'cruise' | 'felucca' | 'tent' | 'camp';

export interface Day { n: number; title: Bi; place: PlaceId; items: Bi[]; night?: StayKind; icon?: string }
export interface Tier { label: Bi; adult?: number; student?: number }

export interface Tour {
  id: TourId;
  /** Slug on the old Wix site, for redirects. */
  old: string;
  name: Bi;
  tagline: Bi;
  intro: Bi;
  nights: number;
  days: number;
  hero: string;
  photos: string[];
  regions: Region[];
  style: Style;
  featured?: boolean;
  /** Prices in USD. `tiers` for group pricing, `couple` for the honeymoon. */
  price: { from?: number; tiers?: Tier[]; couple?: number; kidsUnder5?: number; kidsOver5?: number; onRequest?: boolean };
  addons: { name: Bi; price?: number; note?: Bi }[];
  flights: Bi[];
  route: PlaceId[];
  itinerary: Day[];
  stays: { kind: StayKind; nights: number; where: Bi }[];
  included: Bi[];
  excluded: Bi[];
  bestMonths: Bi;
}

const WELCOME: Bi = { en: 'Welcome drink at a local café: coffee, tea or iced lemon, shisha if you like, and a chat about the days ahead', ar: 'مشروب ترحيب في مقهى محلي: قهوة أو شاي أو ليمون مثلج، وشيشة إن أحببت، وحديث عن الأيام القادمة' };
const PICKUP: Bi = { en: 'Pickup at Cairo airport and transfer to the guest house or your hotel', ar: 'الاستقبال في مطار القاهرة والانتقال إلى بيت الضيافة أو فندقك' };
const GIZA: Bi[] = [
  { en: 'The Sphinx and the three pyramids, with a camel or horse ride around them', ar: 'أبو الهول والأهرامات الثلاثة، مع ركوب الجمل أو الحصان حولها' },
  { en: 'Inside the third pyramid, the Queen’s pyramid and two tombs of the pyramid engineers', ar: 'داخل الهرم الثالث وهرم الملكة ومقبرتي مهندسي الأهرام' },
  { en: 'The Giza dunes for the panoramic view of all nine pyramids', ar: 'كثبان الجيزة لمشاهدة الأهرامات التسعة في لقطة واحدة' },
];
const SHOW: Bi = { en: 'Sound and light show from the guest-house rooftop, or a seated ticket if you prefer', ar: 'عرض الصوت والضوء من سطح بيت الضيافة، أو تذكرة مقعد إن فضّلت' };
const MUSEUM: Bi = { en: 'The Egyptian Museum', ar: 'المتحف المصري' };
const COPTIC: Bi = { en: 'Coptic Cairo: the Church in the Cave (St Simeon), the Coptic Museum and the Hanging Church', ar: 'مصر القديمة: كنيسة سمعان في الكهف والمتحف القبطي والكنيسة المعلقة' };
const ISLAMIC: Bi = { en: 'Islamic Cairo: Amr ibn al-As, Al-Azhar, Muhammad Ali Mosque at the Citadel and Al-Hussein', ar: 'القاهرة الإسلامية: عمرو بن العاص والأزهر ومسجد محمد علي بالقلعة والحسين' };
const KHAN: Bi = { en: 'Khan el-Khalili bazaar after dark', ar: 'خان الخليلي بعد الغروب' };
const CRUISE: Bi = { en: 'Nile dinner cruise with an open buffet and belly dancing', ar: 'عشاء على مركب نيلي مع بوفيه مفتوح ورقص شرقي' };
const SAQQARA: Bi[] = [
  { en: 'Dahshur: the Red Pyramid (you can go inside) and Sneferu’s Bent Pyramid', ar: 'دهشور: الهرم الأحمر (يمكنك دخوله) وهرم سنفرو المنحني' },
  { en: 'Saqqara: the Step Pyramid of Djoser and the tombs', ar: 'سقارة: هرم زوسر المدرج والمقابر' },
  { en: 'The open-air museum at Memphis, the old capital', ar: 'المتحف المفتوح في منف، العاصمة القديمة' },
];
const SUFI: Bi = { en: 'Sufi dance show (tanoura) in the evening', ar: 'عرض التنورة الصوفي مساءً' };
const ALEX: Bi[] = [
  { en: 'Private car to Alexandria', ar: 'سيارة خاصة إلى الإسكندرية' },
  { en: 'The Library of Alexandria, the Catacombs of Kom el-Shoqafa and the Roman amphitheatre', ar: 'مكتبة الإسكندرية وسراديب كوم الشقافة والمسرح الروماني' },
  { en: 'Qaitbay Citadel and Montazah Palace gardens', ar: 'قلعة قايتباي وحدائق قصر المنتزه' },
];
const FAYOUM: Bi[] = [
  { en: 'Private car to Fayoum Oasis', ar: 'سيارة خاصة إلى واحة الفيوم' },
  { en: 'Wadi El-Rayan waterfalls, the whale fossils of Wadi El-Hitan and Lake Qarun', ar: 'شلالات وادي الريان وحفريات وادي الحيتان وبحيرة قارون' },
];
const AZHAR_PARK: Bi = { en: 'Picnic in Al-Azhar Park with the view over the old city', ar: 'نزهة في حديقة الأزهر بإطلالتها على المدينة القديمة' };
const FAMILY_LUNCH: Bi = { en: 'Lunch with the family', ar: 'غداء مع العائلة' };
const LUXOR_WEST: Bi[] = [
  { en: 'The Valley of the Kings and Tutankhamun’s tomb', ar: 'وادي الملوك ومقبرة توت عنخ آمون' },
  { en: 'The Valley of the Queens and Hatshepsut’s temple at Deir el-Bahari', ar: 'وادي الملكات ومعبد حتشبسوت في الدير البحري' },
];
const LUXOR_EAST: Bi[] = [
  { en: 'Karnak Temple in the morning light', ar: 'معبد الكرنك في ضوء الصباح' },
  { en: 'Luxor Temple and a crossing of the Nile by boat', ar: 'معبد الأقصر وعبور النيل بالقارب' },
];
const ABU_SIMBEL: Bi[] = [
  { en: 'Abu Simbel before dawn: the great temple of Ramses II and the temple of Nefertari', ar: 'أبو سمبل قبل الفجر: معبد رمسيس الثاني العظيم ومعبد نفرتاري' },
];
const ASWAN: Bi[] = [
  { en: 'Philae, the temple of Isis, by boat', ar: 'فيلة، معبد إيزيس، بالقارب' },
  { en: 'The High Dam and a Nile crossing', ar: 'السد العالي وعبور النيل' },
];
const NUBIAN: Bi = { en: 'A Nubian village by boat', ar: 'قرية نوبية بالقارب' };
const SHARM: Bi[][] = [
  [{ en: 'Flight Cairo to Sharm El Sheikh', ar: 'طيران من القاهرة إلى شرم الشيخ' }, { en: 'Boat trip to Tiran Island: snorkelling at three reefs, lunch on board', ar: 'رحلة بحرية إلى جزيرة تيران: غطس سطحي عند ثلاث شعاب وغداء على المركب' }],
  [{ en: 'Ras Mohamed National Park, swimming at two bays', ar: 'محمية رأس محمد والسباحة في خليجين' }, { en: 'Bedouin dinner in the desert by camel or beach buggy', ar: 'عشاء بدوي في الصحراء بالجمل أو العربة الصحراوية' }],
];
const DAHAB: Bi[][] = [
  [{ en: 'Drive to Dahab; full day snorkelling at the Blue Hole', ar: 'الانتقال إلى دهب؛ يوم كامل غطس سطحي في البلو هول' }],
  [{ en: 'Full day Red Sea boat excursion, snorkelling or scuba diving', ar: 'يوم كامل برحلة بحرية في البحر الأحمر، غطس سطحي أو غوص' }],
  [{ en: 'A free day in Dahab', ar: 'يوم حر في دهب' }],
];

const INCLUDED: Bi[] = [
  { en: 'Accommodation in a 3-star hotel or at our guest house', ar: 'الإقامة في فندق ثلاث نجوم أو في بيت ضيافتنا' },
  { en: 'Entrance tickets and fees for every activity', ar: 'تذاكر الدخول والرسوم لكل الأنشطة' },
  { en: 'Breakfast and lunch every day', ar: 'الإفطار والغداء يومياً' },
  { en: 'All tips at the sites, so nobody asks you for money', ar: 'كل الإكراميات في المواقع، فلا يطلب منك أحد نقوداً' },
  { en: 'All ground transport, private', ar: 'كل التنقلات البرية، خاصة' },
  { en: 'Domestic flights where the itinerary lists them', ar: 'الرحلات الداخلية حيثما وردت في البرنامج' },
];
const EXCLUDED: Bi[] = [
  { en: 'Egyptian entry visa (on arrival, about $25)', ar: 'تأشيرة دخول مصر (عند الوصول، نحو 25 دولاراً)' },
  { en: 'Dinner, except the dinners named in the itinerary', ar: 'العشاء، عدا العشاء المذكور في البرنامج' },
  { en: 'International flights', ar: 'الطيران الدولي' },
  { en: 'Drinks', ar: 'المشروبات' },
  { en: 'Tips for the tour team', ar: 'إكراميات فريق الرحلة' },
];
const SUN_FEST = { name: { en: 'Abu Simbel Sun Festival', ar: 'مهرجان تعامد الشمس بأبو سمبل' }, price: 125, note: { en: 'Only on 22 February and 22 October', ar: 'في 22 فبراير و22 أكتوبر فقط' } };
const BALLOON = { name: { en: 'Sunrise hot-air balloon over Luxor', ar: 'منطاد عند الشروق فوق الأقصر' }, note: { en: 'Priced at the time of booking', ar: 'يحدد السعر عند الحجز' } };
const BUGGY = { name: { en: 'Beach buggy in the Sinai mountains and/or mountain dinner', ar: 'عربة صحراوية في جبال سيناء و/أو عشاء في الجبل' }, note: { en: 'Priced at the time of booking', ar: 'يحدد السعر عند الحجز' } };

const CAIRO_DAYS = (showOnFirst = true): Day[] => [
  { n: 1, title: { en: 'Arrival in Cairo', ar: 'الوصول إلى القاهرة' }, place: 'giza', items: [PICKUP, WELCOME], night: 'guesthouse', icon: 'plane' },
  { n: 2, title: { en: 'The pyramids, and the show at night', ar: 'الأهرامات، والعرض ليلاً' }, place: 'giza', items: [...GIZA, FAMILY_LUNCH, ...(showOnFirst ? [SHOW] : [])], night: 'guesthouse', icon: 'pyramid' },
  { n: 3, title: { en: 'Museum, mosques and the bazaar', ar: 'المتحف والمساجد والخان' }, place: 'cairo', items: [MUSEUM, ISLAMIC, KHAN, SUFI], night: 'guesthouse', icon: 'mosque' },
  { n: 4, title: { en: 'Dahshur, Saqqara and Memphis', ar: 'دهشور وسقارة ومنف' }, place: 'saqqara', items: SAQQARA, night: 'guesthouse', icon: 'pyramid' },
  { n: 5, title: { en: 'Coptic Cairo and the Nile at sunset', ar: 'مصر القديمة والنيل عند الغروب' }, place: 'cairo', items: [{ en: 'A walk through Islamic Cairo', ar: 'جولة سيراً في القاهرة الإسلامية' }, COPTIC, AZHAR_PARK, CRUISE], night: 'guesthouse', icon: 'church' },
];
const UPPER_EGYPT = (start: number, cruise: boolean): Day[] => [
  { n: start, title: { en: 'Fly to Aswan', ar: 'طيران إلى أسوان' }, place: 'aswan', items: [{ en: 'Morning flight Cairo to Aswan', ar: 'طيران صباحي من القاهرة إلى أسوان' }, ...ASWAN, ...(cruise ? [NUBIAN] : [])], night: 'hotel', icon: 'plane' },
  { n: start + 1, title: { en: 'Abu Simbel at sunrise', ar: 'أبو سمبل عند الشروق' }, place: 'abu-simbel', items: [...ABU_SIMBEL, { en: 'Back to Aswan; afternoon on the river', ar: 'العودة إلى أسوان؛ العصر على النهر' }], night: cruise ? 'cruise' : 'hotel', icon: 'sun' },
  { n: start + 2, title: { en: 'Kom Ombo and Edfu', ar: 'كوم أمبو وإدفو' }, place: 'edfu', items: [{ en: 'The double temple of Sobek and Horus at Kom Ombo', ar: 'معبد سوبك وحورس المزدوج في كوم أمبو' }, { en: 'The temple of Horus at Edfu', ar: 'معبد حورس في إدفو' }], night: cruise ? 'cruise' : 'hotel', icon: 'temple' },
  { n: start + 3, title: { en: 'Luxor, west bank', ar: 'الأقصر، البر الغربي' }, place: 'luxor', items: LUXOR_WEST, night: cruise ? 'cruise' : 'hotel', icon: 'temple' },
  { n: start + 4, title: { en: 'Dendera and Abydos', ar: 'دندرة وأبيدوس' }, place: 'dendera', items: [{ en: 'Hathor’s temple at Dendera', ar: 'معبد حتحور في دندرة' }, { en: 'Seti I’s temple at Abydos', ar: 'معبد سيتي الأول في أبيدوس' }], night: 'hotel', icon: 'temple' },
  { n: start + 5, title: { en: 'Karnak, Luxor Temple, fly to Cairo', ar: 'الكرنك ومعبد الأقصر والطيران إلى القاهرة' }, place: 'luxor', items: [...LUXOR_EAST, { en: 'Evening flight Luxor to Cairo', ar: 'طيران مسائي من الأقصر إلى القاهرة' }], night: 'guesthouse', icon: 'plane' },
];
const SINAI = (start: number): Day[] => [
  { n: start, title: { en: 'Fly to Sharm, Tiran Island', ar: 'طيران إلى شرم، جزيرة تيران' }, place: 'sharm', items: SHARM[0], night: 'hotel', icon: 'snorkel' },
  { n: start + 1, title: { en: 'Ras Mohamed and a Bedouin dinner', ar: 'رأس محمد وعشاء بدوي' }, place: 'sharm', items: SHARM[1], night: 'hotel', icon: 'camel' },
  { n: start + 2, title: { en: 'Dahab and the Blue Hole', ar: 'دهب والبلو هول' }, place: 'dahab', items: DAHAB[0], night: 'hotel', icon: 'snorkel' },
  { n: start + 3, title: { en: 'A day at sea', ar: 'يوم في البحر' }, place: 'dahab', items: DAHAB[1], night: 'hotel', icon: 'boat' },
  { n: start + 4, title: { en: 'Dahab, slowly', ar: 'دهب على مهل' }, place: 'dahab', items: DAHAB[2], night: 'hotel', icon: 'sun' },
  { n: start + 5, title: { en: 'Back to Cairo', ar: 'العودة إلى القاهرة' }, place: 'giza', items: [{ en: 'Flight Sharm El Sheikh to Cairo and transfer', ar: 'طيران من شرم الشيخ إلى القاهرة والانتقال' }], night: 'guesthouse', icon: 'plane' },
];
const DEPART = (n: number): Day => ({ n, title: { en: 'Departure', ar: 'المغادرة' }, place: 'giza', items: [{ en: 'Breakfast on the rooftop and transfer to the airport', ar: 'إفطار على السطح والانتقال إلى المطار' }], icon: 'plane' });

export const TOURS: Tour[] = [
  {
    id: 'cairo-essentials', old: '4-days-and-3-nights', nights: 3, days: 4, style: 'classic', regions: ['cairo'], featured: true,
    name: { en: 'Cairo Essentials', ar: 'أساسيات القاهرة' },
    tagline: { en: 'Four days, every must-see, and a rooftop with the pyramids in it', ar: 'أربعة أيام، كل ما يجب رؤيته، وسطح يطل على الأهرامات' },
    intro: { en: 'The short version of Egypt done properly: the pyramids inside and out, the museum, both old Cairos, the bazaar at night, dinner on the Nile and a morning at Saqqara. You sleep at our guest house, ten minutes from the Sphinx.', ar: 'النسخة القصيرة من مصر كما ينبغي: الأهرامات من الداخل والخارج، والمتحف، والقاهرتان القديمتان، والخان ليلاً، وعشاء على النيل، وصباح في سقارة. تبيت في بيت ضيافتنا، على بعد عشر دقائق من أبو الهول.' },
    hero: 'pyramids-golden-hour', photos: ['pyramids-golden-hour', 'khan-el-khalili-lamps', 'mosque-courtyard', 'rooftop-breakfast', 'great-pyramid-guests'],
    price: { from: 850, tiers: [{ label: { en: '1 to 6 travellers', ar: 'من 1 إلى 6 مسافرين' }, adult: 850, student: 575 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [], flights: [], route: ['giza', 'cairo', 'saqqara'],
    itinerary: [
      CAIRO_DAYS()[0], CAIRO_DAYS()[1],
      { n: 3, title: { en: 'Two Cairos and the Nile', ar: 'قاهرتان والنيل' }, place: 'cairo', items: [MUSEUM, COPTIC, ISLAMIC, KHAN, CRUISE], night: 'guesthouse', icon: 'mosque' },
      { n: 4, title: { en: 'Saqqara, then home', ar: 'سقارة، ثم العودة' }, place: 'saqqara', items: [...SAQQARA, { en: 'Transfer to the airport', ar: 'الانتقال إلى المطار' }], icon: 'plane' },
    ],
    stays: [{ kind: 'guesthouse', nights: 3, where: { en: 'Giza', ar: 'الجيزة' } }],
    included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'All year', ar: 'طوال العام' },
  },
  {
    id: 'cairo-and-the-coast', old: '8-days-and-7-nights', nights: 7, days: 8, style: 'classic', regions: ['cairo'],
    name: { en: 'Cairo & the Coast', ar: 'القاهرة والساحل' },
    tagline: { en: 'A week around the capital, with Alexandria and the Fayoum desert', ar: 'أسبوع حول العاصمة، مع الإسكندرية وصحراء الفيوم' },
    intro: { en: 'Everything in Cairo Essentials at an easier pace, plus a Sufi night, a day on the Mediterranean in Alexandria, a day of waterfalls and whale fossils in Fayoum, and a picnic over the old city.', ar: 'كل ما في أساسيات القاهرة بإيقاع أهدأ، مع ليلة صوفية، ويوم على المتوسط في الإسكندرية، ويوم بين الشلالات وحفريات الحيتان في الفيوم، ونزهة فوق المدينة القديمة.' },
    hero: 'qaitbay-citadel', photos: ['qaitbay-citadel', 'plateau-sunset-watch', 'mosque-courtyard', 'khan-el-khalili-lamps', 'nile-bank-picnic'],
    price: { from: 1315, tiers: [{ label: { en: '1 to 6 travellers', ar: 'من 1 إلى 6 مسافرين' }, adult: 1315, student: 1075 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [], flights: [], route: ['giza', 'cairo', 'saqqara', 'alexandria', 'fayoum'],
    itinerary: [
      ...CAIRO_DAYS(),
      { n: 6, title: { en: 'Alexandria', ar: 'الإسكندرية' }, place: 'alexandria', items: ALEX, night: 'guesthouse', icon: 'sea' },
      { n: 7, title: { en: 'Fayoum Oasis', ar: 'واحة الفيوم' }, place: 'fayoum', items: FAYOUM, night: 'guesthouse', icon: 'palm' },
      { n: 8, title: { en: 'A last morning', ar: 'صباح أخير' }, place: 'cairo', items: [{ en: 'Shopping in New Cairo, or a free morning', ar: 'تسوق في القاهرة الجديدة، أو صباح حر' }, { en: 'Transfer to the airport', ar: 'الانتقال إلى المطار' }], icon: 'plane' },
    ],
    stays: [{ kind: 'guesthouse', nights: 7, where: { en: 'Giza', ar: 'الجيزة' } }],
    included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
  },
  {
    id: 'pharaohs-trail', old: '11-days-and-10-nights', nights: 10, days: 11, style: 'classic', regions: ['cairo', 'nile'], featured: true,
    name: { en: "Pharaohs' Trail", ar: 'درب الفراعنة' },
    tagline: { en: 'Cairo, the coast, and three nights in Luxor', ar: 'القاهرة والساحل وثلاث ليالٍ في الأقصر' },
    intro: { en: 'Cairo & the Coast, then south to Luxor for the Valleys of the Kings and Queens, Karnak at dawn and, if you like, a balloon over the west bank.', ar: 'القاهرة والساحل، ثم جنوباً إلى الأقصر لوادي الملوك والملكات، والكرنك عند الفجر، ومنطاد فوق البر الغربي إن أحببت.' },
    hero: 'film-luxor-temple-dusk', photos: ['karnak-group', 'luxor-group-white', 'temple-light-shaft', 'pyramids-golden-hour', 'qaitbay-citadel'],
    price: { from: 2020, tiers: [{ label: { en: '1 to 6 travellers', ar: 'من 1 إلى 6 مسافرين' }, adult: 2020, student: 1630 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [BALLOON], flights: [{ en: 'Cairo to Luxor and back', ar: 'القاهرة إلى الأقصر والعودة' }], route: ['giza', 'cairo', 'saqqara', 'alexandria', 'fayoum', 'luxor'],
    itinerary: [
      ...CAIRO_DAYS(),
      { n: 6, title: { en: 'Alexandria', ar: 'الإسكندرية' }, place: 'alexandria', items: ALEX, night: 'guesthouse', icon: 'sea' },
      { n: 7, title: { en: 'Fayoum Oasis', ar: 'واحة الفيوم' }, place: 'fayoum', items: FAYOUM, night: 'guesthouse', icon: 'palm' },
      { n: 8, title: { en: 'To Luxor', ar: 'إلى الأقصر' }, place: 'luxor', items: [{ en: 'Flight Cairo to Luxor', ar: 'طيران من القاهرة إلى الأقصر' }, { en: 'Luxor Temple at sunset', ar: 'معبد الأقصر عند الغروب' }], night: 'hotel', icon: 'plane' },
      { n: 9, title: { en: 'The west bank', ar: 'البر الغربي' }, place: 'luxor', items: [{ en: 'Optional sunrise balloon', ar: 'منطاد اختياري عند الشروق' }, ...LUXOR_WEST], night: 'hotel', icon: 'temple' },
      { n: 10, title: { en: 'Karnak and the river', ar: 'الكرنك والنهر' }, place: 'luxor', items: [...LUXOR_EAST, { en: 'Evening flight to Cairo', ar: 'طيران مسائي إلى القاهرة' }], night: 'guesthouse', icon: 'temple' },
      DEPART(11),
    ],
    stays: [{ kind: 'guesthouse', nights: 7, where: { en: 'Giza', ar: 'الجيزة' } }, { kind: 'hotel', nights: 3, where: { en: 'Luxor', ar: 'الأقصر' } }],
    included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'October to March', ar: 'من أكتوبر إلى مارس' },
  },
  {
    id: 'nile-to-red-sea', old: '14-days-and-13-nights', nights: 13, days: 14, style: 'classic', regions: ['cairo', 'nile', 'redsea'],
    name: { en: 'Nile to Red Sea', ar: 'من النيل إلى البحر الأحمر' },
    tagline: { en: 'Two weeks: Cairo, Upper Egypt and the Sinai coast', ar: 'أسبوعان: القاهرة وصعيد مصر وساحل سيناء' },
    intro: { en: 'Four days in Cairo, then Aswan, Abu Simbel at sunrise, Luxor and the temples between them, then a flight to the Red Sea for Tiran Island, Ras Mohamed and the Blue Hole.', ar: 'أربعة أيام في القاهرة، ثم أسوان وأبو سمبل عند الشروق والأقصر والمعابد بينهما، ثم طيران إلى البحر الأحمر لجزيرة تيران ورأس محمد والبلو هول.' },
    hero: 'luxor-group-white', photos: ['temple-light-shaft', 'couple-dusk', 'karnak-group', 'pyramids-friends-backs', 'nile-bank-picnic'],
    price: { from: 2660, tiers: [{ label: { en: '1 to 6 travellers', ar: 'من 1 إلى 6 مسافرين' }, adult: 2660, student: 2305 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [SUN_FEST, BUGGY], flights: [{ en: 'Cairo to Aswan', ar: 'القاهرة إلى أسوان' }, { en: 'Luxor to Cairo', ar: 'الأقصر إلى القاهرة' }, { en: 'Cairo to Sharm El Sheikh', ar: 'القاهرة إلى شرم الشيخ' }],
    route: ['giza', 'cairo', 'saqqara', 'aswan', 'abu-simbel', 'edfu', 'luxor', 'dendera', 'sharm', 'dahab'],
    itinerary: [...CAIRO_DAYS().slice(0, 4), { ...CAIRO_DAYS()[4], n: 5 }, ...UPPER_EGYPT(6, false).slice(0, 5), { ...UPPER_EGYPT(6, false)[5], n: 11, items: [...LUXOR_EAST, { en: 'Flight Luxor to Cairo, then Cairo to Sharm El Sheikh', ar: 'طيران من الأقصر إلى القاهرة ثم إلى شرم الشيخ' }], night: 'hotel', title: { en: 'Karnak, then the Red Sea', ar: 'الكرنك، ثم البحر الأحمر' } },
      { n: 12, title: { en: 'Tiran Island', ar: 'جزيرة تيران' }, place: 'sharm', items: [SHARM[0][1], ...SHARM[1]], night: 'hotel', icon: 'snorkel' },
      { n: 13, title: { en: 'Dahab and the Blue Hole', ar: 'دهب والبلو هول' }, place: 'dahab', items: [...DAHAB[0], ...DAHAB[1]], night: 'hotel', icon: 'snorkel' },
      { n: 14, title: { en: 'Dahab, then home', ar: 'دهب، ثم العودة' }, place: 'dahab', items: [...DAHAB[2], { en: 'Flight to Cairo for your connection', ar: 'طيران إلى القاهرة لرحلتك الدولية' }], icon: 'plane' },
    ],
    stays: [{ kind: 'guesthouse', nights: 5, where: { en: 'Giza', ar: 'الجيزة' } }, { kind: 'hotel', nights: 5, where: { en: 'Aswan and Luxor', ar: 'أسوان والأقصر' } }, { kind: 'hotel', nights: 3, where: { en: 'Sharm El Sheikh and Dahab', ar: 'شرم الشيخ ودهب' } }],
    included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
  },
  {
    id: 'grand-egypt', old: '16-days-and-15-nights', nights: 15, days: 16, style: 'classic', regions: ['cairo', 'nile', 'redsea'], featured: true,
    name: { en: 'Grand Egypt', ar: 'مصر الكبرى' },
    tagline: { en: 'Cairo, a Nile cruise, a Nubian village and a week by the Red Sea', ar: 'القاهرة ورحلة نيلية وقرية نوبية وأسبوع على البحر الأحمر' },
    intro: { en: 'Our most complete classic itinerary. Four days in Cairo, Abu Simbel at sunrise, three nights on a Nile cruise from Aswan to Luxor with Kom Ombo, Edfu, Dendera and Abydos, a Nubian village by boat, then six days in Sinai.', ar: 'أكثر برامجنا الكلاسيكية اكتمالاً. أربعة أيام في القاهرة، وأبو سمبل عند الشروق، وثلاث ليالٍ في رحلة نيلية من أسوان إلى الأقصر مع كوم أمبو وإدفو ودندرة وأبيدوس، وقرية نوبية بالقارب، ثم ستة أيام في سيناء.' },
    hero: 'nile-bank-picnic', photos: ['nile-bank-picnic', 'luxor-group-white', 'temple-selfie', 'couple-dusk', 'pyramids-golden-hour'],
    price: { from: 2705, tiers: [{ label: { en: '1 to 3 travellers', ar: 'من 1 إلى 3 مسافرين' }, adult: 3205, student: 2600 }, { label: { en: '4 or more', ar: '4 فأكثر' }, adult: 2705, student: 2285 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [SUN_FEST, BUGGY], flights: [{ en: 'Cairo to Aswan', ar: 'القاهرة إلى أسوان' }, { en: 'Luxor to Cairo', ar: 'الأقصر إلى القاهرة' }, { en: 'Cairo to Sharm El Sheikh', ar: 'القاهرة إلى شرم الشيخ' }, { en: 'Sharm El Sheikh to Cairo', ar: 'شرم الشيخ إلى القاهرة' }],
    route: ['giza', 'cairo', 'saqqara', 'aswan', 'abu-simbel', 'kom-ombo', 'edfu', 'luxor', 'dendera', 'abydos', 'sharm', 'dahab'],
    itinerary: [...CAIRO_DAYS().slice(0, 5), ...UPPER_EGYPT(6, true), ...SINAI(12).slice(0, 4), { ...SINAI(12)[4], items: [...DAHAB[2], { en: 'Evening flight to Cairo', ar: 'طيران مسائي إلى القاهرة' }], night: 'guesthouse' }],
    stays: [{ kind: 'guesthouse', nights: 6, where: { en: 'Giza', ar: 'الجيزة' } }, { kind: 'hotel', nights: 2, where: { en: 'Aswan and Luxor', ar: 'أسوان والأقصر' } }, { kind: 'cruise', nights: 3, where: { en: 'Aswan to Luxor', ar: 'من أسوان إلى الأقصر' } }, { kind: 'hotel', nights: 4, where: { en: 'Sharm El Sheikh and Dahab', ar: 'شرم الشيخ ودهب' } }],
    included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
  },
  {
    id: 'sacred-egypt', old: 'spiritual-tour', nights: 16, days: 17, style: 'spiritual', regions: ['cairo', 'nile'],
    name: { en: 'Sacred Egypt', ar: 'مصر المقدسة' },
    tagline: { en: 'Seventeen days through the temples, with a night under the stars at Abusir', ar: 'سبعة عشر يوماً بين المعابد، وليلة تحت النجوم في أبوصير' },
    intro: { en: 'For travellers who come for the temples rather than the beaches. Cairo and Giza, then Aswan, Abu Simbel, Philae, Luxor’s two banks, Abydos, Dendera, Edfu, Kom Ombo and Akhenaten’s Amarna, ending with a night around the fire with our Bedouin hosts at Abusir and the sun temple of Abu Gorab at dawn.', ar: 'لمن يأتون من أجل المعابد لا الشواطئ. القاهرة والجيزة، ثم أسوان وأبو سمبل وفيلة وضفتا الأقصر وأبيدوس ودندرة وإدفو وكوم أمبو وعمارنة إخناتون، وختاماً ليلة حول النار مع مضيفينا البدو في أبوصير ومعبد الشمس في أبو غراب عند الفجر.' },
    hero: 'temple-light-shaft', photos: ['temple-light-shaft', 'film-dendera-columns', 'film-edfu-courtyard', 'temple-selfie', 'film-luxor-temple-dusk'],
    price: { from: 3155, tiers: [{ label: { en: '1 to 3 travellers', ar: 'من 1 إلى 3 مسافرين' }, adult: 4505, student: 4105 }, { label: { en: '4 or more', ar: '4 فأكثر' }, adult: 3155, student: 2990 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [SUN_FEST, BALLOON], flights: [{ en: 'Cairo to Aswan', ar: 'القاهرة إلى أسوان' }, { en: 'Luxor to Cairo', ar: 'الأقصر إلى القاهرة' }],
    route: ['giza', 'cairo', 'saqqara', 'aswan', 'abu-simbel', 'kom-ombo', 'edfu', 'luxor', 'dendera', 'abydos', 'amarna', 'abusir'],
    itinerary: [
      ...CAIRO_DAYS().slice(0, 5),
      { n: 6, title: { en: 'Fly to Aswan, Philae by boat', ar: 'طيران إلى أسوان، فيلة بالقارب' }, place: 'aswan', items: [{ en: 'Morning flight Cairo to Aswan', ar: 'طيران صباحي من القاهرة إلى أسوان' }, ...ASWAN], night: 'hotel', icon: 'plane' },
      { n: 7, title: { en: 'Abu Simbel at sunrise', ar: 'أبو سمبل عند الشروق' }, place: 'abu-simbel', items: [...ABU_SIMBEL, { en: 'The Nubian desert in the afternoon', ar: 'الصحراء النوبية عصراً' }], night: 'hotel', icon: 'sun' },
      { n: 8, title: { en: 'Kom Ombo and Edfu', ar: 'كوم أمبو وإدفو' }, place: 'edfu', items: [{ en: 'Sobek’s temple at Kom Ombo', ar: 'معبد سوبك في كوم أمبو' }, { en: 'Horus’s temple at Edfu, on to Luxor', ar: 'معبد حورس في إدفو، ثم إلى الأقصر' }], night: 'hotel', icon: 'temple' },
      { n: 9, title: { en: 'The Valley of the Kings', ar: 'وادي الملوك' }, place: 'luxor', items: LUXOR_WEST, night: 'hotel', icon: 'temple' },
      { n: 10, title: { en: 'Karnak and Luxor Temple', ar: 'الكرنك ومعبد الأقصر' }, place: 'luxor', items: LUXOR_EAST, night: 'hotel', icon: 'temple' },
      { n: 11, title: { en: 'Dendera', ar: 'دندرة' }, place: 'dendera', items: [{ en: 'Hathor’s temple and the zodiac ceiling', ar: 'معبد حتحور وسقف البروج' }], night: 'hotel', icon: 'temple' },
      { n: 12, title: { en: 'Abydos', ar: 'أبيدوس' }, place: 'abydos', items: [{ en: 'Seti I’s temple and the Osireion', ar: 'معبد سيتي الأول والأوزيريون' }], night: 'hotel', icon: 'temple' },
      { n: 13, title: { en: 'A quiet day in Luxor', ar: 'يوم هادئ في الأقصر' }, place: 'luxor', items: [{ en: 'Free morning; optional balloon or a felucca at sunset', ar: 'صباح حر؛ منطاد اختياري أو فلوكة عند الغروب' }], night: 'hotel', icon: 'boat' },
      { n: 14, title: { en: 'Amarna, Akhenaten’s city', ar: 'عمارنة، مدينة إخناتون' }, place: 'amarna', items: [{ en: 'Drive north to Amarna: the tombs of the nobles and the royal road', ar: 'الانتقال شمالاً إلى العمارنة: مقابر النبلاء والطريق الملكي' }], night: 'hotel', icon: 'sun' },
      { n: 15, title: { en: 'Fly to Cairo', ar: 'طيران إلى القاهرة' }, place: 'giza', items: [{ en: 'Back to Luxor and the evening flight to Cairo', ar: 'العودة إلى الأقصر والطيران مساءً إلى القاهرة' }], night: 'guesthouse', icon: 'plane' },
      { n: 16, title: { en: 'A night with the Bedouin at Abusir', ar: 'ليلة مع البدو في أبوصير' }, place: 'abusir', items: [{ en: 'Abusir’s pyramids in the late afternoon', ar: 'أهرامات أبوصير في العصر' }, { en: 'Fire, tea and dinner with our Bedouin hosts; sleep under the stars', ar: 'نار وشاي وعشاء مع مضيفينا البدو؛ ننام تحت النجوم' }], night: 'tent', icon: 'tent' },
      { n: 17, title: { en: 'Abu Gorab at dawn, departure', ar: 'أبو غراب عند الفجر، والمغادرة' }, place: 'abusir', items: [{ en: 'The sun temple of Abu Gorab as the sun comes up', ar: 'معبد الشمس في أبو غراب مع شروق الشمس' }, { en: 'Transfer to the airport', ar: 'الانتقال إلى المطار' }], icon: 'plane' },
    ],
    stays: [{ kind: 'guesthouse', nights: 6, where: { en: 'Giza', ar: 'الجيزة' } }, { kind: 'hotel', nights: 9, where: { en: 'Aswan, Luxor and Minya', ar: 'أسوان والأقصر والمنيا' } }, { kind: 'tent', nights: 1, where: { en: 'Abusir', ar: 'أبوصير' } }],
    included: [...INCLUDED.slice(0, 2), { en: 'Breakfast and lunch, and the Bedouin dinner at Abusir', ar: 'الإفطار والغداء، وعشاء البدو في أبوصير' }, ...INCLUDED.slice(3)],
    excluded: EXCLUDED.filter((_, i) => i !== 1).concat([{ en: 'Dinner, except the Bedouin dinner at Abusir', ar: 'العشاء، عدا عشاء البدو في أبوصير' }]),
    bestMonths: { en: 'October to March', ar: 'من أكتوبر إلى مارس' },
  },
  {
    id: 'the-complete-egypt', old: '21-days-and-20-nights', nights: 20, days: 21, style: 'classic', regions: ['cairo', 'nile', 'redsea', 'desert'],
    name: { en: 'The Complete Egypt', ar: 'مصر الكاملة' },
    tagline: { en: 'Three weeks, from the Nile to the Red Sea to the White Desert', ar: 'ثلاثة أسابيع، من النيل إلى البحر الأحمر إلى الصحراء البيضاء' },
    intro: { en: 'Grand Egypt and then the desert: a free day in Cairo, a 4x4 to Bahariya, two nights camping in the White and Black Deserts with our Bedouin hosts, all meals around the fire.', ar: 'مصر الكبرى ثم الصحراء: يوم حر في القاهرة، ودفع رباعي إلى الواحات البحرية، وليلتان من التخييم في الصحراء البيضاء والسوداء مع مضيفينا البدو، وكل الوجبات حول النار.' },
    hero: 'film-camel-rider', photos: ['desert-sunset-arms', 'nile-bank-picnic', 'temple-light-shaft', 'couple-dusk', 'pyramids-golden-hour', 'plateau-sunset-watch'],
    price: { from: 3280, tiers: [{ label: { en: '1 to 3 travellers', ar: 'من 1 إلى 3 مسافرين' }, adult: 4185, student: 3885 }, { label: { en: '4 or more', ar: '4 فأكثر' }, adult: 3280, student: 3050 }], kidsUnder5: 50, kidsOver5: 25 },
    addons: [SUN_FEST, BUGGY], flights: [{ en: 'Cairo to Aswan', ar: 'القاهرة إلى أسوان' }, { en: 'Luxor to Cairo', ar: 'الأقصر إلى القاهرة' }, { en: 'Cairo to Sharm El Sheikh', ar: 'القاهرة إلى شرم الشيخ' }, { en: 'Sharm El Sheikh to Cairo', ar: 'شرم الشيخ إلى القاهرة' }],
    route: ['giza', 'cairo', 'saqqara', 'aswan', 'abu-simbel', 'kom-ombo', 'edfu', 'luxor', 'dendera', 'abydos', 'sharm', 'dahab', 'bahariya', 'white-desert'],
    itinerary: [
      ...CAIRO_DAYS().slice(0, 5), ...UPPER_EGYPT(6, true), ...SINAI(12),
      { n: 18, title: { en: 'A free day in Cairo', ar: 'يوم حر في القاهرة' }, place: 'cairo', items: [{ en: 'Rest, shop, or ask us for something you have not seen yet', ar: 'استرح أو تسوق أو اطلب منا شيئاً لم تره بعد' }], night: 'guesthouse', icon: 'sun' },
      { n: 19, title: { en: 'Into the Western Desert', ar: 'إلى الصحراء الغربية' }, place: 'bahariya', items: [{ en: 'Drive to Bahariya Oasis, 4x4 into the Black Desert', ar: 'الانتقال إلى الواحات البحرية، ودفع رباعي إلى الصحراء السوداء' }, { en: 'Camp in the White Desert, dinner around the fire', ar: 'تخييم في الصحراء البيضاء، وعشاء حول النار' }], night: 'camp', icon: 'tent' },
      { n: 20, title: { en: 'The White Desert', ar: 'الصحراء البيضاء' }, place: 'white-desert', items: [{ en: 'Crystal Mountain, the chalk formations, Agabat valley', ar: 'جبل الكريستال والتكوينات الطباشيرية ووادي العقبات' }, { en: 'A second night under the stars', ar: 'ليلة ثانية تحت النجوم' }], night: 'camp', icon: 'tent' },
      { n: 21, title: { en: 'Back to Cairo, departure', ar: 'العودة إلى القاهرة والمغادرة' }, place: 'giza', items: [{ en: 'Hot spring at Bahariya, private transfer back to Cairo', ar: 'عين ساخنة في الواحات، وانتقال خاص إلى القاهرة' }, { en: 'Last night at the guest house or transfer to the airport', ar: 'ليلة أخيرة في بيت الضيافة أو الانتقال إلى المطار' }], night: 'guesthouse', icon: 'plane' },
    ],
    stays: [{ kind: 'guesthouse', nights: 8, where: { en: 'Giza', ar: 'الجيزة' } }, { kind: 'hotel', nights: 2, where: { en: 'Aswan and Luxor', ar: 'أسوان والأقصر' } }, { kind: 'cruise', nights: 3, where: { en: 'Aswan to Luxor', ar: 'من أسوان إلى الأقصر' } }, { kind: 'hotel', nights: 5, where: { en: 'Sharm El Sheikh and Dahab', ar: 'شرم الشيخ ودهب' } }, { kind: 'camp', nights: 2, where: { en: 'White Desert', ar: 'الصحراء البيضاء' } }],
    included: [...INCLUDED.slice(0, 2), { en: 'Breakfast and lunch, and all meals while camping', ar: 'الإفطار والغداء، وكل الوجبات أثناء التخييم' }, ...INCLUDED.slice(3)],
    excluded: EXCLUDED, bestMonths: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
  },
  {
    id: 'honeymoon', old: 'honeymoon', nights: 6, days: 7, style: 'honeymoon', regions: ['cairo', 'nile'], featured: true,
    name: { en: 'Honeymoon under the Pyramids', ar: 'شهر عسل تحت الأهرامات' },
    tagline: { en: 'A five-star hotel, a private Bedouin tent and three nights on your own felucca', ar: 'فندق خمس نجوم وخيمة بدوية خاصة وثلاث ليالٍ على فلوكتكما' },
    intro: { en: 'Two nights in a private luxury Bedouin tent with the pyramids outside, the Giza plateau to yourselves in the morning, dinner on the Nile, then a flight to Aswan and three nights sailing on a private felucca with Abu Simbel at sunrise and Philae by boat.', ar: 'ليلتان في خيمة بدوية فاخرة خاصة والأهرامات أمامكما، وهضبة الجيزة لكما وحدكما صباحاً، وعشاء على النيل، ثم طيران إلى أسوان وثلاث ليالٍ من الإبحار على فلوكة خاصة مع أبو سمبل عند الشروق وفيلة بالقارب.' },
    hero: 'couple-dusk', photos: ['couple-dusk', 'pyramids-keffiyeh-couple', 'nile-bank-picnic', 'pyramids-golden-hour', 'plateau-sunset-watch'],
    price: { couple: 4530 },
    addons: [SUN_FEST], flights: [{ en: 'Cairo to Aswan and back', ar: 'القاهرة إلى أسوان والعودة' }], route: ['giza', 'cairo', 'aswan', 'abu-simbel'],
    itinerary: [
      { n: 1, title: { en: 'Arrival, and a tent with a view', ar: 'الوصول، وخيمة بإطلالة' }, place: 'giza', items: [PICKUP, { en: 'Check in at Le Méridien Pyramids (5-star) to freshen up', ar: 'تسجيل الوصول في لو ميريديان الأهرامات (خمس نجوم) للاستراحة' }, WELCOME, { en: 'Night in a private luxury Bedouin tent beside the pyramids', ar: 'ليلة في خيمة بدوية فاخرة خاصة بجوار الأهرامات' }], night: 'tent', icon: 'tent' },
      { n: 2, title: { en: 'The pyramids and the Nile', ar: 'الأهرامات والنيل' }, place: 'giza', items: [...GIZA, SHOW, MUSEUM, CRUISE], night: 'tent', icon: 'pyramid' },
      { n: 3, title: { en: 'Fly to Aswan, board your felucca', ar: 'طيران إلى أسوان، وصعود الفلوكة' }, place: 'aswan', items: [{ en: 'Flight Cairo to Aswan', ar: 'طيران من القاهرة إلى أسوان' }, { en: 'Board your private felucca; sail and sleep on the river', ar: 'صعود فلوكتكما الخاصة؛ إبحار ونوم على النهر' }], night: 'felucca', icon: 'boat' },
      { n: 4, title: { en: 'Abu Simbel at sunrise', ar: 'أبو سمبل عند الشروق' }, place: 'abu-simbel', items: ABU_SIMBEL, night: 'felucca', icon: 'sun' },
      { n: 5, title: { en: 'Philae and the High Dam', ar: 'فيلة والسد العالي' }, place: 'aswan', items: ASWAN, night: 'felucca', icon: 'temple' },
      { n: 6, title: { en: 'Back to Cairo', ar: 'العودة إلى القاهرة' }, place: 'giza', items: [{ en: 'Flight Aswan to Cairo', ar: 'طيران من أسوان إلى القاهرة' }, { en: 'Last night at Le Méridien Pyramids', ar: 'ليلة أخيرة في لو ميريديان الأهرامات' }], night: 'hotel5', icon: 'plane' },
      DEPART(7),
    ],
    stays: [{ kind: 'tent', nights: 2, where: { en: 'Giza plateau', ar: 'هضبة الجيزة' } }, { kind: 'felucca', nights: 3, where: { en: 'Aswan', ar: 'أسوان' } }, { kind: 'hotel5', nights: 1, where: { en: 'Le Méridien Pyramids', ar: 'لو ميريديان الأهرامات' } }],
    included: [{ en: 'Le Méridien Pyramids, the Bedouin tent and the private felucca', ar: 'لو ميريديان الأهرامات والخيمة البدوية والفلوكة الخاصة' }, ...INCLUDED.slice(1)],
    excluded: EXCLUDED, bestMonths: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
  },
  {
    id: 'design-your-own', old: 'choose-yourself', nights: 0, days: 0, style: 'custom', regions: ['cairo', 'nile', 'redsea', 'desert'],
    name: { en: 'Design Your Own', ar: 'صمم رحلتك' },
    tagline: { en: 'Tell us your dates and what you want to see; we build the rest', ar: 'أخبرنا بمواعيدك وما تريد رؤيته؛ ونحن نبني الباقي' },
    intro: { en: 'Every itinerary on this site started as somebody’s custom trip. Pick the places, the pace and the budget, and we will send you a day-by-day plan and a price within a day.', ar: 'كل برنامج على هذا الموقع بدأ كرحلة مخصصة لأحدهم. اختر الأماكن والإيقاع والميزانية، وسنرسل لك خطة يوماً بيوم وسعراً خلال يوم.' },
    hero: 'rami-bazaar', photos: ['pyramids-keffiyeh-couple', 'rami-bazaar', 'plateau-sunset-watch'],
    price: { onRequest: true }, addons: [], flights: [], route: ['giza', 'cairo', 'luxor', 'aswan', 'sharm', 'white-desert', 'siwa'], itinerary: [],
    stays: [], included: INCLUDED, excluded: EXCLUDED, bestMonths: { en: 'Whenever you can travel', ar: 'متى استطعت السفر' },
  },
];

const BY = Object.fromEntries(TOURS.map((t) => [t.id, t])) as Record<TourId, Tour>;
export const tour = (id: TourId) => BY[id];
export const FEATURED = TOURS.filter((t) => t.featured);
