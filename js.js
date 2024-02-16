/* The code is using jQuery to add event listeners to various elements on the page. When the document
is ready, the code sets up click event handlers for the first four list items. */

/* The code you provided is using jQuery to add event listeners to various elements on the page.
Specifically, it is using the `$(document).ready()` function to ensure that the code inside it is
executed only after the DOM has finished loading. */

$(document).ready(function () {
    $('li:nth-child(1)').on('click', function () {
        $('.main').css('display', 'none')
        $(".first").show(1000)
        $('.second, .third, .forth').css('display', 'none');
        $('img').click(function () {
            console.log('alt-pic is', $(this).attr('alt-pic'));
        });
    })
    $('li:nth-child(2)').on('click', function () {
        $('.main').css('display', 'none')
        $('.second').fadeIn(1000)
        $('.first, .third, .forth').css('display', 'none');
    })
    $('li:nth-child(3)').on('click', function () {
        $('.main').css('display', 'none')
        $('.third').fadeIn(1000)
        $('.first, .second, .forth').css('display', 'none');
    })
    $('li:nth-child(4)').on('click', function () {
        $('.main').css('display', 'none')
        $('.forth').fadeIn(1000)
        $('.first, .second, .third').css('display', 'none');
        $('form').addClass('logIn')
        $('form div input').attr('class', 'sub')

/* The code you provided is adding event handlers to the input fields of type "text" and "password"
within an element with the class "forth". */
        $('.forth input[type="text"]').on('input', function (e) {
            let x = $(this).val()
            if (x.length > 8) {
                $('.forth .unvaildUser').text('UNVAILD');
            }
        })
        $('.forth input[type="password"]').on('input', function (e) {
            let x = $(this).val()
            if (x.length > 8) {
                $('.forth .unvaildPass').text('ERRROR');
            }
        })
    })
 /* The code is adding a click event handler to the element with the id "image". When this element is
 clicked, the code checks the value of its "src" attribute. If the value is
 "503181_pastedImage_2.png", it changes the "src" attribute to "nTGMV1Eo_400x400.jpg". It then
 slides up and down the element with the class "about", changes the text of the element with the
 class "titel" to "William Henry Gates III", and changes the text of the element with the class
 "description" to a description of William Henry Gates III. */
    $("#image").click(function () {
        if ($(this).attr("src") == "503181_pastedImage_2.png") {
            $(this).attr("src", "nTGMV1Eo_400x400.jpg");
            $('.about').slideUp(1)
            $('.about').slideDown(1000)
            $('.titel').text('William Henry Gates III');
            $('.description').text('is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft,along with his childhood friend Paul Allen.');


        } else {
            $(this).attr("src", "503181_pastedImage_2.png");
            $('.about').slideUp(1)
            $('.about').slideDown(1000)
            $('.titel').text('Alan Turing');
            $('.description').text('British mathematician and logician who made major contributions to mathematics, cryptanalysis, logic, philosophy, and mathematical biology and also to the new areas later named computer science, cognitive science');
        }
    });
});