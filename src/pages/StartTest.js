import React, { useState, useEffect, useCallback } from 'react';
import CustomButton from '../components/CustomButton';
import CustomDialog from '../components/Dialog';
import { QUESTIONS_BY_SUBJECT } from '../data/questions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const StartTest = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // Timer set 

  const questions = QUESTIONS_BY_SUBJECT[user.subject];

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const nextQuestion = useCallback(() => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 2);
    } else {
      setScore((prevScore) => prevScore - 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer('');
      setTimeLeft(30); // Reset the timer for the next question
    } else {
      setShowDialog(true);
    }
  }, [selectedAnswer, questions, currentQuestion]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft, nextQuestion]);

  const handleCloseDialog = () => {
    localStorage.setItem('score', score);
    window.location.href = '/greeting';
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {questions[currentQuestion].question}
      </Typography>
      <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            value={answer}
            control={<Radio />}
            label={answer}
          />
        ))}
      </RadioGroup>
      <Typography variant="body1" gutterBottom>
        Time left: {timeLeft} seconds
      </Typography>
      <CustomButton onClick={nextQuestion} style={{ marginTop: '16px', backgroundColor: 'red', color: 'white' }}>
        Next
      </CustomButton>
      <CustomDialog
        open={showDialog}
        onClose={handleCloseDialog}
        title="Quiz Completed"
        onConfirm={handleCloseDialog}
      >
        <p>{`Your final score is ${score}`}</p>
      </CustomDialog>
    </Box>
  );
};

export default StartTest;
