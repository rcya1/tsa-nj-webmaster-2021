var serviceData = {
    "diet": {
        "Dr. Andrew Menendez": "menendez",
        "Dr. Bob Dew": "dew",
        "Dr. Patricia Fu": "fu",
        "Dr. Tyler Brotski": "brotski",
    },
    "counseling": {
        "Dr. Susan He": "he",
        "Dr. Bob Dew": "dew",
        "Dr. Adam Smith": "smith",
        "Dr. Tyler Brotski": "brotski",
    },
    "remote": {
        "Dr. Susan He": "he",
        "Dr. Bob Dew": "dew",
        "Dr. John Garcia": "garcia",
    },
    "healthcare": {
        "Dr. Tyler Brotski": "brotski",
        "Dr. John Garcia": "garcia",
        "Dr. Adam Smith": "smith"
    }
};

var doctorData = {
    "menendez": {
        "days": [false, true, true, false, false, true, false],
        "time": ["9 AM", "11 AM", "1 PM", "4:30 PM"]
    },
    "dew": {
        "days": [false, true, false, false, true, true, false],
        "time": ["10 AM", "11 AM", "1 PM", "4 PM"]
    },
    "fu": {
        "days": [false, true, true, false, false, true, false],
        "time": ["9 AM", "12 PM", "1 PM", "4 PM"]
    },
    "he": {
        "days": [false, true, true, true, true, true, false],
        "time": ["9 AM", "10 AM", "1 PM", "5 PM"]
    },
    "smith": {
        "days": [false, false, true, false, true, false, false],
        "time": ["11 AM", "11 AM", "1 PM", "4:30 PM"]
    },
    "brotski": {
        "days": [false, false, true, false, false, true, false],
        "time": ["11 AM", "12 PM", "1 PM"]
    },
    "garcia": {
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
    console.log(calendar);
}

function updateTimeSelect(timeSelect, doctor) {
    var newOptions = doctorData[doctor].time;

    timeSelect.empty();
    $.each(newOptions, function(index, value) {
        timeSelect.append($("<option></option>").attr("value", index).text(value));
    });
}

$(function() {
    var calendar = $("#date-picker").datepicker();
    
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
})
