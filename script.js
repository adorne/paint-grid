var nDivs = 100;

$(document).ready(function() {
  var containerHeight = 500; // высота контейнера
  var containerWidth = containerHeight; // ширина контейнера
  $('.container').height(containerHeight);
  $('.container').width(containerWidth);

  console.log(".container height is " + containerHeight);
  console.log(".container width is " + containerWidth);

  function newGrid(n) {
    var nRowDivs = Math.sqrt(n); // количество строк квадратов
    var innerDivWidth = containerWidth / nRowDivs; // ширина квадратов
    var innerDivHeight = innerDivWidth; // высота квадратов

    for (var rows = 1; rows <= nRowDivs; rows++) {
      for (var i = 1; i <= nRowDivs; i++) {
        $('.container').append('<div class="innerDiv"></div>');
        $('.innerDiv').css("height", innerDivHeight + "px");
        $('.innerDiv').css("width", innerDivWidth + "px");
      } // располагаем ячейки по i штук в ряд

      $('.container').append('</br>'); // добавляем перенос после каждой строки
    };
  }

  newGrid(nDivs);

  $('button[name=reset-grid]').click(function() {
    $('.container > div').css("background-color", innerDivColor);
  }); // возвращаем изначальный цвет ячеек

  $('button[name=new-grid]').click(function(){
    var nDivsButton = $('input[name=nDivs]:checked').val();
    $('.container > div, .container > br').remove();
    newGrid(nDivsButton);
    changeColor();
  }); // создаём новую сетку

    var innerDivColor = "white"; // начальный цвет ячейки
    var innerDivColorNew = "black"; // новый цвет ячейки при наведении

    function changeColor() {
      $('.innerDiv').hover(function() {
        $(this).css("background-color", innerDivColorNew);
      }
    )}; // меняем цвет ячейки при наведении

    changeColor();

})
