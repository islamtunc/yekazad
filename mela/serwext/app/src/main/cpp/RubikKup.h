// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

#ifndef SERWEXT_RUBIKKUP_H
#define SERWEXT_RUBIKKUP_H

#include "RubikReng.h"
#include "RubikHevok.h"
#include <array>
#include <random>
#include <cstring>

/**
 * Kupa Rubik 3x3x3 (Rubik Küpü 3x3x3)
 */
class RubikKup {
public:
    static constexpr int MEZINAHÎ = 3;  // Boyut (Size)
    
private:
    // 6 hevok (yüz), her biri 3x3 çargoşe (kare)
    RubikReng kup[6][MEZINAHÎ][MEZINAHÎ];
    
public:
    RubikKup() {
        destpêkirin();
    }
    
    /**
     * Kupê destpêkirin (Küpü başlat)
     */
    void destpêkirin() {
        // Her hevokê bi rengekî tijî bike (Her yüzü bir renkle doldur)
        tijkirina(static_cast<int>(RubikHevok::JOR), RubikReng::SPI);      // Üst - Beyaz
        tijkirina(static_cast<int>(RubikHevok::JER), RubikReng::ZER);      // Alt - Sarı
        tijkirina(static_cast<int>(RubikHevok::PES), RubikReng::SOR);      // Ön - Kırmızı
        tijkirina(static_cast<int>(RubikHevok::PASE), RubikReng::PIRTEQAL); // Arka - Turuncu
        tijkirina(static_cast<int>(RubikHevok::RAST), RubikReng::KESK);    // Sağ - Yeşil
        tijkirina(static_cast<int>(RubikHevok::CEP), RubikReng::SIN);      // Sol - Mavi
    }
    
    /**
     * Hevokê bi rengekî tijî bike (Yüzü bir renkle doldur)
     */
    void tijkirina(int hevok, RubikReng reng) {
        for (int i = 0; i < MEZINAHÎ; i++) {
            for (int j = 0; j < MEZINAHÎ; j++) {
                kup[hevok][i][j] = reng;
            }
        }
    }
    
    /**
     * Hevokê bi saat rêya zivirînin (Yüzü saat yönünde döndür)
     */
    void zivirîn(int hevok, bool berveçep = false) {
        RubikReng temp[MEZINAHÎ][MEZINAHÎ];
        
        // Hevokê bixwe zivirîne (Yüzün kendisini döndür)
        if (!berveçep) {
            // Saat yönünde 90 derece
            for (int i = 0; i < MEZINAHÎ; i++) {
                for (int j = 0; j < MEZINAHÎ; j++) {
                    temp[j][MEZINAHÎ - 1 - i] = kup[hevok][i][j];
                }
            }
        } else {
            // Saat yönünün tersi
            for (int i = 0; i < MEZINAHÎ; i++) {
                for (int j = 0; j < MEZINAHÎ; j++) {
                    temp[MEZINAHÎ - 1 - j][i] = kup[hevok][i][j];
                }
            }
        }
        
        std::memcpy(kup[hevok], temp, sizeof(temp));
        
        // Lahikên guherînin (Komşuları değiştir)
        guherandinaLahikan(hevok, berveçep);
    }
    
    /**
     * Tevlihevkirina kupê (Küpü karıştır)
     */
    void tevlihevkirin(int jimareyaGavên = 20) {
        std::random_device rd;
        std::mt19937 gen(rd());
        std::uniform_int_distribution<> disHevok(0, 5);
        std::uniform_int_distribution<> disRêber(0, 1);
        
        for (int i = 0; i < jimareyaGavên; i++) {
            int hevok = disHevok(gen);
            bool berveçep = disRêber(gen);
            zivirîn(hevok, berveçep);
        }
    }
    
    /**
     * Rengê çargoşeyekê bistîne (Bir karenin rengini al)
     */
    RubikReng getReng(int hevok, int rêz, int stûn) const {
        if (hevok >= 0 && hevok < 6 && rêz >= 0 && rêz < MEZINAHÎ && 
            stûn >= 0 && stûn < MEZINAHÎ) {
            return kup[hevok][rêz][stûn];
        }
        return RubikReng::SPI;
    }
    
    /**
     * Kontrol bike ka kup çareser bûye (Küpün çözülüp çözülmediğini kontrol et)
     */
    bool çareserkirin() const {
        for (int h = 0; h < 6; h++) {
            RubikReng rengaYekemîn = kup[h][0][0];
            for (int i = 0; i < MEZINAHÎ; i++) {
                for (int j = 0; j < MEZINAHÎ; j++) {
                    if (kup[h][i][j] != rengaYekemîn) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    
private:
    /**
     * Lahikên guherînin (Komşu yüzleri güncelle)
     */
    void guherandinaLahikan(int hevok, bool berveçep) {
        RubikReng temp[MEZINAHÎ];
        
        switch (hevok) {
            case 0: // Jor (Üst)
                if (!berveçep) {
                    for (int i = 0; i < MEZINAHÎ; i++) temp[i] = kup[2][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[2][0][i] = kup[5][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[5][0][i] = kup[3][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[3][0][i] = kup[4][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[4][0][i] = temp[i];
                } else {
                    for (int i = 0; i < MEZINAHÎ; i++) temp[i] = kup[2][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[2][0][i] = kup[4][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[4][0][i] = kup[3][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[3][0][i] = kup[5][0][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[5][0][i] = temp[i];
                }
                break;
                
            case 1: // Jêr (Alt)
                if (!berveçep) {
                    for (int i = 0; i < MEZINAHÎ; i++) temp[i] = kup[2][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[2][2][i] = kup[4][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[4][2][i] = kup[3][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[3][2][i] = kup[5][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[5][2][i] = temp[i];
                } else {
                    for (int i = 0; i < MEZINAHÎ; i++) temp[i] = kup[2][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[2][2][i] = kup[5][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[5][2][i] = kup[3][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[3][2][i] = kup[4][2][i];
                    for (int i = 0; i < MEZINAHÎ; i++) kup[4][2][i] = temp[i];
                }
                break;
        }
    }
};

#endif // SERWEXT_RUBIKKUP_H
