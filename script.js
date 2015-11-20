var nDivs = 256;

$(document).ready(function() {
  var containerHeight = 500; // высота контейнера
  var containerWidth = containerHeight; // ширина контейнера
  $('.container').height(containerHeight);
  $('.container').width(containerWidth);

  console.log(".container height is " + containerHeight);
  console.log(".container width is " + containerWidth);

  var nRowDivs = Math.sqrt(nDivs); // количество строк квадратов

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

  var innerDivColor = "white"; // начальный цвет ячейки
  var innerDivColorNew = "black"; // новый цвет ячейки при наведении
  //$('.innerDiv').css("background-color", innerDivColor);

  $('.innerDiv').hover(function() {
      $(this).css("background-color", innerDivColorNew);
    }
  );

  $('button').click(function() {
    $('.container > div').css("background-color", innerDivColor);
  });

})
