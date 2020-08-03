// function myFunction() {
//     setInterval(function () {
//         $.ajax({
//             url: '{% url 'test' %}',
//             data: {
//                 'user_id': {{ user.id }}
//             },
//             dataType: 'json',
//             success: function (data) {
//                 $html = '';
//                 $.each(data.my_contifications, function (index, value) {
//                     $html += '<a>' + value.title + '</a>'
//                 });
//                 $('#data-notification').empty();
//                 $('#data-notification').append($html)
//             }
//         }, 10000);
//     });
// }
//
// myFunction();