package com.swe642.entities;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
@Table(name = "SURVEY")
public class Survey implements java.io.Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "SURVEY_ID", nullable=false)
  private long surveyId;
  private Date surveyDate;
  private String firstName;
  private String lastName;
  private String street;

  public Survey() { }



}
