// iE1 Book 1 各課單字表（課本後附錄 Word Bank 應用字彙）
const WORDS = {
 "1": [
  {
   "en": "handsome",
   "pos": "adj.",
   "zh": "英俊的",
   "ex": "Brian: Your father is handsome. Anna: Thank you."
  },
  {
   "en": "new",
   "pos": "adj.",
   "zh": "新的",
   "ex": "Ryan: Is this your new school bag? Alice: Yes, it is."
  },
  {
   "en": "classmate",
   "pos": "n.",
   "zh": "同學",
   "ex": "Dave: Look at that girl. Who's she? Katie: That's Zoe. She's my classmate."
  },
  {
   "en": "young",
   "pos": "adj.",
   "zh": "年輕的",
   "ex": "Tony: Our new teacher is 24 years old. Leah: He's young."
  },
  {
   "en": "woman",
   "pos": "n.",
   "zh": "女人（複數為women）",
   "ex": "Who's that beautiful tall woman?"
  },
  {
   "en": "very",
   "pos": "adv.",
   "zh": "非常",
   "ex": "This tree is very tall."
  },
  {
   "en": "beautiful",
   "pos": "adj.",
   "zh": "美麗的",
   "ex": "Your school is big and beautiful."
  },
  {
   "en": "too",
   "pos": "adv.",
   "zh": "也",
   "ex": "Alan: My dad is a teacher. Gina: My dad is a teacher, too."
  },
  {
   "en": "Nice to meet you.",
   "pos": "",
   "zh": "很高興認識你。",
   "ex": "Nelson: Mandy, this is Mr. Brown. Mandy: Nice to meet you, Mr. Brown."
  },
  {
   "en": "cousin",
   "pos": "n.",
   "zh": "堂表兄弟姐妹",
   "ex": "Sharon is my cousin, not my sister."
  },
  {
   "en": "really",
   "pos": "adv.",
   "zh": "真地",
   "ex": "Roy: I'm from Mill Junior High School. Zoe: Oh, really? I am, too."
  },
  {
   "en": "year(s) old",
   "pos": "",
   "zh": "…歲",
   "ex": "Her son is 17 years old."
  },
  {
   "en": "I see.",
   "pos": "",
   "zh": "我知道了。",
   "ex": "Ed: This is not my umbrella. My umbrella is yellow. Jo: I see."
  },
  {
   "en": "singer",
   "pos": "n.",
   "zh": "歌手",
   "ex": "Fred: Who's the man in the picture? Kate: He's a singer."
  },
  {
   "en": "office worker",
   "pos": "n.",
   "zh": "上班族",
   "ex": "I am an office worker, and my wife is, too."
  },
  {
   "en": "housewife",
   "pos": "n.",
   "zh": "家庭主婦",
   "ex": "My grandmother is a housewife."
  },
  {
   "en": "police officer",
   "pos": "n.",
   "zh": "警察",
   "ex": "This is my cousin. He is a police officer."
  },
  {
   "en": "writer",
   "pos": "n.",
   "zh": "作家",
   "ex": "Tyler: Are you a writer? Dora: No, I'm not."
  },
  {
   "en": "uncle",
   "pos": "n.",
   "zh": "叔伯；舅舅",
   "ex": "My uncle is a good cook."
  },
  {
   "en": "aunt",
   "pos": "n.",
   "zh": "阿姨；姑姑",
   "ex": "Aunt Shelly is my mother's good friend."
  },
  {
   "en": "wife",
   "pos": "n.",
   "zh": "妻子",
   "ex": "Isn't his wife a doctor?"
  },
  {
   "en": "daughter",
   "pos": "n.",
   "zh": "女兒",
   "ex": "Julia is Mr. and Mrs. Wilson's daughter."
  },
  {
   "en": "husband",
   "pos": "n.",
   "zh": "丈夫",
   "ex": "Her husband is a nurse."
  },
  {
   "en": "son",
   "pos": "n.",
   "zh": "兒子",
   "ex": "Mrs. Fang is a mother of three sons."
  },
  {
   "en": "dear",
   "pos": "adj.",
   "zh": "親愛的",
   "ex": "This is a picture of my dear students."
  },
  {
   "en": "family",
   "pos": "n.",
   "zh": "家庭；家人",
   "ex": "Carl: How's your family? Rita: They're fine. Thanks."
  },
  {
   "en": "elementary school",
   "pos": "n.",
   "zh": "國小",
   "ex": "My daughter is young. She is an elementary school student."
  },
  {
   "en": "junior high school",
   "pos": "n.",
   "zh": "國中",
   "ex": "Their mom is a junior high school teacher."
  },
  {
   "en": "baby",
   "pos": "n.; adj.",
   "zh": "嬰兒；年幼的",
   "ex": "The baby's father is Mr. Martin."
  }
 ],
 "2": [
  {
   "en": "house",
   "pos": "n.",
   "zh": "房子",
   "ex": "Jimmy is not in the house."
  },
  {
   "en": "parents",
   "pos": "n.",
   "zh": "父母親",
   "ex": "Her parents are very nice."
  },
  {
   "en": "living room",
   "pos": "n.",
   "zh": "客廳",
   "ex": "The new sofa is in the living room."
  },
  {
   "en": "wall",
   "pos": "n.",
   "zh": "牆壁",
   "ex": "The walls of this room are thin."
  },
  {
   "en": "purple",
   "pos": "adj.; n.",
   "zh": "紫色（的）",
   "ex": "The singer's hair is purple."
  },
  {
   "en": "favorite",
   "pos": "adj.; n.",
   "zh": "最喜愛（的）",
   "ex": "This is my favorite park. It's nice and big."
  },
  {
   "en": "color",
   "pos": "n.",
   "zh": "顏色",
   "ex": "My favorite color is blue."
  },
  {
   "en": "kitchen",
   "pos": "n.",
   "zh": "廚房",
   "ex": "Is your aunt in the kitchen?"
  },
  {
   "en": "dining room",
   "pos": "n.",
   "zh": "飯廳",
   "ex": "Aren't the eggs on the dining room table?"
  },
  {
   "en": "but",
   "pos": "conj.",
   "zh": "但是",
   "ex": "My room is big, but my bed is not."
  },
  {
   "en": "gray",
   "pos": "adj.; n.",
   "zh": "灰色（的）",
   "ex": "My dad's car is gray."
  },
  {
   "en": "brown",
   "pos": "adj.; n.",
   "zh": "棕色（的）",
   "ex": "Jerry's dog is brown."
  },
  {
   "en": "cookie",
   "pos": "n.",
   "zh": "餅乾",
   "ex": "Scott: What are those? Lydia: They are cookies for my mom."
  },
  {
   "en": "mice",
   "pos": "n.",
   "zh": "老鼠（為mouse的複數）",
   "ex": "Two white mice are in the box."
  },
  {
   "en": "maybe",
   "pos": "adv.",
   "zh": "可能",
   "ex": "Cody: Where's Rocky? Dolly: Maybe he's in his dog house."
  },
  {
   "en": "sofa",
   "pos": "n.",
   "zh": "沙發",
   "ex": "The old sofa is in my grandfather's bedroom."
  },
  {
   "en": "hungry",
   "pos": "adj.",
   "zh": "餓的",
   "ex": "Luke: I'm hungry. Nina: Here's a banana for you. Luke: Thanks."
  },
  {
   "en": "notebook",
   "pos": "n.",
   "zh": "筆記本",
   "ex": "My notebooks are in my schoolbag."
  },
  {
   "en": "marker",
   "pos": "n.",
   "zh": "記號筆；彩色筆",
   "ex": "Pete: Where is my pink marker? Cara: It's under your desk."
  },
  {
   "en": "brush",
   "pos": "n.",
   "zh": "毛筆；筆刷",
   "ex": "Your brush is under your bed."
  },
  {
   "en": "gift",
   "pos": "n.",
   "zh": "禮物",
   "ex": "Jack: What is this? Alva: It's a gift for you."
  },
  {
   "en": "pencil case",
   "pos": "n.",
   "zh": "鉛筆盒（= pencil box）",
   "ex": "My pencil case is on the desk."
  },
  {
   "en": "bathroom",
   "pos": "n.",
   "zh": "浴室；廁所",
   "ex": "Are you in the bathroom, Mom?"
  },
  {
   "en": "table",
   "pos": "n.",
   "zh": "桌子",
   "ex": "Sammy, your pencil is on the table."
  },
  {
   "en": "bedroom",
   "pos": "n.",
   "zh": "臥室",
   "ex": "Her bedroom is next to the living room."
  },
  {
   "en": "near",
   "pos": "prep.",
   "zh": "在…附近",
   "ex": "My uncle's farm is near the zoo."
  },
  {
   "en": "between",
   "pos": "prep.",
   "zh": "在…之間",
   "ex": "Tim: Who is that between your mom and dad? Sue: She's my sister, Nina."
  },
  {
   "en": "behind",
   "pos": "prep.",
   "zh": "在…後面",
   "ex": "Look! Kenny's cat is behind the tree."
  },
  {
   "en": "in front of",
   "pos": "prep.",
   "zh": "在…前面",
   "ex": "The old tree is in front of our school."
  },
  {
   "en": "special",
   "pos": "adj.",
   "zh": "特別的",
   "ex": "What's special about this pencil?"
  },
  {
   "en": "inside",
   "pos": "prep.",
   "zh": "在…裡面",
   "ex": "Dan: What's inside the box? Ada: They're apples from your grandma."
  },
  {
   "en": "right",
   "pos": "adv.",
   "zh": "就",
   "ex": "My house is right next to a park."
  },
  {
   "en": "each other",
   "pos": "pron.",
   "zh": "彼此；互相",
   "ex": "My classmates are nice to each other."
  },
  {
   "en": "above",
   "pos": "prep.; adv.",
   "zh": "在…上方；在上方",
   "ex": "The clock is above the TV."
  },
  {
   "en": "enough",
   "pos": "adj.; adv.; pron.",
   "zh": "足夠（的）",
   "ex": " The dining table is not very big, but it's enough for a family of three."
  },
  {
   "en": "person",
   "pos": "n.",
   "zh": "人（複數為persons或people）",
   "ex": "Jeremy is a nice person."
  }
 ],
 "3": [
  {
   "en": "guy",
   "pos": "n.",
   "zh": "人；傢伙",
   "ex": "Mrs. Carter: Guys, don't run in the classroom. Students: Sorry, Mrs. Carter."
  },
  {
   "en": "magic",
   "pos": "adj.; n.",
   "zh": "神奇的；魔法",
   "ex": " Sally is a fan of magic."
  },
  {
   "en": "with",
   "pos": "prep.",
   "zh": "用；和",
   "ex": "Chris: Where is Mom? Ruby: She's in the car with Dad."
  },
  {
   "en": "can",
   "pos": "aux.",
   "zh": "可以；會",
   "ex": "We can't eat in the lab."
  },
  {
   "en": "many",
   "pos": "adj.; pron.",
   "zh": "許多（的）",
   "ex": "Many English teachers are women."
  },
  {
   "en": "place",
   "pos": "n.",
   "zh": "地方",
   "ex": "John: What is this place? It's beautiful. Lena: It's Regent Park."
  },
  {
   "en": "use",
   "pos": "v.; n.",
   "zh": "使用",
   "ex": "Evan: Can I use the bathroom? Judy: Sure."
  },
  {
   "en": "sure",
   "pos": "adv.; adj.",
   "zh": "當然；確定的",
   "ex": "Toby: Is Johnny at school? Zoey: I'm not sure."
  },
  {
   "en": "let's...",
   "pos": "",
   "zh": "讓我們一起…",
   "ex": "Let's watch TV now."
  },
  {
   "en": "careful",
   "pos": "adj.",
   "zh": "小心的",
   "ex": "Jason: Hey, be careful. Cindy: Okay."
  },
  {
   "en": "museum",
   "pos": "n.",
   "zh": "博物館",
   "ex": "Please don't run in the museum."
  },
  {
   "en": "Hurry!",
   "pos": "",
   "zh": "快點！",
   "ex": "The bus is here. Hurry up, Sandy!"
  },
  {
   "en": "please",
   "pos": "int.",
   "zh": "請；拜託",
   "ex": "Please close the door for me."
  },
  {
   "en": "wait",
   "pos": "v.",
   "zh": "等待",
   "ex": "Liam: Wait. Where is my bag? Kelly: Isn't it on the kitchen table?"
  },
  {
   "en": "man",
   "pos": "n.",
   "zh": "男人（複數為men）",
   "ex": "That man is my uncle. He's a doctor."
  },
  {
   "en": "now",
   "pos": "adv.",
   "zh": "現在",
   "ex": "Freddy is in the bathroom now."
  },
  {
   "en": "or",
   "pos": "conj.",
   "zh": "或者",
   "ex": "Don't eat or drink on the bus."
  },
  {
   "en": "time",
   "pos": "n.",
   "zh": "次；時間",
   "ex": "Please be careful this time."
  },
  {
   "en": "wake up",
   "pos": "",
   "zh": "醒來；叫醒…",
   "ex": "Cathy: Can you go wake your sister up? Frank: Yes, Mom."
  },
  {
   "en": "class",
   "pos": "n.",
   "zh": "課；班級",
   "ex": "Please follow \u0007class rules."
  },
  {
   "en": "Oh my!",
   "pos": "",
   "zh": "天哪！",
   "ex": "Stan: What's that? Pam: Oh my! It's a mummy."
  },
  {
   "en": "see",
   "pos": "v.",
   "zh": "看見",
   "ex": "Paul: Can you see the bird in the tree? Tina: Yes. It's very cute."
  },
  {
   "en": "quiet",
   "pos": "adj.",
   "zh": "安靜的",
   "ex": "Ken is a quiet student."
  },
  {
   "en": "turn off",
   "pos": "",
   "zh": "關掉",
   "ex": "Sam, turn off the TV and go to bed now."
  },
  {
   "en": "sign",
   "pos": "n.",
   "zh": "標誌",
   "ex": "Ray: Look at the sign. You can't eat here. Ava: Oh, sorry."
  },
  {
   "en": "talk",
   "pos": "v.",
   "zh": "說話",
   "ex": "Let's not talk here."
  },
  {
   "en": "fight",
   "pos": "v.; n.",
   "zh": "吵架；打架",
   "ex": "Leo, don't fight with your brother."
  },
  {
   "en": "turn",
   "pos": "n.",
   "zh": "（依次輪到的）機會",
   "ex": "Brad: Is it my turn? Lucy: Sorry, it's not. Please wait."
  },
  {
   "en": "follow",
   "pos": "v.",
   "zh": "遵守；跟隨",
   "ex": "Guys, please follow the museum rules and be good."
  },
  {
   "en": "rule",
   "pos": "n.",
   "zh": "規則",
   "ex": "Don't use your phone in class. It's a classroom rule."
  },
  {
   "en": "safe",
   "pos": "adj.",
   "zh": "安全的",
   "ex": "Do not run in the lab. That's not safe."
  },
  {
   "en": "wash",
   "pos": "v.",
   "zh": "清洗",
   "ex": "We can wash your dad's car this afternoon."
  },
  {
   "en": "hand",
   "pos": "n.",
   "zh": "手",
   "ex": "Mark: What's that in your hand? Mary: It's a pen."
  },
  {
   "en": "after class",
   "pos": "",
   "zh": "下課後",
   "ex": "Let's play basketball after class."
  }
 ],
 "4": [
  {
   "en": "music video",
   "pos": "n.",
   "zh": "音樂影片",
   "ex": "Joe: Hey, what are you watching? Eva: I am watching Mayday's new music video."
  },
  {
   "en": "band",
   "pos": "n.",
   "zh": "樂團",
   "ex": "My favorite band is singing on stage."
  },
  {
   "en": "take a look",
   "pos": "",
   "zh": "看一看",
   "ex": "Jay is singing on TV. Come take a look."
  },
  {
   "en": "all",
   "pos": "adj.",
   "zh": "所有的",
   "ex": " All the books in the box are from my aunt Lisa."
  },
  {
   "en": "cute",
   "pos": "adj.",
   "zh": "可愛的",
   "ex": "Toto is a really cute dog."
  },
  {
   "en": "great",
   "pos": "adj.",
   "zh": "棒的",
   "ex": "Ollie: I can go to the concert with you. Jane: Really? That's great!"
  },
  {
   "en": "free",
   "pos": "adj.",
   "zh": "有空的",
   "ex": "Are you free for the meet-and-greet on Sunday?"
  },
  {
   "en": "weekend",
   "pos": "n.",
   "zh": "週末",
   "ex": "The baseball game is this weekend."
  },
  {
   "en": "Saturday",
   "pos": "n.",
   "zh": "星期六",
   "ex": "The welcome party is on Saturday night."
  },
  {
   "en": "together",
   "pos": "adv.",
   "zh": "一起",
   "ex": " Let's go to school together."
  },
  {
   "en": "ready",
   "pos": "adj.",
   "zh": "準備好的",
   "ex": "Are you ready for school?"
  },
  {
   "en": "p.m.",
   "pos": "adv.",
   "zh": "下午；晚上",
   "ex": "It's 8:25 p.m. now."
  },
  {
   "en": "o'clock",
   "pos": "adv.",
   "zh": "…點鐘",
   "ex": "Can you wake me up at three o'clock in the afternoon?"
  },
  {
   "en": "day",
   "pos": "n.",
   "zh": "日；天",
   "ex": "It's a great day today."
  },
  {
   "en": "today",
   "pos": "adv.; n.",
   "zh": "今天",
   "ex": "It is Teacher's Day today."
  },
  {
   "en": "Friday",
   "pos": "n.",
   "zh": "星期五",
   "ex": "Will: What day is it? Erin: It's Friday."
  },
  {
   "en": "Sunday",
   "pos": "n.",
   "zh": "星期日",
   "ex": "The zoo is not open on Sundays."
  },
  {
   "en": "Monday",
   "pos": "n.",
   "zh": "星期一",
   "ex": "The music class is on Monday afternoon."
  },
  {
   "en": "Tuesday",
   "pos": "n.",
   "zh": "星期二",
   "ex": "Can I go to your house on Tuesday?"
  },
  {
   "en": "Wednesday",
   "pos": "n.",
   "zh": "星期三",
   "ex": "Brenda is free this Wednesday. You can see the movie with her."
  },
  {
   "en": "Thursday",
   "pos": "n.",
   "zh": "星期四",
   "ex": "Thursday is between Wednesday and Friday."
  },
  {
   "en": "week",
   "pos": "n.",
   "zh": "週；星期",
   "ex": "The new museum is open this week."
  },
  {
   "en": "a.m.",
   "pos": "adv.",
   "zh": "上午；凌晨",
   "ex": "Isn't the basketball game at 10:50 a.m.?"
  },
  {
   "en": "study",
   "pos": "v.",
   "zh": "研讀",
   "ex": "Peter is studying in his room."
  },
  {
   "en": "English",
   "pos": "n.",
   "zh": "英文",
   "ex": "Mr. Cheng is my English teacher."
  },
  {
   "en": "take a walk",
   "pos": "",
   "zh": "散步",
   "ex": "Let's take a walk together."
  },
  {
   "en": "movie",
   "pos": "n.",
   "zh": "電影",
   "ex": "Nick: Is the new movie good? Sara: Yes, it is."
  },
  {
   "en": "take a picture",
   "pos": "",
   "zh": "拍照",
   "ex": "Everyone is taking a picture with his or her favorite teacher."
  },
  {
   "en": "party",
   "pos": "n.",
   "zh": "派對；宴會",
   "ex": "Felix: Where are you? Jean: I'm at Timothy's party."
  },
  {
   "en": "report",
   "pos": "v.; n.",
   "zh": "報導",
   "ex": "The woman on TV is reporting from the singer's new house."
  },
  {
   "en": "popular",
   "pos": "adj.",
   "zh": "受歡迎的",
   "ex": "The singer is very handsome and popular."
  },
  {
   "en": "fan",
   "pos": "n.",
   "zh": "…迷",
   "ex": "The fan is taking a picture with the writer."
  },
  {
   "en": "\u0007shake hands 握手",
   "pos": "",
   "zh": "?",
   "ex": "James is shaking hands with his teacher."
  },
  {
   "en": "\u0007everyone",
   "pos": "pron.",
   "zh": "每個人（= everybody）",
   "ex": "The drinks are not enough for everyone."
  },
  {
   "en": "sign",
   "pos": "v.",
   "zh": "簽名",
   "ex": "Rick: Can you sign this picture for me? Ann: Sure."
  }
 ],
 "5": [
  {
   "en": "date",
   "pos": "n.",
   "zh": "日期",
   "ex": "The date of the concert is September twenty-first."
  },
  {
   "en": "November",
   "pos": "n.",
   "zh": "十一月",
   "ex": "Thanksgiving is in November."
  },
  {
   "en": "first",
   "pos": "adj.; adv.; n.",
   "zh": "第一（的）",
   "ex": "Sunday is the first day of the week."
  },
  {
   "en": "Thanksgiving",
   "pos": "n.",
   "zh": "感恩節",
   "ex": "People can have a day off on Thanksgiving in the USA."
  },
  {
   "en": "important",
   "pos": "adj.",
   "zh": "重要的",
   "ex": "Basketball is important to Jesse."
  },
  {
   "en": "holiday",
   "pos": "n.",
   "zh": "節日；假日",
   "ex": "Christmas is my favorite holiday."
  },
  {
   "en": "when",
   "pos": "adv.",
   "zh": "何時",
   "ex": "Ben: When is their meet-and-greet? Mia: It's this Saturday."
  },
  {
   "en": "fourth",
   "pos": "adj.; adv.; n.",
   "zh": "第四（的）",
   "ex": "The fourth class today is English."
  },
  {
   "en": "birthday",
   "pos": "n.",
   "zh": "生日",
   "ex": "Tomorrow is my birthday."
  },
  {
   "en": "also",
   "pos": "adv.",
   "zh": "也；此外",
   "ex": "Ted is my cousin, and he's also my classmate."
  },
  {
   "en": "before",
   "pos": "prep.",
   "zh": "在…之前",
   "ex": "Let's play a game before dinner."
  },
  {
   "en": "around",
   "pos": "adv.; prep.",
   "zh": "圍繞；在…附近",
   "ex": "Are there many houses around the park?"
  },
  {
   "en": "How about...?",
   "pos": "",
   "zh": "那…呢？",
   "ex": "Steven: I am a K-pop fan. How about you, Lauren? Lauren: I'm a fan of K-pop, too."
  },
  {
   "en": "second",
   "pos": "adj.; adv.; n.",
   "zh": "第二（的）",
   "ex": "Rose is Mr. Bean's second daughter."
  },
  {
   "en": "next",
   "pos": "adj.",
   "zh": "下一個的",
   "ex": "Christmas Eve is next week."
  },
  {
   "en": "month",
   "pos": "n.",
   "zh": "月份",
   "ex": "My sister is seven months old."
  },
  {
   "en": "January",
   "pos": "n.",
   "zh": "一月",
   "ex": "January is the first month of the year."
  },
  {
   "en": "February",
   "pos": "n.",
   "zh": "二月",
   "ex": "The holiday is in February."
  },
  {
   "en": "March",
   "pos": "n.",
   "zh": "三月",
   "ex": "The baseball game is on March fifteenth."
  },
  {
   "en": "April",
   "pos": "n.",
   "zh": "四月",
   "ex": "April is between March and May."
  },
  {
   "en": "May",
   "pos": "n.",
   "zh": "五月",
   "ex": "Mother's Day is on the second Sunday of May."
  },
  {
   "en": "June",
   "pos": "n.",
   "zh": "六月",
   "ex": "June first is on Saturday this year."
  },
  {
   "en": "\u0007July",
   "pos": "n.",
   "zh": "七月",
   "ex": "July fourth is a very important day in the USA."
  },
  {
   "en": "August",
   "pos": "n.",
   "zh": "八月",
   "ex": "Father's Day in Taiwan is on August eighth."
  },
  {
   "en": "September",
   "pos": "n.",
   "zh": "九月",
   "ex": "September twenty-eighth is Confucius' birthday."
  },
  {
   "en": "October",
   "pos": "n.",
   "zh": "十月",
   "ex": "October is after September."
  },
  {
   "en": "December",
   "pos": "n.",
   "zh": "十二月",
   "ex": "Next December I'm going to the USA with my friends."
  },
  {
   "en": "New Year's Eve",
   "pos": "n.",
   "zh": "元旦前夕",
   "ex": "New Year's Eve is on December 31."
  },
  {
   "en": "Christmas",
   "pos": "n.",
   "zh": "聖誕節",
   "ex": "It's Christmas today."
  },
  {
   "en": "third",
   "pos": "adj.; adv.; n.",
   "zh": "第三（的）",
   "ex": "March is the third month of the year."
  },
  {
   "en": "animal",
   "pos": "n.",
   "zh": "動物",
   "ex": "What's your favorite animal?"
  },
  {
   "en": "cow",
   "pos": "n.",
   "zh": "牛；乳牛",
   "ex": "Don't touch the cow. It's eating."
  },
  {
   "en": "think",
   "pos": "v.",
   "zh": "想；認為",
   "ex": "Claire: Where can we go for dinner? Asher: I'm thinking about Ma's Kitchen. It's great."
  },
  {
   "en": "lucky",
   "pos": "adj.",
   "zh": "幸運的",
   "ex": "Twelve is my lucky number."
  },
  {
   "en": "only",
   "pos": "adv.; adj.",
   "zh": "只是；唯一的",
   "ex": "He is only a boy, not a man."
  },
  {
   "en": "dinner",
   "pos": "n.",
   "zh": "晚餐",
   "ex": " Sammy is having dinner with her family."
  }
 ],
 "6": [
  {
   "en": "\u0007lion",
   "pos": "n.",
   "zh": "獅子",
   "ex": "Is there a lion under the tree?"
  },
  {
   "en": "over there",
   "pos": "",
   "zh": "在那裡",
   "ex": "The woman over there is a cook."
  },
  {
   "en": "king",
   "pos": "n.",
   "zh": "國王",
   "ex": "The beautiful house is for the king."
  },
  {
   "en": "some",
   "pos": "adj.; pron.",
   "zh": "一些（的）",
   "ex": "There are some comic books on the desk."
  },
  {
   "en": "elephant",
   "pos": "n.",
   "zh": "大象",
   "ex": "There's an elephant in front of the bus."
  },
  {
   "en": "so",
   "pos": "adv.",
   "zh": "如此地",
   "ex": "Uncle Peter's farm is so big."
  },
  {
   "en": "any",
   "pos": "adj.; pron.",
   "zh": "任何（的）",
   "ex": "There aren't any chairs in the classroom."
  },
  {
   "en": "tiger",
   "pos": "n.",
   "zh": "老虎",
   "ex": "Lions and tigers are big cats."
  },
  {
   "en": "zebra",
   "pos": "n.",
   "zh": "斑馬",
   "ex": "There are no zebras near here."
  },
  {
   "en": "back",
   "pos": "n.",
   "zh": "背；後面",
   "ex": "Is that a bird on the dog's back?"
  },
  {
   "en": "help",
   "pos": "n.; v.",
   "zh": "幫助；幫忙",
   "ex": "The watch is a great help to me."
  },
  {
   "en": "right",
   "pos": "adj.",
   "zh": "正確的",
   "ex": "Matt: Is she your sister? Belle: That's right."
  },
  {
   "en": "monkey",
   "pos": "n.",
   "zh": "猴子",
   "ex": "There are three monkeys in the tree."
  },
  {
   "en": "fox",
   "pos": "n.",
   "zh": "狐狸",
   "ex": "Are there two foxes over there?"
  },
  {
   "en": "horse",
   "pos": "n.",
   "zh": "馬",
   "ex": "This horse is very old."
  },
  {
   "en": "rat",
   "pos": "n.",
   "zh": "老鼠",
   "ex": "There is a big rat in the kitchen."
  },
  {
   "en": "bear",
   "pos": "n.",
   "zh": "熊",
   "ex": "Are there any bears in Africa?"
  },
  {
   "en": "world",
   "pos": "n.",
   "zh": "世界",
   "ex": "The lion is the king of the animal world."
  },
  {
   "en": "example",
   "pos": "n.",
   "zh": "實例",
   "ex": "The Lins are a great example of a happy family."
  },
  {
   "en": "bug",
   "pos": "n.",
   "zh": "蟲子",
   "ex": "Look! There is a bug in the pencil box."
  },
  {
   "en": "food",
   "pos": "n.",
   "zh": "食物",
   "ex": "I'm hungry. Let's eat some food."
  },
  {
   "en": "clean up",
   "pos": "",
   "zh": "清理；打掃",
   "ex": "Tom is cleaning up his room."
  },
  {
   "en": "full",
   "pos": "adj.",
   "zh": "飽的；滿的",
   "ex": "Jason: Are you hungry? Sarah: No. I'm full."
  },
  {
   "en": "healthy",
   "pos": "adj.",
   "zh": "健康的",
   "ex": "Mary's daughter is a healthy girl."
  },
  {
   "en": "\u0007thanks to 幸虧󠄂；由於",
   "pos": "",
   "zh": "?",
   "ex": "Thanks to Mom, we can have a great dinner."
  },
  {
   "en": "\u0007clean",
   "pos": "adj.",
   "zh": "乾淨的",
   "ex": "Their house is very clean."
  }
 ]
};
