
var timer1 = false; 
var counterclick1 = 0; 
const click1 = document.getElementById("myButton").addEventListener("click", function() 
{
    
    if (!timer1) 
    {

        timer1 = true; 
        var counter1 = 0;

        var interval1 = setInterval(function() 
        {
            counter1++;
            console.log(counter1);

            if (counter1 === 15) {
                clearInterval(interval1); 
                alert("Time's up"); 
                timer1 = false;
                counterclick1 = 0;
            }
        }, 1000);

    }

    if (timer1) 
    {
        counterclick1++;
        document.getElementsByClassName("number")[0].innerText = counterclick1;
    }

});



var timer2 = false; 
var counterclick2 = 0; 
// при нажатии на кнопку срабатывает обработчик события и выполняется при каждом клике код внутир
const click2 = document.getElementById("myButton2").addEventListener("click", function() 
{
    // поскольку timer2 = false выполняем этот код и внутри присваемваем timer2 = true; и тзза этого блок иф срабатывает тоько один раз до его окончания , где на 15 секунде снова рисваеваем false
    if (!timer2) 
    {

        timer2 = true; // Устанавливаем timer2 в true, чтобы заблокировать повторное выполнение кода
        var counter2 = 0;

        var interval2 = setInterval(function() 
        {
            counter2++;
            console.log(counter2);

            if (counter2 === 10) {
                clearInterval(interval2); 
                alert("Time's up"); 
                timer2 = false;
                counterclick2 = 0;
            }
        }, 1000);

    }
    //поскольку timer2 = true; (доступен только на 15 секунд) мы выполняем этот блок кода пока не наступит 15 сек и timer2 = false; 
    if (timer2) 
    {
        counterclick2++;
        document.getElementsByClassName("number")[0].innerText = counterclick2;
    }

});



var timer3 = false; 
var counterclick3 = 0; 
const click3 = document.getElementById("myButton3").addEventListener("click", function() 
{
    
    if (!timer3) 
    {

        timer3 = true; 
        var counter3 = 0;

        var interval3 = setInterval(function() 
        {
            counter3++;
            console.log(counter3);

            if (counter3 === 5) {
                clearInterval(interval3); 
                alert("Time's up"); 
                timer3 = false;
                counterclick3 = 0;
            }
        }, 1000);

    }

    if (timer3) 
    {
        counterclick3++;
        document.getElementsByClassName("number")[0].innerText = counterclick3;
    }

});


















