const student = {
    name : "Daisy",
    age : 20,
    sgpa : 9.32,
    city : "Coimbatore"
};

let internship_application = {
    company_name : "Adobe",
    position : "Research Intern",
    applied_data : "29.01.2026"
};

console.log(student);
console.log(internship_application);
console.log(internship_application["company_name"]);
console.log(internship_application.position);

student.name = "Daisy Panimariyal J";
student.state = "Tamil Nadu";
console.log(student)


// object of objects
const classInfo = {
    daisy : {
        dept : "EEE"
    },
    abinaya : {
        dept : "AIML"
    }
};

// Arrays of objects

const classInfoArr = [
    {
        name : "daisy"
    },
    {
        name : "abinaya"
    },
    {
        name : "niranjana"
    }
];

console.log(classInfoArr[1].name);