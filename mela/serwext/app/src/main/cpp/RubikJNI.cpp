// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

#include <jni.h>
#include <android/log.h>
#include "RubikKup.h"
#include "RubikReng.h"

#define LOG_TAG "RubikKup"
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

// Global Rubik küp nesnesi
static RubikKup* kupGlobal = nullptr;

/**
 * Reng ji RubikReng veguhezîne Android Color int (RubikReng'den Android Color int'e dönüştür)
 */
jint rengJiEnum(RubikReng reng) {
    auto rgb = getRGBReng(reng);
    int r = static_cast<int>(rgb[0] * 255);
    int g = static_cast<int>(rgb[1] * 255);
    int b = static_cast<int>(rgb[2] * 255);
    
    // Android Color format: 0xAARRGGBB
    return static_cast<jint>(0xFF000000 | (r << 16) | (g << 8) | b);
}

extern "C" {

/**
 * Kupa Rubik destpê bike (Rubik küpünü başlat)
 */
JNIEXPORT void JNICALL
Java_com_xani_serwext_MainActivity_destpêkirina(JNIEnv *env, jobject thiz) {
    LOGI("Destpêkirina kupa Rubik... (Rubik küpü başlatılıyor...)");
    
    if (kupGlobal == nullptr) {
        kupGlobal = new RubikKup();
    } else {
        kupGlobal->destpêkirin();
    }
    
    LOGI("Kup amade ye! (Küp hazır!)");
}

/**
 * Hevokê zivirîne (Yüzü döndür)
 */
JNIEXPORT void JNICALL
Java_com_xani_serwext_MainActivity_zivirîna(JNIEnv *env, jobject thiz, 
                                             jint hevok, jboolean berveçep) {
    if (kupGlobal != nullptr && hevok >= 0 && hevok < 6) {
        kupGlobal->zivirîn(static_cast<int>(hevok), berveçep);
        LOGI("Hevok %d zivirî! (Yüz %d döndürüldü!)", hevok, hevok);
    }
}

/**
 * Kupê tevlihev bike (Küpü karıştır)
 */
JNIEXPORT void JNICALL
Java_com_xani_serwext_MainActivity_tevlihevkirina(JNIEnv *env, jobject thiz, jint jimare) {
    if (kupGlobal != nullptr) {
        kupGlobal->tevlihevkirin(static_cast<int>(jimare));
        LOGI("Kup tevlihev bû! %d gav (Küp karıştırıldı! %d adım)", jimare, jimare);
    }
}

/**
 * Rengê çargoşeyekê bistîne (Bir karenin rengini al)
 */
JNIEXPORT jint JNICALL
Java_com_xani_serwext_MainActivity_getReng(JNIEnv *env, jobject thiz,
                                            jint hevok, jint rêz, jint stûn) {
    if (kupGlobal != nullptr) {
        RubikReng reng = kupGlobal->getReng(
            static_cast<int>(hevok),
            static_cast<int>(rêz),
            static_cast<int>(stûn)
        );
        return rengJiEnum(reng);
    }
    
    // Default: Spî (Beyaz)
    return rengJiEnum(RubikReng::SPI);
}

/**
 * Kontrol bike ka kup çareser bûye (Küpün çözülüp çözülmediğini kontrol et)
 */
JNIEXPORT jboolean JNICALL
Java_com_xani_serwext_MainActivity_çareserkirin(JNIEnv *env, jobject thiz) {
    if (kupGlobal != nullptr) {
        bool çareser = kupGlobal->çareserkirin();
        if (çareser) {
            LOGI("Elhamdulillah! Kup çareser bû! (Küp çözüldü!)");
        }
        return static_cast<jboolean>(çareser);
    }
    return JNI_FALSE;
}

/**
 * JNI_OnLoad - Library load dema (Library yüklendiğinde)
 */
JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved) {
    LOGI("Bîsmîllahîrrahmânîrrahîm - Kupa Rubik library bar bû! (yüklendi!)");
    return JNI_VERSION_1_6;
}

/**
 * JNI_OnUnload - Library unload dema (Library kaldırıldığında)
 */
JNIEXPORT void JNICALL JNI_OnUnload(JavaVM* vm, void* reserved) {
    LOGI("Kupa Rubik library daket! (kaldırıldı!)");
    if (kupGlobal != nullptr) {
        delete kupGlobal;
        kupGlobal = nullptr;
    }
}

} // extern "C"
