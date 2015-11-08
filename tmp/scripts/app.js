'use strict';

jQuery(function () {
  $('#contactForm').submit(function (event) {
    var email = 'ZG9taW5pay5rdW5kZWxAZ21haWwuY29t';
    var formSubmissionUrl = '//formspree.io/' + atob(email);
    var name = $('#nameInput').val();

    $.ajax({
      url: formSubmissionUrl,
      method: 'POST',
      data: {
        'email': $('#emailInput').val(),
        'message': $('#messageInput').val(),
        '_subject': 'Contact email from: ' + name
      },
      dataType: 'json'
    }).success(function () {
      $('#formContainer').hide();
      $('#contactThankYou').show();
    }).error(function (error) {});
    event.preventDefault();
  });
});
//# sourceMappingURL=app.js.map
