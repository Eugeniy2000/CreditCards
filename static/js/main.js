$(".header-burger").click(function(){
    $(this).toggleClass("header-burger--active");
    $(".header-nav__list").toggleClass("header-nav__list--active");
    $("body").toggleClass("lock")
});

$(".header-nav__item").click(function(){
    $(this).toggleClass("header-nav__item--active");
    $(this).find(".header-nav__sublist").slideToggle();
});

$(".tabs__item").click(function(){
    $(".tabs__item").removeClass("tabs__item--active");
    $(this).toggleClass("tabs__item--active");
});

$(".info__item").click(function(){
    $(this).find(".info__name").toggleClass("info__name--active");
    $(this).find(".info__text").slideToggle();
});

var formValidate = function(){
    $('form').each(function(){
      $(this).on("submit", function(){
        $(this).validate({
          rules: {
            //name присваевается инпуту
            name: "required",
            phone: "required",
            email: "required",
            textreq: "required",
          },
          messages: {
            name: "Введите конкретное имя",
            phone: "Введите конкретный номер",
            email: "Введите конкретный email",
            textreq: "Введите ваш текст",
          },
          errorPlacement: function (error, element){
            element.attr("placeholder", error[0].outerText);
          }
        });
        if ($(this).valid()) {
          alert("Форма успешно отправлена");
        }
        return false;
      })
    });
};

const ratingItems = document.querySelectorAll('.rating__item');
const ratingItemArray = Array.prototype.slice.call(ratingItems);

ratingItemArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);

$('.similar__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
        },
      ]
});

if ($(window).width() < 767) {
    $(".solutions__item").click(function(){
        $(this).toggleClass("solutions__item--active");
        $(this).find(".solutions__content").slideToggle();
    });
}

formValidate()