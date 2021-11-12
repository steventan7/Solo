
    //1st question

    var number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        document.getElementById("question1").innerHTML = "How are you?";
    } else if (number == 2) {
        document.getElementById("question1").innerHTML = "How are you doing?";
    } else {
        document.getElementById("question1").innerHTML = "How's it going?";
    }

    // 2nd and third question

    var input = document.getElementById("input1")
    input.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("question2").style.visibility = "visible";
        document.getElementById("feeling").style.visibility = "visible";
      }
    });

    // 3rd and 4th question

    const select = document.querySelector('#feeling');
    const feeling = document.querySelector('#question3');
    const invite = document.querySelector('#statement');
    const response = document.querySelector('#question4')

    select.addEventListener('change', setConvo1);


    function setConvo1() {
      const choice = select.value;

      if (choice === '1' || choice === '2' || choice === '3') {
        feeling.textContent = 'I\'m sorry you feel that way';
        invite.textContent = 'Is there anything you want to talk about?';
        response.textContent = 'I see.';
        document.getElementById("input2").style.visibility = "visible";
      } else if (choice === '4' || choice === '5' || choice === '6') {
        feeling.textContent = 'It\'s fine if wasn\'t perfect.';
        invite.textContent = 'Not everyday will be a good day. ';
        response.textContent = 'Yesterday is history. Tomorrow is a mystery. Today is a gift.';
        document.getElementById("input2").style.visibility = "visible";
      } else if (choice === '7' || choice === '8') {
        feeling.textContent = 'That\'s nice to hear.';
        invite.textContent = 'What could have made this day better?';
        response.textContent = 'Yeah, sometimes that happens.';
        document.getElementById("input2").style.visibility = "visible";
      } else {
        feeling.textContent = 'That\'s great to hear!';
        invite.textContent = 'Hope you enjoyed today! What\'d you do?';
        response.textContent = 'That sounds really nice!';
        document.getElementById("input2").style.visibility = "visible";
      }
    }

    var input = document.getElementById("input2")
    input.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("question4").style.visibility = "visible";
        document.getElementById("question5").style.visibility = "visible";
        document.getElementById("moveToCalendar").style.visibility = "visible";
        document.getElementById("sayingNo").style.visibility = "visible";
      }
    });

    // question 6

    var responseNo = document.getElementById("sayingNo");
    responseNo.addEventListener('click', function() {
        document.getElementById("question6").style.visibility = "visible";
        document.getElementById("exit").style.visibility = "visible";
    });


