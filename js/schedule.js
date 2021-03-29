var serviceData = {
    "diet": {
        "Dr. Andrew Menendez": "Menendez",
        "Dr. Bob Dew": "Dew",
        "Dr. Patricia Fu": "Fu",
        "Dr. Tyler Brotski": "Brotski",
    },
    "counseling": {
        "Dr. Susan He": "He",
        "Dr. Bob Dew": "Dew",
        "Dr. Adam Smith": "Smith",
        "Dr. Tyler Brotski": "Brotski",
    },
    "remote": {
        "Dr. Susan He": "He",
        "Dr. Bob Dew": "Dew",
        "Dr. John Garcia": "Garcia",
    },
    "healthcare": {
        "Dr. Tyler Brotski": "Brotski",
        "Dr. John Garcia": "Garcia",
        "Dr. Adam Smith": "Smith"
    }
};

var doctorData = {
    "Menendez": {
        "days": [false, true, true, false, false, true, false],
        "time": ["9 AM", "11 AM", "1 PM", "4:30 PM"]
    },
    "Dew": {
        "days": [false, true, false, false, true, true, false],
        "time": ["10 AM", "11 AM", "1 PM", "4 PM"]
    },
    "Fu": {
        "days": [false, true, true, false, false, true, false],
        "time": ["9 AM", "12 PM", "1 PM", "4 PM"]
    },
    "He": {
        "days": [false, true, true, true, true, true, false],
        "time": ["9 AM", "10 AM", "1 PM", "5 PM"]
    },
    "Smith": {
        "days": [false, false, true, false, true, false, false],
        "time": ["11 AM", "11 AM", "1 PM", "4:30 PM"]
    },
    "Brotski": {
        "days": [false, false, true, false, false, true, false],
        "time": ["11 AM", "12 PM", "1 PM"]
    },
    "Garcia": {
        "days": [false, true, true, false, true, true, false],
        "time": ["10 AM", "11 AM", "1 PM", "4:30 PM"]
    },
};

function updateDoctorSelect(doctorSelect, service) {
    var newOptions = serviceData[service];
    
    doctorSelect.empty();
    $.each(newOptions, function(key, value) {
        doctorSelect.append($("<option></option>").attr("value", value).text(key));
    });
}

function updateCalendar(calendar, doctor) {
    calendar.datepicker("option", "beforeShowDay", function(date) {
        return [doctorData[doctor].days[date.getDay()], ""];
    });
}

function updateTimeSelect(timeSelect, doctor) {
    var newOptions = doctorData[doctor].time;

    timeSelect.empty();
    $.each(newOptions, function(index, value) {
        timeSelect.append($("<option></option>").attr("value", value).text(value));
    });
}

$(function() {
    var calendar = $("#date-picker");
    calendar.datepicker();
    
    var serviceSelect = $("#service-select");
    var doctorSelect  = $("#doctor-select");
    var timeSelect    = $("#time-select");

    updateDoctorSelect(doctorSelect, serviceSelect.val());
    updateTimeSelect(timeSelect, doctorSelect.val());
    updateCalendar(calendar, doctorSelect.val());
    serviceSelect.on("change", function(e) {
        updateDoctorSelect(doctorSelect, serviceSelect.val());
        updateTimeSelect(timeSelect, doctorSelect.val());
        updateCalendar(calendar, doctorSelect.val());
    });
    doctorSelect.on("change", function(e) {
        updateTimeSelect(timeSelect, doctorSelect.val());
        updateCalendar(calendar, doctorSelect.val());
    });

    var scheduleButton = $("#schedule-button");
    scheduleButton.on("click", function(e) {
        let selectedDate = calendar.datepicker("getDate");
        let dateString = (selectedDate.getMonth() + 1) + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();

        if(doctorData[doctorSelect.val()].days[selectedDate.getDay()] == 1) {
            alert("You have scheduled an appointment with Dr. " + doctorSelect.val() + " at " + 
                timeSelect.val() + " on " + dateString);
        }
        else {
            alert("The currently selected date is not valid!");
        }
    });
})
