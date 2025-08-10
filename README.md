# 🚛 PolandTrans - Profesjonalny Transport i Spedycja

## 🔗Link do strony:
https://polandtrans.netlify.app/

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

## 🔧 Konfiguracja

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

© 2025 PolandTrans. Wszelkie prawa zastrzeżone.

---

**PolandTrans** - Twój ładunek. Nasza odpowiedzialność. 🚛 
