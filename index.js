const studentName = document.querySelector('#name');
const fatherName = document.getElementById("fatherName");
const motherName = document.getElementById("motherName");
const age = document.getElementById("age");
const btn = document.getElementById("btn");
const tableBody = document.getElementById("tableBody");




btn.addEventListener('click', function (event) {
    event.preventDefault();

    if ( studentName == "" && fatherName == "" && motherName =="" && age =="" ) {
            window.alert("Empty String is not Allowed")
    }
    else{
        const newRow = document.createElement('tr');
        tableBody.appendChild(newRow)

        const newStudentName = document.createElement('th');
        newStudentName.innerHTML = studentName.value;
        newRow.appendChild(newStudentName);
        

        const newMotherName = document.createElement('th');
        newMotherName.innerHTML = motherName.value;
        newRow.appendChild(newMotherName);
        
        const newFatherName = document.createElement('th');
        newFatherName.innerHTML = fatherName.value;
        newRow.appendChild(newFatherName);

        const newAge = document.createElement('th');
        newAge.innerHTML = age.value;
        newRow.appendChild(newAge);

    }

       
});