import type { Bi } from '../i18n';

/** Journal posts seeded from the old site's tips and itineraries. Body paragraphs; no HTML. */
export interface Post { id: string; date: string; title: Bi; dek: Bi; hero: string; minutes: number; body: Bi[] }

export const POSTS: Post[] = [
  { id: 'visa-on-arrival', date: '2026-10-01', minutes: 3, hero: 'pyramid-blocks',
    title: { en: 'Visa on arrival at Cairo, step by step', ar: 'تأشيرة الوصول في القاهرة، خطوة بخطوة' },
    dek: { en: 'Ten minutes, about $25, and one sticker. Here is the order to do things in.', ar: 'عشر دقائق ونحو ٢٥ دولاراً وملصق واحد. هذا هو ترتيب الخطوات.' },
    body: [
      { en: 'You will be handed an arrival card on the plane. Fill it in before you land; the only question people get stuck on is the address in Egypt. Write "Pyramids Temple Guest House, Sayed Gabir St, Al Haram, Giza".', ar: 'ستُعطى بطاقة وصول في الطائرة. املأها قبل الهبوط؛ السؤال الوحيد الذي يتعثر فيه الناس هو العنوان في مصر. اكتب "Pyramids Temple Guest House, Sayed Gabir St, Al Haram, Giza".' },
      { en: 'In the arrivals hall, before passport control, there is a row of bank windows. Hand over about $25 (or the equivalent in euros or pounds sterling) in cash and you get a visa sticker. Do not join the passport queue first; you will be sent back.', ar: 'في صالة الوصول، قبل الجوازات، صف من شبابيك البنوك. ادفع نحو ٢٥ دولاراً نقداً (أو ما يعادلها باليورو أو الجنيه الإسترليني) وستحصل على ملصق التأشيرة. لا تقف في طابور الجوازات أولاً؛ سيعيدونك.' },
      { en: 'Stick it on an empty page, go to passport control, and your passport is stamped. Collect your bag, walk out, and look for your name on our sign. The whole thing is usually under half an hour.', ar: 'ألصقه على صفحة فارغة، وتوجه إلى الجوازات ليُختم جوازك. خذ حقيبتك واخرج وابحث عن اسمك على لافتتنا. كل ذلك عادة أقل من نصف ساعة.' },
      { en: 'Some passports need approval in advance. Check your government’s advice before booking flights, and ask us if you are not sure.', ar: 'بعض الجوازات تحتاج موافقة مسبقة. راجع إرشادات حكومتك قبل حجز الطيران، واسألنا إن لم تكن متأكداً.' },
    ] },
  { id: 'what-to-wear', date: '2026-09-20', minutes: 4, hero: 'pyramids-keffiyeh-couple',
    title: { en: 'What to wear in Egypt, honestly', ar: 'ماذا ترتدي في مصر، بصراحة' },
    dek: { en: 'Less complicated than the internet makes it. Comfort first, a scarf for mosques, a jacket for the desert.', ar: 'أبسط مما يصوره الإنترنت. الراحة أولاً، ووشاح للمساجد، وجاكيت للصحراء.' },
    body: [
      { en: 'Men can wear what they wear at home. Shorts are fine at the sites, long trousers are more comfortable on long days in the car and expected in mosques.', ar: 'الرجال يرتدون ما يرتدونه في بلادهم. الشورت مناسب في المواقع، والبنطال الطويل أريح في أيام السيارة الطويلة ومتوقع في المساجد.' },
      { en: 'Women: loose trousers or a long skirt with a T-shirt is the uniform of nearly every traveller we host. Shoulders covered is polite in the city; half sleeves are fine. Carry a scarf and you are ready for any mosque. At the beach, swimwear is swimwear.', ar: 'النساء: بنطال فضفاض أو تنورة طويلة مع تيشيرت هو زي معظم من نستضيفهن تقريباً. تغطية الكتفين لباقة في المدينة؛ ونصف الكم مناسب. احملي وشاحاً وستكونين جاهزة لأي مسجد. وعلى الشاطئ ملابس السباحة ملابس سباحة.' },
      { en: 'Shoes matter more than clothes. Tombs have steep ramps, temples have uneven stone, and the dunes are sand. Closed, broken-in shoes with grip.', ar: 'الحذاء أهم من الملابس. المقابر منحدراتها شديدة، والمعابد حجرها غير مستوٍ، والكثبان رمل. حذاء مغلق مريح بنعل مانع للانزلاق.' },
      { en: 'Desert nights from December to February go close to zero. Bring a real jacket for Abusir and the White Desert; we provide blankets, not coats.', ar: 'ليالي الصحراء من ديسمبر إلى فبراير تقترب من الصفر. أحضر جاكيتاً حقيقياً لأبوصير والصحراء البيضاء؛ نحن نوفر البطانيات لا المعاطف.' },
    ] },
  { id: 'sun-festival', date: '2026-09-05', minutes: 3, hero: 'temple-light-shaft',
    title: { en: 'The Abu Simbel Sun Festival: 22 February and 22 October', ar: 'مهرجان تعامد الشمس في أبو سمبل: ٢٢ فبراير و٢٢ أكتوبر' },
    dek: { en: 'Twice a year the sun reaches 60 metres into the mountain and lights three of the four gods. Here is how to be there.', ar: 'مرتين في السنة تصل الشمس ٦٠ متراً داخل الجبل وتضيء ثلاثة من الآلهة الأربعة. هكذا تكون هناك.' },
    body: [
      { en: 'Ramses II aligned his temple so that on two mornings a year the first sun crosses the whole hall and falls on the statues at the back: Ra, Amun and Ramses himself. Ptah, god of the underworld, stays in shadow. The dates are believed to be the king’s birthday and coronation.', ar: 'وجّه رمسيس الثاني معبده بحيث تعبر أول أشعة الشمس القاعة كلها في صباحين من كل عام وتسقط على التماثيل في العمق: رع وآمون ورمسيس نفسه. أما بتاح، إله العالم السفلي، فيبقى في الظل. يُعتقد أن التاريخين هما ميلاد الملك وتتويجه.' },
      { en: 'The crowd gathers before 5 a.m. There is music and dancing outside while you wait, and the moment itself lasts about twenty minutes. Nubian families bring breakfast; so do we.', ar: 'يتجمع الحشد قبل الخامسة صباحاً. موسيقى ورقص في الخارج أثناء الانتظار، واللحظة نفسها تدوم نحو عشرين دقيقة. العائلات النوبية تحضر الإفطار؛ ونحن أيضاً.' },
      { en: 'On our Upper Egypt itineraries the festival is a $125 add-on per person, which covers the special access and the earlier start from Aswan. Book several months ahead; Aswan hotels fill.', ar: 'في برامج الصعيد لدينا المهرجان إضافة بـ١٢٥ دولاراً للفرد، تغطي الدخول الخاص والانطلاق المبكر من أسوان. احجز قبلها بأشهر؛ فنادق أسوان تمتلئ.' },
    ] },
  { id: 'bedouin-night-abusir', date: '2026-08-18', minutes: 4, hero: 'plateau-sunset-watch',
    title: { en: 'A night with the Bedouin at Abusir', ar: 'ليلة مع البدو في أبوصير' },
    dek: { en: 'Fire, tea, bread baked in the sand, and the Fifth Dynasty pyramids as the only skyline.', ar: 'نار وشاي وخبز يُخبز في الرمل، وأهرامات الأسرة الخامسة الأفق الوحيد.' },
    body: [
      { en: 'Abusir is fifteen minutes south of Giza and almost nobody goes. The pyramids there are smaller and half-collapsed, which is exactly why the desert around them is quiet enough to sleep in.', ar: 'أبوصير على بعد خمس عشرة دقيقة جنوب الجيزة ولا يكاد يزورها أحد. أهراماتها أصغر ونصف منهارة، ولهذا بالضبط الصحراء حولها هادئة بما يكفي لتنام فيها.' },
      { en: 'We arrive in the late afternoon, walk the site as the light goes orange, and then our Bedouin hosts have the fire going. Tea first, always. Then bread pressed into the embers, chicken or vegetables cooked slowly, and dates. Nobody checks their phone because there is no signal.', ar: 'نصل في العصر، ونتجول في الموقع والضوء يميل إلى البرتقالي، ثم يكون مضيفونا البدو قد أشعلوا النار. الشاي أولاً، دائماً. ثم خبز يُدفن في الجمر، ودجاج أو خضار يُطهى ببطء، وتمر. لا أحد ينظر إلى هاتفه لأنه لا توجد شبكة.' },
      { en: 'You sleep in a tent or, if you prefer, outside under blankets. In the morning we are at the sun temple of Abu Gorab as the sun comes over the ridge. It is the last morning of the Sacred Egypt itinerary and most guests say it is the best one.', ar: 'تنام في خيمة أو، إن فضّلت، في الخارج تحت البطانيات. وفي الصباح نكون عند معبد الشمس في أبو غراب والشمس تطلع من فوق الحافة. إنه الصباح الأخير في رحلة مصر المقدسة ومعظم الضيوف يقولون إنه الأجمل.' },
    ] },
  { id: 'why-we-cover-tips', date: '2026-08-02', minutes: 2, hero: 'great-pyramid-guests',
    title: { en: 'Why we pay the tips at the pyramids', ar: 'لماذا ندفع نحن الإكراميات عند الأهرامات' },
    dek: { en: 'The hassle at Giza is real. Our fix is simple: we pay everyone before you arrive.', ar: 'الإزعاج في الجيزة حقيقي. حلنا بسيط: ندفع للجميع قبل وصولك.' },
    body: [
      { en: 'Every visitor to Giza has the same story: the man who opens a tomb door and wants money, the one who takes your photo and wants money, the camel that costs one price to get on and another to get off.', ar: 'كل زائر للجيزة له القصة نفسها: الرجل الذي يفتح باب مقبرة ويريد نقوداً، ومن يلتقط صورتك ويريد نقوداً، والجمل الذي له سعر للركوب وسعر آخر للنزول.' },
      { en: 'We grew up here. We know every guard and every camel owner by name, and on our tours they are paid by us, in advance, at a fair rate. The price you see on this site includes all of it. So when someone approaches you, you can smile, say "with Rami", and keep walking.', ar: 'نشأنا هنا. نعرف كل حارس وكل صاحب جمل بالاسم، وفي رحلاتنا ندفع لهم نحن، مقدماً، وبسعر عادل. السعر الذي تراه على هذا الموقع يشمل كل ذلك. فحين يقترب منك أحد، ابتسم وقل "مع رامي" وواصل السير.' },
      { en: 'It costs us a little more. It is also the reason our guests remember the pyramids and not the arguing.', ar: 'يكلفنا ذلك قليلاً أكثر. وهو أيضاً سبب تذكّر ضيوفنا للأهرامات لا للجدال.' },
    ] },
];

const BY = Object.fromEntries(POSTS.map((p) => [p.id, p]));
export const post = (id: string) => BY[id];
