# 100DaysOfCode
learnings and projects done/doing during 100Days Of Code.

**Here we can see all my 100days learning without going into large number of folders**

**[DAY1](#Day1) - [DAY2](#Day2)** 

## Day1
### DOCTYPE
DOCTYPE declaration in html version 5 (HTML5). This ensures that the browser makes a relevant and specific rendering mode that is compatible with HTML5 Document.
```
<!DOCTYPE html>
```
### Language attribute
The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation.
The lang attribute is forgotten surprisingly often, perhaps because it makes no apparent difference unless you use a screen reader or you are a search engine.
```
<html lang="en">
...
<p>this is a sample english text</p>
<p lang="fr">Sauf pour ce qui est écrit en mauvais français.</p> 
```
### Head Tags
Head tags includes metadata for seo and linking css and script logo ico file. it has closing tag.
```
<head>
</head>
```
### Logo or favicon
A favicon is a small file used as a tab icon, website icon, URL icon, or a bookmark icon.
This icon is actually displayed on the address bar, browser's tab, browser history, bookmark bar, etc.
The image of a favicon is in .ico file format. There are various file formats, but .ico format is supported by all the browsers.
```
<head>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">  
</head>
```
### Charset UTF8
This ensures that you can use characters from just about any human language in your HTML document, and they will display reliably.
```
<head>
<meta charset="utf-8">
</head>
```
### Title
The content of the title is one of the components used by search engine algorithms to decide the order in which to list pages in search results.
Title tag defines documents title which appear in browser or page's tab.It contains only text.
```
<head>
<title>primary keyword - secondary key word </title>
<meta charset="utf-8">
</head>
```
### Description
Search engines use your description to determine the relevancy with the keywords. That's why it is important to invest time to come up with a relevant and attractive description.
```
<head>
<meta name="description" content="summary the describing the web page including it's all key word appearedin title " >
</head>
```
### Keywords
It helps tell search engines what the topic of the page is. Meta keywords are distinguished from keywords because they appear "behind the scenes" in the source code of your page.
```
<head>
<meta name="keywords" content="keyword , secondary keyword , final keyword" >
</head>
```

[Back to top](#100DaysOfCode)

## Day2
### Emoji as a text
we can include emoji in anywhere on document using decimal or hexadecimal reference.
Decimal(DEC) or Hexadecimal(HEX) reference must start the entity number with &# and end it with ; (semicolon).

`:yellow_heart:` this code is used display yellow heart in MarkDown

**following code includes yellow heart :yellow_heart: in title using decimal code reference.**
```
<head>
<title>This is TITLE &#128155;</title>
<meta charset="utf-8">
</head>
```
### Author
It defines the name of the document's author. It is important because it gives credit to the person that made the website.
```
<meta name="author" content="Author Name" >
```
### Viewport
Viewport elements gives the browser instructions on how to control the page's dimensions and scaling. The initial-scale=1 part sets the initial zoom level when the page is first loaded by the browser.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
### Canonical
The Canonical meta tag is actually a link element. When you have duplicate content on your website or pages that are very similar to one another, it tells Google which page is the original and should have traffic driven to it.
```
<meta rel="canonical" href="https://css-tricks.com/essential-meta-tags-social-media" >
```
### Social media preview
These meta tags are only used for Social media preview. These tags dosen't affect your SEO.
#### Og:Title
Og:Title only appear in social media sharing peview.
```
<meta property="og:title" content="European Travel Destinations">

```
#### Og:Description
Og:Description only appear in social media sharing peview.
```
<meta property="og:description" content="Offering tour packages for individuals or groups.">
```
#### Og:image
Og:image appear in social media sharing peview. This image is mostly overview or preview of the webpage.
The URL of the image for your object. It should be at least 600×315 pixels, but 1200×630 or larger is preferred (up to 5MB). Stay close to a 1.91:1 aspect ratio to avoid cropping.
```
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
```
#### Og:url
Og:url appear in social media sharing peview.
```
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
```
#### twitter:card 
if we dosent include this Sometime description won't appear and Og:image won't appear fully only square sizely cropped center part of the image is displayed like icon.
```
<meta name="twitter:card" content="summary_large_image">
```

[Back to top](#100DaysOfCode)
