package com.example.visitor.model;

import jakarta.persistence.*;

@Entity
@Table(name = "visitors")
public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String ipAddress;

     // No-argument constructor (required by JPA)
     public Visitor() {
    }

    public Visitor(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }
}
