$(function() {
    $ ('#addHome').removeClass('btn-danger').addClass('btn-success');
    // $ ('#header').addClass('text-center');

    var newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    // var zilLink = $('<a href="http://www.zillow.com"<a>');

    newLink.insertAfter($('#header'));
    // $('body').append(newLink);

    $('#addSite').on('click', function($event) {
      window.location.href ="http://www.zillow.com";
      console.log(this);
    });
    $('#addHome').click(function($event) {
    var home = newHomes.pop();

    var $homeTr = $(
      `
      <tr>
        <td>$()</td>
        <td>${home.sf}</td>
        <td>${home.bedrooms}</td>
        <td>${home.baths}</td>
        <td>${home.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
      `
    );

    $homeTr.appendTo('tbody');
  })

    var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];

    $('#homes tbody').on('click', 'tr', function($event) {
      alert('Your are about to delete this');
      $(this).fadeOut(1000, function() {
        $(this).remove();
    });
// }
//       $(this).remove();
      // $rowThatWasClicked.remove();
      // console.log(this);
    });


});
