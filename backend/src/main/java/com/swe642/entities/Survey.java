package com.swe642.entities;

import jakarta.persistence.*;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.Date;

import com.swe642.enums.Enums;

@Entity
@Table(name = "SURVEY")
public class Survey implements java.io.Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "SURVEY_ID", nullable=false)
  private long surveyId;

  @Column(name = "TIME_CREATED", nullable = false)
  private long timeCreated;

  @Column(name = "SURVEY_DATE" , nullable=false)
  private Date surveyDate;

  @Column(name = "FIRST_NAME" , nullable=false)
  private String firstName;

  @Column(name = "LAST_NAME" , nullable=false)
  private String lastName;

  @Column(name = "STREET" , nullable=false)
  private String street;

  @Column(name = "ZIP" , nullable=false)
  private String zip;

  @Column(name = "CITY" , nullable=false)
  private String city;

  @Column(name = "STATE" , nullable=false)
  private String state;

  @Column(name = "PHONE_NUMBER" , nullable=false)
  private String phoneNumber;

  @Column(name = "EMAIL" , nullable=false)
  private String email;

  @Enumerated(EnumType.STRING)
  @Column(name = "CAMPUS_LIKE_CHOICE" , nullable=false)
  private Enums.CampusLikeChoice campusLikeChoice;

  @Enumerated(EnumType.STRING)
  @Column(name = "UNIVERSITY_INTEREST_CHOICE")
  private Enums.UniversityInterestChoice universityInterestChoice;

  @Column(name = "GRAD_MONTH" , nullable=false)
  private String gradMonth;

  @Column(name = "GRAD_YEAR" , nullable=false)
  private String gradYear;

  @Column(name = "COMMENT" , nullable=false)
  private String comment;

  public long getSurveyId() {
    return surveyId;
  }

  public long getTimeCreated() {
    return timeCreated;
  }

  public Date getSurveyDate() {
    return surveyDate;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getStreet() {
    return street;
  }

  public String getZip() {
    return zip;
  }

  public String getCity() {
    return city;
  }

  public String getState() {
    return state;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public String getEmail() {
    return email;
  }

  public Enums.CampusLikeChoice getCampusLikeChoice() {
    return campusLikeChoice;
  }

  public Enums.UniversityInterestChoice getUniversityInterestChoice() {
    return universityInterestChoice;
  }

  public String getGradMonth() {
    return gradMonth;
  }

  public String getGradYear() {
    return gradYear;
  }

  public String getComment() {
    return comment;
  }

  public void setSurveyId(long surveyId) {
    this.surveyId = surveyId;
  }

  public void setTimeCreated(long timeCreated) {
    this.timeCreated = timeCreated;
  }

  public void setSurveyDate(Date surveyDate) {
    this.surveyDate = surveyDate;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public void setZip(String zip) {
    this.zip = zip;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public void setState(String state) {
    this.state = state;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setCampusLikeChoice(Enums.CampusLikeChoice campusLikeChoice) {
    this.campusLikeChoice = campusLikeChoice;
  }

  public void setUniversityInterestChoice(Enums.UniversityInterestChoice universityInterestChoice) {
    this.universityInterestChoice = universityInterestChoice;
  }

  public void setGradMonth(String gradMonth) {
    this.gradMonth = gradMonth;
  }

  public void setGradYear(String gradYear) {
    this.gradYear = gradYear;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public Survey() {}

  public Survey(Date surveyDate, String firstName, String lastName, String street, String zip, String city, String state, String phoneNumber, String email, Enums.CampusLikeChoice campusLikeChoice, Enums.UniversityInterestChoice universityInterestChoice, String gradMonth, String gradYear, String comment) {

    this.timeCreated = Instant.now().getEpochSecond();
    this.surveyDate = surveyDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.campusLikeChoice = campusLikeChoice;
    this.universityInterestChoice = universityInterestChoice;
    this.gradMonth = gradMonth;
    this.gradYear = gradYear;
    this.comment = comment;
  }
}
