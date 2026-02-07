// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

#ifndef SERWEXT_RUBIKRENDERER_H
#define SERWEXT_RUBIKRENDERER_H

#include <GLES3/gl3.h>
#include <android/native_window.h>
#include <EGL/egl.h>
#include "RubikKup.h"
#include "Shader.h"
#include <vector>
#include <memory>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

/**
 * Xêzkerê Kupa Rubik (Rubik Küp Çizici)
 */
class RubikRenderer {
private:
    std::unique_ptr<RubikKup> kup;
    std::unique_ptr<Shader> shader;
    
    GLuint VAO, VBO, EBO;
    
    // Matrîsên transformasyonê (Dönüşüm matrisleri)
    glm::mat4 projection;
    glm::mat4 view;
    glm::mat4 model;
    
    // Zivirîna kamera (Kamera dönüşü)
    float goşeyaX = 30.0f;
    float goşeyaY = 45.0f;
    float dûrbûn = 10.0f;  // mesafe
    
    // Touch kontrolê
    float lastX = 0.0f, lastY = 0.0f;
    bool touching = false;
    
public:
    RubikRenderer() {
        kup = std::make_unique<RubikKup>();
        amadekirina();  // hazırla
    }
    
    ~RubikRenderer() {
        pakkirina();  // temizle
    }
    
    /**
     * OpenGL objeyên amade bike (OpenGL nesnelerini hazırla)
     */
    void amadekirina() {
        // Vertex shader kodu
        const char* vertexShaderSource = R"(
            #version 300 es
            layout (location = 0) in vec3 aPos;
            layout (location = 1) in vec3 aColor;
            
            uniform mat4 model;
            uniform mat4 view;
            uniform mat4 projection;
            
            out vec3 ourColor;
            
            void main() {
                gl_Position = projection * view * model * vec4(aPos, 1.0);
                ourColor = aColor;
            }
        )";
        
        // Fragment shader kodu
        const char* fragmentShaderSource = R"(
            #version 300 es
            precision mediump float;
            
            in vec3 ourColor;
            out vec4 FragColor;
            
