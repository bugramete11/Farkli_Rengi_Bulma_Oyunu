# 🎨 Renk Avcısı '26

Bu proje, web teknolojileri (HTML, CSS, JS) kullanılarak geliştirilmiş modern ve interaktif bir tarayıcı oyunudur[cite: 1, 2, 3]. Kullanıcının görsel algısını, reflekslerini ve renkleri ayırt etme yeteneğini test etmeyi amaçlar[cite: 1, 2, 3].

## ✨ Özellikler

* **Dinamik Zorluk Seviyesi:** Skorunuz arttıkça grid boyutu 2x2'den başlayarak 5x5'e kadar genişler ve renk farkı azalarak oyun zorlaşır[cite: 1, 2, 3].
* **Glassmorphism Tasarım:** Arka plandaki parlayan küreler ve cam efektli (blur) modern HUD arayüzü ile şık bir görünüm sunar[cite: 1, 3].
* **Gelişmiş Tema Yönetimi:** Siyah, beyaz, kırmızı, yeşil, mavi, sarı, mor ve turuncu olmak üzere farklı tema seçenekleri sunar; yapılan tema seçimi tarayıcıda kalıcı olarak saklanır[cite: 1, 2, 3].
* **İpucu ve Ses Efektleri:** 2 veya daha fazla puanınız olduğunda ipucu alarak yanlış kutucukları geçici olarak karartabilir, doğru ve yanlış tıklamalarda ses efektleri ile geri bildirim alabilirsiniz[cite: 1, 2, 3].
* **Kalıcı Rekor Sistemi:** En yüksek skorunuz `localStorage` kullanılarak tarayıcınıza kaydedilir[cite: 1, 2, 3].

## 🧠 Çalışma Mantığı

* **Tablo ve Renk Üretimi (`generateBoard`):** Skorunuza bağlı olarak (5, 10 ve 15 eşikleri) `gridTemplateColumns` dinamik olarak ayarlanır[cite: 2]. `Math.random` ile rastgele bir baz renk üretilir ve `difficulty` (zorluk/fark) değeri eklenerek farklı olan kutucuğun rengi belirlenir[cite: 2].
* **Tıklama ve Etkileşimler (`handleSquareClick`):** Doğru kutucuğa tıklandığında `correctSound` çalınır, skor artırılır ve zorluk seviyesi (`difficulty -= 3`) artırılarak tahta yenilenir[cite: 2]. Yanlış tıklamalarda ise can (`lives`) azalır, konteyner üzerinde sarsılma (`shake-effect`) animasyonu tetiklenir[cite: 2].
* **Tema Altyapısı:** Tema noktalarına (`theme-dot`) tıklandığında `document.body` üzerindeki `data-theme` niteliği güncellenir ve CSS değişkenleri (`:root`) aracılığıyla tüm arayüzün renk paleti anında değişir[cite: 2, 3].

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyebilirsiniz:

1. Depoyu klonlayın veya dosyaları bilgisayarınıza indirin:
git clone https://github.com/bugramete11/Farkli_Rengi_Bulma_Oyunu/tree/main/RenkOyunu
sonrasında index.html dosyasını herhangi bir tarayıcıda açın.
Bu proje, web tasarımı ve JavaScript kullanarak interaktif bir oyun geliştirme amacıyla hazırlanmıştır.

👨‍💻 Geliştirici

Buğra Mete Tura

Web Tasarımı ve Kodlama Öğrencisi
