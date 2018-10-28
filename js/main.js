
  var slider = document.getElementById("myRange");
  var output;

  slider.oninput = function() {
    output = slider.value;


    if(output <= 25){
      document.getElementById("work").innerHTML = "Ad Dealer, Jakelusuora Oy (Kouvola)";
      document.getElementById("description").innerHTML = "My job included distributing advertisements, newsletters, magazines, and product samples to every home within a distribution network during required time.";
      document.getElementById("year").innerHTML = "07.2017 – 08.2017";
      document.getElementById("imageid").src= "./img/job1.png";
    }else if(output >25 && output <=50){
      document.getElementById("work").innerHTML = "Waiter and Cashier, Huahin Thai restaurant (Kouvola)";
      document.getElementById("description").innerHTML = "I worked as a waiter and cashier at Huahin Thai restaurant. The work has provided me with a lot of new and useful experiences and outlooks when doing service-oriented tasks.";
      document.getElementById("year").innerHTML = "06.2017 – 08.2017";      
      document.getElementById("imageid").src= "./img/job2.png";

    }else if(output>50 && output <=75){
      document.getElementById("work").innerHTML = "Fruits Picker, Tyrvännön Marja ja Vihannes (Tyrväntö)";
      document.getElementById("description").innerHTML = "My main tasks were berries picking and labelling. The work has not only cultivated my punctuality and commitment skills, but also given me the opportunities to truly experience the work environment as a full-time employee.";
      document.getElementById("year").innerHTML = "06.2018 – 08.2018";  
      document.getElementById("imageid").src= "./img/job3.png"

    }else{
      document.getElementById("work").innerHTML = "Freelancer (Kouvola)";
      document.getElementById("year").innerHTML = "09.2018 – Now";  
      document.getElementById("description").innerHTML = "I am currently a freelancer who is learning to code. Although I haven't had many prior experiences in regards to web-developing category, I am always willing to learn and hone my skills even further, even in whatever position I am given.";
      document.getElementById("imageid").src= "./img/job4.png"

    }

  }