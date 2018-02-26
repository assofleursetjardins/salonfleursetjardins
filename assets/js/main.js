/**
 * Cookie Banner
 *
 * Inspiré par https://www.creare.co.uk/blog/js/js-eu-cookie-law-banner
 **/

var cookieDuration = 14;
var bannerContent =
  '<p>' +
  'Nous utilisons des cookies pour le bon fonctionnement du site et pour améliorer la qualité de votre expérience. En utilisant notre site web vous acceptez ' +
  '<a href="/mentions-legales#cookies" rel="noFollow" title="Mentions légales, cookies.">notre politique en matière de cookies</a>.' +
  '</p>' +
  '<a class="cookie-banner-close" href="javascript:void(0);" onclick="removeBanner();"><span>J\'ai compris</span></a>';
var bannerID = 'cookie-banner';
var bannerClass = 'cookie-banner';
var cookieName = 'bannerCookie';
var cookieValue = 'on';

function createBanner()
{
  var body = document.getElementsByTagName('body')[0];
  var banner = document.createElement('div');
  banner.setAttribute('id', bannerID);
  banner.setAttribute('class', bannerClass);
  banner.innerHTML = bannerContent;
  body.insertBefore(banner, body.firstChild);
}

function createCookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = '; expires=' + date.toGMTString();
  }
  else
  {
    expires = '';
  }

  document.cookie = name + '=' + value + expires + '; path=/';
}


function checkCookie(name)
{


  var nameEQ = name + '=';
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i ++)
  {
    var cookie = cookies[i];

    while (cookie.charAt(0) == ' ')
    {
      cookie = cookie.subString(1, cookie.length);
    }

    if (cookie.indexOf(nameEQ) == 0)
    {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }

  return null;
}

window.onload = function()
{

  if (checkCookie(cookieName) != cookieValue)
  {
    createBanner();
  }
}

function removeBanner()
{
  var element = document.getElementById(bannerID);
  element.parentNode.removeChild(element);
  createCookie(cookieName, cookieValue, cookieDuration);

}
