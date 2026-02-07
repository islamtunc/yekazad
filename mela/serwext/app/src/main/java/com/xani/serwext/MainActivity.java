// Bîsmîllahîrrahmânîrrahîm
// Elhamdulillahi rabbil 'alamin
// Esselatu ve selamû ala Rasûlina Muhammedin
// SUPHANALLAHI VELHAMDULILLAHİ VE LA ILAHE ILLALLAHU 
// VE KUDDUS-U EKREM-I VEHHAB ALLAHU EKBER
// ALLAHU EKBER ALLAHU EKBER LA İLAHE İLLALLAHU ALLAHU EKBER 
// ALLAHU EKBER VE LİLLAHİL HAMD

package com.xani.serwext;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import android.graphics.Color;
import android.widget.GridLayout;

/**
 * Çalakiya Kupa Rubik (Rubik Küp Aktivitesi)
 * Rubik küpü Kürtçe arayüzle yöneten ana aktivite
 */
public class MainActivity extends AppCompatActivity {
    
    // Native library
    static {
        System.loadLibrary("serwext");
    }
    
    private TextView peyamaNivîs; // mesaj yazısı
    private GridLayout rubikGrid;
    private Button[][] çargoşe = new Button[3][3]; // 3x3 kareler
    private int hevokaNiha = 0; // görüntülenen yüz (0-5)
    
    // Native metodên (Native metodlar)
    private native void destpêkirina();  // başlat
    private native void zivirîna(int hevok, boolean berveçep);  // döndür
    private native void tevlihevkirina(int jimare);  // karıştır
    private native int getReng(int hevok, int rêz, int stûn);  // renk al
    private native boolean çareserkirin();  // çözüldü mü
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Native library destpê bike (başlat)
        destpêkirina();
        
        // View'ları bul
        peyamaNivîs = findViewById(R.id.peyamaNivis);
        rubikGrid = findViewById(R.id.rubikGrid);
        
        // 3x3 grid oluştur
        amadekirina3x3Grid();
        
        // Kontrol butonları
        Button butonaJor = findViewById(R.id.butonaJor);
        Button butonaJer = findViewById(R.id.butonaJer);
        Button butonaPes = findViewById(R.id.butonaPes);
        Button butonaPase = findViewById(R.id.butonaPase);
        Button butonaRast = findViewById(R.id.butonaRast);
        Button butonaCep = findViewById(R.id.butonaCep);
        Button butonaTevlihev = findViewById(R.id.butonaTevlihev);
        Button butonaRijin = findViewById(R.id.butonaRijinKirin);
        Button butonaHevokGuherîne = findViewById(R.id.butonaHevokGuherine);
        
        // Yüz döndürme butonları
        butonaJor.setOnClickListener(v -> zivirînaHevok(0));
        butonaJer.setOnClickListener(v -> zivirînaHevok(1));
        butonaPes.setOnClickListener(v -> zivirînaHevok(2));
        butonaPase.setOnClickListener(v -> zivirînaHevok(3));
        butonaRast.setOnClickListener(v -> zivirînaHevok(4));
        butonaCep.setOnClickListener(v -> zivirînaHevok(5));
        
        // Karıştır butonu
        butonaTevlihev.setOnClickListener(v -> {
            tevlihevkirina(20);
            nûkirinaDîmen();
            peyamaNivîs.setText("Kup tevlihev bû! Berdewam be... 🎲");
            peyamaNivîs.setBackgroundColor(Color.parseColor("#FFF9C4"));
        });
        
        // Sıfırla butonu
        butonaRijin.setOnClickListener(v -> {
            destpêkirina();
            hevokaNiha = 0;
            nûkirinaDîmen();
            peyamaNivîs.setText("Kup rijîn bû! Dest pê bike! 🆕");
            peyamaNivîs.setBackgroundColor(Color.parseColor("#E8F5E9"));
        });
        
        // Yüz değiştir butonu
        butonaHevokGuherîne.setOnClickListener(v -> {
            hevokaNiha = (hevokaNiha + 1) % 6;
            nûkirinaDîmen();
            String[] navênHevokan = {"Jor (Üst)", "Jêr (Alt)", "Pêş (Ön)", 
                                     "Paşe (Arka)", "Rast (Sağ)", "Çep (Sol)"};
            peyamaNivîs.setText("Hevok: " + navênHevokan[hevokaNiha] + " 👁️");
        });
        
        // İlk görünümü güncelle
        nûkirinaDîmen();
    }
    
    /**
     * 3x3 grid amade bike (3x3 grid hazırla)
     */
    private void amadekirina3x3Grid() {
        rubikGrid.setColumnCount(3);
        rubikGrid.setRowCount(3);
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                Button btn = new Button(this);
                GridLayout.LayoutParams params = new GridLayout.LayoutParams();
                params.width = 0;
                params.height = 0;
                params.columnSpec = GridLayout.spec(j, 1f);
                params.rowSpec = GridLayout.spec(i, 1f);
                params.setMargins(4, 4, 4, 4);
                btn.setLayoutParams(params);
                btn.setTextSize(10);
                
                çargoşe[i][j] = btn;
                rubikGrid.addView(btn);
            }
        }
    }
    
    /**
     * Hevokê zivirîne (Yüzü döndür)
     */
    private void zivirînaHevok(int hevok) {
        zivirîna(hevok, false);
        nûkirinaDîmen();
        
        if (çareserkirin()) {
            peyamaNivîs.setText("🎉 Pîroz be! Kup çareser bû! Elhamdulillah! 🎉");
            peyamaNivîs.setBackgroundColor(Color.parseColor("#C8E6C9"));
            Toast.makeText(this, "Serfiraz bû! ماشاءالله", Toast.LENGTH_LONG).show();
        } else {
            peyamaNivîs.setText("Berdewam be... 🔄");
            peyamaNivîs.setBackgroundColor(Color.parseColor("#E3F2FD"));
        }
    }
    
    /**
     * Dîmenê nû bike (Görünümü güncelle)
     */
    private void nûkirinaDîmen() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int rengCode = getReng(hevokaNiha, i, j);
                çargoşe[i][j].setBackgroundColor(rengCode);
                
                // Renk adını yaz
                String navReng = getNavReng(rengCode);
                çargoşe[i][j].setText(navReng);
                çargoşe[i][j].setTextColor(esmerBûn(rengCode) ? Color.WHITE : Color.BLACK);
            }
        }
    }
    
    /**
     * Renk kodundan Kürtçe isim al
     */
    private String getNavReng(int rengCode) {
        if (rengCode == Color.WHITE) return "Spî";
        if (rengCode == Color.YELLOW) return "Zer";
        if (rengCode == Color.RED) return "Sor";
        if (rengCode == Color.rgb(255, 165, 0)) return "Pir";
        if (rengCode == Color.GREEN) return "Kesk";
        if (rengCode == Color.BLUE) return "Şîn";
        return "?";
    }
    
    /**
     * Renk koyu mu kontrol et
     */
    private boolean esmerBûn(int reng) {
        int r = Color.red(reng);
        int g = Color.green(reng);
        int b = Color.blue(reng);
        double ronahî = (0.299 * r + 0.587 * g + 0.114 * b);
        return ronahî < 128;
    }
}