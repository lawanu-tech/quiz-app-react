export const QUESTIONS_BY_SUBJECT = {
  Math: [
    { question: 'What is 2+2?', answers: ['3', '4', '5'], correct: '4' },
    { question: 'What is the square root of 16?', answers: ['3', '4', '5'], correct: '4' },
    { question: 'What is 10/2?', answers: ['3', '5', '6'], correct: '5' },
    { question: 'What is 3*3?', answers: ['6', '9', '12'], correct: '9' },
    { question: 'What is the value of pi (approx)?', answers: ['3.14', '2.17', '1.62'], correct: '3.14' },
  ],

  JavaScript: [
    { question: 'What is the use of the isNaN function?', answers: ['Check if a value is NaN', 'Check if a value is a number', 'Check if a value is null'], correct: 'Check if a value is NaN' },
    { question: 'Which company developed JavaScript?', answers: ['Netscape', 'Microsoft', 'Google'], correct: 'Netscape' },
    { question: 'Which symbol is used for comments in JavaScript?', answers: ['//', '<!-- -->', '/* /'], correct: '//' },
    { question: 'Which of the following is a JavaScript framework?', answers: ['Angular', 'Python', 'Django'], correct: 'Angular' },
    { question: 'What is the output of "console.log(typeof null)"?', answers: ['"null"', '"undefined"', '"object"'], correct: '"object"' },
  ],

  DSA: [
    { question: 'What is the time complexity of binary search?', answers: ['O(n)', 'O(log n)', 'O(n^2)'], correct: 'O(log n)' },
    { question: 'Which data structure uses LIFO?', answers: ['Queue', 'Stack', 'Linked List'], correct: 'Stack' },
    { question: 'What is the best case time complexity of quicksort?', answers: ['O(n)', 'O(n log n)', 'O(n^2)'], correct: 'O(n log n)' },
    { question: 'Which of the following is not a stable sorting algorithm?', answers: ['Merge Sort', 'Bubble Sort', 'Quick Sort'], correct: 'Quick Sort' },
    { question: 'Which data structure uses FIFO?', answers: ['Queue', 'Stack', 'Tree'], correct: 'Queue' },
  ]
};
  