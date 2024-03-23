const data = {
  newsList: [{
      "id": 1565656,
      "title": "İstanbul'da Trafik Yoğunluğu Artıyor",
      "description": "İstanbul'da yoğun bir trafik yoğunluğu yaşanmaya devam ediyor. Şehir içi ana arterlerdeki trafiğin yoğunluğu, sürücülerin seyahat sürelerini olumsuz etkiliyor. Uzmanlar, trafik sorununun çözümü için alternatif ulaşım yöntemlerinin kullanılmasını öneriyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Trafik",
      "date": "2023-06-01"
    },
    {
      "id": 2656565656,
      "title": "Güneş Enerjisi Santrali İnşaatı Tamamlandı",
      "description": "Ülkemizin güney sahilinde bulunan güneş enerjisi santralinin inşaatı tamamlandı. Santral, yıllık enerji üretimi kapasitesiyle ülkenin enerji ihtiyacına önemli bir katkı sağlayacak. Yenilenebilir enerji kaynaklarına yapılan yatırımların artmasıyla, enerji sektöründe sürdürülebilirlik hedefine bir adım daha yaklaşıldı.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Enerji",
      "date": "2023-06-02"
    },
    {
      "id": 36565656565,
      "title": "Yeni Eğitim Yılında Okullar Açılıyor",
      "description": "Yaz tatilinin sona ermesiyle birlikte yeni eğitim yılı için hazırlıklar hız kazandı. Öğrenciler, veliler ve öğretmenler yeni döneme hazırlanıyor. Eğitim kurumları, pandemi önlemlerine uygun şekilde öğrencilere sağlıklı ve güvenli bir eğitim ortamı sunmayı hedefliyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Eğitim",
      "date": "2023-06-03"
    },
    {
      "id": 46565656565,
      "title": "Spor Dünyasında Heyecan Dorukta",
      "description": "Spor dünyası, uluslararası müsabakalar ve lig maçlarıyla dolu dolu bir sezon geçiriyor. Futbol, basketbol, tenis ve diğer spor dallarında heyecanlı müsabakalar ve rekabetler yaşanıyor. Spor tutkunları, takımlarını desteklemek ve keyifli anlar yaşamak için maçları takip etmeye devam ediyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Spor",
      "date": "2023-06-04"
    },
    {
      "id": 55656565,
      "title": "Teknoloji Dünyasında Yeni Bir İcat",
      "description": "Teknoloji dünyasında sürekli olarak gelişmeler yaşanıyor. Son olarak, bir grup bilim insanı tarafından yapılan araştırmalar sonucunda yeni bir icat ortaya çıktı. Bu icat, hayatı kolaylaştıracak ve birçok alanda kullanılabilecek potansiyele sahip. Uzmanlar, bu tür teknolojik gelişmelerin ilerleyen yıllarda daha da yaygınlaşacağını belirtiyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Teknoloji",
      "date": "2023-06-05"
    },
    {
      "id": 65656565656,
      "title": "İçişleri Bakanı Yeni Tedbirler Açıkladı",
      "description": "İçişleri Bakanı, ülke genelindeki güvenlik ve düzenin sağlanması için yeni tedbirlerin alınacağını açıkladı. Bu tedbirler kapsamında, polis ve güvenlik güçlerinin daha etkin bir şekilde görev yapması, halkın güvenliğinin sağlanması ve suçla mücadele edilmesi hedefleniyor. Vatandaşlar da bu tedbirlere destek vererek güvenli bir yaşam sürdürmeyi amaçlıyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Siyaset",
      "date": "2023-06-06"
    },
    {
      "id": 76565656,
      "title": "Sağlık Bakanlığı'ndan Aşı Kampanyası",
      "description": "Sağlık Bakanlığı, Covid-19'a karşı aşılama kampanyası başlattı. Kampanya kapsamında, vatandaşlar ücretsiz olarak aşılarını yaptırabilecekler. Aşılamanın hızlı bir şekilde ilerlemesiyle birlikte toplum bağışıklığı artacak ve salgının kontrol altına alınması hedefleniyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Sağlık",
      "date": "2023-06-07"
    },
    {
      "id": 86565656565,
      "title": "İklim Değişikliğiyle Mücadele Toplantısı",
      "description": "Ülkeler arası iklim değişikliğiyle mücadele toplantısı gerçekleştirildi. Bilim insanları, politika yapıcılar ve çevre aktivistleri bir araya gelerek, iklim değişikliğinin etkileriyle mücadele için stratejiler ve eylem planları üzerinde çalıştı. İklim değişikliğiyle mücadele, küresel bir öncelik haline geldi.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Çevre",
      "date": "2023-06-08"
    },
    {
      "id": 95656565,
      "title": "Türk Şirketi Yurtdışında Büyük Başarı Elde Etti",
      "description": "Bir Türk şirketi, yurtdışında gerçekleştirdiği projelerle büyük bir başarı elde etti. Şirket, inovatif ürünleri ve kaliteli hizmetleriyle dikkat çekiyor. Başarılı işlerin ardından şirketin uluslararası alanda daha da büyümesi ve rekabet gücünün artması bekleniyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "İş Dünyası",
      "date": "2023-06-09"
    },
    {
      "id": 10565656,
      "title": "İstanbul'da Kültür ve Sanat Etkinlikleri",
      "description": "İstanbul, kültür ve sanat etkinlikleriyle dolu bir döneme giriyor. Konserler, sergiler, tiyatro oyunları ve daha birçok etkinlik, sanatseverlerin ilgisini çekiyor. Şehirdeki kültürel zenginliklerin ortaya çıkarılması ve sanatın desteklenmesi, İstanbul'un kültür başkenti kimliğini daha da güçlendirecek.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Kültür-Sanat",
      "date": "2023-06-10"
    },
  ],
  city: [{
      "id": 165656,
      "title": "Son Dakika: Ankara'da Trafik Kazası",
      "description": "Ankara'nın Kızılay semtinde meydana gelen trafik kazasında 2 araç çarpıştı. Kazada 3 kişi yaralandı. Olay yerine sağlık ekipleri sevk edildi.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 256565,
      "title": "Semt: Çankaya'da Yeni Park Açıldı",
      "description": "Çankaya semtinde bulunan Atatürk Parkı, yenilenen yüzüyle hizmete açıldı. Parkta çocuk oyun alanları, spor alanları ve yeşil alanlar bulunuyor. Semt sakinleri yeni parktan memnun kaldıklarını belirtiyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-11"
    },
    {
      "id": 46565,
      "title": "Son Dakika: Ankara'da Sel Felaketi",
      "description": "Ankara'nın Etimesgut semtinde şiddetli yağışlar sonucu sel felaketi yaşandı. Birçok ev ve işyeri sular altında kaldı. İtfaiye ekipleri, mahsur kalan vatandaşları kurtarma çalışmalarına devam ediyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-10"
    },
    {
      "id": 556565,
      "title": "Semt: Mamak'ta Yeni Sağlık Merkezi Hizmete Açıldı",
      "description": "Mamak semtinde bulunan yeni sağlık merkezi, hizmete başladı. Merkezde poliklinikler, laboratuvarlar ve acil servis birimleri bulunuyor. Semt sakinleri, sağlık hizmetlerine daha kolay erişim sağlayacakları için memnun.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-10"
    },
    {
      "id": 756565,
      "title": "Son Dakika: Ankara'da Patlama",
      "description": "Ankara'nın Çankaya semtinde meydana gelen patlamada çok sayıda kişi yaralandı. Olay yerine sağlık ekipleri ve polis ekipleri sevk edildi. Patlamanın nedeni henüz belirlenemedi.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-09"
    },
    {
      "id": 856565,
      "title": "Keçiören'de Yeni Spor Salonu Açıldı",
      "description": "Keçiören semtinde bulunan yeni spor salonu, hizmete girdi. Spor salonunda fitness alanı, kapalı yüzme havuzu ve grup dersleri bulunuyor. Semt sakinleri, spor yapma imkanlarının artmasıyla mutlu.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-09"
    },
    {
      "id": 10565,
      "title": "Son Dakika: Ankara'da Kültür ve Sanat Etkinlikleri",
      "description": "Ankara, kültür ve sanat etkinlikleriyle dolu bir döneme giriyor. Konserler, sergiler, tiyatro oyunları ve daha birçok etkinlik, sanatseverlerin ilgisini çekiyor. Şehirdeki kültürel zenginliklerin ortaya çıkarılması ve sanatın desteklenmesi, Ankara'nın kültür başkenti kimliğini daha da güçlendirecek.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-09"
    }
  ], 
  district: [{
      "id": 165656,
      "title": "Son Dakika: Ankara'da Trafik Kazası",
      "description": "Ankara'nın Kızılay semtinde meydana gelen trafik kazasında 2 araç çarpıştı. Kazada 3 kişi yaralandı. Olay yerine sağlık ekipleri sevk edildi.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 256565,
      "title": "Semt: Çankaya'da Yeni Park Açıldı",
      "description": "Çankaya semtinde bulunan Atatürk Parkı, yenilenen yüzüyle hizmete açıldı. Parkta çocuk oyun alanları, spor alanları ve yeşil alanlar bulunuyor. Semt sakinleri yeni parktan memnun kaldıklarını belirtiyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-11"
    },
    {
      "id": 46565,
      "title": "Son Dakika: Ankara'da Sel Felaketi",
      "description": "Ankara'nın Etimesgut semtinde şiddetli yağışlar sonucu sel felaketi yaşandı. Birçok ev ve işyeri sular altında kaldı. İtfaiye ekipleri, mahsur kalan vatandaşları kurtarma çalışmalarına devam ediyor.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-10"
    },
    {
      "id": 556565,
      "title": "Semt: Mamak'ta Yeni Sağlık Merkezi Hizmete Açıldı",
      "description": "Mamak semtinde bulunan yeni sağlık merkezi, hizmete başladı. Merkezde poliklinikler, laboratuvarlar ve acil servis birimleri bulunuyor. Semt sakinleri, sağlık hizmetlerine daha kolay erişim sağlayacakları için memnun.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-10"
    },
    {
      "id": 756565,
      "title": "Son Dakika: Ankara'da Patlama",
      "description": "Ankara'nın Çankaya semtinde meydana gelen patlamada çok sayıda kişi yaralandı. Olay yerine sağlık ekipleri ve polis ekipleri sevk edildi. Patlamanın nedeni henüz belirlenemedi.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-09"
    },
    {
      "id": 856565,
      "title": "Keçiören'de Yeni Spor Salonu Açıldı",
      "description": "Keçiören semtinde bulunan yeni spor salonu, hizmete girdi. Spor salonunda fitness alanı, kapalı yüzme havuzu ve grup dersleri bulunuyor. Semt sakinleri, spor yapma imkanlarının artmasıyla mutlu.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Semt",
      "date": "2023-06-09"
    },
    {
      "id": 10565,
      "title": "Son Dakika: Ankara'da Kültür ve Sanat Etkinlikleri",
      "description": "Ankara, kültür ve sanat etkinlikleriyle dolu bir döneme giriyor. Konserler, sergiler, tiyatro oyunları ve daha birçok etkinlik, sanatseverlerin ilgisini çekiyor. Şehirdeki kültürel zenginliklerin ortaya çıkarılması ve sanatın desteklenmesi, Ankara'nın kültür başkenti kimliğini daha da güçlendirecek.",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-09"
    }
  ],
  sonDakikaHaberler: [
    {
      "id": 164374573455656,
      "title": "Son Dakika: Haber 1",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16543745743665456456,
      "title": "Son Dakika: Haber 2",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 164777734734777545656,
      "title": "Son Dakika: Haber 3",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165345234523453464573465656,
      "title": "Son Dakika: Haber 4",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1634523462343255656,
      "title": "Son Dakika: Haber 5",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 163462456234525656,
      "title": "Son Dakika: Haber 6",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165234636734523452656,
      "title": "Son Dakika: Haber 7",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1656554343426576554342255484768755463245656,
      "title": "Son Dakika: Haber 8",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1656533546865544534665656,
      "title": "Son Dakika: Haber 9",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1654567890547898099877675445456789579876556,
      "title": "Son Dakika: Haber 10",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16568564342345665656,
      "title": "Son Dakika: Haber 11",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16236586579807807807897665656,
      "title": "Son Dakika: Haber 12",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165656,
      "title": "Son Dakika: Haber 13",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 234242342304,
      "title": "Son Dakika: Haber 14",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 12342346234565234234234234234236,
      "title": "Son Dakika: Haber 15",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 14234234235642342342342342356,
      "title": "Son Dakika: Haber 16",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1634342325426563423423423423423423423,
      "title": "Son Dakika: Haber 17",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1234234234262342345632456,
      "title": "Son Dakika: Haber 18",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165654234234223423464234,
      "title": "Son Dakika: Haber 19",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 32423164235654232342342342346,
      "title": "Son Dakika: Haber 20",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 23523523523523165656,
      "title": "Son Dakika: Haber 21",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 235234234325235165656,
      "title": "Son Dakika: Haber 22",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 423423534234165656,
      "title": "Son Dakika: Haber 23",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 2342342343165656,
      "title": "Son Dakika: Haber 24",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 234234234234123423465656,
      "title": "Son Dakika: Haber 25",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 13423423423423465656,
      "title": "Son Dakika: Haber 26",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16564234234256,
      "title": "Son Dakika: Haber 27",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165423423423423423656,
      "title": "Son Dakika: Haber 28",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1656342342342342356,
      "title": "Son Dakika: Haber 29",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1654252352656,
      "title": "Son Dakika: Haber 30",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 162342342342345656,
      "title": "Son Dakika: Haber 31",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165653452346,
      "title": "Son Dakika: Haber 32",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1656523423423423556,
      "title": "Son Dakika: Haber 33",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165543534534643656,
      "title": "Son Dakika: Haber 34",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16512432423423656,
      "title": "Son Dakika: Haber 35",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1656523423456,
      "title": "Son Dakika: Haber 36",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16562342342356,
      "title": "Son Dakika: Haber 37",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 16563223423423456,
      "title": "Son Dakika: Haber 38",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 165632423432523456,
      "title": "Son Dakika: Haber 39",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
    {
      "id": 1655656565623456,
      "title": "Son Dakika: Haber 40",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptates necessitatibus non est cumque laudantium dicta labore officiis. Aspernatur necessitatibus facilis possimus repudiandae in ipsam et sint accusantium, sunt, voluptatem sed, ut illo officia incidunt. Voluptatem veniam aspernatur quis velit omnis excepturi dolor delectus repudiandae explicabo? Ut est, fuga fugit ipsum blanditiis sed. Placeat excepturi totam culpa quidem. Expedita maxime voluptates optio, beatae praesentium inventore atque similique. Ut sunt dolorem corporis officiis repellat dicta, ipsam deserunt minima iusto quaerat eos, beatae possimus facere quidem aliquid, rem ad saepe doloremque tempore?",
      "image": "https://via.placeholder.com/650x500",
      "category": "Son Dakika",
      "date": "2023-06-11"
    },
  ]
};

export default data;