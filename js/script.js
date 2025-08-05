// ========================================
// POLANDTRANS - GŁÓWNY SKRYPT JAVASCRIPT
// ========================================
// Ten plik zawiera wszystkie interaktywne funkcjonalności strony
// Wszystkie funkcje są opisane szczegółowo dla celów edukacyjnych

// ========================================
// INICJALIZACJA - CZEKAMY NA ZAŁADOWANIE DOM
// ========================================
// DOMContentLoaded oznacza, że HTML jest w pełni załadowany
// ale obrazy i inne zasoby mogą się jeszcze ładować
document.addEventListener('DOMContentLoaded', function() {
    console.log('PolandTrans: Strona została załadowana');
    
    // Inicjalizujemy wszystkie funkcjonalności
    initializeSmoothScrolling();
    initializeLazyLoading();
    initializePerformanceMonitoring();
    initializeAccessibilityFeatures();
    initializeContactFormValidation();
});

// ========================================
// PŁYNE PRZEWIJANIE - SMOOTH SCROLLING
// ========================================
// Ta funkcja sprawia, że kliknięcie w linki nawigacyjne
// powoduje płynne przewijanie do sekcji zamiast skoku
function initializeSmoothScrolling() {
    // Znajdujemy wszystkie linki, które zaczynają się od #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Dodajemy obsługę kliknięcia do każdego linku
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Pobieramy adres docelowy z atrybutu href
            const href = this.getAttribute('href');
            
            // Znajdujemy element docelowy na stronie
            const target = document.querySelector(href);
            
            // Jeśli element istnieje, wykonujemy płynne przewijanie
            if (target) {
                // Zatrzymujemy domyślne zachowanie linku
                e.preventDefault();
                
                // Płynnie przewijamy do elementu
                target.scrollIntoView({ 
                    behavior: 'smooth',  // Płynna animacja
                    block: 'start'       // Element pojawi się na górze ekranu
                });
                
                // Aktualizujemy URL w przeglądarce bez przeładowania strony
                // To pozwala na używanie przycisku "wstecz" w przeglądarce
                history.pushState(null, null, href);
                
                // Dodajemy klasę aktywną do linku w nawigacji
                updateActiveNavigationLink(href);
            }
        });
    });
}

