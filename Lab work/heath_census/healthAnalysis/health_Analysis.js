const addPatientBtn = document.getElementById('addPatient');
const report = document.getElementById("report");
const srchButton = document.getElementById("btnSearch");
const patients = [];

function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const conditions = document.getElementById("condition").value;

    if (name && gender && age && conditions) {
        patients.push({ name, age, gender: gender.value, conditions });
        generateReport();
        resetForm();
    }
}

function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
    };

    for (const patient of patients) {
        conditionsCount[patient.conditions]++;
        genderConditionsCount[patient.gender][patient.conditions]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }
    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}

addPatientBtn.addEventListener("click", addPatient);

// Add search functionality
srchButton.addEventListener("click", () => {
    const conditionInput = document.getElementById("conditionInput").value.trim();
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";

    if (conditionInput) {
        const matchedCondition = conditions.find(cond => cond.name.toLowerCase() === conditionInput.toLowerCase());
        if (matchedCondition) {
            resultDiv.innerHTML = `
                <h2>${matchedCondition.name}</h2>
                <img src="${matchedCondition.imagesrc}" alt="${matchedCondition.name}">
                <h3>Symptoms:</h3>
                <ul>${matchedCondition.symptoms.map(symptom => `<li>${symptom}</li>`).join("")}</ul>
                <h3>Prevention:</h3>
                <ul>${matchedCondition.prevention.map(prevent => `<li>${prevent}</li>`).join("")}</ul>
                <h3>Treatment:</h3>
                <p>${matchedCondition.treatment}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>No condition found with the name "${conditionInput}".</p>`;
        }
    } else {
        resultDiv.innerHTML = `<p>Please enter a condition to search.</p>`;
    }
});