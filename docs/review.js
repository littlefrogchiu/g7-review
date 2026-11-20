// 段考翻譯範圍的課文（句子重組 + 課文排序）：一段 p.39、二段 p.79、三段 p.117
// en：英文句；chips 未給時以空白切成單字（句尾標點固定顯示）；長句用 "|" 標出片語卡（避免 30 秒內拼不完）
const REVIEW = {
 R1: { page: "p.39", lesson: "Unit 2 Reading", title: "The Keret House", titleZh: "凱雷特之家", sents: [
  { en: "The Keret House is a small house in Poland.", zh: "凱雷特之家是位在波蘭的一間小房子。" },
  { en: "It is long, thin, and very special.", zh: "它又長又窄，而且非常特別。" },
  { en: "Inside the house, the bathroom, the kitchen, and the dining room are right next to each other.", zh: "房子裡，廁所、廚房和飯廳相連。",
    chips: "Inside the house,|the bathroom,|the kitchen,|and|the dining room|are|right next to|each other" },
  { en: "The bedroom is above those three rooms.", zh: "臥室在那三間房間上方。" },
  { en: "The Keret House is not big, but it is enough for one person.", zh: "凱雷特之家不大，但已足夠讓一個人居住。",
    chips: "The Keret House|is not|big,|but|it is|enough|for|one person" }
 ]},
 R2: { page: "p.79", lesson: "Unit 4 Reading", title: "A Meet-and-Greet", titleZh: "一場見面會", sents: [
  { en: "It's Friday.", zh: "今天是星期五。", chips: "It's|Friday" },
  { en: "Welcome to Music Party with Mimi.", zh: "歡迎收看《米米的音樂派對》。" },
  { en: "This is Mimi Wang, and I'm reporting from the meet-and-greet of the popular band BTS.", zh: "我是王米米，我正在人氣樂團防彈少年團的見面會現場報導。",
    chips: "This is|Mimi Wang,|and|I'm reporting|from|the meet-and-greet|of|the popular band|BTS" },
  { en: "Let's go take a look.", zh: "我們一起來看看吧。" },
  { en: "Now the BTS boys and their fans are on the stage.", zh: "現在防彈少年團和粉絲們正在舞臺上。",
    chips: "Now|the BTS boys|and|their fans|are|on the stage" },
  { en: "The BTS boys are taking pictures and shaking hands with their fans.", zh: "防彈少年團男孩們正在和他們的粉絲拍照及握手。",
    chips: "The BTS boys|are|taking pictures|and|shaking hands|with|their fans" },
  { en: "They're signing pictures for their fans, too.", zh: "他們也正在為他們的粉絲簽名。" },
  { en: "Everyone is having a good time.", zh: "每個人都很開心。" },
  { en: "That's it for today's report.", zh: "以上是今天的報導。" },
  { en: "You're watching Music Party with Mimi.", zh: "你正在收看《米米的音樂派對》。" },
  { en: "I'm Mimi Wang.", zh: "我是王米米。", chips: "I'm|Mimi|Wang" },
  { en: "Good night.", zh: "晚安。", chips: "Good|night" }
 ]},
 R3: { page: "p.117", lesson: "Unit 6 Reading", title: "Oxpeckers and Zebras", titleZh: "牛椋鳥與斑馬", sents: [
  { en: "In the animal world, some animals can help each other.", zh: "在動物世界，有些動物能互相幫助。",
    chips: "In|the animal world,|some animals|can|help|each other" },
  { en: "Here is one example—oxpeckers and zebras.", zh: "以下是一個例子——牛椋鳥與斑馬。",
    chips: "Here is|one example—|oxpeckers|and|zebras" },
  { en: "There are many bugs in the zebras' coat, and these bugs are bad for them.", zh: "斑馬的毛皮裡面有很多蟲子，而這些蟲子對牠們是有壞處的。",
    chips: "There are|many bugs|in|the zebras' coat,|and|these bugs|are|bad for|them" },
  { en: "Luckily, these bugs are the oxpeckers' food.", zh: "很幸運地，這些蟲子是牛椋鳥的食物。",
    chips: "Luckily,|these bugs|are|the oxpeckers'|food" },
  { en: "The oxpeckers can clean up the bugs for the zebras, and the zebras can provide food for the oxpeckers.", zh: "牛椋鳥可以幫助斑馬清除蟲子，而斑馬可以提供食物給牛椋鳥。",
    chips: "The oxpeckers|can clean up|the bugs|for the zebras,|and|the zebras|can provide|food|for the oxpeckers" },
  { en: "Thanks to each other's help, the oxpeckers are full and happy, and the zebras are clean and healthy.", zh: "幸好有彼此的幫助，牛椋鳥飽足又快樂，斑馬則乾淨又健康。",
    chips: "Thanks to|each other's help,|the oxpeckers|are|full and happy,|and|the zebras|are|clean and healthy" }
 ]}
};
