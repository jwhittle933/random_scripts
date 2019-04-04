/*
 * Philsophipotamus.com banner notification.
 */
(function() {
  const notificationWrapper = document.createElement('div');
  notificationWrapper.setAttribute(
    'style',
    'z-index: 1000000; background-color: #f6f6f6; border-left: 15px solid #FFFF94; position:absolute; top:65vh; left: 0; opacity: 0; height: 15vh; width: 50vw; transition: opacity 0.8s ease;'
  );
  notificationWrapper.setAttribute('id', 'alert');

  const notificationHeader = document.createElement('h2');
  notificationHeader.setAttribute(
    'style',
    'font-family: Bookman; font-size: 1.25em; opacity: 1; margin-left: 1vw;'
  );

  const notificationParagraph = document.createElement('p');
  notificationParagraph.setAttribute(
    'style',
    'font-family: Bookman; font-size: 1em; opacity: 1; margin-left: 1vw;'
  );

  let headerText = 'Note from the author:';
  let notice =
    'The philosophical material formerly available on this site has been appropriated for a book project and so no longer appears here. Fresh postings in this vein are forthcoming. Meanwhile, philosophipotamus.com will serve as a general blog space while markcoppenger.com is being built.';

  let ht = document.createTextNode(headerText);
  let pt = document.createTextNode(notice);

  notificationHeader.appendChild(ht);
  notificationParagraph.appendChild(pt);
  notificationWrapper.appendChild(notificationHeader);
  notificationWrapper.appendChild(notificationParagraph);

  const body = document.getElementsByTagName('body');
  document.body.appendChild(notificationWrapper);

  setTimeout(() => {
    notificationWrapper.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    notificationWrapper.style.opacity = 0;
  }, 50000);
})();
