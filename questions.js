// Data 80 Soal Try Out Ujian Fiqih Kelas 8
// 40 Pilihan Ganda & 40 Benar/Salah beserta Pembahasan & Kategori Diagnostik

const APP_BUILD = '2026-10-01a';

let TOPICS = {
  HUKUM_SYARI: "Pengertian Fiqih & 5 Hukum Syar'i",
  THAHARAH_NAJIS: "Syarat Sah Salat, Thaharah & Najis",
  TEMPAT_SALAT: "Ketentuan Tempat Salat",
  WAKTU_SALAT: "Waktu-Waktu Salat & Ketentuannya",
  AURAT_PAKAIAN: "Batasan Aurat & Adab Berpakaian",
  KIBLAT_RUKHSAH: "Menghadap Kiblat & Keringanan (Rukhsah)",
  RUKUN_WAJIB: "Niat, Rukun, Wajib Salat & Sujud Sahwi"
};

const TOPIC_RECOMMENDATIONS = {
  [TOPICS.HUKUM_SYARI]: "Pelajari kembali definisi fiqih amaliyah dan 5 hukum syar'i (Wajib, Mandub/Sunnah, Haram, Makruh, Mubah) beserta konsekuensi pahala dan dosanya.",
  [TOPICS.THAHARAH_NAJIS]: "Tinjau kembali perbedaan hadats kecil (cukup wudhu) vs hadats besar (mandi janabah), serta cara menyucikan 3 unsur: badan, pakaian, dan tempat salat.",
  [TOPICS.TEMPAT_SALAT]: "Pahami kaidah asal tempat salat (semua tanah suci boleh digunakan) dan tempat-tempat terlarang (kuburan, tempat menderumnya unta).",
  [TOPICS.WAKTU_SALAT]: "Perdalam batasan awal dan akhir setiap waktu salat (zawal syams, isfirar, hilangnya syafaq, nisfu lail, fajar shadiq) dan ketentuan mendapati 1 rakaat.",
  [TOPICS.AURAT_PAKAIAN]: "Kaji kembali batasan aurat laki-laki (antara pusar dan lutut + anjuran menutup bahu) serta wanita (seluruh tubuh kecuali wajah & telapak tangan saat sendiri/mahram, dan wajib menutup jika ada ajnabi).",
  [TOPICS.KIBLAT_RUKHSAH]: "Pahami perbedaan kewajiban menghadap 'ainul Ka'bah (jika melihat langsung) vs arah Ka'bah (jika jauh), serta rukhsah salat di kendaraan dan saat kondisi darurat/takut.",
  [TOPICS.RUKUN_WAJIB]: "Kuasai 14 rukun salat (thuma'ninah, tartib, sujud pada 7 anggota) dan perbedaan rukun vs wajib salat serta penanganan lupa (sujud sahwi)."
};

