//challenge 1

function ageInDays()
{
    var birthYear = prompt("what year did you born?");
    var ageInDayss=(2022-birthYear) *365;
    var h1 =  document.createElement('h1');
    var textAnswer =document.createTextNode('you are ' + ageInDayss  + ' days old');
    h1.setAttribute('id', 'ageinDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageinDays').remove();
}


