# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Add the application's jar to the container
COPY target/backendwealthiq.jar app.jar

# Make port 8888 available to the world outside this container
EXPOSE 8888

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
