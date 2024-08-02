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
<br><br>
# Engineering Project SwapDice [EN]

## Table of Contents
1. [Hardware Requirements](#hardware-requirements)
2. [Runtime Environment](#runtime-environment)
3. [Installation Instructions](#installation-instructions)
    - [Installing Angular 15.2.0](#installing-angular-1520)
    - [Installing Spring Boot 3.2.1](#installing-spring-boot-321)
    - [Installing PostgreSQL](#installing-postgresql)
    - [Installing PgAdmin 4](#installing-pgadmin-4)

## Hardware Requirements

### Processor
- Recommended: Multi-core processor with a frequency above 2.0 GHz.

### RAM
- Minimum: 8 GB.
- Recommended: 16 GB or more.

### Hard Drive
- Free space: at least 20 GB.

### Graphics Card
- No special graphics cards are required, but those supporting OpenGL are recommended.

### Operating System
- Windows 10 - 11
- macOS 11 (Big Sur) or newer
- Any modern Linux distribution

## Runtime Environment

### Angular
Angular supports the latest browsers, including:
- Chrome: last two versions
- Firefox: latest version and ESR
- Edge: last two major versions
- Safari: last two major versions
- iOS: last two major versions
- Android: last two major versions

**Technical requirements for Angular (v.15.2.0):**
- Node.js - version 20.10.0
- NPM - version 10.2.5
- Angular CLI - version 15.2.0
- PrimeNG Library

### Spring Boot (v.3.2.1)
- Gradle - version 7.x (7.5 or later) and 8.x
- Java - version 17
- IntelliJ IDEA Community Edition - latest version

### Database
- PgAdmin 4: version 7.8 or later
- PostgreSQL: version 16.1 or later

## Installation Instructions

### Installing Angular 15.2.0

1. **Install Node.js**
    - Download and install Node.js from [the official website](https://nodejs.org/). Installing Node.js includes npm.
2. **Install Angular CLI**
    - In the Node.js command prompt, run:
      ```bash
      npm install -g @angular/cli@15.2.0
      ```
3. **Create a new project**
    - Create a new Angular project and navigate to its folder:
      ```bash
      ng new board-games-main
      cd board-games-main
      ```
4. **Install PrimeNG Library**
    - Run the following command:
      ```bash
      npm install primeng
      ```
5. **Run the project**
    - Open the project on localhost:4200:
      ```bash
      ng serve --open
      ```

### Installing Spring Boot 3.2.1

1. **Create a new project**
    - Use [start.spring.io](https://start.spring.io/) to create a project. Add the appropriate dependencies, download the zip, and extract it on your computer.
2. **Open the project in IntelliJ IDEA**
    - Open the project in IntelliJ IDEA and add the necessary code.
3. **Run the project**
    - From IntelliJ IDEA or using the command line:
      ```bash
      ./gradlew bootRun  # MacOS/Linux
      .\gradlew.bat bootRun  # Windows
      ```

### Installing PostgreSQL

1. **Download the installer**
    - Go to [the official PostgreSQL website](https://www.postgresql.org/download/).
    - Choose the appropriate version for Windows (e.g., Windows x86-64).
2. **Run the installer**
    - After downloading, run the PostgreSQL installer.
3. **Choose components**
    - Select the components to install. Typically, it's advisable to install the PostgreSQL Server and developer tools.
4. **Server settings**
    - Set the password for the postgres user (database administrator) and the server port (default 5432).
5. **Directory settings**
    - Choose the directory where PostgreSQL files will be installed.
6. **Enter password**
    - Enter the password for the postgres user. This password will be used to connect to the database.
7. **Installation**
    - Continue with the installation, accepting the default options.
8. **Finish installation**
    - After installation, you can choose to launch Stack Builder to install additional tools and extensions.

### Installing PgAdmin 4

1. **Download the installer**
    - Go to [the official PgAdmin website](https://www.pgadmin.org/download/).
    - Download the appropriate version for Windows.
2. **Run the installer**
    - After downloading, run the PgAdmin installer.
3. **Choose components**
    - Select the components to install. It's generally recommended to install PgAdmin 4 and additional tools such as pgAgent.
4. **Server settings**
    - Enter the PostgreSQL server details such as IP address, port, database name, etc.
5. **User account settings**
    - Provide the details to create a user account for logging into PgAdmin.
6. **Installation**
    - Continue with the installation, accepting the default options.
7. **Add PostgreSQL server**
    - In PgAdmin, go to `File` then `Add Server`.
    - Enter the PostgreSQL server details configured during installation.
8. **Connect to the database**
    - After adding the server, select it from the list and enter the password for the postgres user.

