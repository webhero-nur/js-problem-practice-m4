function gradeCalculate(marks) {
    let grade = '';
    if (marks < 50) {
        grade = 'F';
    }
    else if (marks >= 50 && marks < 60) {
        grade = 'D';
    }
    else if (marks >= 60 && marks < 70) {
        grade = 'C';
    }
    else if (marks >= 70 && marks < 80) {
        grade = 'B';
    }
    else if (marks >= 80 && marks < 90) {
        grade = 'A';
    }
    else if (marks >= 90) {
        grade = 'A+';
    }

    return grade;
}

const marksAlia = 95;
const marksDalia = 66;
const marksSalia = 80;
const marksMalia = 59;
const marksLilia = 47;
const marksJalia = 77;

const gradeAlia = gradeCalculate(marksAlia);
const gradeDalia = gradeCalculate(marksDalia);
const gradeSalia = gradeCalculate(marksSalia);
const gradeMalia = gradeCalculate(marksMalia);
const gradeLilia = gradeCalculate(marksLilia);
const gradeJalia = gradeCalculate(marksJalia);

console.log(gradeAlia);
console.log(gradeDalia);
console.log(gradeSalia);
console.log(gradeMalia);
console.log(gradeLilia);
console.log(gradeJalia);