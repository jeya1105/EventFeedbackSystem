package com.jeya.eventfeedback.repository;

import com.jeya.eventfeedback.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}