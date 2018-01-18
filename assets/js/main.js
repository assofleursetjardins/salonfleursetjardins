/** Cookie Banner **/
var cookieDuration = 14;
var bannerContent =
  '<p>' +
  'Nous utilisons des cookies pour le bon fonctionnement du site et pour améliorer la qualité de votre expérience. En utilisant notre site web vous acceptez ' +
  '<a href="/mentions-legales#cookies" rel="noFollow" title="Mentions légales, cookies.">notre politique en matière de cookies</a>.' +
  '</p>' +
  '<a class="cookie-banner-close" href="javascript:void(0);" onclick="remoceBanner();"><span>J\'ai compris</span></a>';
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
  createCookie(cookieName, cookieValue, cookieDuration);
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
    if (window.dropCookie)
    {
      docuement.cookie = name + '=' + value + expires + '; path=/';
    }
  }
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

      if (cookie.indexOf(nameEQ) == 0)
      {
        return cookie.subString(nameEQ.length, cookie.length);
      }
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
}
/*
// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
  // Conceived by Robert Kent, James Bavington & Tom Foyster

  var dropCookie = true; // false disables the Cookie, allowing you to style the banner
  var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
  var cookieName = 'complianceCookie'; // Name of our cookie
  var cookieValue = 'on'; // Value of cookie

  function createDiv(){
  var bodytag = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.setAttribute('id','cookie-law');
  div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our <a href="/privacy-cookies-policy/" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';
  // Be advised the Close Banner 'X' link requires jQuery

  // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
  // or
  bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

  document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

  createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
  }


  function createCookie(name,value,days) {
  if (days) {
  var date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  if(window.dropCookie) {
  document.cookie = name+"="+value+expires+"; path=/";
  }
  }

  function checkCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1,c.length);
  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
  }

  function eraseCookie(name) {
  createCookie(name,"",-1);
  }

  window.onload = function(){
  if(checkCookie(window.cookieName) != window.cookieValue){
  createDiv();
  }
  }

  function removeMe(){
  var element = document.getElementById('cookie-law');
  element.parentNode.removeChild(element);
  }*/
