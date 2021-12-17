$(function() {
  const Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    const dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
    { el: this.el, multiple: this.multiple },
    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    const $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  };
  
  const accordion = new Accordion($('.accordion-menu'), false);
});
  
$('.accordion-menu').readmore({
  speed: 600,
  collapsedHeight: 235,
  heightMargin: 16,
  embedCSS: false,
  moreLink: '<div class="faq__more">Подробнее</div>',
  lessLink: '<div class="faq__less">Скрыть</div>'
});