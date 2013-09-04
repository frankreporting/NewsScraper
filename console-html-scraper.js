// My first "scraper"
// A javascript scraper to run directly in Chrome's console
// to grab elements of an article summary displayed on a news
// site and return html for a different layout

html = document.getElementsByTagName('<TAGNAME HERE>');
items = [];
for (i=0;i<html.length;i++) {

// grab the headline
  hed = html[i].getElementsByTagName('h4')[0].getElementsByTagName('a')[0].innerText;

// grab the image source
  imgraw = html[i].getElementsByTagName('img')[0].getAttribute('src');

// modify image source and dimensions
  img = "<img src=\"" + imgraw.replace(/-<IMG SUFFIX>.jpg/g,"-<NEW IMG SUFFIX>.jpg\" style=\"float:left; height:100px; margin-left:10px; margin-right:10px; width:100px\" />");

// get summary text
  dek = html[i].getElementsByTagName('p')[0].innerText;

// reassemble the parts into individual story items in html
  item = "<p>" + img + i + ". <strong>" + hed + "</strong> (KPCC)</p>";
  item += "<p>" + dek + "</p>";

// save each chunk of html as an item in a list
  items.push(item);
}

// clear the current page displayed in the browser
document.body.innerHTML="";

// loop through items and add them to the current browser window as raw text
for (j=0;j<items.length;j++) {
  div = document.createElement('div');
  text = document.createTextNode(items[j]);
  div.appendChild(text);
  document.body.appendChild(div);
}