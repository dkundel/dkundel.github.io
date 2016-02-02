jQuery(function() {
  let animationTime = 600;
  let offsetTop = -59;
  
  $.extend($.scrollTo.defaults, {
    axis: 'y',
    offset: {top: offsetTop},
    duration: animationTime
  });
  
  if (location.hash.length !== 0) {
    $.scrollTo(location.hash);
  }
  
  $('a').each(function () {
    let $link = $(this);
    if ($link.attr('href') && $link.attr('href')[0] === '#') {
      $link.click((event) => {
        $('#stickyHeader').removeClass('affix-top').addClass('affix');
        $.scrollTo($link.attr('href'), {
          onAfter: function () {
            $('#stickyHeader').affix('checkPosition')
          }
        });
        event.preventDefault();
        $link.blur();
      });
    }
  });
  
  $('header').click(function() {
    $('#stickyHeader').removeClass('affix-top').addClass('affix');
    $.scrollTo('#about', {
      onAfter: function () {
        $('#stickyHeader').affix('checkPosition')
      }
    });
  });
  
  $('#stickyHeader').affix({
    offset: {
      top: 0
    }
  });
  
  $('#contactForm').submit(function(event) {
    var email = 'ZG9taW5pay5rdW5kZWxAZ21haWwuY29t';
    var formSubmissionUrl = `//formspree.io/${atob(email)}`;
    var name = $('#nameInput').val();
    
    $.ajax({
      url: formSubmissionUrl,
      method: 'POST',
      data: {
        'email': $('#emailInput').val(),
        'message': $('#messageInput').val(),
        '_subject': `Contact email from: ${name}`
      },
      dataType: 'json'
    }).success(function() {
      $('#formContainer').hide();
      $('#contactThankYou').show();
    }).error(function(error) {
      
    });
    event.preventDefault();
  });
});