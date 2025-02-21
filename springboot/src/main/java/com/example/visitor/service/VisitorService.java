package com.example.visitor.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

import com.example.visitor.repository.VisitorRepository;
import com.example.visitor.model.Visitor;

@Service
public class VisitorService {
    @Autowired
    private VisitorRepository visitorRepository;

    public Visitor getOrCreateVisitor(String ipAddress) {
        return visitorRepository.findByIpAddress(ipAddress)
                .orElseGet(() -> visitorRepository.save(new Visitor(ipAddress)));
    }
}
