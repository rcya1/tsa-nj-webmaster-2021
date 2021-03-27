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
        
    }
};

function updateDoctorSelect(doctorSelect, service) {
    var newOptions = serviceData[service];
    
    doctorSelect.empty();
    $.each(newOptions, function(key, value) {
        doctorSelect.append($("<option></option>").attr("value", value).text(key));
    });
}

$(function() {
    $("#date-picker").datepicker();
    
    var serviceSelect = $("#service-select");
    var doctorSelect = $("#doctor-select");

    updateDoctorSelect(doctorSelect, serviceSelect.val());
    serviceSelect.on("change", function(e) {
        updateDoctorSelect(doctorSelect, serviceSelect.val());
    });

})
