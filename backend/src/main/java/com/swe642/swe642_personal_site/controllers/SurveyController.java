package com.swe642.swe642_personal_site.controllers;

import com.swe642.swe642_personal_site.enums.Enums;
import com.swe642.swe642_personal_site.repositories.SurveyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

import com.swe642.swe642_personal_site.entities.Survey;

@RestController
@RequestMapping("/surveys")
public class SurveyController {

    private final SurveyRepository surveyRepository;

    public SurveyController(SurveyRepository surveyRepository) {
      this.surveyRepository = surveyRepository;
    }

    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        return ResponseEntity.ok(surveyRepository.findAll());
    }

    @GetMapping("/test")
    public ResponseEntity<String> testApi() {
      return ResponseEntity.ok("Hello World! <3 :)");
    }

    @PostMapping
    public ResponseEntity<Survey> createSurvey(@RequestBody Survey survey) {
        Survey savedSurvey = surveyRepository.save(survey);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSurvey);
    }

    @PostMapping("/test")
    public ResponseEntity<Survey> createTestSurvey() {
      Survey survey1 = new Survey(
        new Date(),
        "Bobby",
        "Goger",
        "1234 Amazing Street",
        "12345",
        "Big City",
        "Nebraska",
        "3244852354",
        "haha@thankyou.com",
        Enums.CampusLikeChoice.SPORTS,
        Enums.UniversityInterestChoice.INTERNET,
        Enums.RecommendLikelihoodChoice.LIKELY,
        "January",
        "2025",
        "I love this campus! <3"
      );

      Survey savedSurvey = surveyRepository.save(survey1);
      return ResponseEntity.ok(savedSurvey);
    }

    @PutMapping
    public ResponseEntity<Survey> updateSurvey(@RequestBody Survey survey) {
        boolean isNotFound = surveyRepository.findById(survey.getSurveyId()).isEmpty();
        Survey savedSurvey = surveyRepository.save(survey);
        if (isNotFound) {
          return ResponseEntity.status(HttpStatus.CREATED).body(savedSurvey);
        } else {
          return ResponseEntity.ok(savedSurvey);
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteSurvey(long surveyId) {
        boolean isNotFound = surveyRepository.findById(surveyId).isEmpty();

        if (isNotFound) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
          surveyRepository.deleteById(surveyId);
          return ResponseEntity.ok(null);
        }
    }
}
