Certainly! Here is a summary of all the Docker commands used and needed in this guide:

1. **Stop and remove existing Docker containers**:
   ```bash
   docker stop <container_id_or_name>
   docker rm <container_id_or_name>
   ```

2. **Remove existing Docker images**:
   ```bash
   docker rmi astro-landing-page
   ```

3. **Build a Docker image without using cache** (optional, to ensure a fresh build):
   ```bash
   docker build --no-cache -t astro-landing-page .
   ```

4. **Build a Docker image**:
   ```bash
   docker build -t astro-landing-page .
   ```

5. **Run a Docker container**:
   ```bash
   docker run -p 4321:4321 astro-landing-page
   ```
      external:internal


6. **Execute a command inside a running Docker container**:
   ```bash
   docker exec -it <container_id_or_name> sh
   ```

7. **Check the logs of a Docker container**:
   ```bash
   docker logs <container_id_or_name>
   ```

8. **List Docker containers**:
   ```bash
   docker ps
   ```

9. **Inspect a Docker container**:
   ```bash
   docker inspect <container_id_or_name>
   ```

10. **List running processes inside a Docker container**:
   ```bash
    docker top <container_id_or_name>
   ```

11. **Clear Docker system cache** (optional, to free up space):
    ```bash
    docker system prune -a
    ```