let QUESTIONS = [
  // ================= PILIHAN GANDA (1 - 40) =================
  {
    id: 1,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Fiqih menurut pengertian dalam materi adalah …",
    options: [
      { key: "A", text: "معرفة الأحكام الشرعية العملية" },
      { key: "B", text: "معرفة الأحكام العقدية فقط" },
      { key: "C", text: "معرفة التاريخ الإسلامي" },
      { key: "D", text: "معرفة علوم اللغة العربية" }
    ],
    correctAnswer: "A",
    explanation: "Fiqih secara istilah syariat adalah mengetahui hukum-hukum syar'i yang bersifat amaliyah (praktis) dari dalil-dalilnya yang terperinci (معرفة الأحكام الشرعية العملية)."
  },
  {
    id: 2,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Jumlah hukum syar‘i yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "ثلاثة" },
      { key: "B", text: "أربعة" },
      { key: "C", text: "خمسة" },
      { key: "D", text: "ستة" }
    ],
    correctAnswer: "C",
    explanation: "Hukum syar'i (hukum taklifi) ada lima: Wajib (Ijab), Sunnah/Mustahabb (Nadb), Haram (Tahrim), Makruh (Karahah), dan Mubah (Ibahah)."
  },
  {
    id: 3,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Salah satu contoh perbuatan yang hukumnya **wajib** dalam materi adalah …",
    options: [
      { key: "A", text: "شرب العصير" },
      { key: "B", text: "الصلاة" },
      { key: "C", text: "الالتفات في الصلاة" },
      { key: "D", text: "عقوق الوالدين" }
    ],
    correctAnswer: "B",
    explanation: "Salat lima waktu adalah kewajiban pokok bagi setiap muslim yang mukallaf. Durhaka hukumnya haram, menoleh makruh, dan minum jus mubah."
  },
  {
    id: 4,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Dua sumber utama hukum syar‘i yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "القرآن والسيرة" },
      { key: "B", text: "القرآن والسنة النبوية" },
      { key: "C", text: "الحديث والتاريخ" },
      { key: "D", text: "الإجماع واللغة" }
    ],
    correctAnswer: "B",
    explanation: "Dua sumber pokok dan utama syariat Islam adalah Al-Qur'an dan As-Sunnah An-Nabawiyyah ash-Shahihah."
  },
  {
    id: 5,
    type: "mcq",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Salah satu syarat sah salat adalah …",
    options: [
      { key: "A", text: "الطهارة من الحدث" },
      { key: "B", text: "النوم" },
      { key: "C", text: "الكلام" },
      { key: "D", text: "الأكل" }
    ],
    correctAnswer: "A",
    explanation: "Bersuci dari hadats (baik hadats kecil dengan wudhu maupun hadats besar dengan mandi) merupakan syarat sah salat tanpa khilaf."
  },
  {
    id: 6,
    type: "mcq",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Tiga hal yang harus terbebas dari najis ketika salat adalah …",
    options: [
      { key: "A", text: "الرأس واليد والرجل" },
      { key: "B", text: "البدن والثوب ومكان الصلاة" },
      { key: "C", text: "المسجد والبيت والطريق" },
      { key: "D", text: "الوجه واليد والثوب" }
    ],
    correctAnswer: "B",
    explanation: "Syarat sah salat dari segi najis mewajibkan kesucian pada 3 aspek: badan orang yang salat, pakaian yang dikenakan, dan tempat yang ia gunakan untuk bersujud/salat."
  },
  {
    id: 7,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Mengapa masuknya waktu menjadi syarat salat?",
    options: [
      { key: "A", text: "Karena salat boleh dilakukan kapan saja" },
      { key: "B", text: "Karena setiap salat memiliki waktu yang telah ditentukan" },
      { key: "C", text: "Karena salat hanya dilakukan pada malam hari" },
      { key: "D", text: "Karena semua salat harus dilakukan sebelum Zuhur" }
    ],
    correctAnswer: "B",
    explanation: "Allah Ta'ala berfirman: 'Sesungguhnya salat itu adalah fardhu yang ditentukan waktunya atas orang-orang yang beriman' (QS. An-Nisa: 103). Salat tidak sah jika dikerjakan sebelum masuk waktunya."
  },
  {
    id: 8,
    type: "mcq",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Batas aurat laki-laki ketika salat menurut materi adalah …",
    options: [
      { key: "A", text: "من الصدر إلى القدم" },
      { key: "B", text: "من السرة إلى الركبة" },
      { key: "C", text: "من الرأس إلى الركبة" },
      { key: "D", text: "من الكتف إلى القدم" }
    ],
    correctAnswer: "B",
    explanation: "Batas aurat dasar laki-laki dalam salat adalah antara pusar hingga lutut (من السرة إلى الركبة), disertai anjuran menutup kedua bahu."
  },
  {
    id: 9,
    type: "mcq",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Aurat wanita ketika salat pada keadaan biasa adalah …",
    options: [
      { key: "A", text: "جميع البدن إلا الرأس" },
      { key: "B", text: "جميع البدن إلا الوجه واليدين" },
      { key: "C", text: "جميع البدن إلا الرجلين" },
      { key: "D", text: "الوجه والرأس فقط" }
    ],
    correctAnswer: "B",
    explanation: "Dalam keadaan biasa (tidak di hadapan ajnabi/laki-laki bukan mahram), wanita menutup seluruh badannya ketika salat kecuali wajah dan kedua telapak tangan."
  },
  {
    id: 10,
    type: "mcq",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Orang yang jauh dari Ka‘bah ketika salat diperintahkan untuk …",
    options: [
      { key: "A", text: "استقبال عين الكعبة" },
      { key: "B", text: "استقبال جهة الكعبة" },
      { key: "C", text: "ترك القبلة" },
      { key: "D", text: "استقبال المسجد النبوي" }
    ],
    correctAnswer: "B",
    explanation: "Bagi yang berada jauh dari Makkah dan tidak melihat Ka'bah langsung, cukup menghadap arah (jihat) Ka'bah sesuai sabda Nabi: 'Apa yang ada di antara timur dan barat adalah kiblat'."
  },
  {
    id: 11,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Tempat niat menurut materi adalah …",
    options: [
      { key: "A", text: "اللسان" },
      { key: "B", text: "القلب" },
      { key: "C", text: "اليد" },
      { key: "D", text: "العقل فقط" }
    ],
    correctAnswer: "B",
    explanation: "Tempat niat adalah di dalam hati (محل النية القلب). Niat adalah ketetapan hati untuk beribadah kepada Allah Ta'ala."
  },
  {
    id: 12,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Jumlah rukun salat yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "عشرة" },
      { key: "B", text: "اثنا عشر" },
      { key: "C", text: "أربعة عشر" },
      { key: "D", text: "ستة عشر" }
    ],
    correctAnswer: "C",
    explanation: "Dalam mazhab Hambali dan materi fiqih dasar rukun salat berjumlah 14 rukun (أربعة عشر ركنا)."
  },
  {
    id: 13,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Yang dimaksud dengan **takbiratul ihram** adalah …",
    options: [
      { key: "A", text: "التسليم" },
      { key: "B", text: "تكبيرة الإحرام" },
      { key: "C", text: "قراءة التشهد" },
      { key: "D", text: "دعاء الاستفتاح" }
    ],
    correctAnswer: "B",
    explanation: "Takbiratul ihram (تكبيرة الإحرام) adalah takbir pertama yang mengharamkan hal-hal yang sebelumnya halal (seperti makan, minum, bicara) selama salat."
  },
  {
    id: 14,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Di antara berikut ini yang termasuk **wajib salat**, bukan rukun salat, adalah …",
    options: [
      { key: "A", text: "الركوع" },
      { key: "B", text: "السجود" },
      { key: "C", text: "التشهد الأول والجلوس له" },
      { key: "D", text: "قراءة الفاتحة" }
    ],
    correctAnswer: "C",
    explanation: "Tasyahhud awal dan duduk untuk tasyahhud awal adalah wajib salat, bukan rukun. Jika tertinggal karena lupa, ditutup dengan sujud sahwi tanpa harus mengulang rakaat."
  },
  {
    id: 15,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Jika seseorang lupa meninggalkan salah satu wajib salat, maka menurut materi ia …",
    options: [
      { key: "A", text: "يعود إليه وجوبًا" },
      { key: "B", text: "يقطع الصلاة مباشرة" },
      { key: "C", text: "لا يعود إليه ويسجد للسهو" },
      { key: "D", text: "يعيد الصلاة من البداية" }
    ],
    correctAnswer: "C",
    explanation: "Karakteristik wajib salat: jika ditinggalkan karena lupa, tidak perlu kembali kepadanya setelah masuk ke rukun berikutnya, melainkan diganti dengan sujud sahwi di akhir salat."
  },
  {
    id: 16,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Contoh hukum **makruh** yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "الالتفات في الصلاة" },
      { key: "B", text: "الصلاة" },
      { key: "C", text: "شرب العصير" },
      { key: "D", text: "عقوق الوالدين" }
    ],
    correctAnswer: "A",
    explanation: "Menoleh ke sana ke mari saat salat tanpa ada kebutuhan (الالتفات في الصلاة) hukumnya makruh karena mengurangi kekhusyukan."
  },
  {
    id: 17,
    type: "mcq",
    topic: TOPICS.HUKUM_SYARI,
    question: "Perbuatan yang apabila dikerjakan mendapat hukuman dan apabila ditinggalkan mendapat pahala termasuk …",
    options: [
      { key: "A", text: "الواجب" },
      { key: "B", text: "المباح" },
      { key: "C", text: "المكروه" },
      { key: "D", text: "المحرم" }
    ],
    correctAnswer: "D",
    explanation: "Definisi haram (المحرم) adalah perbuatan yang dilarang syariat: jika ditinggalkan karena taat kepada Allah mendapat pahala, dan jika dilanggar mendapat ancaman siksa."
  },
  {
    id: 18,
    type: "mcq",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Seseorang yang mengalami **hadats besar** hendak melaksanakan salat. Cara bersucinya adalah …",
    options: [
      { key: "A", text: "الوضوء فقط" },
      { key: "B", text: "غسل الجنابة" },
      { key: "C", text: "غسل اليدين فقط" },
      { key: "D", text: "مسح الثوب" }
    ],
    correctAnswer: "B",
    explanation: "Hadats besar hanya dapat dihilangkan dengan mandi wajib/janabah (غسل الجنابة), meratakan air ke seluruh badan dan rambut."
  },
  {
    id: 19,
    type: "mcq",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Hadats yang dapat dihilangkan dengan wudu adalah …",
    options: [
      { key: "A", text: "الحدث الأصغر" },
      { key: "B", text: "الحدث الأكبر" },
      { key: "C", text: "النجاسة على الثوب" },
      { key: "D", text: "النجاسة في المكان" }
    ],
    correctAnswer: "A",
    explanation: "Hadats kecil (seperti buang air kecil, buang angin, tidur lelap) dihilangkan dengan berwudhu."
  },
  {
    id: 20,
    type: "mcq",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Jika seseorang mengetahui bahwa sandalnya terkena najis ketika hendak salat, tindakan yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "رمي النعلين فقط" },
      { key: "B", text: "مسحهما ثم الصلاة فيهما" },
      { key: "C", text: "ترك الصلاة" },
      { key: "D", text: "غسل المسجد كله" }
    ],
    correctAnswer: "B",
    explanation: "Berdasarkan hadits, apabila melihat najis pada sandal sebelum salat, ia mengusap/menggosokkannya ke tanah hingga hilang najisnya, lalu boleh salat mengenakannya."
  },
  {
    id: 21,
    type: "mcq",
    topic: TOPICS.TEMPAT_SALAT,
    question: "Di antara tempat berikut yang disebutkan sebagai tempat yang tidak digunakan untuk salat adalah …",
    options: [
      { key: "A", text: "المسجد" },
      { key: "B", text: "المقبرة" },
      { key: "C", text: "الأرض الطاهرة" },
      { key: "D", text: "البيت الطاهر" }
    ],
    correctAnswer: "B",
    explanation: "Nabi ﷺ bersabda bahwa seluruh bumi adalah masjid (tempat salat) kecuali kuburan (المقبرة) dan tempat pemandian/kamar mandi (الحمام)."
  },
  {
    id: 22,
    type: "mcq",
    topic: TOPICS.TEMPAT_SALAT,
    question: "Hukum asal tempat untuk salat menurut materi adalah …",
    options: [
      { key: "A", text: "كل أرض طاهرة تصلح للصلاة" },
      { key: "B", text: "لا تصح الصلاة إلا في المسجد" },
      { key: "C", text: "لا تصح الصلاة إلا في البيت" },
      { key: "D", text: "لا تصح الصلاة إلا في المسجد الحرام" }
    ],
    correctAnswer: "A",
    explanation: "Kaidah fiqih menyatakan bahwa asal dari tempat adalah suci: 'Dan dijadikan bagiku bumi sebagai tempat sujud dan sarana bersuci'."
  },
  {
    id: 23,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Zuhur dimulai ketika …",
    options: [
      { key: "A", text: "تطلع الشمس" },
      { key: "B", text: "تزول الشمس" },
      { key: "C", text: "تغيب الشمس" },
      { key: "D", text: "يطلع الفجر" }
    ],
    correctAnswer: "B",
    explanation: "Awal waktu salat Zuhur adalah zawal asy-syams (تزول الشمس), yaitu ketika posisi matahari mulai condong ke arah barat dari tengah langit."
  },
  {
    id: 24,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Menurut pembagian waktu dalam materi, waktu Asar berlangsung sampai …",
    options: [
      { key: "A", text: "طلوع الشمس" },
      { key: "B", text: "غروب الشمس مباشرة دون تفصيل" },
      { key: "C", text: "اصفرار الشمس" },
      { key: "D", text: "منتصف الليل" }
    ],
    correctAnswer: "C",
    explanation: "Waktu pilihan (ikhtiyar) salat Asar berlangsung hingga matahari menguning (اصفرار الشمس), sedangkan hingga terbenam matahari adalah waktu darurat."
  },
  {
    id: 25,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Magrib berlangsung sampai …",
    options: [
      { key: "A", text: "طلوع الفجر" },
      { key: "B", text: "منتصف الليل" },
      { key: "C", text: "ذهاب الشفق" },
      { key: "D", text: "طلوع الشمس" }
    ],
    correctAnswer: "C",
    explanation: "Waktu Magrib berakhir dengan hilangnya mega merah di ufuk barat (ذهاب الشفق الأحمر), yang sekaligus menjadi tanda masuknya waktu Isya."
  },
  {
    id: 26,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Batas waktu Isya yang disebutkan dalam materi adalah …",
    options: [
      { key: "A", text: "نصف الليل" },
      { key: "B", text: "طلوع الشمس" },
      { key: "C", text: "زوال الشمس" },
      { key: "D", text: "غروب الشمس" }
    ],
    correctAnswer: "A",
    explanation: "Batas waktu ikhtiyar salat Isya menurut hadits sahih adalah hingga pertengahan malam (إلى نصف الليل)."
  },
  {
    id: 27,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Subuh dimulai sejak …",
    options: [
      { key: "A", text: "زوال الشمس" },
      { key: "B", text: "غروب الشمس" },
      { key: "C", text: "طلوع الفجر" },
      { key: "D", text: "منتصف الليل" }
    ],
    correctAnswer: "C",
    explanation: "Awal waktu salat Subuh adalah terbitnya fajar shadiq (cahaya putih membentang di ufuk timur) dan berakhir saat terbit matahari."
  },
  {
    id: 28,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Seseorang mendapatkan satu rakaat salat Subuh sebelum matahari terbit. Berdasarkan materi, berarti ia …",
    options: [
      { key: "A", text: "لم يدرك وقت الصلاة" },
      { key: "B", text: "أدرك وقت الصلاة" },
      { key: "C", text: "يجب عليه ترك الصلاة" },
      { key: "D", text: "يعيد الصلاة بعد الظهر" }
    ],
    correctAnswer: "B",
    explanation: "Rasulullah ﷺ bersabda: 'Barang siapa yang mendapati satu rakaat dari salat Subuh sebelum terbit matahari, maka ia telah mendapati salat Subuh' (HR. Bukhari & Muslim)."
  },
  {
    id: 29,
    type: "mcq",
    topic: TOPICS.WAKTU_SALAT,
    question: "Seseorang tertidur sehingga terlewat salatnya. Ketika ia terbangun, yang dilakukan adalah …",
    options: [
      { key: "A", text: "ترك الصلاة" },
      { key: "B", text: "الصلاة عند الاستيقاظ" },
      { key: "C", text: "انتظار وقت الصلاة التالية" },
      { key: "D", text: "الصلاة في اليوم التالي فقط" }
    ],
    correctAnswer: "B",
    explanation: "Nabi ﷺ bersabda: 'Barang siapa yang lupa salat atau tertidur, maka kafaratnya adalah ia mengerjakannya ketika ia ingat/bangun'."
  },
  {
    id: 30,
    type: "mcq",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Dalam salat, laki-laki diperintahkan menutup …",
    options: [
      { key: "A", text: "الرأس فقط" },
      { key: "B", text: "الكتفين" },
      { key: "C", text: "القدمين فقط" },
      { key: "D", text: "اليدين فقط" }
    ],
    correctAnswer: "B",
    explanation: "Nabi ﷺ bersabda: 'Janganlah salah seorang dari kalian salat dengan satu kain tanpa ada sehelai pun kain di atas pundak/bahunya' (HR. Bukhari & Muslim)."
  },
  {
    id: 31,
    type: "mcq",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Pakaian yang sangat tipis hingga memperlihatkan kulit pada bagian aurat menyebabkan …",
    options: [
      { key: "A", text: "الصلاة صحيحة دائمًا" },
      { key: "B", text: "الصلاة لا تصح مع انكشاف العورة" },
      { key: "C", text: "الصلاة مكروهة فقط" },
      { key: "D", text: "لا علاقة لها بالصلاة" }
    ],
    correctAnswer: "B",
    explanation: "Menutup aurat dengan kain yang tidak transparan adalah syarat sah salat. Pakaian tipis yang memperlihatkan warna kulit dianggap tidak menutup aurat, sehingga salatnya tidak sah."
  },
  {
    id: 32,
    type: "mcq",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Menurut materi, apabila wanita salat di hadapan laki-laki non-mahram, maka ia juga harus menutup …",
    options: [
      { key: "A", text: "الوجه واليدين" },
      { key: "B", text: "الرأس فقط" },
      { key: "C", text: "القدمين فقط" },
      { key: "D", text: "العينين" }
    ],
    correctAnswer: "A",
    explanation: "Bila wanita salat di hadapan laki-laki bukan mahram (ajnabi), ia wajib menutup wajah dan kedua tangannya sebagaimana kewajiban hijab umum."
  },
  {
    id: 33,
    type: "mcq",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Orang yang salat di dalam Masjidil Haram diarahkan untuk menghadap …",
    options: [
      { key: "A", text: "جهة المدينة" },
      { key: "B", text: "عين الكعبة" },
      { key: "C", text: "جهة المسجد النبوي" },
      { key: "D", text: "أي جهة" }
    ],
    correctAnswer: "B",
    explanation: "Bagi orang yang berada di Masjidil Haram dan dapat melihat Ka'bah langsung, wajib menghadap persis ke badan Ka'bah ('ainul Ka'bah), bukan sekadar arahnya."
  },
  {
    id: 34,
    type: "mcq",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Bagi orang yang jauh dari Ka‘bah, penyimpangan kecil dari arah Ka‘bah …",
    options: [
      { key: "A", text: "يضر دائمًا" },
      { key: "B", text: "لا يضر" },
      { key: "C", text: "يبطل الصلاة" },
      { key: "D", text: "يمنع الصلاة" }
    ],
    correctAnswer: "B",
    explanation: "Bagi yang berada jauh dari Makkah, sedikit pergeseran atau miring kecil tidak membatalkan salat karena kewajibannya adalah menghadap ke arah umum Ka'bah (jihatul Ka'bah)."
  },
  {
    id: 35,
    type: "mcq",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Kewajiban menghadap kiblat dapat gugur dalam keadaan …",
    options: [
      { key: "A", text: "الراحة" },
      { key: "B", text: "الخوف والعجز" },
      { key: "C", text: "السفر فقط" },
      { key: "D", text: "النوم فقط" }
    ],
    correctAnswer: "B",
    explanation: "Kewajiban menghadap kiblat gugur dalam kondisi darurat seperti salat khauf (perang dahsyat), orang sakit yang tidak mampu bergerak, serta salat sunnah di atas kendaraan bagi musafir."
  },
  {
    id: 36,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Manakah yang **bukan** termasuk anggota badan untuk sujud yang disebutkan dalam materi?",
    options: [
      { key: "A", text: "اليدان" },
      { key: "B", text: "الركبتان" },
      { key: "C", text: "الجبهة" },
      { key: "D", text: "الكتفان" }
    ],
    correctAnswer: "D",
    explanation: "Tujuh anggota sujud adalah: dahi (termasuk hidung), kedua telapak tangan, kedua lutut, dan ujung jari-jemari kedua kaki. Kedua bahu bukan termasuk anggota sujud."
  },
  {
    id: 37,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Bacaan **سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ** dibaca ketika …",
    options: [
      { key: "A", text: "الدخول في السجود" },
      { key: "B", text: "الرفع من الركوع" },
      { key: "C", text: "الجلوس بين السجدتين" },
      { key: "D", text: "التشهد الأخير" }
    ],
    correctAnswer: "B",
    explanation: "Tasmi' (سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ) dibaca oleh imam dan munfarid saat bangkit dari ruku' menuju i'tidal."
  },
  {
    id: 38,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Bacaan **رَبَّنَا وَلَكَ الْحَمْدُ** berkaitan dengan …",
    options: [
      { key: "A", text: "الاعتدال بعد الركوع" },
      { key: "B", text: "التشهد الأول" },
      { key: "C", text: "السجود" },
      { key: "D", text: "التسليم" }
    ],
    correctAnswer: "A",
    explanation: "Tahmid (رَبَّنَا وَلَكَ الْحَمْدُ) dibaca saat berdiri tegak dalam posisi i'tidal setelah ruku'."
  },
  {
    id: 39,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Yang dimaksud dengan **الطمأنينة** dalam rukun salat adalah …",
    options: [
      { key: "A", text: "Bergerak cepat dalam setiap gerakan" },
      { key: "B", text: "Tenang dan diam sejenak dalam setiap rukun gerakan salat" },
      { key: "C", text: "Membaca dengan suara keras" },
      { key: "D", text: "Memperpanjang doa setelah salat" }
    ],
    correctAnswer: "B",
    explanation: "Thuma'ninah adalah diam dan tenang sejenak hingga setiap persendian kembali pada posisinya saat ruku', i'tidal, sujud, dan duduk di antara dua sujud. Ini adalah rukun yang tidak boleh ditinggalkan."
  },
  {
    id: 40,
    type: "mcq",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Salah satu rukun salat yang berkaitan dengan urutan pelaksanaan rukun adalah …",
    options: [
      { key: "A", text: "النية" },
      { key: "B", text: "الطمأنينة" },
      { key: "C", text: "الترتيب بين الأركان" },
      { key: "D", text: "القراءة السرية" }
    ],
    correctAnswer: "C",
    explanation: "Tertib (الترتيب بين الأركان) adalah mengerjakan rukun-rukun salat secara berurutan sesuai sunnah Nabi (takbir, fatihah, ruku', i'tidal, sujud, dst)."
  },

  // ================= BENAR / SALAH (41 - 80) =================
  {
    id: 41,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Fiqih berkaitan dengan pengetahuan tentang hukum-hukum syar‘i yang bersifat amaliyah.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Fiqih secara definisi adalah ilmu tentang hukum syar'i praktis (amaliyah) seperti salat, puasa, muamalah."
  },
  {
    id: 42,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Orang yang melakukan perbuatan mubah pasti mendapatkan pahala, sedangkan yang meninggalkannya mendapat dosa.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Perbuatan mubah adalah perbuatan yang tidak mendatangkan pahala maupun dosa jika dikerjakan atau ditinggalkan pada asalnya."
  },
  {
    id: 43,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Salat boleh dilakukan sebelum masuk waktunya selama seseorang telah berniat dengan benar.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Masuknya waktu merupakan syarat sah salat. Salat sebelum waktunya batal dan tidak sah meskipun berniat."
  },
  {
    id: 44,
    type: "tf",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Najis yang harus dihilangkan ketika salat hanya yang terdapat pada pakaian.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Najis wajib disucikan dari 3 tempat: pakaian, badan, dan tempat yang dipakai salat."
  },
  {
    id: 45,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Aurat laki-laki dalam salat adalah antara pusar dan lutut.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Batas aurat laki-laki dalam salat adalah antara pusar hingga lutut."
  },
  {
    id: 46,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Aurat wanita ketika salat pada keadaan biasa mencakup wajah dan kedua tangannya.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Pada kondisi biasa tanpa laki-laki non-mahram, wajah dan kedua telapak tangan wanita bukan aurat dalam salat."
  },
  {
    id: 47,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Orang yang jauh dari Ka‘bah menghadap arah Ka‘bah ketika salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Orang yang jauh cukup menghadap ke arah kiblat (jihatul Ka'bah)."
  },
  {
    id: 48,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Musafir yang salat sunnah di atas kendaraan harus selalu menghadap Ka‘bah sepanjang salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Musafir yang salat sunnah di atas kendaraan boleh mengikuti arah kendaraannya melaju sepanjang salat."
  },
  {
    id: 49,
    type: "tf",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Tempat niat adalah di dalam hati.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Niat bersemayam di dalam hati dan tidak disyaratkan pengucapan lisan."
  },
  {
    id: 50,
    type: "tf",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Apabila seseorang lupa meninggalkan wajib salat, ia harus kembali kepada wajib tersebut sebelum melanjutkan salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Wajib salat yang terlupa dan sudah masuk ke rukun berikutnya tidak boleh kembali kepadanya, cukup diganti sujud sahwi."
  },
  {
    id: 51,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Hukum syar‘i yang disebutkan dalam materi berjumlah lima.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Hukum syar'i berjumlah 5: Wajib, Mustahabb/Sunnah, Haram, Makruh, Mubah."
  },
  {
    id: 52,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Perbuatan mustahabb apabila ditinggalkan menyebabkan pelakunya mendapat hukuman.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Mustahabb/sunnah bila dikerjakan berpahala, namun bila ditinggalkan tidak berdosa dan tidak mendapat siksa."
  },
  {
    id: 53,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Perbuatan haram jika dikerjakan mendapat hukuman, sedangkan meninggalkannya mendapat pahala.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Itulah batasan hukum haram secara fiqih."
  },
  {
    id: 54,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Mubah adalah perbuatan yang pada asalnya tidak mendapatkan pahala maupun hukuman karena dilakukan atau ditinggalkan.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Mubah bersifat netral dan tidak terkait pahala maupun dosa secara zatnya."
  },
  {
    id: 55,
    type: "tf",
    topic: TOPICS.HUKUM_SYARI,
    question: "Orang yang meninggalkan perbuatan makruh tidak mendapatkan pahala sama sekali.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Meninggalkan yang makruh karena taat kepada Allah akan diganjar pahala, meski mengerjakannya tidak disiksa."
  },
  {
    id: 56,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Salat yang dikerjakan sebelum masuk waktunya tidak sah.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Masuk waktu adalah syarat mutlak keabsahan salat."
  },
  {
    id: 57,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Masuknya waktu hanyalah anjuran dalam salat, bukan syarat salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Masuk waktu adalah syarat sah salat fardhu, bukan sekadar anjuran/mustahab."
  },
  {
    id: 58,
    type: "tf",
    topic: TOPICS.TEMPAT_SALAT,
    question: "Tanah yang suci pada dasarnya dapat menjadi tempat salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Asal setiap permukaan bumi yang suci adalah sah untuk dijadikan tempat salat."
  },
  {
    id: 59,
    type: "tf",
    topic: TOPICS.TEMPAT_SALAT,
    question: "Makam termasuk tempat yang disebutkan dalam materi sebagai tempat yang boleh digunakan untuk salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Area pemakaman adalah tempat yang dilarang untuk dijadikan tempat salat."
  },
  {
    id: 60,
    type: "tf",
    topic: TOPICS.TEMPAT_SALAT,
    question: "Tempat berbaring atau berkumpulnya unta termasuk tempat yang dikecualikan untuk salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Tempat menderumnya unta (معاطن الإبل) terlarang untuk salat berdasarkan hadits shahih."
  },
  {
    id: 61,
    type: "tf",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Jibril memberitahukan kepada Nabi ﷺ bahwa terdapat kotoran pada sandal beliau ketika sedang salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Malaikat Jibril mendatangi Nabi saat salat dan mengabarkan ada kotoran/najis di sandal beliau."
  },
  {
    id: 62,
    type: "tf",
    topic: TOPICS.THAHARAH_NAJIS,
    question: "Setelah mengetahui sandal terkena najis, Nabi ﷺ tetap membiarkan najis tersebut tanpa melakukan apa pun.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Nabi ﷺ segera melepaskan kedua sandalnya saat salat dan melanjutkan salatnya."
  },
  {
    id: 63,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Zuhur dimulai ketika matahari terbit.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Zuhur dimulai saat tergelincir matahari (zawal), bukan saat terbit matahari."
  },
  {
    id: 64,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Zuhur berakhir ketika masuk waktu Asar.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Waktu Zuhur berakhir saat bayangan benda sama panjang dengan aslinya (masuknya waktu Asar)."
  },
  {
    id: 65,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Magrib berakhir ketika syafaq telah hilang.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Batas akhir Magrib adalah saat mega merah (syafaq) lenyap dari cakrawala barat."
  },
  {
    id: 66,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Isya menurut materi berlangsung sampai terbit matahari.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Batas waktu Isya adalah sampai pertengahan malam (nisfu lail), bukan sampai terbit matahari."
  },
  {
    id: 67,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Waktu Subuh berlangsung sejak terbit fajar hingga terbit matahari.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Waktu Subuh dimulai dari fajar shadiq hingga piringan matahari mulai terbit."
  },
  {
    id: 68,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Jika seseorang mendapatkan satu rakaat sebelum berakhirnya waktu salat, ia dianggap mendapatkan waktu salat tersebut.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Berdasarkan sabda Rasulullah ﷺ: 'Barangsiapa mendapati satu rakaat salat, ia telah mendapati salat'."
  },
  {
    id: 69,
    type: "tf",
    topic: TOPICS.WAKTU_SALAT,
    question: "Orang yang tertidur hingga terlewat salat tidak perlu menggantinya ketika telah bangun.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Orang yang tertidur wajib meng-qadha/mengerjakan salatnya sesegera mungkin saat terbangun."
  },
  {
    id: 70,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Laki-laki yang pakaiannya memperlihatkan kulit pada bagian antara pusar dan lutut berarti telah menutup aurat dengan sempurna.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Memperlihatkan kulit pada area aurat (antara pusar dan lutut) berarti auratnya belum tertutup."
  },
  {
    id: 71,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Menutup kedua bahu termasuk tuntunan yang disebutkan dalam materi bagi laki-laki ketika salat.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Terdapat larangan salat dengan pundak terbuka tanpa kain penutup."
  },
  {
    id: 72,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Pakaian yang tipis dan memperlihatkan kulit pada aurat tidak menjadi masalah selama warnanya bagus.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Keindahan warna tidak ada artinya jika kainnya tembus pandang; syarat menutup aurat adalah kain yang menghalangi pandangan pada warna kulit."
  },
  {
    id: 73,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Wanita dalam salat pada keadaan biasa tidak wajib menutup wajah dan kedua tangannya.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Dalam keadaan biasa tanpa ada laki-laki bukan mahram, wanita boleh membuka wajah dan kedua telapak tangan."
  },
  {
    id: 74,
    type: "tf",
    topic: TOPICS.AURAT_PAKAIAN,
    question: "Di hadapan laki-laki non-mahram, wanita tetap diperbolehkan membuka wajah dan tangannya ketika salat berdasarkan pengecualian biasa.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Di hadapan ajnabi (non-mahram), wanita wajib menutup seluruh tubuhnya termasuk wajah dan tangan."
  },
  {
    id: 75,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Orang yang berada di dalam Masjidil Haram menghadap arah umum Ka‘bah saja tanpa harus menghadap Ka‘bah itu sendiri.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Bagi yang berada di Masjidil Haram, wajib menghadap fisik Ka'bah ('ainul Ka'bah) secara tepat."
  },
  {
    id: 76,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Bagi orang yang jauh dari Ka‘bah, penyimpangan arah yang sedikit tidak membahayakan.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Pergeseran sedikit dimaafkan bagi yang jauh dari Ka'bah."
  },
  {
    id: 77,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Orang yang salat sunnah di atas kendaraan boleh menghadap ke arah kendaraan berjalan meskipun tidak menuju Ka‘bah.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Merupakan rukhsah (kemudahan) sunnah bagi musafir untuk salat sunnah ke arah manapun kendaraannya melaju."
  },
  {
    id: 78,
    type: "tf",
    topic: TOPICS.KIBLAT_RUKHSAH,
    question: "Dalam keadaan takut atau tidak mampu menghadap kiblat, kewajiban menghadap kiblat dapat gugur.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Syariat Islam memberi kemudahan saat kondisi takut hebat atau sakit/lumpuh yang tidak memungkinkan diarahkan ke kiblat."
  },
  {
    id: 79,
    type: "tf",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Melafalkan niat dengan lisan merupakan tempat asli niat menurut materi.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan SALAH. Tempat asli niat adalah di dalam hati, bukan di lisan."
  },
  {
    id: 80,
    type: "tf",
    topic: TOPICS.RUKUN_WAJIB,
    question: "Apabila salah satu rukun salat terlupa lalu baru teringat setelah sampai pada posisi rukun yang sama di rakaat berikutnya, maka rakaat sebelumnya dianggap tidak sah.",
    options: [
      { key: "A", text: "صَحِيحٌ" },
      { key: "B", text: "خَطَأٌ" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan BENAR. Kaidah rukun: jika rukun terlupa dan baru teringat saat mencapai rukun tersebut di rakaat berikutnya, maka rakaat sebelumnya batal dan rakaat baru ini menempati kedudukannya."
  }
];
