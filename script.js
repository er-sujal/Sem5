function calculatePercentage() {
    
    var marks1 = parseInt(document.getElementById("marks1").value);
    marks1=Math.abs(marks1);
    var marks2 = parseInt(document.getElementById("marks2").value);
    marks2=Math.abs(marks2);

    // Validate input values
    // if (marks1 > 30) {
    //     alert("Marks (out of 30) should not be more than 30.");
    //     if(marks1 <-1){
    //         alert("Marks (out of 30) should not be less than 30.");
    //     }
    //     return;
    // }

    // if (marks2 > 30 && marks2 <-1) {
    //     alert("Marks (out of 30) should not be more than 30.");
    //     if(marks2 <-1){
    //         alert("Marks (out of 30) should not be less than 30.");
    //     }
    //     return;
    // }

    // Calculate percentage
    var percentage = (((marks1 + marks2)/2)*40) / 30;
    var pfinal = (40-percentage)
    

    // Display result
    document.getElementById("percentage").innerHTML = "Remaining marks is " + ": " + pfinal;
    document.getElementById("pp").innerHTML = "Marks you got is " + ": " + percentage;
}
