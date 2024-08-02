# Projekt Inżynierski SwapDice [PL]

## Spis Treści
1. [Wymagania sprzętowe](#wymagania-sprzętowe)
2. [Środowisko uruchomieniowe](#środowisko-uruchomieniowe)
3. [Opis instalacji](#opis-instalacji)
    - [Instalacja Angular 15.2.0](#instalacja-angular-1520)
    - [Instalacja Spring Boot 3.2.1](#instalacja-spring-boot-321)
    - [Instalacja PostgreSQL](#instalacja-postgresql)
    - [Instalacja PgAdmin 4](#instalacja-pgadmin-4)

## Wymagania sprzętowe

### Procesor
- Zalecany procesor wielordzeniowy z częstotliwością powyżej 2.0 GHz.

### Pamięć RAM
- Minimalna ilość RAM: 8 GB.
- Zalecana ilość RAM: 16 GB lub więcej.

### Dysk twardy
- Wolne miejsce na dysku: co najmniej 20 GB.

### Karta Graficzna
- Nie są wymagane specjalne karty graficzne, ale wspierające OpenGL zalecane.

### System operacyjny
- Windows 10 - 11
- macOS 11 (Big Sur) lub nowszy
- Dowolna nowoczesna dystrybucja Linuxa

## Środowisko uruchomieniowe

### Angular
Angular wspiera najnowsze przeglądarki, w tym:
- Chrome: dwie najnowsze wersje
- Firefox: najnowsza wersja i rozszerzone wsparcie wydania (ESR)
- Edge: dwie najnowsze główne wersje
- Safari: dwie najnowsze główne wersje
- iOS: dwie najnowsze główne wersje
- Android: dwie najnowsze główne wersje

**Techniczne wymagania do Angular (v.15.2.0):**
- Node.js - wersja 20.10.0
- NPM - wersja 10.2.5
- Angular CLI - wersja 15.2.0
- Biblioteka PrimeNG

### Spring Boot (v.3.2.1)
- Gradle - wersja 7.x (7.5 lub późniejsza) i 8.x
- Java - wersja 17
- IntelliJ IDEA Community Edition - najnowsza wersja

### Baza danych
- PgAdmin 4: w wersji min. 7.8
- PostgreSQL: w wersji min. 16.1

## Opis instalacji

### Instalacja Angular 15.2.0

1. **Instalacja pakietu Node.js**
    - Pobierz i zainstaluj Node.js z [oficjalnej strony](https://nodejs.org/). Instalacja Node.js obejmuje npm.
2. **Instalacja Angular CLI**
    - W wierszu poleceń Node.js, wykonaj komendę:
      ```bash
      npm install -g @angular/cli@15.2.0
      ```
3. **Utworzenie projektu**
    - Utwórz nowy projekt Angular i przejdź do jego folderu:
      ```bash
      ng new board-games-main
      cd board-games-main
      ```
4. **Instalacja biblioteki PrimeNG**
    - Wykonaj komendę:
      ```bash
      npm install primeng
      ```
5. **Uruchomienie projektu**
    - Otwórz projekt na localhost:4200:
      ```bash
      ng serve --open
      ```

### Instalacja Spring Boot 3.2.1

1. **Stworzenie projektu**
    - Użyj [start.spring.io](https://start.spring.io/) aby stworzyć projekt. Dodaj odpowiednie zależności, pobierz zip i rozpakuj na komputerze.
2. **Otworzenie projektu w IntelliJ IDEA**
    - Otwórz projekt w IntelliJ IDEA i dodaj odpowiedni kod.
3. **Uruchomienie projektu**
    - Z poziomu IntelliJ IDEA lub za pomocą komendy:
      ```bash
      ./gradlew bootRun  # MacOS/Linux
      .\gradlew.bat bootRun  # Windows
      ```

### Instalacja PostgreSQL

1. **Pobierz instalator**
    - Przejdź do [oficjalnej strony PostgreSQL](https://www.postgresql.org/download/).
    - Wybierz odpowiednią wersję dla systemu Windows (np. Windows x86-64).
2. **Uruchom instalator**
    - Po pobraniu uruchom plik instalatora PostgreSQL.
3. **Wybierz komponenty**
    - Wybierz komponenty do zainstalowania. Zazwyczaj warto zainstalować PostgreSQL Server i narzędzia dla programistów.
4. **Ustawienia serwera**
    - Wprowadź hasło dla użytkownika postgres (administratora bazy danych) oraz port serwera (domyślnie 5432).
5. **Ustawienia katalogów**
    - Wybierz katalog, w którym zostaną zainstalowane pliki PostgreSQL.
6. **Wprowadź hasło**
    - Wprowadź hasło dla użytkownika postgres.
7. **Instalacja**
    - Kontynuuj instalację, akceptując domyślne opcje.
8. **Zakończ instalację**
    - Możesz zaznaczyć opcję uruchomienia Stack Builder, który pozwoli na instalację dodatkowych narzędzi i rozszerzeń.

### Instalacja PgAdmin 4

1. **Pobierz instalator**
    - Przejdź do [oficjalnej strony PgAdmina](https://www.pgadmin.org/download/).
    - Pobierz odpowiednią wersję dla systemu Windows.
2. **Uruchom instalator**
    - Po pobraniu uruchom plik instalatora PgAdmina.
3. **Wybierz komponenty**
    - Wybierz komponenty do zainstalowania. Zaleca się zainstalowanie pgAdmin 4 oraz dodatkowych narzędzi, takich jak pgAgent.
4. **Ustawienia serwera**
    - Wprowadź dane serwera PostgreSQL, takie jak adres IP, port, nazwa bazy danych itp.
5. **Ustawienia konta użytkownika**
    - Wprowadź dane do utworzenia konta użytkownika do logowania do PgAdmina.
6. **Instalacja**
    - Kontynuuj instalację, akceptując domyślne opcje.
7. **Dodaj serwer PostgreSQL**
    - W PgAdminie przejdź do `File` następnie `Add Server`.
    - Wprowadź dane serwera PostgreSQL, które zostały skonfigurowane podczas instalacji.
8. **Połącz się z bazą danych**
    - Po dodaniu serwera wybierz go z listy i wprowadź hasło użytkownika postgres.

