<<<<<<< Updated upstream:backend/src/main/java/com/swe642/repositories/SurveyRepository.java
package com.swe642.repositories;

import com.swe642.entities.Survey;
=======
/*
Author: Ilia Awudetsey
Description: SurveyRepository is a JPA interface that the controller interacts through to perform database operations.
 */
package com.swe642.swe642_personal_site.repositories;

import com.swe642.swe642_personal_site.entities.Survey;
import org.jspecify.annotations.Nullable;
>>>>>>> Stashed changes:backend/src/main/java/com/swe642/swe642_personal_site/repositories/SurveyRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {

  @Nullable Survey findSurveyBySurveyId(long id);
}
