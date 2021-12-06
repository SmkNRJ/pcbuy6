package com.pc_buy.pcbuy.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class FileUploadService {
    public String uploadFile(String fileStorePath, MultipartFile file) throws IOException {
        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHHmmss-"));
        String fileName = date + file.getOriginalFilename();
        String filePath = fileStorePath + "/" + fileName;
        Path path = Paths.get(fileStorePath);
        if (!Files.exists(path)) {
            Files.createDirectory(path);
        }
        Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
        return "/" + filePath;
    }
}
