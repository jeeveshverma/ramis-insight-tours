import type { Bi } from '../i18n';

/** Travel tips, rewritten from the old Tips & Advice page into question-and-answer form. */
export interface Tip { id: string; icon: string; q: Bi; a: Bi[] }

export const TIPS: Tip[] = [
  { id: 'visa', icon: 'passport', q: { en: 'Do I need a visa, and how do I get it?', ar: 'هل أحتاج تأشيرة، وكيف أحصل عليها؟' }, a: [
    { en: 'Most nationalities buy a visa on arrival at Cairo airport for about $25. Check before you fly whether your passport needs approval in advance.', ar: 'معظم الجنسيات تشتري التأشيرة عند الوصول إلى مطار القاهرة بنحو 25 دولاراً. تأكد قبل السفر إن كان جواز سفرك يحتاج موافقة مسبقة.' },
    { en: 'At the bank windows before passport control, pay in cash and you get a sticker. Put it on an empty page, fill in the arrival card from the plane, and go to passport control to be stamped.', ar: 'عند شبابيك البنوك قبل الجوازات، ادفع نقداً وستحصل على ملصق. ضعه على صفحة فارغة، واملأ بطاقة الوصول التي أُعطيت لك في الطائرة، ثم توجه إلى الجوازات للختم.' },
    { en: 'We meet you right after, with your name on a sign.', ar: 'نقابلك بعدها مباشرة، وباسمك على لافتة.' },
  ] },
  { id: 'wear', icon: 'shirt', q: { en: 'What should I wear?', ar: 'ماذا أرتدي؟' }, a: [
    { en: 'Men: anything you would wear at home. T-shirts, shorts and trousers are all fine.', ar: 'الرجال: ما ترتدونه في بلادكم. القمصان والشورتات والبناطيل كلها مناسبة.' },
    { en: 'Women: full-length trousers or capris with a T-shirt are the easiest choice in the city; half sleeves are fine everywhere. Carry a light scarf for your shoulders and hair in mosques. On the Red Sea, normal beachwear.', ar: 'النساء: بنطال طويل أو كابري مع تيشيرت أسهل خيار في المدينة؛ ونصف الكم مناسب في كل مكان. احملي وشاحاً خفيفاً للكتفين والشعر في المساجد. وعلى البحر الأحمر ملابس الشاطئ المعتادة.' },
    { en: 'Everyone: a hat, sunglasses, sunscreen, comfortable closed shoes for the sites, and a warm layer for desert nights from December to February.', ar: 'للجميع: قبعة ونظارة شمسية وواقي شمس وحذاء مغلق مريح للمواقع، وطبقة دافئة لليالي الصحراء من ديسمبر إلى فبراير.' },
  ] },
  { id: 'weather', icon: 'sun', q: { en: 'When is the best time to come?', ar: 'ما أفضل وقت للمجيء؟' }, a: [
    { en: 'October to April is the comfortable season everywhere. Cairo days are 20 to 28°C, Luxor and Aswan a little warmer, desert nights cold.', ar: 'من أكتوبر إلى أبريل هو الموسم المريح في كل مكان. نهار القاهرة بين 20 و28 درجة، والأقصر وأسوان أدفأ قليلاً، وليالي الصحراء باردة.' },
    { en: 'Summer is hot and dry: 35 to 40°C in Cairo and over 40 in Upper Egypt, where 50 has been recorded. We start early, rest at midday and keep you supplied with water.', ar: 'الصيف حار وجاف: من 35 إلى 40 في القاهرة وفوق 40 في الصعيد حيث سُجلت 50 درجة. نبدأ مبكراً ونستريح في الظهيرة ونزودك بالماء باستمرار.' },
    { en: 'Rain is rare except on the Mediterranean coast between November and February. The Khamsin wind in spring can bring a few dusty, hot days.', ar: 'المطر نادر إلا على ساحل المتوسط بين نوفمبر وفبراير. ورياح الخماسين في الربيع قد تجلب أياماً حارة مغبرة.' },
  ] },
  { id: 'money', icon: 'coins', q: { en: 'Money, tipping and small change', ar: 'النقود والإكراميات والفكة' }, a: [
    { en: 'The currency is the Egyptian pound (EGP). Dollars and euros are accepted in tourist areas but at poor rates; ask us before you change money and we will take you somewhere fair.', ar: 'العملة هي الجنيه المصري. الدولار واليورو مقبولان في المناطق السياحية لكن بأسعار سيئة؛ اسألنا قبل الصرف وسنأخذك إلى مكان عادل.' },
    { en: 'On our tours every tip at the sites is already paid, so nobody will ask you for money at the pyramids. Tips for your guide and driver at the end are at your discretion.', ar: 'في رحلاتنا كل الإكراميات في المواقع مدفوعة مسبقاً، فلن يطلب منك أحد نقوداً عند الأهرامات. أما إكرامية مرشدك وسائقك في النهاية فبحسب تقديرك.' },
    { en: 'Keep EGP 2 to 5 coins and notes for public toilets, and tissues or wet wipes in your bag.', ar: 'احتفظ بفكة من جنيهين إلى خمسة لدورات المياه العامة، ومناديل أو مناديل مبللة في حقيبتك.' },
  ] },
  { id: 'language', icon: 'globe', q: { en: 'Will I be understood?', ar: 'هل سيفهمني الناس؟' }, a: [
    { en: 'Arabic is the language; English is spoken wherever tourists go. All our guides speak English, and Rania and Rami will teach you enough Arabic to make the bazaar fun.', ar: 'اللغة هي العربية؛ والإنجليزية متداولة حيثما يذهب السياح. كل مرشدينا يتحدثون الإنجليزية، ورانيا ورامي سيعلمانك ما يكفي من العربية لتستمتع بالخان.' },
  ] },
  { id: 'solo', icon: 'users', q: { en: 'Is Egypt safe for women travelling alone?', ar: 'هل مصر آمنة للنساء المسافرات بمفردهن؟' }, a: [
    { en: 'Many of our guests are solo women and it is why Rania is part of the team. You can request her as your guide, stay at the guest house with the family, and we handle every transfer so you are never negotiating a taxi at midnight.', ar: 'كثير من ضيوفنا نساء يسافرن بمفردهن، ولهذا رانيا جزء من الفريق. يمكنك طلبها مرشدة لك، والإقامة في بيت الضيافة مع العائلة، ونحن نتولى كل التنقلات فلا تساومين على تاكسي في منتصف الليل.' },
  ] },
  { id: 'sim', icon: 'wifi', q: { en: 'Phone, Wi-Fi and staying in touch', ar: 'الهاتف والواي فاي والتواصل' }, a: [
    { en: 'The guest house has free Wi-Fi throughout, scored 10/10 by guests. A local SIM with data costs a few dollars at the airport; we will show you which counter.', ar: 'بيت الضيافة فيه واي فاي مجاني في كل مكان، وقيّمه الضيوف 10/10. وشريحة محلية بالإنترنت تكلف بضعة دولارات في المطار؛ سنريك أي شباك.' },
    { en: 'WhatsApp is how Egypt talks, and it is how you reach us at any hour.', ar: 'واتساب هو وسيلة التواصل في مصر، وهو طريقتك للوصول إلينا في أي ساعة.' },
  ] },
  { id: 'included', icon: 'check', q: { en: 'What exactly is in the price?', ar: 'ما الذي يشمله السعر تحديداً؟' }, a: [
    { en: 'Your room, every entrance ticket, breakfast and lunch, all tips at the sites, private transport and the domestic flights listed in your itinerary.', ar: 'غرفتك وكل تذاكر الدخول والإفطار والغداء وكل إكراميات المواقع والتنقلات الخاصة والرحلات الداخلية الواردة في برنامجك.' },
    { en: 'Not included: your visa, international flights, dinners that are not named in the plan, drinks, and tips for the team. Students pay the student rate with a valid card; children under 5 pay half and over 5 pay 75%.', ar: 'غير مشمول: التأشيرة والطيران الدولي والعشاء غير المذكور في الخطة والمشروبات وإكرامية الفريق. الطلاب يدفعون سعر الطالب ببطاقة سارية؛ والأطفال دون الخامسة النصف وفوقها 75%.' },
  ] },
];

/** Monthly highs for the weather strip, in Celsius (Cairo / Luxor), with a 1-5 comfort score. */
export const WEATHER = [
  { m: 1, cairo: 19, luxor: 23, score: 4 }, { m: 2, cairo: 21, luxor: 26, score: 5 }, { m: 3, cairo: 24, luxor: 30, score: 5 }, { m: 4, cairo: 29, luxor: 35, score: 4 },
  { m: 5, cairo: 33, luxor: 39, score: 3 }, { m: 6, cairo: 35, luxor: 41, score: 2 }, { m: 7, cairo: 35, luxor: 41, score: 1 }, { m: 8, cairo: 35, luxor: 41, score: 1 },
  { m: 9, cairo: 33, luxor: 39, score: 2 }, { m: 10, cairo: 30, luxor: 35, score: 4 }, { m: 11, cairo: 25, luxor: 30, score: 5 }, { m: 12, cairo: 21, luxor: 25, score: 5 },
];
