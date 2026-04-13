package com.swe642.swe642_personal_site.repositories;

import com.swe642.swe642_personal_site.entities.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {}
