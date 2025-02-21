package com.example.visitor.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

import com.example.visitor.service.VisitorService;
import com.example.visitor.model.Visitor;


@RestController
@RequestMapping("/visitor")
public class VisitorController {
    
    @Autowired
    private VisitorService visitorService;

    @GetMapping
    public ResponseEntity<Map<String, String>> getVisitorInfo(HttpServletRequest request) {
        String ipAddress = request.getRemoteAddr();
        Visitor visitor = visitorService.getOrCreateVisitor(ipAddress);

        String message = visitor.getId() == 1 ?
            "Welcome first time visitor, you are visitor #" + visitor.getId() :
            "Welcome back visitor #" + visitor.getId();

        Map<String, String> response = new HashMap<>();
        response.put("message", message);

        return ResponseEntity.ok(response);
    }
}
