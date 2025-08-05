# 🚛 PolandTrans - Profesjonalny Transport i Spedycja

## 📋 Opis projektu

PolandTrans to nowoczesna strona internetowa firmy transportowej, zoptymalizowana pod kątem SEO, wydajności i najlepszych praktyk web developmentu. Strona prezentuje kompleksowe usługi transportowe, spedycję krajową i międzynarodową oraz magazynowanie.

## ✨ Funkcjonalności

### 🎯 SEO i Optymalizacja
- **Kompletne meta tagi** - Open Graph, Twitter Cards, dane strukturalne
- **Dane strukturalne JSON-LD** - dla lepszego zrozumienia przez wyszukiwarki
- **Optymalizacja obrazów** - lazy loading, WebP format
- **Sitemap.xml** - mapa strony dla wyszukiwarek
- **Robots.txt** - instrukcje dla robotów wyszukiwarek
- **Nagłówki bezpieczeństwa** - XSS, clickjacking, MIME sniffing

### 🚀 Wydajność
- **Kompresja GZIP** - szybsze ładowanie
- **Cache headers** - optymalne czasy cache
- **Lazy loading** - obrazy ładują się na żądanie
- **Preload zasobów** - krytyczne zasoby ładowane wcześniej
- **Optymalizacja CSS/JS** - minifikacja i kompresja

### ♿ Dostępność (Accessibility)
- **ARIA labels** - dla czytników ekranu
- **Semantyczny HTML** - prawidłowa struktura
- **Obsługa klawiatury** - pełna nawigacja klawiaturą
- **Wysoki kontrast** - zgodność z WCAG
- **Redukcja animacji** - dla użytkowników z preferencjami

### 📱 Responsywność
- **Mobile-first design** - optymalizacja dla urządzeń mobilnych
- **Flexbox i Grid** - nowoczesne layouty
- **Breakpointy** - 992px, 768px, 576px
- **Touch-friendly** - przyjazne dla dotyku

## 🛠️ Technologie

### Frontend
- **HTML5** - semantyczna struktura
- **CSS3** - nowoczesne style z Custom Properties
- **JavaScript (ES6+)** - interaktywność
- **Bootstrap 5.3.3** - framework CSS
- **Font Awesome 6** - ikony

### Optymalizacja
- **Google Fonts** - Inter i Poppins
- **CDN** - szybkie ładowanie zasobów
- **Apache .htaccess** - konfiguracja serwera
- **GZIP compression** - kompresja plików

## 📁 Struktura projektu

```
PolandTrans/
├── index.html              # Główna strona
├── css/
│   └── style.css           # Style CSS
├── js/
│   └── script.js           # JavaScript
├── assets/
│   ├── images/             # Obrazy
│   └── icons/              # Ikony
├── robots.txt              # Instrukcje dla robotów
├── sitemap.xml             # Mapa strony
├── .htaccess               # Konfiguracja Apache
└── README.md               # Dokumentacja
```

## 🚀 Instalacja i uruchomienie

### Wymagania
- Serwer Apache z modułami: `mod_rewrite`, `mod_headers`, `mod_deflate`, `mod_expires`
- Przeglądarka z obsługą ES6+

### Instalacja
1. Skopiuj pliki na serwer
2. Upewnij się, że `.htaccess` jest aktywny
3. Sprawdź uprawnienia plików (644 dla plików, 755 dla katalogów)

### Lokalne uruchomienie
```bash
# Użyj lokalnego serwera (np. Python)
python -m http.server 8000

# Lub użyj Live Server w VS Code
# Kliknij "Go Live" w prawym dolnym rogu
```

## 📊 Metryki wydajności

### Oczekiwane wyniki
- **PageSpeed Insights**: 90+ (Mobile), 95+ (Desktop)
- **Lighthouse**: 90+ we wszystkich kategoriach
- **GTmetrix**: A w wydajności i strukturze
- **WebPageTest**: Szybkie ładowanie na wszystkich urządzeniach

### Optymalizacje
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Konfiguracja

### Zmienne CSS
Główne kolory i style są zdefiniowane w zmiennych CSS:
```css
:root {
    --primary-red: #dc3545;        /* Główny czerwony */
    --primary-red-dark: #c82333;   /* Ciemniejszy czerwony */
    --secondary-gray: #6c757d;     /* Szary */
    --text-dark: #2c3e50;          /* Ciemny tekst */
}
```

