/**
 * Photo catalogue. Files live in src/assets/photos/ under these ids (jpg or webp); they are the
 * 33 originals pulled from the old Wix site at full resolution. `cat` groups the gallery.
 */
export type Cat = 'giza' | 'cairo' | 'nile' | 'alexandria' | 'desert' | 'stay' | 'people' | 'food' | 'video';

export interface Photo { id: string; cat: Cat; alt: { en: string; ar: string }; w: number; h: number; pos?: string }

export const PHOTOS: Photo[] = [
  { id: 'pyramids-golden-hour', cat: 'giza', w: 1680, h: 1050, alt: { en: 'The three pyramids of Giza at golden hour', ar: 'أهرامات الجيزة الثلاثة عند الغروب' } },
  { id: 'pyramids-keffiyeh-couple', cat: 'people', w: 920, h: 360, alt: { en: 'Two guests in keffiyehs looking out at the pyramids from the dunes', ar: 'ضيفان بالكوفية يتأملان الأهرامات من الكثبان' } },
  { id: 'pyramids-friends-backs', cat: 'people', w: 920, h: 360, alt: { en: 'Friends arm in arm on the Giza plateau', ar: 'أصدقاء متشابكو الأذرع على هضبة الجيزة' } },
  { id: 'pyramid-blocks', cat: 'giza', w: 896, h: 345, alt: { en: 'Guests dwarfed by the limestone blocks of the Great Pyramid', ar: 'ضيوف أمام كتل الهرم الأكبر الحجرية' } },
  { id: 'great-pyramid-guests', cat: 'giza', w: 1152, h: 1152, alt: { en: 'A family at the foot of the Great Pyramid', ar: 'عائلة عند سفح الهرم الأكبر' } },
  { id: 'pyramids-family-group', cat: 'people', w: 576, h: 456, alt: { en: 'A family group with Rami on the plateau', ar: 'عائلة مع رامي على الهضبة' } },
  { id: 'pyramid-jump', cat: 'people', w: 920, h: 360, alt: { en: 'Guests jumping for joy in front of the pyramid', ar: 'ضيوف يقفزون فرحاً أمام الهرم' } },
  { id: 'rami-guest-pyramids', cat: 'people', w: 1080, h: 810, alt: { en: 'Rami and a guest in front of the pyramids', ar: 'رامي وضيفة أمام الأهرامات' } },
  { id: 'rami-guests-selfie', cat: 'people', w: 1280, h: 958, alt: { en: 'Rami with two guests, pyramid behind', ar: 'رامي مع ضيفين والهرم خلفهم' } },
  { id: 'plateau-sunset-watch', cat: 'desert', w: 920, h: 360, alt: { en: 'Watching the sun set over the pyramids from the desert', ar: 'مشاهدة الغروب فوق الأهرامات من الصحراء' } },
  { id: 'desert-sunset-arms', cat: 'desert', w: 920, h: 360, alt: { en: 'Arms wide at sunset over the Saqqara desert', ar: 'ذراعان مفتوحتان عند غروب سقارة' } },
  { id: 'couple-dusk', cat: 'people', w: 720, h: 1600, alt: { en: 'A couple at dusk with the pyramids in the distance', ar: 'زوجان عند الغسق والأهرامات في الأفق' } },
  { id: 'karnak-group', cat: 'nile', w: 1280, h: 576, alt: { en: 'A group in white at Karnak Temple, Luxor', ar: 'مجموعة بالأبيض في معبد الكرنك بالأقصر' } },
  { id: 'luxor-group-white', cat: 'nile', w: 576, h: 1280, alt: { en: 'Guests in white linen before the obelisk at Karnak', ar: 'ضيوف بالكتان الأبيض أمام مسلة الكرنك' } },
  { id: 'temple-selfie', cat: 'nile', w: 960, h: 1280, alt: { en: 'Group selfie inside a temple hall', ar: 'صورة جماعية داخل قاعة معبد' } },
  { id: 'temple-light-shaft', cat: 'nile', w: 576, h: 1280, alt: { en: 'A guest in a shaft of light inside a temple', ar: 'ضيفة في شعاع ضوء داخل معبد' } },
  { id: 'group-circle-selfie', cat: 'people', w: 960, h: 1280, alt: { en: 'The group looking down into the camera, sky behind', ar: 'المجموعة تنظر إلى الكاميرا والسماء خلفها' } },
  { id: 'nile-bank-picnic', cat: 'food', w: 1600, h: 1200, alt: { en: 'Sunset picnic with the family on the Nile bank', ar: 'نزهة غروب مع العائلة على ضفة النيل' } },
  { id: 'family-food-spread', cat: 'food', w: 1280, h: 576, alt: { en: 'A home-cooked Egyptian spread on the rooftop', ar: 'مائدة مصرية منزلية على السطح' } },
  { id: 'rooftop-breakfast', cat: 'stay', w: 1280, h: 576, alt: { en: 'Breakfast laid out on the rooftop with the pyramids behind', ar: 'الإفطار على السطح والأهرامات في الخلفية' } },
  { id: 'rooftop-terrace-day', cat: 'stay', w: 1280, h: 576, alt: { en: 'The rooftop terrace of Pyramids Temple Guest House facing the pyramids', ar: 'سطح بيت ضيافة معبد الأهرامات في مواجهة الأهرامات' } },
  { id: 'rooftop-panorama', cat: 'stay', w: 1058, h: 340, alt: { en: 'Panorama of the rooftop terrace at sunset', ar: 'بانوراما سطح البيت عند الغروب' } },
  { id: 'rooftop-majlis', cat: 'stay', w: 1280, h: 576, alt: { en: 'The shaded rooftop majlis with cushions and a pyramid view', ar: 'مجلس السطح المظلل بالوسائد وإطلالة الهرم' } },
  { id: 'guesthouse-entrance', cat: 'stay', w: 576, h: 1280, alt: { en: 'The hand-painted entrance of the guest house', ar: 'مدخل بيت الضيافة المزخرف يدوياً' } },
  { id: 'guesthouse-bathroom', cat: 'stay', w: 576, h: 1280, alt: { en: 'A private bathroom at the guest house', ar: 'حمام خاص في بيت الضيافة' } },
  { id: 'khan-el-khalili-lamps', cat: 'cairo', w: 920, h: 360, alt: { en: 'Guests under the lamps of Khan el-Khalili', ar: 'ضيوف تحت مصابيح خان الخليلي' } },
  { id: 'mosque-courtyard', cat: 'cairo', w: 920, h: 360, alt: { en: 'The courtyard of the Amr ibn al-As Mosque', ar: 'صحن مسجد عمرو بن العاص' } },
  { id: 'rami-bazaar', cat: 'people', w: 1053, h: 1451, alt: { en: 'Rami in a Bedouin craft shop', ar: 'رامي في متجر حرف بدوية' } },
  { id: 'qaitbay-citadel', cat: 'alexandria', w: 920, h: 360, alt: { en: 'The Citadel of Qaitbay on the Alexandria seafront', ar: 'قلعة قايتباي على كورنيش الإسكندرية' } },
  { id: 'rami-portrait-night', cat: 'people', w: 720, h: 720, alt: { en: 'Rami at night', ar: 'رامي ليلاً' } },
  { id: 'rami-door-small', cat: 'people', w: 286, h: 354, alt: { en: 'Rami in a headscarf at a wooden door', ar: 'رامي بالشماغ عند باب خشبي' } },
  { id: 'grandfather-1964', cat: 'people', w: 286, h: 354, alt: { en: "Rami's grandfather, a government tour guide in 1964", ar: 'جد رامي، مرشد سياحي حكومي عام 1964' } },
  { id: 'logo-original', cat: 'people', w: 720, h: 718, alt: { en: 'The original Eye of Horus logo', ar: 'الشعار الأصلي بعين حورس' } },
  // From the guest house's own Booking.com listing (captured 2026-10-18), mapped to rooms by the listing's room tags.
  { id: 'rooftop-sunset-sign', cat: 'stay', w: 1345, h: 896, alt: { en: 'The three pyramids at sunset from the rooftop, with the Pyramids Temple Guest House sign', ar: 'الأهرامات الثلاثة عند الغروب من السطح، ولافتة بيت ضيافة معبد الأهرامات' } },
  { id: 'rooftop-night-pyramids', cat: 'stay', w: 1345, h: 896, alt: { en: 'The pyramids lit for the sound and light show, seen from the rooftop at night', ar: 'الأهرامات مضاءة لعرض الصوت والضوء، من السطح ليلاً' } },
  { id: 'room-cheops-door', cat: 'stay', w: 1568, h: 706, alt: { en: 'Door sign of Room 1, Cheops Pyramids', ar: 'لافتة باب الغرفة 1، هرم خوفو' } },
  { id: 'room-kitchenette', cat: 'stay', w: 1269, h: 952, alt: { en: 'Room kitchenette with hob, kettle, fridge and sink', ar: 'مطبخ الغرفة الصغير بموقد وغلاية وثلاجة وحوض' } },
  { id: 'room-queen', cat: 'stay', w: 1343, h: 896, alt: { en: 'Queen Room with wall TV, air conditioning and wardrobe', ar: 'غرفة كوين بتلفاز وتكييف وخزانة' } },
  { id: 'room-red-door', cat: 'stay', w: 1568, h: 704, alt: { en: 'Door sign of Room 4, Red Pyramids', ar: 'لافتة باب الغرفة 4، الهرم الأحمر' } },
  { id: 'room-red-bed', cat: 'stay', w: 1288, h: 945, alt: { en: 'Room 4: bed, table for two and a Sphinx painting', ar: 'الغرفة 4: سرير وطاولة لشخصين ولوحة لأبو الهول' } },
  { id: 'room-bathroom-shower', cat: 'stay', w: 952, h: 1271, alt: { en: 'Private bathroom with towels embroidered with the guest house name', ar: 'حمام خاص بمناشف مطرزة باسم بيت الضيافة' } },
  { id: 'room-saqqara-door', cat: 'stay', w: 1568, h: 704, alt: { en: 'Door sign of Room 5, Saqqara Pyramids', ar: 'لافتة باب الغرفة 5، أهرامات سقارة' } },
  { id: 'room-saqqara', cat: 'stay', w: 1345, h: 896, alt: { en: 'Room 5, Saqqara Pyramids: TV, air conditioning and heater', ar: 'الغرفة 5، أهرامات سقارة: تلفاز وتكييف ومدفأة' } },
  { id: 'room-deluxe-queen-bed', cat: 'stay', w: 952, h: 1271, alt: { en: 'Deluxe Queen Room bed with a mandala curtain and fresh towels', ar: 'سرير غرفة كوين ديلوكس بستارة ماندالا ومناشف نظيفة' } },
  { id: 'room-deluxe-queen', cat: 'stay', w: 1316, h: 908, alt: { en: 'Deluxe Queen Room with towel radiator, wardrobe and TV', ar: 'غرفة كوين ديلوكس بمدفأة مناشف وخزانة وتلفاز' } },
  { id: 'room-black-door', cat: 'stay', w: 1568, h: 704, alt: { en: 'Door sign of Room 6, Black Pyramids', ar: 'لافتة باب الغرفة 6، الهرم الأسود' } },
  { id: 'room-triple-beds', cat: 'stay', w: 1345, h: 896, alt: { en: 'Triple Room with three beds and an en-suite bathroom', ar: 'غرفة ثلاثية بثلاثة أسرّة وحمام داخلي' } },
  { id: 'room-bathtub', cat: 'stay', w: 1345, h: 896, alt: { en: 'Bathroom with a tiled bathtub', ar: 'حمام بحوض استحمام مبلط' } },
  { id: 'guesthouse-corridor', cat: 'stay', w: 703, h: 1568, alt: { en: 'The corridor, with postcards from past guests on the wall', ar: 'الممر وعلى جداره بطاقات من ضيوف سابقين' } },
  { id: 'guesthouse-kitchen', cat: 'stay', w: 1185, h: 1008, alt: { en: 'The shared kitchen', ar: 'المطبخ المشترك' } },
  { id: 'guests-cafe', cat: 'people', w: 1269, h: 952, alt: { en: 'Rami and guests with fresh juice at a café', ar: 'رامي وضيوف مع عصير طازج في مقهى' } },
  { id: 'rami-saqqara-group', cat: 'people', w: 1568, h: 703, alt: { en: 'Rami with a group at Saqqara', ar: 'رامي مع مجموعة في سقارة' } },
  // Stills from Rami's own film (recovered from the old site), 1280x720.
  { id: 'film-luxor-temple-dusk', cat: 'nile', w: 1280, h: 720, alt: { en: 'Luxor Temple lit at dusk, the colossi of Ramses II in gold', ar: 'معبد الأقصر مضاءً عند الغسق، وتماثيل رمسيس الثاني بلون ذهبي' } },
  { id: 'film-dendera-columns', cat: 'nile', w: 1280, h: 720, alt: { en: 'The Hathor columns and painted ceiling at Dendera', ar: 'أعمدة حتحور والسقف الملون في دندرة' } },
  { id: 'film-philae-kiosk', cat: 'nile', w: 1280, h: 720, alt: { en: "Trajan's Kiosk on Philae island, Aswan", ar: 'كشك تراجان في جزيرة فيلة، أسوان' } },
  { id: 'film-edfu-courtyard', cat: 'nile', w: 1280, h: 720, alt: { en: 'The great courtyard of the Temple of Horus at Edfu', ar: 'الفناء الكبير لمعبد حورس في إدفو' } },
  { id: 'film-camels-dunes', cat: 'giza', w: 1280, h: 720, alt: { en: 'A camel caravan setting out across the Giza dunes', ar: 'قافلة جمال تنطلق عبر كثبان الجيزة' } },
  { id: 'film-camel-rider', cat: 'desert', w: 1280, h: 720, alt: { en: 'Guests riding camels across the open desert', ar: 'ضيوف يركبون الجمال في الصحراء المفتوحة' } },
  { id: 'film-nubian-village', cat: 'nile', w: 1280, h: 720, alt: { en: 'Painted houses of a Nubian village above the Nile', ar: 'بيوت ملونة في قرية نوبية فوق النيل' } },
  // Video posters (frames from the recovered videos); kept out of the gallery via cat 'video'.
  { id: 'video-meet-rami', cat: 'video', w: 1280, h: 720, alt: { en: 'Rami, arms raised, inside a temple', ar: 'رامي رافعاً ذراعيه داخل معبد' } },
  { id: 'video-rami-rooftop', cat: 'video', w: 1280, h: 720, alt: { en: 'Rami on his rooftop with the pyramids behind', ar: 'رامي على سطحه والأهرامات خلفه' } },
  { id: 'video-rooftop', cat: 'video', w: 848, h: 480, alt: { en: 'A guest speaking on the guest-house rooftop at sunset', ar: 'ضيف يتحدث على سطح بيت الضيافة عند الغروب' } },
  { id: 'video-el-fishawy', cat: 'video', w: 640, h: 352, alt: { en: 'Two guests at El Fishawy café', ar: 'ضيفان في مقهى الفيشاوي' } },
  { id: 'video-islamic-cairo', cat: 'video', w: 640, h: 352, alt: { en: 'A guest with Rami in front of Al-Hussein Mosque', ar: 'ضيف مع رامي أمام مسجد الحسين' } },
];

const BY = Object.fromEntries(PHOTOS.map((p) => [p.id, p]));
export const photo = (id: string): Photo => { const p = BY[id]; if (!p) throw new Error(`Unknown photo ${id}`); return p; };
export const byCat = (cat: Cat) => PHOTOS.filter((p) => p.cat === cat);
