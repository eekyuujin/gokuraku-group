function toSogoList (brand, area) {

  endpoint = `https://script.google.com/macros/s/AKfycbwYVXLGrkPdmRVfAkvTNMWb_4lYV3phBuUTk1cmIjJRQRWU17dfrfxQCHWuxqcywVc7MQ/exec?area=${area}&brand=${brand}`;

  param = getParam('link');

  const id_link_list = document.getElementById('link_list');

  fetch(endpoint)

    .then((res)=>{

      return( res.json() );

    })

    .then((json)=>{

      for(let i =0; i < json.length; i++) {

        id_link_list.insertAdjacentHTML('beforeend', json[i]);

      }

    });

}

function getParam(name, url) {

    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
