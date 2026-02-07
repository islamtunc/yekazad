# Bîsmîllahîrrahmânîrrahîm
# Elhamdulillahi rabbil 'alamin
# Esselatu ve selamû ala Rasûlina Muhammedin
# SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
# VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
# ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
# ALLAHU EKBER VE LİLLAHİL HAMD

# Kupa Rubik bi Kurdî - کوپا ڕووبیک بە کوردی
## Rubik Küpü Kürtçe Uygulaması

### بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ

Bu proje, C++ ve JNI kullanılarak geliştirilmiş, Kürtçe arayüze sahip bir Rubik küp (3x3x3) uygulamasıdır.

## Taybetmendiyên (Özellikler)

- ✅ **C++ Native Engine**: Rubik küp mantığı tamamen C++ ile yazılmıştır
- ✅ **JNI Bridge**: Java ve C++ arasında sorunsuz iletişim
- ✅ **Kürtçe Arayüz**: Tüm butonlar ve mesajlar Kürtçe, Türkçe ve Arapça
- ✅ **3x3x3 Rubik Cube**: Klasik Rubik küp oyunu
- ✅ **6 Hevok (Yüz)**: Jor, Jêr, Pêş, Paşe, Rast, Çep
- ✅ **Rengên (Renkler)**: Spî, Zer, Sor, Pirteqal, Kesk, Şîn

## Taybetmendiyên Teknîkî (Teknik Özellikler)

### C++ Dosyaları
- `RubikKup.h`: Ana Rubik küp sınıfı (3x3x3 mantığı)
- `RubikReng.h`: Renk enum'u ve yardımcı fonksiyonlar
- `RubikHevok.h`: Yüz enum'u ve isimlendirme
- `RubikJNI.cpp`: JNI bridge implementasyonu
- `RubikRenderer.h`: OpenGL ES rendering (gelecek sürüm için hazır)

### Java Dosyaları
- `MainActivity.java`: Ana aktivite, UI yönetimi ve native çağrılar

### Fonksiyonên Native (Native Fonksiyonlar)

```cpp
// Kupê destpêkirin (Küpü başlat)
void destpêkirina()

// Hevokê zivirînin (Yüzü döndür)
void zivirîna(int hevok, boolean berveçep)

// Kupê tevlihevkirin (Küpü karıştır)
void tevlihevkirina(int jimare)

// Rengê bistînin (Renk al)
int getReng(int hevok, int rêz, int stûn)

// Çareserkirinê kontrol bike (Çözümü kontrol et)
boolean çareserkirin()
```

## Bikaranîn (Kullanım)

### Kontrolên Sereke (Ana Kontroller)

1. **👁️ Hevokê Biguherîne**: Farklı yüzleri görmek için
2. **🔀 Tevlihevkirin**: Küpü karıştırmak için
3. **🔄 Rijîn Kirin**: Küpü sıfırlamak için

### Zivirîna Hevokan (Yüzleri Döndürme)

- **↑ Jor**: Üst yüzü döndür
- **↓ Jêr**: Alt yüzü döndür
- **→ Pêş**: Ön yüzü döndür
- **← Paşe**: Arka yüzü döndür
- **→ Rast**: Sağ yüzü döndür
- **← Çep**: Sol yüzü döndür

## Çawa Bikarbînim? (Nasıl Kullanılır?)

1. Uygulamayı açın
2. "Tevlihevkirin" butonu ile küpü karıştırın
3. Yüz butonlarına tıklayarak döndürün
4. "Hevokê Biguherîne" ile farklı yüzleri görüntüleyin
5. Küp çözüldüğünde "🎉 Pîroz be! Elhamdulillah!" mesajı görünür

## Pêşveçûn (Geliştirme)

### Android Studio Requirements
- Android Studio Arctic Fox veya üzeri
- NDK r21 veya üzeri
- CMake 3.22.1
- SDK API 30+

### Build
```bash
./gradlew assembleDebug
```

### Run
Android Studio'da "Run" butonuna basın veya:
```bash
./gradlew installDebug
```

## Dosya Yapısı

```
app/src/main/
├── cpp/
│   ├── RubikKup.h          # Rubik küp sınıfı
│   ├── RubikReng.h         # Renk tanımları
│   ├── RubikHevok.h        # Yüz tanımları
│   ├── RubikJNI.cpp        # JNI bridge
│   ├── RubikRenderer.h     # 3D rendering (opsiyonel)
│   └── CMakeLists.txt      # Build konfigürasyonu
├── java/com/xani/serwext/
│   └── MainActivity.java   # Ana Java aktivite
├── res/
│   ├── layout/
│   │   └── activity_main.xml    # UI layout
│   └── values/
│       └── strings.xml     # Kürtçe stringler
└── AndroidManifest.xml
```

## Pêşniyar û Alîkarî (Öneriler ve Destek)

Bu proje, Kürtçe teknoloji içeriği oluşturma çabasının bir parçasıdır. Katkılarınızı bekliyoruz!

### Gelecek Özellikler
- [ ] 3D OpenGL ES rendering
- [ ] Animasyonlu yüz döndürme
- [ ] Touch gesture ile küp kontrolü
- [ ] Çözüm algoritmaları
- [ ] Skor ve zaman takibi

## Lîsans (Lisans)

Bu proje eğitim amaçlıdır.

---

**Elhamdulillah! Bi serkeftinî! (Başarılar!)**

**ماشاءالله - سەرکەوتوو بن!**