            void main() {
                FragColor = vec4(ourColor, 1.0);
            }
        )";
        
        // Buffers ava bike (Bufferları oluştur)
        glGenVertexArrays(1, &VAO);
        glGenBuffers(1, &VBO);
        glGenBuffers(1, &EBO);
    }
    
    /**
     * Kupê xêz bike (Küpü çiz)
     */
    void xêzkirin(int panî, int bilindahî) {
        // Projection matrîsê nû bike (Projeksiyon matrisini güncelle)
        float aspect = (float)panî / (float)bilindahî;
        projection = glm::perspective(glm::radians(45.0f), aspect, 0.1f, 100.0f);
        
        // View matrîsê hesab bike (View matrisini hesapla)
        float camX = dûrbûn * cos(glm::radians(goşeyaY)) * cos(glm::radians(goşeyaX));
        float camY = dûrbûn * sin(glm::radians(goşeyaX));
        float camZ = dûrbûn * sin(glm::radians(goşeyaY)) * cos(glm::radians(goşeyaX));
        
        view = glm::lookAt(
            glm::vec3(camX, camY, camZ),
            glm::vec3(0.0f, 0.0f, 0.0f),
            glm::vec3(0.0f, 1.0f, 0.0f)
        );
        
        model = glm::mat4(1.0f);
        
        // Ekranê pak bike (Ekranı temizle)
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        
        // Kupê xêz bike (Küpü çiz)
        xêzkirinayêHevokan();
    }
    
    /**
     * Hevokên kupê xêz bike (Küp yüzlerini çiz)
     */
    void xêzkirinayêHevokan() {
        const float mezinahî = 0.95f;  // Her çargoşeyê mezinahî
        const float navber = 0.05f;    // Navbera çargoşeyan (aralar)
        
        // Her hevok ji bo
        for (int h = 0; h < 6; h++) {
            for (int i = 0; i < RubikKup::MEZINAHÎ; i++) {
                for (int j = 0; j < RubikKup::MEZINAHÎ; j++) {
                    RubikReng reng = kup->getReng(h, i, j);
                    auto rgb = getRGBReng(reng);
                    
                    // Pozîsyona çargoşeyê hesab bike
                    xêzkirinayêÇargoşeyê(h, i, j, rgb[0], rgb[1], rgb[2], mezinahî);
                }
            }
        }
    }
    
    /**
     * Yek çargoşeyê xêz bike (Bir kareyi çiz)
     */
    void xêzkirinayêÇargoşeyê(int hevok, int rêz, int stûn, 
                               float r, float g, float b, float mezinahî) {
        // Pozîsyona bingehîn (Temel pozisyon)
        float x = (stûn - 1.0f) * (mezinahî + 0.05f);
        float y = (1.0f - rêz) * (mezinahî + 0.05f);
        float z = 0.0f;
        
        // Li gor hevokê bicivîne (Yüze göre taşı)
        float half = mezinahî / 2.0f;
        
        std::vector<float> vertices;
        
        switch (hevok) {
            case 0: // Jor (Üst) - Y pozitif
                vertices = {
                    x - half, 1.5f, z - half, r, g, b,
                    x + half, 1.5f, z - half, r, g, b,
                    x + half, 1.5f, z + half, r, g, b,
                    x - half, 1.5f, z + half, r, g, b
                };
                break;
            case 1: // Jêr (Alt) - Y negatif
                vertices = {
                    x - half, -1.5f, z - half, r, g, b,
                    x + half, -1.5f, z - half, r, g, b,
                    x + half, -1.5f, z + half, r, g, b,
                    x - half, -1.5f, z + half, r, g, b
                };
                break;
            case 2: // Pêş (Ön) - Z pozitif
                vertices = {
                    x - half, y - half, 1.5f, r, g, b,
                    x + half, y - half, 1.5f, r, g, b,
                    x + half, y + half, 1.5f, r, g, b,
                    x - half, y + half, 1.5f, r, g, b
                };
                break;
            case 3: // Paşe (Arka) - Z negatif
                vertices = {
                    x - half, y - half, -1.5f, r, g, b,
                    x + half, y - half, -1.5f, r, g, b,
                    x + half, y + half, -1.5f, r, g, b,
                    x - half, y + half, -1.5f, r, g, b
                };
                break;
            case 4: // Rast (Sağ) - X pozitif
                vertices = {
                    1.5f, y - half, z - half, r, g, b,
                    1.5f, y - half, z + half, r, g, b,
                    1.5f, y + half, z + half, r, g, b,
                    1.5f, y + half, z - half, r, g, b
                };
                break;
            case 5: // Çep (Sol) - X negatif
                vertices = {
                    -1.5f, y - half, z - half, r, g, b,
                    -1.5f, y - half, z + half, r, g, b,
                    -1.5f, y + half, z + half, r, g, b,
                    -1.5f, y + half, z - half, r, g, b
                };
                break;
        }
        
        GLuint indices[] = {0, 1, 2, 2, 3, 0};
        
        glBindVertexArray(VAO);
        
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, vertices.size() * sizeof(float), 
                     vertices.data(), GL_STATIC_DRAW);
        
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);
        
        // Pozîsyon
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        
        // Reng
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), 
                             (void*)(3 * sizeof(float)));
        glEnableVertexAttribArray(1);
        
        glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
    }
    
    /**
     * Touch event handle bike (Touch olayını yönet)
     */
    void destanîDan(float x, float y, bool pressed) {
        if (pressed) {
            lastX = x;
            lastY = y;
            touching = true;
        } else {
            touching = false;
        }
    }
    
    /**
     * Kamera bicivîne (Kamerayı hareket ettir)
     */
    void bicivînînaKamera(float deltaX, float deltaY) {
        if (touching) {
            goşeyaY += deltaX * 0.5f;
            goşeyaX += deltaY * 0.5f;
            
            // Sînorên goşeyê (Açı sınırları)
            if (goşeyaX > 89.0f) goşeyaX = 89.0f;
            if (goşeyaX < -89.0f) goşeyaX = -89.0f;
        }
    }
    
    RubikKup* getKup() { return kup.get(); }
    
private:
    void pakkirina() {
        glDeleteVertexArrays(1, &VAO);
        glDeleteBuffers(1, &VBO);
        glDeleteBuffers(1, &EBO);
    }
};

#endif // SERWEXT_RUBIKRENDERER_H
