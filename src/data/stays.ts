import type { Bi } from '../i18n';

/**
 * The two properties. Pyramids Temple Guest House facts come from its Booking.com, Google,
 * bedandbreakfast.eu and Cleartrip listings (read 2026-10-18); Amarna has no public data yet.
 */
export type StayId = 'pyramids-temple-guest-house' | 'amarna-guest-house-retreat-luxor';

/** `door` is the pyramid each room is named after on its door sign (where the listing shows it). */
export interface Room { id: string; name: Bi; m2: number; beds: Bi; guests: number; child?: boolean; note?: Bi; door?: { n: number; name: Bi }; photos: string[] }
export interface AmenityGroup { id: string; title: Bi; items: { icon: string; label: Bi; paid?: boolean }[] }

export interface Stay {
  id: StayId;
  status: 'open' | 'coming_soon';
  name: Bi;
  place: Bi;
  tagline: Bi;
  intro: Bi;
  hero: string;
  photos: string[];
  geo?: { lat: number; lng: number };
  address?: Bi;
  from?: number;
  rooms: Room[];
  amenities: AmenityGroup[];
  rules: { label: Bi; value: Bi }[];
  why: { title: Bi; text: Bi; photo: string }[];
  instagram?: string;
}

export const STAYS: Stay[] = [
  {
    id: 'pyramids-temple-guest-house', status: 'open',
    name: { en: 'Pyramids Temple Guest House', ar: 'بيت ضيافة معبد الأهرامات' },
    place: { en: 'Giza', ar: 'الجيزة' },
    tagline: { en: 'Sleep 800 metres from the Sphinx', ar: 'نَم على بعد ٨٠٠ متر من أبو الهول' },
    intro: { en: 'Our family home in Al Haram, on a quiet street a five-minute walk from the Sphinx. Seven rooms, each with its own bathroom and terrace, a rooftop that looks straight at the pyramids, and breakfast cooked by my mother every morning. It is where every one of our tours begins and ends.', ar: 'بيت عائلتنا في الهرم، في شارع هادئ على بعد خمس دقائق سيراً من أبو الهول. سبع غرف لكل منها حمامها وشرفتها، وسطح يطل مباشرة على الأهرامات، وإفطار تطهوه أمي كل صباح. هنا تبدأ كل رحلاتنا وتنتهي.' },
    hero: 'rooftop-sunset-sign',
    photos: ['rooftop-terrace-day', 'rooftop-night-pyramids', 'room-red-bed', 'room-deluxe-queen-bed', 'room-triple-beds', 'rooftop-breakfast', 'rooftop-majlis', 'guesthouse-kitchen', 'room-bathtub', 'guesthouse-corridor', 'guesthouse-entrance', 'family-food-spread'],
    geo: { lat: 29.975098, lng: 31.143436 },
    address: { en: 'Sayed Gabir Street, Al Haram, Giza 12557', ar: 'شارع سيد جابر، الهرم، الجيزة ١٢٥٥٧' },
    from: 35,
    instagram: 'pyramids_temple_guest_house',
    rooms: [
      { id: 'king-balcony', name: { en: 'King Room with Balcony', ar: 'غرفة كينج بشرفة' }, m2: 16, beds: { en: '1 king bed', ar: 'سرير كينج' }, guests: 2, door: { n: 1, name: { en: 'Cheops Pyramids', ar: 'هرم خوفو' } }, photos: ['room-kitchenette', 'room-cheops-door', 'room-bathroom-shower'] },
      { id: 'queen', name: { en: 'Queen Room', ar: 'غرفة كوين' }, m2: 16, beds: { en: '1 queen bed', ar: 'سرير كوين' }, guests: 2, photos: ['room-queen', 'room-bathroom-shower', 'rooftop-sunset-sign'] },
      { id: 'deluxe-queen', name: { en: 'Deluxe Queen Room', ar: 'غرفة كوين ديلوكس' }, m2: 16, beds: { en: '1 queen bed', ar: 'سرير كوين' }, guests: 2, photos: ['room-deluxe-queen-bed', 'room-deluxe-queen', 'guesthouse-corridor'] },
      { id: 'deluxe-family', name: { en: 'Deluxe Room', ar: 'غرفة ديلوكس' }, m2: 20, beds: { en: '1 double bed and 1 single', ar: 'سرير مزدوج وسرير فردي' }, guests: 3, child: true, note: { en: 'Two adults and a child', ar: 'بالغان وطفل' }, door: { n: 5, name: { en: 'Saqqara Pyramids', ar: 'أهرامات سقارة' } }, photos: ['room-saqqara', 'room-saqqara-door'] },
      { id: 'classic-triple', name: { en: 'Classic Triple Room', ar: 'غرفة ثلاثية كلاسيك' }, m2: 20, beds: { en: '3 single beds', ar: 'ثلاثة أسرّة فردية' }, guests: 3, door: { n: 4, name: { en: 'Red Pyramids', ar: 'الهرم الأحمر' } }, photos: ['room-red-bed', 'room-red-door', 'room-bathroom-shower', 'rooftop-night-pyramids'] },
      { id: 'triple', name: { en: 'Triple Room', ar: 'غرفة ثلاثية' }, m2: 36, beds: { en: '1 double bed and 1 single', ar: 'سرير مزدوج وسرير فردي' }, guests: 3, photos: ['room-triple-beds', 'room-bathtub'] },
      { id: 'family', name: { en: 'Family Room', ar: 'غرفة عائلية' }, m2: 32, beds: { en: '2 double beds', ar: 'سريران مزدوجان' }, guests: 4, door: { n: 6, name: { en: 'Black Pyramids', ar: 'الهرم الأسود' } }, photos: ['guesthouse-kitchen', 'room-black-door', 'room-bathtub'] },
    ],
    amenities: [
      { id: 'room', title: { en: 'In every room', ar: 'في كل غرفة' }, items: [
        { icon: 'bath', label: { en: 'Private bathroom', ar: 'حمام خاص' } }, { icon: 'terrace', label: { en: 'Private terrace', ar: 'شرفة خاصة' } }, { icon: 'ac', label: { en: 'Air conditioning and heating', ar: 'تكييف وتدفئة' } },
        { icon: 'kitchen', label: { en: 'Kitchenette with fridge', ar: 'مطبخ صغير بثلاجة' } }, { icon: 'kettle', label: { en: 'Kettle, tea and coffee', ar: 'غلاية وشاي وقهوة' } }, { icon: 'tv', label: { en: 'TV', ar: 'تلفاز' } },
        { icon: 'sofa', label: { en: 'Seating area', ar: 'ركن جلوس' } }, { icon: 'moon', label: { en: 'Blackout curtains', ar: 'ستائر معتمة' } }, { icon: 'towel', label: { en: 'Hairdryer and toiletries', ar: 'مجفف شعر ومستلزمات' } },
      ] },
      { id: 'food', title: { en: 'Food and drink', ar: 'الطعام والشراب' }, items: [
        { icon: 'breakfast', label: { en: 'Egyptian breakfast cooked by the family, free', ar: 'إفطار مصري تطهوه العائلة، مجاناً' } }, { icon: 'tea', label: { en: 'Tea, coffee and water all day, free', ar: 'شاي وقهوة وماء طوال اليوم، مجاناً' } },
        { icon: 'cooking', label: { en: 'Egyptian cooking class with a pyramid view', ar: 'درس طبخ مصري بإطلالة على الهرم' }, paid: true }, { icon: 'roomservice', label: { en: '24-hour room service', ar: 'خدمة الغرف على مدار الساعة' } },
        { icon: 'bar', label: { en: 'Bar and coffee corner', ar: 'بار وركن قهوة' } }, { icon: 'kitchen', label: { en: 'Shared kitchen and minimarket', ar: 'مطبخ مشترك وسوبر ماركت صغير' } },
      ] },
      { id: 'rooftop', title: { en: 'Rooftop and outdoors', ar: 'السطح والهواء الطلق' }, items: [
        { icon: 'rooftop', label: { en: 'Sun terrace facing the pyramids and the Sphinx', ar: 'شرفة شمسية تواجه الأهرامات وأبو الهول' } }, { icon: 'fire', label: { en: 'Outdoor fireplace for cold nights', ar: 'موقد خارجي للليالي الباردة' } },
        { icon: 'show', label: { en: 'Sound and light show seen from your chair', ar: 'عرض الصوت والضوء من مقعدك' } }, { icon: 'bbq', label: { en: 'Picnic and barbecue area', ar: 'ركن نزهة وشواء' } },
        { icon: 'horse', label: { en: 'Horse and camel riding arranged', ar: 'ترتيب ركوب الخيل والجمال' }, paid: true }, { icon: 'bike', label: { en: 'Bicycles', ar: 'دراجات' } },
      ] },
      { id: 'services', title: { en: 'Services', ar: 'الخدمات' }, items: [
        { icon: 'wifi', label: { en: 'Free Wi-Fi throughout', ar: 'واي فاي مجاني في كل مكان' } }, { icon: 'clock', label: { en: '24-hour front desk', ar: 'استقبال على مدار الساعة' } },
        { icon: 'plane', label: { en: 'Airport pickup and drop-off', ar: 'استقبال وتوصيل من المطار' }, paid: true }, { icon: 'tour', label: { en: 'Tour desk: every trip on this site starts here', ar: 'مكتب رحلات: كل رحلة على هذا الموقع تبدأ من هنا' } },
        { icon: 'luggage', label: { en: 'Luggage storage and lockers', ar: 'تخزين أمتعة وخزائن' } }, { icon: 'exchange', label: { en: 'Currency exchange', ar: 'صرف عملات' } },
        { icon: 'laundry', label: { en: 'Laundry and ironing', ar: 'غسيل وكي' }, paid: true }, { icon: 'parking', label: { en: 'Parking', ar: 'موقف سيارات' } }, { icon: 'library', label: { en: 'Library', ar: 'مكتبة' } },
      ] },
      { id: 'family', title: { en: 'Families and pets', ar: 'العائلات والحيوانات الأليفة' }, items: [
        { icon: 'users', label: { en: 'Family rooms, children of all ages welcome', ar: 'غرف عائلية، والأطفال من كل الأعمار مرحب بهم' } }, { icon: 'baby', label: { en: 'Babysitting on request', ar: 'جليسة أطفال عند الطلب' }, paid: true },
        { icon: 'paw', label: { en: 'Pets welcome, basket and bowls provided', ar: 'الحيوانات الأليفة مرحب بها، مع سلة وأوعية' } }, { icon: 'shield', label: { en: '24-hour security, safe, smoke alarms', ar: 'أمن على مدار الساعة وخزنة وكواشف دخان' } },
      ] },
    ],
    rules: [
      { label: { en: 'Check-in', ar: 'تسجيل الوصول' }, value: { en: '13:00 to 15:00, later by arrangement', ar: 'من ١٣:٠٠ إلى ١٥:٠٠، وبعدها بالاتفاق' } },
      { label: { en: 'Check-out', ar: 'تسجيل المغادرة' }, value: { en: '08:00 to 11:00', ar: 'من ٠٨:٠٠ إلى ١١:٠٠' } },
      { label: { en: 'Children', ar: 'الأطفال' }, value: { en: 'All ages welcome; cots and extra beds on request', ar: 'كل الأعمار مرحب بها؛ أسرّة أطفال وأسرّة إضافية عند الطلب' } },
      { label: { en: 'Pets', ar: 'الحيوانات الأليفة' }, value: { en: 'Allowed, a small charge may apply', ar: 'مسموح بها، وقد تطبق رسوم بسيطة' } },
      { label: { en: 'Payment', ar: 'الدفع' }, value: { en: 'Cash on arrival or online; no damage deposit', ar: 'نقداً عند الوصول أو إلكترونياً؛ لا تأمين أضرار' } },
      { label: { en: 'Minimum age', ar: 'الحد الأدنى للعمر' }, value: { en: '18 to check in', ar: '١٨ عاماً لتسجيل الوصول' } },
      { label: { en: 'Languages', ar: 'اللغات' }, value: { en: 'Arabic and English', ar: 'العربية والإنجليزية' } },
      { label: { en: 'Smoking', ar: 'التدخين' }, value: { en: 'Rooftop and terraces only', ar: 'في السطح والشرفات فقط' } },
    ],
    why: [
      { title: { en: 'The rooftop', ar: 'السطح' }, text: { en: 'Breakfast faces the pyramids. At night the sound-and-light show plays on them while you sit under a blanket by the fire. Guests tell us it is the best seat in Giza, and it is free.', ar: 'الإفطار في مواجهة الأهرامات. وفي الليل يُعرض الصوت والضوء عليها وأنت جالس تحت بطانية بجوار النار. يقول ضيوفنا إنه أفضل مقعد في الجيزة، وهو مجاني.' }, photo: 'rooftop-night-pyramids' },
      { title: { en: 'The family table', ar: 'مائدة العائلة' }, text: { en: 'My mother cooks breakfast every morning: ful, taameya, fresh bread, eggs, white cheese, tomatoes and whatever is in season. Tea and coffee all day. Ask her for a cooking lesson and you will go home with the eggplant recipe everyone writes about.', ar: 'أمي تطهو الإفطار كل صباح: فول وطعمية وخبز طازج وبيض وجبنة بيضاء وطماطم وما هو في موسمه. شاي وقهوة طوال اليوم. اطلب منها درس طبخ وستعود بوصفة الباذنجان التي يكتب عنها الجميع.' }, photo: 'rooftop-breakfast' },
      { title: { en: 'The base for everything', ar: 'نقطة الانطلاق لكل شيء' }, text: { en: 'Every tour on this site leaves from the front door. Rami, Rania and the team are here, so a change of plan is a conversation over tea, not a phone call to an office.', ar: 'كل رحلة على هذا الموقع تنطلق من الباب. رامي ورانيا والفريق هنا، فتغيير الخطة حديث على الشاي لا مكالمة لمكتب.' }, photo: 'rooftop-majlis' },
    ],
  },
  {
    id: 'amarna-guest-house-retreat-luxor', status: 'coming_soon',
    name: { en: 'Amarna Guest House Retreat', ar: 'منتجع ضيافة العمارنة' },
    place: { en: 'Luxor', ar: 'الأقصر' },
    tagline: { en: 'Coming soon', ar: 'قريباً' },
    intro: { en: 'A quiet retreat on the Nile at Luxor, from the family behind Pyramids Temple Guest House. We are still building it; leave your details and we will tell you when the first rooms open.', ar: 'منتجع هادئ على النيل في الأقصر، من العائلة صاحبة بيت ضيافة معبد الأهرامات. ما زلنا نبنيه؛ اترك بياناتك وسنخبرك حين تفتح أول الغرف.' },
    hero: 'film-luxor-temple-dusk', photos: [], rooms: [], amenities: [], rules: [], why: [],
  },
];

const BY = Object.fromEntries(STAYS.map((s) => [s.id, s])) as Record<StayId, Stay>;
export const stay = (id: StayId) => BY[id];
export const GUEST_HOUSE = BY['pyramids-temple-guest-house'];
