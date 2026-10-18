import type { Bi } from '../i18n';

/** Destinations plotted on the Egypt map and given their own pages. */
export type PlaceId =
  | 'giza' | 'cairo' | 'saqqara' | 'alexandria' | 'fayoum' | 'luxor' | 'aswan' | 'abu-simbel'
  | 'abydos' | 'dendera' | 'edfu' | 'kom-ombo' | 'amarna' | 'sharm' | 'dahab' | 'bahariya' | 'white-desert' | 'siwa' | 'abusir';

export interface Place {
  id: PlaceId;
  name: Bi;
  region: 'cairo' | 'nile' | 'redsea' | 'desert' | 'coast';
  at: { lat: number; lng: number };
  /** Label offset on the map, in viewBox units. */
  lbl?: 'l' | 'r' | 'u' | 'd';
  blurb: Bi;
  best: Bi;
  tip: Bi;
  photo?: string;
  /** Hidden from the destinations index (sub-sites of a bigger destination). */
  minor?: boolean;
}

export const PLACES: Place[] = [
  { id: 'giza', name: { en: 'Giza & the Pyramids', ar: 'الجيزة والأهرامات' }, region: 'cairo', at: { lat: 29.977, lng: 31.132 }, lbl: 'l', photo: 'pyramids-golden-hour',
    blurb: { en: 'The plateau is ten minutes from our door. We go inside the third pyramid, walk the dunes for the panoramic view, and come back at night for the sound-and-light show from the rooftop.', ar: 'الهضبة على بعد عشر دقائق من بابنا. ندخل الهرم الثالث، ونمشي على الكثبان لنرى البانوراما، ونعود ليلاً لمشاهدة عرض الصوت والضوء من السطح.' },
    best: { en: 'October to April; early morning in summer', ar: 'من أكتوبر إلى أبريل؛ وفي الصيف في الصباح الباكر' },
    tip: { en: 'All tips at the pyramids are covered in our price, so nobody will ask you for money. Ride the camel from the dunes, not the entrance.', ar: 'كل الإكراميات في منطقة الأهرامات مشمولة في سعرنا، فلن يطلب منك أحد نقوداً. اركب الجمل من الكثبان لا من المدخل.' } },
  { id: 'cairo', name: { en: 'Cairo', ar: 'القاهرة' }, region: 'cairo', at: { lat: 30.047, lng: 31.236 }, lbl: 'r', photo: 'khan-el-khalili-lamps',
    blurb: { en: 'The Egyptian Museum, Coptic Cairo, the mosques of Islamic Cairo, Khan el-Khalili after dark and a Nile dinner cruise. We walk it the way Cairenes do.', ar: 'المتحف المصري، ومصر القديمة، ومساجد القاهرة الإسلامية، وخان الخليلي ليلاً، وعشاء على النيل. نمشيها كما يمشيها أهل القاهرة.' },
    best: { en: 'All year; evenings are the best time for the bazaar', ar: 'طوال العام؛ والمساء أفضل وقت للخان' },
    tip: { en: 'Carry small notes for the toilets (EGP 2) and let us handle taxis.', ar: 'احمل فكة صغيرة لدورات المياه (جنيهان) ودع التاكسي لنا.' } },
  { id: 'saqqara', name: { en: 'Saqqara, Dahshur & Memphis', ar: 'سقارة ودهشور ومنف' }, region: 'cairo', at: { lat: 29.871, lng: 31.216 }, lbl: 'd', photo: 'desert-sunset-arms',
    blurb: { en: 'The Step Pyramid, the Red Pyramid you can climb inside, Sneferu’s Bent Pyramid and the open-air museum of the old capital. Far fewer people than Giza.', ar: 'الهرم المدرج، والهرم الأحمر الذي تدخله، وهرم سنفرو المنحني، ومتحف منف المفتوح. زحام أقل بكثير من الجيزة.' },
    best: { en: 'Any season; go in the morning', ar: 'في كل الفصول؛ اذهب صباحاً' },
    tip: { en: 'Rami knows the tomb of Irukaptah and a few others most visitors never see.', ar: 'رامي يعرف مقبرة إيروكابتاح ومقابر أخرى لا يراها معظم الزوار.' } },
  { id: 'abusir', name: { en: 'Abusir & Abu Gorab', ar: 'أبوصير وأبو غراب' }, region: 'cairo', at: { lat: 29.897, lng: 31.203 }, minor: true,
    blurb: { en: 'Fifth-dynasty pyramids and the sun temple, with a night around the fire with our Bedouin hosts.', ar: 'أهرامات الأسرة الخامسة ومعبد الشمس، وليلة حول النار مع مضيفينا البدو.' },
    best: { en: 'Autumn to spring', ar: 'من الخريف إلى الربيع' }, tip: { en: 'Bring a warm layer; desert nights are cold.', ar: 'أحضر ملابس دافئة؛ ليالي الصحراء باردة.' } },
  { id: 'alexandria', name: { en: 'Alexandria', ar: 'الإسكندرية' }, region: 'coast', at: { lat: 31.2, lng: 29.918 }, lbl: 'u', photo: 'qaitbay-citadel',
    blurb: { en: 'A day on the Mediterranean: the new Library, the Catacombs, Qaitbay Citadel on the old lighthouse site, Montazah gardens and the Roman amphitheatre.', ar: 'يوم على المتوسط: المكتبة الجديدة، والسراديب، وقلعة قايتباي في موقع المنارة القديمة، وحدائق المنتزه، والمسرح الروماني.' },
    best: { en: 'Spring and autumn; winter can be rainy', ar: 'الربيع والخريف؛ وقد يمطر شتاءً' },
    tip: { en: 'Eat seafood on the Corniche; we know the place.', ar: 'تناول المأكولات البحرية على الكورنيش؛ نعرف المكان.' } },
  { id: 'fayoum', name: { en: 'Fayoum Oasis', ar: 'واحة الفيوم' }, region: 'desert', at: { lat: 29.31, lng: 30.84 }, lbl: 'l', photo: 'plateau-sunset-watch',
    blurb: { en: 'Wadi El-Rayan waterfalls, the whale fossils of Wadi El-Hitan and Lake Qarun. Desert, water and silence an hour and a half from Cairo.', ar: 'شلالات وادي الريان، وحفريات الحيتان في وادي الحيتان، وبحيرة قارون. صحراء وماء وهدوء على بعد ساعة ونصف من القاهرة.' },
    best: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
    tip: { en: 'Stay for sunset at the lake; the light is extraordinary.', ar: 'ابقَ حتى الغروب عند البحيرة؛ الضوء استثنائي.' } },
  { id: 'luxor', name: { en: 'Luxor', ar: 'الأقصر' }, region: 'nile', at: { lat: 25.687, lng: 32.64 }, lbl: 'r', photo: 'karnak-group',
    blurb: { en: 'The world’s largest open-air museum: Karnak and Luxor temples on the east bank, the Valleys of the Kings and Queens, Hatshepsut’s temple and Tutankhamun’s tomb on the west.', ar: 'أكبر متحف مفتوح في العالم: الكرنك ومعبد الأقصر في البر الشرقي، ووادي الملوك والملكات، ومعبد حتشبسوت، ومقبرة توت عنخ آمون في البر الغربي.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' },
    tip: { en: 'Add the sunrise balloon over the west bank; it is worth the early start.', ar: 'أضف رحلة المنطاد عند الشروق فوق البر الغربي؛ تستحق الاستيقاظ المبكر.' } },
  { id: 'aswan', name: { en: 'Aswan & Nubia', ar: 'أسوان والنوبة' }, region: 'nile', at: { lat: 24.089, lng: 32.9 }, lbl: 'r', photo: 'nile-bank-picnic',
    blurb: { en: 'The Nile at its most beautiful. Philae temple by boat, the High Dam, a Nubian village and an afternoon on a felucca.', ar: 'النيل في أجمل صوره. معبد فيلة بالقارب، والسد العالي، وقرية نوبية، وعصر على الفلوكة.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' },
    tip: { en: 'The honeymoon package sleeps three nights on a private felucca here.', ar: 'باقة شهر العسل تبيت ثلاث ليالٍ على فلوكة خاصة هنا.' } },
  { id: 'abu-simbel', name: { en: 'Abu Simbel', ar: 'أبو سمبل' }, region: 'nile', at: { lat: 22.337, lng: 31.626 }, lbl: 'r', photo: 'temple-light-shaft',
    blurb: { en: 'Ramses II’s great temple and Nefertari’s beside it, reached before dawn so you see the sun enter the sanctuary.', ar: 'معبد رمسيس الثاني العظيم ومعبد نفرتاري بجانبه، نصل قبل الفجر لنرى الشمس تدخل قدس الأقداس.' },
    best: { en: '22 February and 22 October for the Sun Festival', ar: '22 فبراير و22 أكتوبر لمهرجان تعامد الشمس' },
    tip: { en: 'The Sun Festival add-on is $125; book months ahead.', ar: 'إضافة مهرجان الشمس 125 دولاراً؛ احجز قبلها بشهور.' } },
  { id: 'abydos', name: { en: 'Abydos', ar: 'أبيدوس' }, region: 'nile', at: { lat: 26.185, lng: 31.919 }, lbl: 'l', minor: true,
    blurb: { en: 'Seti I’s temple with the finest reliefs in Egypt and the Osireion behind it.', ar: 'معبد سيتي الأول بأرقى نقوش مصر، والأوزيريون خلفه.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' }, tip: { en: 'Combine with Dendera in one day from Luxor.', ar: 'اجمعها مع دندرة في يوم واحد من الأقصر.' } },
  { id: 'dendera', name: { en: 'Dendera', ar: 'دندرة' }, region: 'nile', at: { lat: 26.142, lng: 32.67 }, lbl: 'r', minor: true,
    blurb: { en: 'Hathor’s temple, its ceiling still blue, and the famous zodiac.', ar: 'معبد حتحور بسقفه الأزرق حتى الآن، ودائرة البروج الشهيرة.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' }, tip: { en: 'Climb to the roof chapel.', ar: 'اصعد إلى مقصورة السطح.' } },
  { id: 'edfu', name: { en: 'Edfu', ar: 'إدفو' }, region: 'nile', at: { lat: 24.978, lng: 32.873 }, lbl: 'r', minor: true,
    blurb: { en: 'The best-preserved temple in Egypt, dedicated to Horus.', ar: 'أفضل معابد مصر حفظاً، مكرس لحورس.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' }, tip: { en: 'A cruise stop between Luxor and Aswan.', ar: 'محطة في الرحلة النيلية بين الأقصر وأسوان.' } },
  { id: 'kom-ombo', name: { en: 'Kom Ombo', ar: 'كوم أمبو' }, region: 'nile', at: { lat: 24.452, lng: 32.928 }, lbl: 'r', minor: true,
    blurb: { en: 'The double temple of Sobek and Horus, right on the river.', ar: 'المعبد المزدوج لسوبك وحورس على ضفة النهر مباشرة.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' }, tip: { en: 'Visit at dusk when the cruise boats light it.', ar: 'زره عند الغسق حين تضيئه مراكب الرحلات.' } },
  { id: 'amarna', name: { en: 'Amarna', ar: 'تل العمارنة' }, region: 'nile', at: { lat: 27.645, lng: 30.9 }, lbl: 'l', minor: true,
    blurb: { en: 'Akhenaten’s short-lived capital in Middle Egypt, on the Sacred Egypt itinerary.', ar: 'عاصمة إخناتون القصيرة العمر في مصر الوسطى، ضمن رحلة مصر المقدسة.' },
    best: { en: 'October to March', ar: 'من أكتوبر إلى مارس' }, tip: { en: 'Rarely visited; expect to have the tombs to yourself.', ar: 'نادراً ما تُزار؛ ستجد المقابر لك وحدك.' } },
  { id: 'sharm', name: { en: 'Sharm El Sheikh & Ras Mohamed', ar: 'شرم الشيخ ورأس محمد' }, region: 'redsea', at: { lat: 27.915, lng: 34.33 }, lbl: 'r', photo: 'couple-dusk',
    blurb: { en: 'Snorkelling at Tiran Island, swimming at Ras Mohamed National Park and a Bedouin dinner in the desert reached by camel or buggy.', ar: 'غطس سطحي عند جزيرة تيران، وسباحة في محمية رأس محمد، وعشاء بدوي في الصحراء نصل إليه بالجمل أو العربة الصحراوية.' },
    best: { en: 'All year; the sea is warmest September to November', ar: 'طوال العام؛ والبحر أدفأ من سبتمبر إلى نوفمبر' },
    tip: { en: 'Bring reef-safe sunscreen.', ar: 'أحضر واقي شمس آمناً للشعاب.' } },
  { id: 'dahab', name: { en: 'Dahab & the Blue Hole', ar: 'دهب والبلو هول' }, region: 'redsea', at: { lat: 28.495, lng: 34.515 }, lbl: 'r', photo: 'pyramids-friends-backs',
    blurb: { en: 'A laid-back Bedouin town with the Blue Hole a short drive away. Snorkel or dive, then do nothing on a cushion by the water.', ar: 'بلدة بدوية هادئة والبلو هول على بعد دقائق بالسيارة. غطس أو غوص، ثم لا شيء سوى وسادة على الماء.' },
    best: { en: 'March to November', ar: 'من مارس إلى نوفمبر' },
    tip: { en: 'Ask about the Sinai mountain dinner by buggy.', ar: 'اسأل عن عشاء الجبل في سيناء بالعربة الصحراوية.' } },
  { id: 'bahariya', name: { en: 'Bahariya Oasis', ar: 'الواحات البحرية' }, region: 'desert', at: { lat: 28.35, lng: 28.86 }, lbl: 'l', minor: true,
    blurb: { en: 'Gateway to the White and Black Deserts, four hours from Cairo.', ar: 'بوابة الصحراء البيضاء والسوداء، على بعد أربع ساعات من القاهرة.' },
    best: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' }, tip: { en: 'Hot springs after a day in the dunes.', ar: 'عيون ساخنة بعد يوم في الكثبان.' } },
  { id: 'white-desert', name: { en: 'White & Black Deserts', ar: 'الصحراء البيضاء والسوداء' }, region: 'desert', at: { lat: 27.3, lng: 27.97 }, lbl: 'l', photo: 'desert-sunset-arms',
    blurb: { en: 'Chalk formations like a frozen sea, by 4x4, and two nights camping with our Bedouin hosts under more stars than you have ever seen.', ar: 'تكوينات طباشيرية كبحر متجمد، بسيارات الدفع الرباعي، وليلتان من التخييم مع مضيفينا البدو تحت نجوم لم ترَ مثلها.' },
    best: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' },
    tip: { en: 'The 21-day itinerary ends here; it is the part guests talk about most.', ar: 'رحلة 21 يوماً تنتهي هنا؛ وهي الجزء الذي يتحدث عنه الضيوف أكثر.' } },
  { id: 'siwa', name: { en: 'Siwa Oasis', ar: 'واحة سيوة' }, region: 'desert', at: { lat: 29.203, lng: 25.52 }, lbl: 'd', minor: true,
    blurb: { en: 'The far western oasis, Amazigh culture, salt lakes and the Oracle of Amun. Available on custom itineraries.', ar: 'الواحة الغربية البعيدة، ثقافة أمازيغية وبحيرات ملحية ومعبد آمون. متاحة في الرحلات المخصصة.' },
    best: { en: 'October to April', ar: 'من أكتوبر إلى أبريل' }, tip: { en: 'Allow at least two nights; it is a long drive.', ar: 'خصص ليلتين على الأقل؛ الطريق طويل.' } },
];

const BY = Object.fromEntries(PLACES.map((p) => [p.id, p])) as Record<PlaceId, Place>;
export const place = (id: PlaceId) => BY[id];

/** Points of interest around the guest house for the Stays map. Walking speed 4.8 km/h, driving ~28 km/h in Giza. */
export const NEARBY: { id: string; name: Bi; at: { lat: number; lng: number }; mode: 'foot' | 'car' }[] = [
  { id: 'sphinx', name: { en: 'The Great Sphinx', ar: 'أبو الهول' }, at: { lat: 29.9753, lng: 31.1376 }, mode: 'foot' },
  { id: 'khufu', name: { en: 'Great Pyramid of Khufu', ar: 'هرم خوفو' }, at: { lat: 29.9792, lng: 31.1342 }, mode: 'foot' },
  { id: 'sound-light', name: { en: 'Sound & Light entrance', ar: 'مدخل الصوت والضوء' }, at: { lat: 29.9745, lng: 31.1392 }, mode: 'foot' },
  { id: 'gem', name: { en: 'Grand Egyptian Museum', ar: 'المتحف المصري الكبير' }, at: { lat: 29.9939, lng: 31.1194 }, mode: 'car' },
  { id: 'museum', name: { en: 'Egyptian Museum, Tahrir', ar: 'المتحف المصري بالتحرير' }, at: { lat: 30.0478, lng: 31.2336 }, mode: 'car' },
  { id: 'saqqara', name: { en: 'Saqqara', ar: 'سقارة' }, at: { lat: 29.8712, lng: 31.2165 }, mode: 'car' },
  { id: 'airport', name: { en: 'Cairo International Airport', ar: 'مطار القاهرة الدولي' }, at: { lat: 30.1219, lng: 31.4056 }, mode: 'car' },
];
