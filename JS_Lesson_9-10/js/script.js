$(function() {
/*=========== Карусель =================*/
    $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь
        wrap: 'circular',
      offset: 1
  });

//Кнопка PREV
    $('.jcarousel-prev')
      .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
      .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
      .jcarouselControl({
      target: '-=1'
  });

    
// Кнопка NEXT
    $('.jcarousel-next')
      .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
      .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
      .jcarouselControl({
      target: '+=1'
  });

    
// Пагинация слайдера
    $('.jcarousel-pagination')
        .jcarouselPagination({
            item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
            }
        })
        .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });
    
    var classSlide = $('.jcarousel-pagination > a');
    var firstSlide = classSlide[0];
    firstSlide.classList.add('active');

    
// Автопрокрутка слайдера
    $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });
    
 /*=========== Конец Карусели =================*/   
    
/*=============== SELECT ==============*/
    $('.dropbox_bar').selectBox();
/*=============== END SELECT ==============*/
    
/*============== Checkbox jQuery ===========*/    
jQuery(document).ready(function(){

jQuery(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });


function changeCheck(el)
/* 
	функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
	el - span контейнер для обычного чекбокса
	input - чекбокс
*/
{

	var el = el,
		input = el.find("input").eq(0);
		  
	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
	{	
   		if(!input.attr("checked")) {
			el.addClass("niceChecked");
			input.attr("checked", true);
		} else {
			el.removeClass("niceChecked");
			input.attr("checked", false).focus();
		}
	}
	
    return true;
}

function changeVisualCheck(input)
{
/*
	меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
	if(!input.attr("checked")) {
		wrapInput.removeClass("niceChecked");
	}
	else
	{
		wrapInput.addClass("niceChecked");
	}
}

function changeCheckStart(el)
/* 
	новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
	новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{

try
{
var el = el,
	checkName = el.attr("name"),
	checkId = el.attr("id"),
	checkChecked = el.attr("checked"),
	checkDisabled = el.attr("disabled"),
	checkValue = el.attr("value");
	checkTab = el.attr("tabindex");
	if(checkChecked)
		el.after("<span class='niceCheck niceChecked'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
	else
		el.after("<span class='niceCheck'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
	
	/* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */		
	if(checkDisabled)
	{
		el.next().addClass("niceCheckDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}
	
	/* цепляем обработчики стилизированным checkbox */		
	el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });	
	}
	el.remove();
}
catch(e)
{
	// если ошибка, ничего не делаем
}

    return true;
}

    
/*============== END Checkbox jQuery ===========*/    
});//END FUNCTION