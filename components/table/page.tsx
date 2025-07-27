import { columns, ArticleType } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<ArticleType[]> {
  // Fetch data from your API here.
  let articles = {
    data: [
      {
        id: "3b235552-3cc1-4af6-8ce2-7e27f1dbc60e",
        userId: "759d1f32-5192-4aba-99c9-57f9b811e584",
        categoryId: "e849a6ba-cee8-4f03-bb18-25eebab4fd3c",
        title: "monday",
        content: "lorem 30000",
        imageUrl:
          "https://images.unsplash.com/photo-1660674243221-cff200c6ddcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        createdAt: "2025-07-21T15:27:43.659Z",
        updatedAt: "2025-07-21T15:27:43.659Z",
        category: {
          id: "e849a6ba-cee8-4f03-bb18-25eebab4fd3c",
          userId: "13bdf07d-7b68-47a7-ac92-c884dca722c3",
          name: "Managemen",
          createdAt: "2025-07-01T17:40:28.675Z",
          updatedAt: "2025-07-01T17:40:28.675Z",
        },
        user: {
          id: "759d1f32-5192-4aba-99c9-57f9b811e584",
          username: "ipsum admin",
        },
      },
      {
        id: "54604c63-d246-4776-aae5-be551b52c597",
        userId: "824ba852-0fe6-46a7-ace7-650a4beed55a",
        categoryId: "6bf09c76-de8b-4991-bcae-b49915c5db56",
        title: "Peran Teknologi dalam Meningkatkan Efektivitas Donasi Digital",
        content:
          '\u003Cblockquote data-start="360" data-end="621"\u003E\n\u003Cp data-start="362" data-end="621"\u003E\u003Cstrong data-start="362" data-end="386"\u003ETransformasi digital\u003C/strong\u003E telah membawa perubahan besar dalam berbagai sektor, termasuk \u003Cem data-start="449" data-end="461"\u003Efilantropi\u003C/em\u003E. Kini, lembaga sosial dapat menjangkau lebih banyak penerima manfaat dan donatur melalui \u003Cstrong data-start="551" data-end="571"\u003Eplatform digital\u003C/strong\u003E yang \u003Cem data-start="577" data-end="588"\u003Eresponsif\u003C/em\u003E, \u003Cem data-start="590" data-end="602"\u003Etransparan\u003C/em\u003E, dan \u003Cstrong data-start="608" data-end="620"\u003Einovatif\u003C/strong\u003E.\u003C/p\u003E\n\u003C/blockquote\u003E\n\u003Cblockquote data-start="623" data-end="913"\u003E\n\u003Cp data-start="625" data-end="663"\u003EDalam artikel ini, kita akan membahas:\u003C/p\u003E\n\u003Cul data-start="666" data-end="913"\u003E\n\u003Cli data-start="666" data-end="723"\u003E\n\u003Cp data-start="668" data-end="723"\u003E\u003Cstrong data-start="668" data-end="723"\u003EApa itu transformasi digital dalam dunia filantropi\u003C/strong\u003E\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="726" data-end="784"\u003E\n\u003Cp data-start="728" data-end="784"\u003E\u003Cem data-start="728" data-end="754"\u003ETeknologi yang digunakan\u003C/em\u003E untuk mendukung donasi online\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="787" data-end="864"\u003E\n\u003Cp data-start="789" data-end="864"\u003E\u003Cem data-start="789" data-end="814"\u003EContoh platform digital\u003C/em\u003E yang berhasil meningkatkan partisipasi masyarakat\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="867" data-end="913"\u003E\n\u003Cp data-start="869" data-end="913"\u003E\u003Cstrong data-start="869" data-end="894"\u003ETantangan dan peluang\u003C/strong\u003E dalam penerapannya\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003C/blockquote\u003E\n\u003Cblockquote data-start="915" data-end="1260"\u003E\n\u003Cp data-start="917" data-end="1260"\u003EDengan memanfaatkan teknologi seperti \u003Cstrong data-start="955" data-end="967"\u003EReact.js\u003C/strong\u003E, \u003Cstrong data-start="969" data-end="992"\u003EAPI payment gateway\u003C/strong\u003E, dan \u003Cstrong data-start="998" data-end="1026"\u003Ereal-time data analytics\u003C/strong\u003E, organisasi dapat menciptakan sistem donasi yang \u003Cstrong data-start="1076" data-end="1093"\u003Emudah diakses\u003C/strong\u003E, \u003Cem data-start="1095" data-end="1101"\u003Eaman\u003C/em\u003E, dan \u003Cstrong data-start="1107" data-end="1118"\u003Eefisien\u003C/strong\u003E. Ini bukan hanya tentang digitalisasi, tapi juga bagaimana teknologi dapat memperkuat misi sosial dan \u003Cem data-start="1221" data-end="1259"\u003Emenyebarkan kebaikan lebih luas lagi\u003C/em\u003E.\u003C/p\u003E\n\u003C/blockquote\u003E\n\u003Chr data-start="1262" data-end="1265"\u003E\n\u003Ch3 data-start="1267" data-end="1296"\u003E📌 \u003Cstrong data-start="1274" data-end="1296"\u003ECatatan Gaya Font:\u003C/strong\u003E\u003C/h3\u003E\n\u003Cul data-start="1297" data-end="1644"\u003E\n\u003Cli data-start="1297" data-end="1367"\u003E\n\u003Cp data-start="1299" data-end="1367"\u003E\u003Cstrong data-start="1299" data-end="1307"\u003EBold\u003C/strong\u003E digunakan untuk menekankan istilah penting atau kata kunci.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1368" data-end="1458"\u003E\n\u003Cp data-start="1370" data-end="1458"\u003E\u003Cem data-start="1370" data-end="1378"\u003EItalic\u003C/em\u003E digunakan untuk menandai istilah asing atau hal yang bersifat penekanan ringan.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1459" data-end="1574"\u003E\n\u003Cp data-start="1461" data-end="1574"\u003E\u003Cem data-start="1461" data-end="1472"\u003EUnderline\u003C/em\u003E bisa digunakan untuk menunjukkan sub-topik atau poin penting tambahan (opsional tergantung platform).\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1575" data-end="1644"\u003E\n\u003Cp data-start="1577" data-end="1644"\u003EBullet list digunakan untuk membuat struktur informasi lebih jelas.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E',
        imageUrl:
          "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2025-06-29T05:17:19.105Z",
        updatedAt: "2025-06-29T05:17:19.105Z",
        category: {
          id: "6bf09c76-de8b-4991-bcae-b49915c5db56",
          userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
          name: "Tutorial",
          createdAt: "2025-06-11T15:36:39.040Z",
          updatedAt: "2025-06-11T15:36:39.040Z",
        },
        user: {
          id: "824ba852-0fe6-46a7-ace7-650a4beed55a",
          username: "Fatwa Akbar Jiwani",
        },
      },
      {
        id: "62169f54-a37d-49f6-8495-c9aa2fae5a29",
        userId: "759d1f32-5192-4aba-99c9-57f9b811e584",
        categoryId: "e63c027b-938f-4f10-86ab-85be5b0817eb",
        title: "new artcle",
        content: "dfdfdf dfddfdf dfdfd dfdfdf",
        imageUrl:
          "https://images.unsplash.com/photo-1753128024209-81564c3c2976?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "2025-07-21T06:49:04.372Z",
        updatedAt: "2025-07-21T06:49:04.372Z",
        category: {
          id: "e63c027b-938f-4f10-86ab-85be5b0817eb",
          userId: "115003ff-a9fb-47f3-aadf-cb19851d8be7",
          name: "Informatika",
          createdAt: "2025-07-03T14:59:39.485Z",
          updatedAt: "2025-07-03T14:59:39.485Z",
        },
        user: {
          id: "759d1f32-5192-4aba-99c9-57f9b811e584",
          username: "ipsum admin",
        },
      },
      {
        id: "63c91e69-4617-4a55-bd20-c6c37afc4acf",
        userId: "6c3d3fdb-d129-4c53-8423-5a2ac8089f87",
        categoryId: "4e73f15c-4625-4c9c-8d08-c96af257b674",
        title: "Jadwal Timnas Indonesia vs Malaysia di Piala AFF U23",
        content:
          "\u003Cp\u003EJakarta - Timnas Indonesia U-23 akan berhadapan dengan Malaysia U-23 malam ini. Berikut jadwal duel Indonesia Vs Malaysia di Piala AFF U-23 2025.\u003Cbr\u003EMatchday ketiga Grup A itu digelar di Stadion Gelora Bung Karno, Jakarta, Senin (21/7/2025) mulai pukul 20.00 WIB. Ini bakal jadi duel sengit mengingat rivalitas kedua negara.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003EIndonesia punya start bagus lewat dua kemenangan, 8-0 atas Brunei Darussalam dan 1-0 atas Filipina. Dengan dua kemenangan itu, Indonesia memuncaki Grup A dengan poin sempurna.\u003Cbr\u003E\u003Cbr\u003ESementara, Malaysia di posisi kedua dengan tiga poin hasil kekalahan 0-2 dari Filipina dan kemenangan 7-1 atas Brunei. Maka itu, laga kontra Indonesia bakal jadi hidup-mati untuk Harimau Malaya Muda.\u003Cbr\u003E\u003Cbr\u003ESebab, hasil selain kemenangan akan membuat Malaysia masuk kotak dan membiarkan Filipina lolos menemani Indonesia. Sebab, Filipina cuma akan menghadapi Brunei yang jadi lumbung gol.\u003Cbr\u003E\u003Cbr\u003EDownload Apps Detikcom Sekarang https://apps.detik.com/detik/\u003C/p\u003E",
        imageUrl:
          "https://images.unsplash.com/photo-1569010531813-e7ff11ed25e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        createdAt: "2025-07-21T04:39:50.634Z",
        updatedAt: "2025-07-21T04:39:50.634Z",
        category: {
          id: "4e73f15c-4625-4c9c-8d08-c96af257b674",
          userId: "6c3d3fdb-d129-4c53-8423-5a2ac8089f87",
          name: "Olahraga",
          createdAt: "2025-07-21T04:35:31.558Z",
          updatedAt: "2025-07-21T04:35:31.558Z",
        },
        user: {
          id: "6c3d3fdb-d129-4c53-8423-5a2ac8089f87",
          username: "zilong",
        },
      },
      {
        id: "b02d754e-a87f-41b5-be85-cdb06edb1464",
        userId: "115003ff-a9fb-47f3-aadf-cb19851d8be7",
        categoryId: "d3e65276-4420-4d7c-aae6-f540b822969a",
        title: "Alhamdulillah Finish!",
        content:
          "\u003Cp\u003EBismillah \u003Cstrong\u003Eketerima\u003C/strong\u003E\u003C/p\u003E",
        imageUrl:
          "https://images.unsplash.com/photo-1728458765139-a15f061fc284?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        createdAt: "2025-07-03T21:20:45.729Z",
        updatedAt: "2025-07-03T21:20:45.729Z",
        category: {
          id: "d3e65276-4420-4d7c-aae6-f540b822969a",
          userId: "74d9063e-36fa-4e94-b0e8-87ae2a6c77c7",
          name: "Sports",
          createdAt: "2025-06-14T20:32:13.536Z",
          updatedAt: "2025-06-14T20:32:13.536Z",
        },
        user: {
          id: "115003ff-a9fb-47f3-aadf-cb19851d8be7",
          username: "adminfe",
        },
      },
      {
        id: "ba1daad2-baf3-4772-a0f5-d71378e1f824",
        userId: "824ba852-0fe6-46a7-ace7-650a4beed55a",
        categoryId: "c5dafec2-50fb-401c-90f2-5eff468183b4",
        title:
          "Menyelami Keajaiban Bawah Laut Raja Ampat: Surga Tersembunyi di Timur Indonesia",
        content:
          '\u003Cp data-start="221" data-end="750"\u003ETerletak di ujung barat Pulau Papua, \u003Cstrong data-start="275" data-end="289"\u003ERaja Ampat\u003C/strong\u003E adalah sebuah destinasi yang telah lama dikenal oleh para penyelam profesional dan pencinta laut dari seluruh dunia. Tempat ini bukan hanya terkenal karena keindahan bawah lautnya yang luar biasa, tetapi juga karena keanekaragaman hayati lautnya yang merupakan salah satu yang \u003Cstrong data-start="567" data-end="589"\u003Etertinggi di dunia\u003C/strong\u003E. Artikel ini akan membawa Anda menyelami pesona Raja Ampat, dari panorama lautnya yang memukau hingga tantangan pelestariannya di tengah arus pariwisata modern.\u003C/p\u003E\n\u003Chr data-start="752" data-end="755"\u003E\n\u003Cp data-start="757" data-end="796"\u003E\u003Cstrong data-start="757" data-end="796"\u003EKeindahan Alam yang Tak Tertandingi\u003C/strong\u003E\u003C/p\u003E\n\u003Cp data-start="798" data-end="1173"\u003ERaja Ampat adalah nama dari empat pulau besar &mdash; \u003Cstrong data-start="846" data-end="887"\u003EWaigeo, Batanta, Salawati, dan Misool\u003C/strong\u003E &mdash; serta lebih dari 1.500 pulau kecil, atol, dan beting yang membentuk gugusan kepulauan yang indah. Tempat ini menawarkan pemandangan alam yang begitu murni dan alami, mulai dari tebing karst yang menjulang tinggi, pantai berpasir putih, hutan tropis, hingga air laut sebening kristal.\u003C/p\u003E\n\u003Cp data-start="1175" data-end="1597"\u003ENamun, daya tarik utama Raja Ampat terletak di bawah permukaan lautnya. Kawasan ini dikenal sebagai bagian dari \u003Cstrong data-start="1287" data-end="1307"\u003E"Coral Triangle"\u003C/strong\u003E, sebuah wilayah segitiga terumbu karang yang mencakup sebagian besar wilayah laut di Asia Tenggara dan Pasifik. Di Raja Ampat saja, terdapat lebih dari \u003Cstrong data-start="1460" data-end="1510"\u003E1.400 spesies ikan, 600 spesies terumbu karang\u003C/strong\u003E, dan ratusan spesies laut lainnya yang hidup berdampingan dalam harmoni yang sempurna.\u003C/p\u003E\n\u003Chr data-start="1599" data-end="1602"\u003E\n\u003Cp data-start="1604" data-end="1648"\u003E\u003Cstrong data-start="1604" data-end="1648"\u003ESurga bagi Pecinta Diving dan Snorkeling\u003C/strong\u003E\u003C/p\u003E\n\u003Cp data-start="1650" data-end="1997"\u003ERaja Ampat menjadi destinasi impian bagi para penyelam. Kejernihan air lautnya memungkinkan visibilitas hingga puluhan meter, menciptakan pengalaman menyelam yang sangat memukau. Lokasi seperti \u003Cstrong data-start="1844" data-end="1881"\u003ECape Kri, Manta Sandy, Blue Magic\u003C/strong\u003E, dan \u003Cstrong data-start="1887" data-end="1907"\u003EMelissa&rsquo;s Garden\u003C/strong\u003E menjadi spot diving yang terkenal karena keindahan dan keragaman ekosistem bawah lautnya.\u003C/p\u003E\n\u003Cp data-start="1999" data-end="2387"\u003ETak hanya diving, \u003Cstrong data-start="2017" data-end="2031"\u003Esnorkeling\u003C/strong\u003E pun sudah cukup untuk membuat pengunjung terpukau. Anda bisa melihat berbagai jenis ikan berwarna-warni, penyu laut yang berenang dengan anggun, hingga hiu karang yang berseliweran tanpa mengganggu. Selain itu, formasi terumbu karang yang unik dan penuh warna membuat pengalaman menyelam di Raja Ampat seolah-olah seperti masuk ke dalam \u003Cstrong data-start="2369" data-end="2386"\u003Elukisan hidup\u003C/strong\u003E.\u003C/p\u003E\n\u003Chr data-start="2389" data-end="2392"\u003E\n\u003Cp data-start="2394" data-end="2438"\u003E\u003Cstrong data-start="2394" data-end="2438"\u003EBudaya dan Kehidupan Lokal yang Mengakar\u003C/strong\u003E\u003C/p\u003E\n\u003Cp data-start="2440" data-end="2906"\u003ERaja Ampat bukan hanya tentang alam, tetapi juga tentang \u003Cstrong data-start="2497" data-end="2544"\u003Emanusia yang hidup berdampingan dengan alam\u003C/strong\u003E. Masyarakat setempat, yang sebagian besar hidup sebagai nelayan, memiliki kearifan lokal dalam menjaga keseimbangan ekosistem laut. Banyak kampung adat yang masih mempertahankan nilai-nilai leluhur, seperti \u003Cstrong data-start="2752" data-end="2765"\u003Esasi laut\u003C/strong\u003E &mdash; aturan adat yang melarang aktivitas penangkapan ikan di wilayah tertentu selama jangka waktu tertentu untuk memberi kesempatan alam pulih.\u003C/p\u003E\n\u003Cp data-start="2908" data-end="3212"\u003EInteraksi dengan masyarakat lokal juga memberikan pengalaman budaya yang unik. Anda bisa belajar menenun, memasak makanan khas Papua, hingga mengikuti upacara adat yang jarang ditemui di tempat lain. Semua ini memperkaya perjalanan wisata Anda dengan sentuhan \u003Cstrong data-start="3168" data-end="3211"\u003Ekemanusiaan dan nilai budaya yang dalam\u003C/strong\u003E.\u003C/p\u003E\n\u003Chr data-start="3214" data-end="3217"\u003E\n\u003Cp data-start="3219" data-end="3253"\u003E\u003Cstrong data-start="3219" data-end="3253"\u003ETantangan dan Upaya Konservasi\u003C/strong\u003E\u003C/p\u003E\n\u003Cp data-start="3255" data-end="3632"\u003EMeskipun dikenal sebagai surga dunia, Raja Ampat juga menghadapi tantangan serius dalam menjaga keberlanjutan lingkungannya. \u003Cstrong data-start="3380" data-end="3410"\u003ELaju pariwisata yang cepat\u003C/strong\u003E, penangkapan ikan ilegal, dan perubahan iklim global menjadi ancaman nyata terhadap kelestarian alam Raja Ampat. Oleh karena itu, berbagai program konservasi telah diluncurkan oleh pemerintah dan organisasi internasional.\u003C/p\u003E\n\u003Cp data-start="3634" data-end="4056"\u003ESalah satu pendekatan yang diterapkan adalah \u003Cstrong data-start="3679" data-end="3692"\u003Eekowisata\u003C/strong\u003E, di mana setiap kunjungan ke Raja Ampat dikenakan biaya konservasi. Dana tersebut digunakan untuk mendanai patroli laut, pendidikan lingkungan untuk masyarakat, serta pemulihan ekosistem yang rusak. Banyak resort dan penginapan lokal juga telah mengadopsi prinsip \u003Cstrong data-start="3957" data-end="3977"\u003Eramah lingkungan\u003C/strong\u003E, menggunakan energi surya, sistem pengolahan limbah, dan bahan bangunan alami.\u003C/p\u003E\n\u003Chr data-start="4058" data-end="4061"\u003E',
        imageUrl:
          "https://images.unsplash.com/photo-1613336219775-d617a720f090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        createdAt: "2025-06-27T14:15:36.089Z",
        updatedAt: "2025-06-27T14:15:36.089Z",
        category: {
          id: "c5dafec2-50fb-401c-90f2-5eff468183b4",
          userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
          name: "Entertaiment",
          createdAt: "2025-05-30T07:13:24.580Z",
          updatedAt: "2025-05-30T07:13:36.810Z",
        },
        user: {
          id: "824ba852-0fe6-46a7-ace7-650a4beed55a",
          username: "Fatwa Akbar Jiwani",
        },
      },
      {
        id: "debd61bf-9ec7-441c-9ec9-23c26d7c6217",
        userId: "68184d1e-ab9a-4243-921e-6b95e89951f7",
        categoryId: "f155c8b8-e5be-4545-9d81-2c9da9414103",
        title: "react js",
        content: "\u003Cp\u003Ereact js \u003C/p\u003E",
        imageUrl:
          "https://images.unsplash.com/photo-1660674243221-cff200c6ddcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        createdAt: "2025-06-30T12:47:51.014Z",
        updatedAt: "2025-06-30T12:47:51.014Z",
        category: {
          id: "f155c8b8-e5be-4545-9d81-2c9da9414103",
          userId: "580b95cc-08a7-419f-a89f-91c7a54221fb",
          name: "OpenAPI",
          createdAt: "2025-06-17T17:47:19.971Z",
          updatedAt: "2025-06-17T17:47:19.971Z",
        },
        user: {
          id: "68184d1e-ab9a-4243-921e-6b95e89951f7",
          username: "jamal",
        },
      },
      {
        id: "ed344557-257c-4bb9-9a70-0b542d9583d1",
        userId: "824ba852-0fe6-46a7-ace7-650a4beed55a",
        categoryId: "6cc5a79a-8dcd-4642-af3c-6ca486c1aafe",
        title:
          "Transformasi Digital dalam Dunia Filantropi: Mendorong Kebaikan Lewat Teknologi",
        content:
          '\u003Cblockquote data-start="360" data-end="621"\u003E\n\u003Cp data-start="362" data-end="621"\u003E\u003Cstrong data-start="362" data-end="386"\u003ETransformasi digital\u003C/strong\u003E telah membawa perubahan besar dalam berbagai sektor, termasuk \u003Cem data-start="449" data-end="461"\u003Efilantropi\u003C/em\u003E. Kini, lembaga sosial dapat menjangkau lebih banyak penerima manfaat dan donatur melalui \u003Cstrong data-start="551" data-end="571"\u003Eplatform digital\u003C/strong\u003E yang \u003Cem data-start="577" data-end="588"\u003Eresponsif\u003C/em\u003E, \u003Cem data-start="590" data-end="602"\u003Etransparan\u003C/em\u003E, dan \u003Cstrong data-start="608" data-end="620"\u003Einovatif\u003C/strong\u003E.\u003C/p\u003E\n\u003C/blockquote\u003E\n\u003Cblockquote data-start="623" data-end="913"\u003E\n\u003Cp data-start="625" data-end="663"\u003EDalam artikel ini, kita akan membahas:\u003C/p\u003E\n\u003Cul data-start="666" data-end="913"\u003E\n\u003Cli data-start="666" data-end="723"\u003E\n\u003Cp data-start="668" data-end="723"\u003E\u003Cstrong data-start="668" data-end="723"\u003EApa itu transformasi digital dalam dunia filantropi\u003C/strong\u003E\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="726" data-end="784"\u003E\n\u003Cp data-start="728" data-end="784"\u003E\u003Cem data-start="728" data-end="754"\u003ETeknologi yang digunakan\u003C/em\u003E untuk mendukung donasi online\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="787" data-end="864"\u003E\n\u003Cp data-start="789" data-end="864"\u003E\u003Cem data-start="789" data-end="814"\u003EContoh platform digital\u003C/em\u003E yang berhasil meningkatkan partisipasi masyarakat\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="867" data-end="913"\u003E\n\u003Cp data-start="869" data-end="913"\u003E\u003Cstrong data-start="869" data-end="894"\u003ETantangan dan peluang\u003C/strong\u003E dalam penerapannya\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003C/blockquote\u003E\n\u003Cblockquote data-start="915" data-end="1260"\u003E\n\u003Cp data-start="917" data-end="1260"\u003EDengan memanfaatkan teknologi seperti \u003Cstrong data-start="955" data-end="967"\u003EReact.js\u003C/strong\u003E, \u003Cstrong data-start="969" data-end="992"\u003EAPI payment gateway\u003C/strong\u003E, dan \u003Cstrong data-start="998" data-end="1026"\u003Ereal-time data analytics\u003C/strong\u003E, organisasi dapat menciptakan sistem donasi yang \u003Cstrong data-start="1076" data-end="1093"\u003Emudah diakses\u003C/strong\u003E, \u003Cem data-start="1095" data-end="1101"\u003Eaman\u003C/em\u003E, dan \u003Cstrong data-start="1107" data-end="1118"\u003Eefisien\u003C/strong\u003E. Ini bukan hanya tentang digitalisasi, tapi juga bagaimana teknologi dapat memperkuat misi sosial dan \u003Cem data-start="1221" data-end="1259"\u003Emenyebarkan kebaikan lebih luas lagi\u003C/em\u003E.\u003C/p\u003E\n\u003C/blockquote\u003E\n\u003Chr data-start="1262" data-end="1265"\u003E\n\u003Ch3 data-start="1267" data-end="1296"\u003E📌 \u003Cstrong data-start="1274" data-end="1296"\u003ECatatan Gaya Font:\u003C/strong\u003E\u003C/h3\u003E\n\u003Cul data-start="1297" data-end="1644"\u003E\n\u003Cli data-start="1297" data-end="1367"\u003E\n\u003Cp data-start="1299" data-end="1367"\u003E\u003Cstrong data-start="1299" data-end="1307"\u003EBold\u003C/strong\u003E digunakan untuk menekankan istilah penting atau kata kunci.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1368" data-end="1458"\u003E\n\u003Cp data-start="1370" data-end="1458"\u003E\u003Cem data-start="1370" data-end="1378"\u003EItalic\u003C/em\u003E digunakan untuk menandai istilah asing atau hal yang bersifat penekanan ringan.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1459" data-end="1574"\u003E\n\u003Cp data-start="1461" data-end="1574"\u003E\u003Cem data-start="1461" data-end="1472"\u003EUnderline\u003C/em\u003E bisa digunakan untuk menunjukkan sub-topik atau poin penting tambahan (opsional tergantung platform).\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli data-start="1575" data-end="1644"\u003E\n\u003Cp data-start="1577" data-end="1644"\u003EBullet list digunakan untuk membuat struktur informasi lebih jelas.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E',
        imageUrl:
          "https://images.unsplash.com/photo-1660674243221-cff200c6ddcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        createdAt: "2025-06-29T05:15:24.078Z",
        updatedAt: "2025-06-29T05:15:24.078Z",
        category: {
          id: "6cc5a79a-8dcd-4642-af3c-6ca486c1aafe",
          userId: "b433fbae-80a5-425e-a13f-3d7130ec2796",
          name: "FrontEnd",
          createdAt: "2025-06-21T22:52:30.851Z",
          updatedAt: "2025-06-21T22:58:52.771Z",
        },
        user: {
          id: "824ba852-0fe6-46a7-ace7-650a4beed55a",
          username: "Fatwa Akbar Jiwani",
        },
      },
    ],
    total: 8,
    page: 1,
    limit: 10,
  };
  return articles.data;
}

export default async function TablePage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
