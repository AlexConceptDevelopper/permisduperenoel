# ==========================================
# Étape 1 : Build du Backend Spring Boot avec Maven
# ==========================================
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copie des fichiers du projet backend
COPY pom.xml .
COPY src ./src

# Build direct avec mvn (sans utiliser le wrapper)
RUN mvn clean package -DskipTests

# ==========================================
# Étape 2 : Runtime léger (JRE) pour la production
# ==========================================
FROM eclipse-temurin:21-jre
WORKDIR /app

# Installation de toutes les dépendances système requises pour Playwright (Chromium & Webkit)
RUN apt-get update && apt-get install -y \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libatspi2.0-0 \
    libx11-6 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libxcb1 \
    libxkbcommon0 \
    libpango-1.0-0 \
    libcairo2 \
    libasound2t64 \
    libxcursor1 \
    libgtk-3-0 \
    libpangocairo-1.0-0 \
    libcairo-gobject2 \
    libgdk-pixbuf-2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copie du jar généré depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

# Exposition du port
EXPOSE 8080

# Lancement de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]