### Breakpointy responsywne
```css
/* Tablet */
@media (max-width: 992px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Małe mobile */
@media (max-width: 576px) { ... }
```

## 📈 SEO

### Meta tagi
- **Title**: Zoptymalizowany pod kątem słów kluczowych
- **Description**: Atrakcyjny opis dla wyników wyszukiwania
- **Keywords**: Słowa kluczowe branży transportowej
- **Open Graph**: Dla mediów społecznościowych
- **Twitter Cards**: Dla Twittera

### Dane strukturalne
- **TransportationCompany** - schemat dla firmy transportowej
- **PostalAddress** - adres firmy
- **GeoCoordinates** - współrzędne geograficzne
- **OfferCatalog** - katalog usług

### Lokalne SEO
- **Geo meta tagi** - lokalizacja w Warszawie
- **Hreflang** - wersje językowe (PL, EN, DE)
- **Canonical URL** - zapobiega duplikacji

## 🔒 Bezpieczeństwo

### Nagłówki HTTP
- **X-XSS-Protection** - ochrona przed XSS
- **X-Frame-Options** - ochrona przed clickjacking
- **X-Content-Type-Options** - ochrona przed MIME sniffing
- **Content-Security-Policy** - polityka bezpieczeństwa treści

### Ochrona plików
- Blokowanie dostępu do `.htaccess`, `.htpasswd`
- Ochrona przed hotlinking obrazów
- Blokowanie złośliwych botów

## 📱 Responsywność

### Mobile-first approach
- Design zaczyna się od urządzeń mobilnych
- Stopniowe dodawanie funkcjonalności dla większych ekranów
- Touch-friendly interfejs

### Breakpointy
- **576px** - Małe telefony
- **768px** - Telefony i tablety
- **992px** - Tablety i małe laptopy
- **1200px+** - Duże ekrany

## ♿ Dostępność

### WCAG 2.1 AA Compliance
- **Kontrast** - minimum 4.5:1 dla tekstu
- **Nawigacja klawiaturą** - pełna obsługa
- **ARIA labels** - dla czytników ekranu
- **Semantyczny HTML** - prawidłowa struktura

### Funkcjonalności dostępności
- Focus indicators
- Skip links
- Alt text dla obrazów
- Redukcja animacji

## 🎨 Design System

### Typografia
- **Inter** - dla tekstu (300-700)
- **Poppins** - dla nagłówków (300-800)

### Kolory
- **Primary**: #dc3545 (czerwony)
- **Secondary**: #6c757d (szary)
- **Dark**: #2c3e50 (ciemny)
- **Light**: #f8f9fa (jasny)

### Komponenty
- **Karty usług** - z hover efektami
- **Przyciski** - z animacjami
- **Nawigacja** - sticky header
- **Formularze** - z walidacją

## 📊 Monitoring i Analytics

### Metryki wydajności
- **Core Web Vitals** - monitorowanie w czasie rzeczywistym
- **PageSpeed Insights** - regularne testy
- **Lighthouse** - audyty automatyczne

### Narzędzia
- **Google Search Console** - monitoring SEO
- **Google Analytics** - analiza ruchu
- **GTmetrix** - testy wydajności

## 🔄 Aktualizacje i utrzymanie

### Regularne zadania
- **Aktualizacja treści** - co miesiąc
- **Testy wydajności** - co tydzień
- **Backup** - codziennie
- **Security audit** - co kwartał

### Monitoring
- **Uptime** - 99.9% dostępność
- **Performance** - < 3s czas ładowania
- **SEO ranking** - monitoring pozycji

## 📞 Wsparcie

### Kontakt
- **Email**: info@polandtrans.pl
- **Telefon**: 123 456 789
- **Adres**: ul. Przykładowa 123, Warszawa

### Dokumentacja
- **Komentarze w kodzie** - szczegółowe wyjaśnienia
- **README.md** - ten plik
- **Inline documentation** - w każdym pliku

## 📄 Licencja

© 2025 PolandTrans. Wszelkie prawa zastrzeżone.

---

**PolandTrans** - Twój ładunek. Nasza odpowiedzialność. 🚛 