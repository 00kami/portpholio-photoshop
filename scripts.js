jQuery('.header-humberger').on('click', function (e) {
    e.preventDefault();
  
    jQuery('.header-humberger').toggleClass('is-active');
    jQuery('.humbarger__contents').toggleClass('is-active');
  
    e.preventDefault();
  
    return false;
  });
  
  
