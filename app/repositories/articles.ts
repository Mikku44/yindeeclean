export interface ArticleTranslation {
  title: string;
  excerpt: string;
  content: string;
}

export interface Article {
  id: number;
  slug: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  translations: {
    en: ArticleTranslation;
    th: ArticleTranslation;
  };
}

export const ARTICLES: Article[] = [
  {
  id: 1,
  slug: "deep-clean-kitchen-guide",
  category: "kitchen",
  readTime: 8, // Increased due to more data
  date: "2024-11-12",
  image: "/kitchen_cleaing.jpg",
  translations: {
    en: {
      title: "The Ultimate Kitchen Deep Clean: A Professional’s Playbook",
      excerpt: "Beyond the daily wipe-down lies the 'Chef-Clean' standard. Here is how to tackle hidden grease and forgotten corners like a pro.",
      content: `
## Why We Go Deep
We’ve all been there: the kitchen *looks* clean, but there’s a stubborn stickiness on top of the fridge, or a faint lingering smell you can't quite place. A true deep clean resets your home's busiest hub for better health and clearer headspace.



### The Essential Toolkit
Before you start, gather these professional-grade supplies. Having everything within reach prevents "cleaning fatigue."

| Tool | Purpose | Why it's "Pro" |
| :--- | :--- | :--- |
| **Microfiber Cloths** | All surfaces | Traps 99% of bacteria without chemicals. |
| **Baking Soda** | Scrubbing | Non-abrasive, lifts stains from stone and metal. |
| **White Vinegar** | Glass & Shine | Dissolves hard water spots on faucets. |
| **Old Toothbrush** | Crevices | Perfect for grout lines and stove knobs. |

---

### 1. The 'Top-Down' Strategy
The biggest mistake? Starting with the counters. Physics is your friend—or your enemy. Dust and grease drift downward.

* **Cabinets & Lights:** Take a microfiber cloth and a heavy-duty degreaser to the tops of your cabinets. If you haven't done this in a while, prepare for a shock. 
* **The Pro Tip:** Once clean, lay a sheet of wax paper on top of high cabinets. Next time, just swap the paper—no scrubbing required.

### 2. The Oven & Range Hood: The Grease Magnets
Don't reach for harsh chemicals immediately. 
* **The Steam Method:** Place a bowl of water with lemon slices in the oven at 100°C for 20 minutes before scrubbing. The steam loosens the carbon, making your job 10x easier.
* **Range Hood Filters:** Soak these in boiling water and a scoop of Oxi-clean. Watch the yellow grease melt away in minutes.



### 3. The Sink: The Heart of the Kitchen
The sink sees everything—raw meat juices, coffee grounds, and soapy grime.
* **The Refresh:** Scrub with baking soda to remove stains without scratching the stainless steel. 
* **The Final Touch:** Pour half a cup of lemon juice down the disposal to kill odors, and buff the faucet with a drop of olive oil for that 'hotel-lobby' shine.

### Deep Clean Checklist (30-Minute Sprint)
If you don't have all day, focus on these high-impact areas:
1.  **Empty the Crumb Tray:** Check the toaster and the bottom of the oven.
2.  **Sanitize the Touchpoints:** Light switches, fridge handles, and cabinet pulls.
3.  **The Dishwasher Filter:** Most people forget this exists. Clean it to prevent "stinky dishes."
      `
    },
    th: {
      title: "เจาะลึกเคล็ดลับทำความสะอาดครัว: เปลี่ยน 'ครัวเหนียว' ให้เป็น 'ครัวโรงแรม'",
      excerpt: "การเช็ดโต๊ะทุกวันอาจไม่พอ... มาดูวิธีจัดการคราบมันฝังลึกและมุมที่ถูกลืมด้วยเทคนิคระดับมืออาชีพที่ทำตามได้จริง",
      content: `
## ทำไมแค่ 'เช็ด' ถึงยังไม่พอ?
เคยไหม? ห้องครัวก็ดูสะอาดดี แต่พอเอามือไปลูบบนหลังตู้กลับเหนียวเหนอะหนะ การทำความสะอาดแบบ Deep Clean คือการ 'รีเซ็ต' สุขอนามัยในจุดที่เรามองข้ามไปทุกวัน



### อุปกรณ์ที่ต้องเตรียม (The Toolkit)
การเตรียมอุปกรณ์ให้พร้อมจะช่วยให้คุณประหยัดเวลาได้มหาศาล

| อุปกรณ์ | การใช้งาน | ทำไมมือโปรถึงใช้ |
| :--- | :--- | :--- |
| **ผ้าไมโครไฟเบอร์** | ทุกพื้นผิว | ดักจับแบคทีเรียได้ 99% โดยไม่ใช้สารเคมี |
| **เบกกิ้งโซดา** | งานขัด | ขจัดคราบโดยไม่ทำให้พื้นผิวหินหรือเหล็กเป็นรอย |
| **น้ำส้มสายชูขาว** | งานกระจก/ก๊อกน้ำ | สลายคราบหินปูนบนก๊อกน้ำได้ดีเยี่ยม |
| **แปรงสีฟันเก่า** | ซอกมุม | เหมาะสำหรับร่องยาแนวและปุ่มเปิดเตาแก๊ส |

---

### 1. กฎเหล็ก 'จากบนลงล่าง'
ฝุ่นและคราบมันจะร่วงลงล่างเสมอ ดังนั้นห้ามเริ่มที่เคาน์เตอร์ก่อนเด็ดขาด
* **หลังตู้และโคมไฟ:** ใช้ผ้าไมโครไฟเบอร์กับน้ำยาขจัดคราบมันเช็ดหลังตู้ก่อน
* **เคล็ดลับมือโปร:** หลังจากเช็ดสะอาดแล้ว ให้ปูกระดาษไข (Wax Paper) ไว้บนหลังตู้ ครั้งหน้าแค่เปลี่ยนกระดาษใหม่ ไม่ต้องออกแรงขัดอีกต่อไป

### 2. เตาอบและฮูดดูดควัน: แหล่งสะสมไขมัน
* **พลังไอน้ำ:** วางถ้วยน้ำผสมมะนาวฝานไว้ในเตาอบที่ 100°C เป็นเวลา 20 นาที ไอน้ำจะช่วยให้คราบไหม้อ่อนตัวลง
* **ฟิลเตอร์เครื่องดูดควัน:** ถอดแช่ในน้ำเดือดผสมผงซักฟอก คราบไขมันจะละลายออกมาอย่างง่ายดาย



### 3. อ่างล้างจาน: จุดที่สกปรกที่สุดในบ้าน
* **การฟื้นฟู:** ใช้เบกกิ้งโซดาขัดเพื่อลบรอยหมองสแตนเลส
* **ตบท้าย:** เทน้ำมะนาวครึ่งถ้วยลงในท่อเพื่อดับกลิ่น และใช้น้ำมันมะกอกเพียงเล็กน้อยเช็ดก๊อกน้ำเพื่อความเงางาม

### เช็คลิสต์ด่วน (ฉบับ 30 นาที)
1.  **เทถาดเศษขนมปัง:** เช็ดใต้เครื่องปิ้งขนมปังและก้นเตาอบ
2.  **ฆ่าเชื้อจุดสัมผัส:** สวิตช์ไฟ, มือจับตู้เย็น และที่เปิดตู้
3.  **ล้างฟิลเตอร์เครื่องล้างจาน:** เพื่อป้องกันกลิ่นอับติดจานชาม
      `
    }
  }
},
  {
    id: 2,
    slug: "bathroom-mold-prevention",
    category: "bathroom",
    readTime: 4,
    date: "2024-11-05",
    image: "/maid.jpg",
    translations: {
      en: {
        title: "Bathroom Mold Prevention",
        excerpt: "Stop mold before it starts. Learn the best ventilation and cleaning habits for a dry, healthy bathroom.",
        content: `
## Combatting Humidity
Mold thrives in damp environments. The key to prevention is moisture control.

### Daily Habits
* **Squeegee the walls:** After every shower, wipe down the tiles.
* **Ventilation:** Run the exhaust fan for at least 20 minutes after bathing.

### Deep Cleaning Tips
Use a mixture of tea tree oil and water to spray corners; it is a natural antifungal that prevents spores from taking root.
        `
      },
      th: {
        title: "การป้องกันเชื้อราในห้องน้ำ",
        excerpt: "ยับยั้งเชื้อราก่อนที่จะเริ่ม เรียนรู้วิธีการระบายอากาศและนิสัยการทำความสะอาดที่ดีที่สุดเพื่อห้องน้ำที่แห้งและถูกสุขลักษณะ",
        content: `
## การต่อสู้กับความชื้น
เชื้อราเจริญเติบโตได้ดีในสภาพแวดล้อมที่ชื้น หัวใจสำคัญของการป้องกันคือการควบคุมความชื้น

### นิสัยที่ควรทำทุกวัน
* **ปาดน้ำบนผนัง:** หลังอาบน้ำทุกครั้ง ให้เช็ดหรือปาดน้ำออกจากกระเบื้อง
* **การระบายอากาศ:** เปิดพัดลมระบายอากาศทิ้งไว้อย่างน้อย 20 นาทีหลังอาบน้ำ

### เคล็ดลับการทำความสะอาดล้ำลึก
ใช้ส่วนผสมของน้ำมันทีทรี (Tea Tree Oil) และน้ำฉีดพ่นตามมุมต่างๆ ซึ่งเป็นสารต้านเชื้อราตามธรรมชาติที่ช่วยป้องกันไม่ให้สปอร์ฝังตัว
        `
      }
    }
  },
  {
    id: 3,
    slug: "eco-friendly-cleaning-products",
    category: "tips",
    readTime: 6,
    date: "2024-10-28",
    image: "/kitchen_cleaing.jpg",
    translations: {
      en: {
        title: "Eco-Friendly Cleaning Products",
        excerpt: "Clean your home without harsh chemicals. Discover the power of vinegar, baking soda, and essential oils.",
        content: `
## Green Cleaning Revolution
You don't need toxic chemicals to have a sparkling home. 

### The Essential Trio
1. **White Vinegar:** Great for glass and descaling.
2. **Baking Soda:** A mild abrasive for scrubbing sinks and tubs.
3. **Lemon Juice:** Natural bleach and deodorizer.

Using these ingredients reduces your environmental footprint and improves indoor air quality.
        `
      },
      th: {
        title: "ผลิตภัณฑ์ทำความสะอาดที่เป็นมิตรต่อสิ่งแวดล้อม",
        excerpt: "ทำความสะอาดบ้านของคุณโดยไม่ต้องใช้สารเคมีรุนแรง ค้นพบพลังของน้ำส้มสายชู เบกกิ้งโซดา และน้ำมันหอมระเหย",
        content: `
## ปฏิวัติการทำความสะอาดแบบสีเขียว
คุณไม่จำเป็นต้องใช้สารเคมีที่มีพิษเพื่อให้บ้านสะอาดเงางาม

### สามทหารเสือที่ต้องมี
1. **น้ำส้มสายชูขาว:** ยอดเยี่ยมสำหรับเช็ดกระจกและขจัดคราบตะกรัน
2. **เบกกิ้งโซดา:** สารขัดอย่างอ่อนสำหรับขัดอ่างล้างจานและอ่างอาบน้ำ
3. **น้ำมะนาว:** สารฟอกขาวและขจัดกลิ่นตามธรรมชาติ

การใช้ส่วนผสมเหล่านี้ช่วยลดผลกระทบต่อสิ่งแวดล้อมและปรับปรุงคุณภาพอากาศภายในบ้านของคุณ
        `
      }
    }
  }
];