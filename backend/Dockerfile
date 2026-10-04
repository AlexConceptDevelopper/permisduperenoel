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

# Copie du jar généré depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

# Exposition du port
EXPOSE 8080

# Lancement de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]