/**
 * Photo catalogue. Files live in src/assets/photos/ under these ids (jpg or webp); they are the
 * 33 originals pulled from the old Wix site at full resolution. `cat` groups the gallery.
 */
export type Cat = 'giza' | 'cairo' | 'nile' | 'alexandria' | 'desert' | 'stay' | 'people' | 'food';

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
];

const BY = Object.fromEntries(PHOTOS.map((p) => [p.id, p]));
export const photo = (id: string): Photo => { const p = BY[id]; if (!p) throw new Error(`Unknown photo ${id}`); return p; };
export const byCat = (cat: Cat) => PHOTOS.filter((p) => p.cat === cat);
