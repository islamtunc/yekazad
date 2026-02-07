// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

#ifndef SERWEXT_RUBIKHEVOK_H
#define SERWEXT_RUBIKHEVOK_H

/**
 * Hevokên Kupa Rubik (Rubik Küpü Yüzleri)
 */
enum class RubikHevok {
    JOR = 0,    // Jor - Üst (Top)
    JER = 1,    // Jêr - Alt (Bottom)
    PES = 2,    // Pêş - Ön (Front)
    PASE = 3,   // Paşe - Arka (Back)
    RAST = 4,   // Rast - Sağ (Right)
    CEP = 5     // Çep - Sol (Left)
};

/**
 * Navê hevokê bi Kurdî vedigerîne (Yüz adını Kürtçe döndür)
 */
inline const char* getNavaHevok(RubikHevok hevok) {
    switch (hevok) {
        case RubikHevok::JOR: return "Jor (Üst)";
        case RubikHevok::JER: return "Jêr (Alt)";
        case RubikHevok::PES: return "Pêş (Ön)";
        case RubikHevok::PASE: return "Paşe (Arka)";
        case RubikHevok::RAST: return "Rast (Sağ)";
        case RubikHevok::CEP: return "Çep (Sol)";
    }
    return "Nenas (Bilinmeyen)";
}

#endif // SERWEXT_RUBIKHEVOK_H