// ========================================
// AKTYWNY LINK NAWIGACYJNY
// ========================================
// Ta funkcja podświetla aktualnie wyświetlaną sekcję w menu
function updateActiveNavigationLink(currentSection) {
    // Usuwamy klasę aktywną ze wszystkich linków
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Dodajemy klasę aktywną do odpowiedniego linku
    const activeLink = document.querySelector(`.navbar-nav .nav-link[href="${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ========================================
// LAZY LOADING OBRAZÓW
// ========================================
// Ta funkcja ładuje obrazy dopiero gdy są widoczne na ekranie
// To znacznie przyspiesza ładowanie strony
function initializeLazyLoading() {
    // Znajdujemy wszystkie obrazy z atrybutem data-src
    const images = document.querySelectorAll('img[data-src]');
    
    // Sprawdzamy czy przeglądarka obsługuje Intersection Observer
    if ('IntersectionObserver' in window) {
        // Tworzymy obserwator, który sprawdza czy element jest widoczny
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Jeśli obraz jest widoczny na ekranie
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Ładujemy obraz
                    img.src = img.dataset.src;
                    
                    // Usuwamy klasę lazy (może być używana do stylowania)
                    img.classList.remove('lazy');
                    
                    // Przestajemy obserwować ten obraz
                    observer.unobserve(img);
                    
                    console.log('PolandTrans: Obraz załadowany:', img.src);
                }
            });
        });
        
        // Rozpoczynamy obserwację każdego obrazu
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback dla starszych przeglądarek - ładujemy wszystkie obrazy od razu
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// ========================================
// MONITORING WYDAJNOŚCI
// ========================================
// Ta funkcja mierzy czas ładowania strony i inne metryki wydajności
function initializePerformanceMonitoring() {
    // Sprawdzamy czy przeglądarka obsługuje Performance API
    if ('performance' in window) {
        // Czekamy na pełne załadowanie strony (włącznie z obrazami)
        window.addEventListener('load', () => {
            // Pobieramy dane o wydajności
            const perfData = performance.getEntriesByType('navigation')[0];
            
            // Obliczamy różne czasy ładowania
            const pageLoadTime = perfData.loadEventEnd - perfData.loadEventStart;
            const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
            const firstPaint = performance.getEntriesByType('paint')[0]?.startTime || 0;
            
            // Logujemy wyniki (w produkcji można wysłać do Google Analytics)
            console.log('PolandTrans - Metryki wydajności:');
            console.log('- Czas ładowania strony:', Math.round(pageLoadTime), 'ms');
            console.log('- Czas DOM Content Loaded:', Math.round(domContentLoaded), 'ms');
            console.log('- First Paint:', Math.round(firstPaint), 'ms');
            
            // Jeśli strona ładuje się wolno, pokazujemy ostrzeżenie
            if (pageLoadTime > 3000) {
                console.warn('PolandTrans: Strona ładuje się wolno. Rozważ optymalizację obrazów.');
            }
        });
    }
}

// ========================================
// FUNKCJONALNOŚCI DOSTĘPNOŚCI
// ========================================
// Ta funkcja dodaje dodatkowe funkcjonalności dla osób z niepełnosprawnościami
function initializeAccessibilityFeatures() {
    // Obsługa klawiatury dla nawigacji
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        // Dodajemy obsługę klawisza Enter i Spacji
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Dodajemy focus indicator
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #dc3545';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Obsługa przycisku "Powrót do góry"
    addBackToTopButton();
}

// ========================================
// PRZYCISK "POWRÓT DO GÓRY"
// ========================================
// Dodaje przycisk, który pozwala szybko wrócić na górę strony
function addBackToTopButton() {
    // Tworzymy przycisk
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Powrót do góry strony');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    // Dodajemy przycisk do strony
    document.body.appendChild(backToTopButton);
    
    // Pokazujemy/ukrywamy przycisk w zależności od pozycji przewijania
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Obsługa kliknięcia - przewijanie do góry
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// WALIDACJA FORMULARZA KONTAKTOWEGO
// ========================================
// Ta funkcja sprawdza poprawność danych w formularzu
function initializeContactFormValidation() {
    // Znajdujemy formularz kontaktowy (jeśli istnieje)
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pobieramy dane z formularza
            const formData = new FormData(this);
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Sprawdzamy poprawność emaila
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('Proszę podać poprawny adres email.');
                return;
            }
            
            // Sprawdzamy długość wiadomości
            if (message.length < 10) {
                showError('Wiadomość musi mieć co najmniej 10 znaków.');
                return;
            }
            
            // Jeśli wszystko jest OK, wysyłamy formularz
            showSuccess('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
            this.reset();
        });
    }
}

// ========================================
// WYŚWIETLANIE KOMUNIKATÓW
// ========================================
// Funkcje do pokazywania komunikatów o błędach i sukcesie
function showError(message) {
    showMessage(message, 'error');
}

function showSuccess(message) {
    showMessage(message, 'success');
}

function showMessage(message, type) {
    // Tworzymy element komunikatu
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `alert alert-${type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        max-width: 300px;
    `;
    
    // Dodajemy przycisk zamykania
    messageElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Zamknij"></button>
    `;
    
    // Dodajemy do strony
    document.body.appendChild(messageElement);
    
    // Automatycznie usuwamy po 5 sekundach
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

// ========================================
// OBSŁUGA BŁĘDÓW
// ========================================
// Ta funkcja przechwytuje błędy JavaScript i loguje je
window.addEventListener('error', function(e) {
    console.error('PolandTrans - Błąd JavaScript:', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
    });
    
    // W produkcji można wysłać błąd do systemu monitorowania
    // sendErrorToMonitoring(e);
});

// ========================================
// OPTYMALIZACJA WYDAJNOŚCI
// ========================================
// Funkcja do debounce - ogranicza częstotliwość wykonywania funkcji
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optymalizujemy obsługę przewijania
const optimizedScrollHandler = debounce(() => {
    // Tutaj można dodać kod, który ma się wykonać podczas przewijania
    // np. animacje, lazy loading, itp.
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// ========================================
// INICJALIZACJA PO ZAŁADOWANIU STRONY
// ========================================
// Dodatkowa inicjalizacja po pełnym załadowaniu wszystkich zasobów
window.addEventListener('load', function() {
    console.log('PolandTrans: Wszystkie zasoby zostały załadowane');
    
    // Możemy tutaj dodać dodatkowe funkcjonalności
    // np. animacje, tracking, itp.
});

// ========================================
// EKSPORT FUNKCJI (dla celów testowych)
// ========================================
// Eksportujemy główne funkcje, żeby można je było testować
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeSmoothScrolling,
        initializeLazyLoading,
        initializePerformanceMonitoring,
        initializeAccessibilityFeatures,
        debounce
    };
}