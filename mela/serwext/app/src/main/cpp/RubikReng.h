// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

#ifndef SERWEXT_RUBIKRENG_H
#define SERWEXT_RUBIKRENG_H

#include <array>

/**
 * Rengên Rubik (Rubik Renkleri)
 */
enum class RubikReng {
    SPI,        // Spî - Beyaz (White)
    ZER,        // Zer - Sarı (Yellow)
    SOR,        // Sor - Kırmızı (Red)
    PIRTEQAL,   // Pirteqal - Turuncu (Orange)
    KESK,       // Kesk - Yeşil (Green)
    SIN         // Şîn - Mavi (Blue)
};

/**
 * Rengê RGB-yê vedigerîne (RGB rengini döndür)
 */
inline std::array<float, 3> getRGBReng(RubikReng reng) {
    switch (reng) {
        case RubikReng::SPI:
            return {1.0f, 1.0f, 1.0f};  // Beyaz
        case RubikReng::ZER:
            return {1.0f, 1.0f, 0.0f};  // Sarı
        case RubikReng::SOR:
            return {1.0f, 0.0f, 0.0f};  // Kırmızı
        case RubikReng::PIRTEQAL:
            return {1.0f, 0.65f, 0.0f}; // Turuncu
        case RubikReng::KESK:
            return {0.0f, 1.0f, 0.0f};  // Yeşil
        case RubikReng::SIN:
            return {0.0f, 0.0f, 1.0f};  // Mavi
    }
    return {1.0f, 1.0f, 1.0f};
}

/**
 * Navê rengî bi Kurdî vedigerîne (Renk adını Kürtçe döndür)
 */
inline const char* getNavaReng(RubikReng reng) {
    switch (reng) {
        case RubikReng::SPI: return "Spî (Beyaz)";
        case RubikReng::ZER: return "Zer (Sarı)";
        case RubikReng::SOR: return "Sor (Kırmızı)";
        case RubikReng::PIRTEQAL: return "Pirteqal (Turuncu)";
        case RubikReng::KESK: return "Kesk (Yeşil)";
        case RubikReng::SIN: return "Şîn (Mavi)";
    }
    return "Nenas (Bilinmeyen)";
}

#endif // SERWEXT_RUBIKRENG_H
