# ==========================================
# Étape 1 : Build du Backend Spring Boot avec Maven
# ==========================================
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# Copie des fichiers du monorepo
COPY . .

# Rendre le wrapper Maven exécutable (si tu es sur Linux/Mac ou via git)
RUN chmod +x mvnw

# Build du JAR en ignorant les tests pour aller plus vite
RUN ./mvnw clean package -DskipTests

# ==========================================
# Étape 2 : Runtime léger (JRE) pour la production
# ==========================================
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copie du jar généré depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

# Exposition du port (Railway injecte généralement le port via $PORT, mais 8080 par défaut)
EXPOSE 8080

# Lancement de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]