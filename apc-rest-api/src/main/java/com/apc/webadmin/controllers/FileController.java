package com.apc.webadmin.controllers;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = {"http://163.44.206.118:80", "http://163.44.206.118:81"})

public class FileController {
    private static final String UPLOAD_DIRECTORY = "/var/www/uploads/";

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is empty.");
            }

            // Create upload directory if it doesn't exist
            File uploadDir = new File(UPLOAD_DIRECTORY);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Generate a unique file name
            String fileName = file.getOriginalFilename();
            String uniqueFileName = generateUniqueFileName(fileName);

            // Save the uploaded file
            Path filePath = Path.of(UPLOAD_DIRECTORY, uniqueFileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Return the file path
            String fileUrl = getBaseUrl() + "/api/files/" + uniqueFileName;
            return ResponseEntity.ok(fileUrl);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload the file.");
        }
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String fileName) {
        try {
            Path filePath = Path.of(UPLOAD_DIRECTORY, fileName);
            byte[] fileBytes = Files.readAllBytes(filePath);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", fileName);

            return new ResponseEntity<>(fileBytes, headers, HttpStatus.OK);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    private String generateUniqueFileName(String fileName) {
        // Implement your own logic to generate a unique file name
        // For example, you can append a timestamp or use a UUID
        return fileName;
    }
    private String getBaseUrl() {
        // Implement your own logic to determine the base URL of your application
        // This can be the server URL or a custom domain
        return "http://localhost:8080";
    }
}