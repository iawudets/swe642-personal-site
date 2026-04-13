package com.swe642.controllers;

import com.swe642.repositories.SurveyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

import com.swe642.entities.Survey;

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

    @PostMapping
    public ResponseEntity<Survey> createSurvey(@RequestBody Survey survey) {
        Survey savedSurvey = surveyRepository.save(survey);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSurvey);
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
