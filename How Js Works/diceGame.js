var btn = document.getElementById("dice")

function myFunction()
{
    var value = Math.floor((Math.random() * 6) + 1);
    console.log(value);
    if (value == 1)
    {
        var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
        var no2 = document.getElementById("no2");
        no2.removeAttribute("class");
         var no3 = document.getElementById("no3");
        no3.removeAttribute("class");
         var no4 = document.getElementById("no4");
        no4.removeAttribute("class");
         var no5 = document.getElementById("no5");
        no5.removeAttribute("class");
        var no6 = document.getElementById("no6");
        no6.removeAttribute("class");

        
        
    }
    else if (value == 2)
    {
         var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
         var no2 = document.getElementById("no2");
        no2.setAttribute("class", "circle1");
         var no3 = document.getElementById("no3");
        no3.removeAttribute("class");
         var no4 = document.getElementById("no4");
        no4.removeAttribute("class");
         var no5 = document.getElementById("no5");
        no5.removeAttribute("class");
        var no6 = document.getElementById("no6");
        no6.removeAttribute("class");
    }
     else if (value == 3)
    {
        var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
         var no2 = document.getElementById("no2");
        no2.setAttribute("class", "circle1");
         var no3 = document.getElementById("no3");
        no3.setAttribute("class", "circle2");
           var no4 = document.getElementById("no4");
        no4.removeAttribute("class");
         var no5 = document.getElementById("no5");
        no5.removeAttribute("class");
        var no6 = document.getElementById("no6");
        no6.removeAttribute("class");

    }
     else if (value == 4)
    {
         var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
         var no2 = document.getElementById("no2");
        no2.setAttribute("class", "circle1");
          var no3 = document.getElementById("no3");
        no3.setAttribute("class", "circle2");
         var no4 = document.getElementById("no4");
        no4.setAttribute("class", "circle3");
         var no5 = document.getElementById("no5");
        no5.removeAttribute("class");
        var no6 = document.getElementById("no6");
        no6.removeAttribute("class");
    }
     else if (value == 5)
    {
         var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
         var no2 = document.getElementById("no2");
        no2.setAttribute("class", "circle1");
          var no3 = document.getElementById("no3");
        no3.setAttribute("class", "circle2");
        var no4 = document.getElementById("no4");
        no4.setAttribute("class", "circle3");
         var no5 = document.getElementById("no5");
        no5.setAttribute("class", "circle4");
         var no6 = document.getElementById("no6");
        no6.removeAttribute("class");
    }
     else if (value == 6)
    {
         var no6 = document.getElementById("no6");
        no6.setAttribute("class", "circle5");
        var no1 = document.getElementById("no1");
        no1.setAttribute("class", "circle");
         var no2 = document.getElementById("no2");
        no2.setAttribute("class", "circle1");
          var no3 = document.getElementById("no3");
        no3.setAttribute("class", "circle2");
        var no4 = document.getElementById("no4");
        no4.setAttribute("class", "circle3");
        var no5 = document.getElementById("no5");
        no5.setAttribute("class", "circle4");
        alert("Wow it's a SIX!")
        }
}