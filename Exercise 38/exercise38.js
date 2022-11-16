// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive. If the examination is "Final-exam" the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

const checkGrade = function (mark, typeExam) {
  if ((mark >= 90 && typeExam == 'Final-exam') || (mark >= 89 && mark <= 100)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkGrade(92, 'Final-exam'));
console.log(checkGrade(85, 'Final-exam'));
console.log(checkGrade(120, 'Final-exam'));
console.log(checkGrade(90));
console.log(checkGrade(75));
