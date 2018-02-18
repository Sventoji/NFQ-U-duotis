$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
  $('#pagination-demo').twbsPagination({
   totalPages: 4,
   startPage: 1,
   visiblePages: 3,
   initiateStartPageClick: true,
   href: false,
   hrefVariable: '{{number}}',
   first: 'Pirmas',
   prev: 'Atgal',
   next: 'Pirmyn',
   last: 'Paskutinis',
   loop: false,
   onPageClick: function (event, page) {
     $('.page-active').removeClass('page-active');
       $('#page'+page).addClass('page-active');
   },
  paginationClass: 'pagination',
  nextClass: 'next',
  prevClass: 'prev',
  lastClass: 'last',
  firstClass: 'first',
  pageClass: 'page',
  activeClass: 'active',
  disabledClass: 'disabled'
 });
});
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".class1").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(function () {
        $("#clas1").click(function () {
            if ($(this).is(":checked")) {
                $(".class1").show();
            } else {
                $(".class1").hide();
            }
        });
    });
$(function () {
        $("#clas2").click(function () {
            if ($(this).is(":checked")) {
                $(".class2").show();
            } else {
                $(".class2").hide();
            }
        });
    });
$(function () {
        $("#clas3").click(function () {
            if ($(this).is(":checked")) {
                $(".class3").show();
            } else {
                $(".class3").hide();
            }
        });
    });