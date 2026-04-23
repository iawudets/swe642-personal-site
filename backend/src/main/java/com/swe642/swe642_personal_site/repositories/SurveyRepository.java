package com.swe642.swe642_personal_site.repositories;

import com.swe642.swe642_personal_site.entities.Survey;
import org.jspecify.annotations.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
  
  @Nullable Survey findSurveyBySurveyId(long id);
}
