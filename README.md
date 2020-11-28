# 100DaysOfCode
learnings and projects done/doing during 100Days Of Code.

**Here we can see all my 100days learning without going into large number of folders**

**[DAY1](#DAY1) - [DAY2](#DAY2) - [DAY3](#DAY3) - [DAY4](#DAY4)**

# DAY1
**Date:** 25 November 2020
### DOCTYPE
DOCTYPE declaration in html version 5 (HTML5). This ensures that the browser makes a relevant and specific rendering mode that is compatible with HTML5 Document.
```
<!DOCTYPE html>
```
### Html tag & Language attribute
The `<html>` tag represents the root of an HTML document. This `<html>` is the container for all other tags.This tags direct child tags are `<head>` & `<body>`

The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation.
The lang attribute is forgotten surprisingly often, perhaps because it makes no apparent difference unless you use a screen reader or you are a search engine.
```
<html lang="en">
...
<p>this is a sample english text</p>
<p lang="fr">Sauf pour ce qui est écrit en mauvais français.</p>
...
</html>
```
### Head Tags
Head tags includes metadata for seo and linking css and script logo ico file. it has closing tag.
```
<head>
</head>
```
### Link tag
Link tags are used to Link stylesheets, scripts and font to the html document.
```
<link attribute="value" attribute="value" attribute="value">
```
### Logo or favicon
A favicon is a small file used as a tab icon, website icon, URL icon, or a bookmark icon.
This icon is actually displayed on the address bar, browser's tab, browser history, bookmark bar, etc.
The image of a favicon is in .ico file format. There are various file formats, but .ico format is supported by all the browsers.
```
<head>
<link rel="shortcut icon="href="favicon.ico" type="image/x-icon">  
</head>
```
### Meta tag
Meta tags are only appear within the head. This meta tags used in many ways for SEO.

Meta tag Syntax
```
<meta attribute="value">

<meta name="term" content="explanation of the term">
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

# DAY2
**Date:** 26 November 2020
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

# DAY3
**Date:** 27 November 2020
### Body Tag
Contents and text which all need to be displayed in browser and tags other than placed within the `<head>` all must be placed inside the `<body>`.
```
<!DOCTYPE html>
<html lang="en">
<head>
       ....
</head>
<body>
       ....
</body>
</html>
```
### Heading Tags
Heading tags has six sizes
```
<body>
<h1>h1 tag</h1>
<h2>h2 tag</h2>
<h3>h3 tag</h3>
<h4>h4 tag</h4>
<h5>h5 tag</h5>
<h6>h6 tag</h6>
</body>
```
output:<p><h1>h1 tag</h1><h2>h2 tag</h2><h3>h3 tag</h3><h4>h4 tag</h4><h5>h5 tag</h5><h6>h6 tag</h6></p>
### Bold, italic and paragraph
Bold and italic with paragraph tag.Bold and Italic tags dosen't have any meaning. Only for presentation.

```
<body>
<p><b>This</b> is a <i>paragraph</i></p>
</body>
```
output:<p><b>This</b> is a <i>paragraph</i></p>

### Line Break
`<br>`this tag give line break (new line).This tag has no closing tag.
### Horizontal rule
Horizontal rule tag has no closing tag.
```
<body>
<hr>
</body>
```
output:
***
### Strong, Emphasis
Strong and Emphasis tags have meaning. These two tags give importance to words.`<strong>` tag for highlight particular word `<i>` tag differentiate particular word.
```
<body>
<p>
<strong>This</strong> is a <em>paragraph</em>
</p>
</body>
```
output:<p><strong>This</strong> is a <em>paragraph</em></p>

### Superscript
```
<body>
<p>
a<sup>2</sup>
</p>
</body>
```
output:<p>a<sup>2</sup></p>
### Subscript
```
<body>
<p>
H<sub>2</sub>O
</p>
</body>
```
output:<p>H<sub>2</sub>O</p>
### Quote
quote tag giv double quotes.
```
<body>
<p>
<q>Double quotes</q>
</p>
</body>
```
output:<p><q>Double quotes</q></p>
### Block Quote
This gives empty space on left side. Optionally we can give cite attribute if that section is quoted from another website.
```
<body>
<p>
<blockquote cite="https://www.w3schools.com/index.html">Block quote</blockquote>
</p>
</body>
```
output:<p><blockquote cite="https://www.w3schools.com/index.html">Block quote</blockquote></p>
### Abbreviation
when you hover your mouse pointer it's expansion will be shown but **it won't work in markdown**
```
<body>
<p>
<abbr title="Doctor">Dr</abbr>
<abbr title="Indian Adminiatrative Service">IAS</abbr>
</p>
</body>
```
output:</p>Dr <br> IAS</p>
### Acronym
when you hover your mouse pointer it's expansion will be shown but **it won't work in markdown**
```
<body>
<p>
<abbr title="National Aeronautics and Space Adminiatration">NASA</abbr>
<abbr title="Indian Space Research Organisation">NASA</abbr>
</p>
</body>
```
output:<p>NASA <br> ISRO</p>
### Citation
Citation refering Book which has many parts.
```
<body>
<p>
<cite>Ponnien Selvan</cite> is a tamil book which is wrote by Kalki.
</p>
</body>
```
output:<p><cite>Ponnien Selvan</cite> is a tamil book which is wrote by Kalki.</p>
### Definition
Definition mean's refering a meaning of a word.
```
<body>
<p>
<dfn>Ponnien Selvan</dfn> mean The son of Ponni(Cauvery) river.
</p>
</body>
```
output:<p><dfn>Ponnien Selvan</dfn> mean The son of Ponni(Cauvery) river.</p>
### Address
Address tag tells the search engine that was a address
```
<body>
<p>
Address:
<address> <p> <b>Gandhi</b><br>
Four cross road,<br>
Gujrath,<br>
India.<br>
</p>
</address>
</p>
</body>
```
output:
<p>
Address:
<address> <b>Gandhi</b><br>
Four cross road,<br>
Gujrath,<br>
India.<br>
</address>
</p>

### Delete, Insert and Strikeout
**Text with deleted part and inserted part.**
```
<body>
<p>
<p>send your <del>contact</del> <ins>whatsapp</ins> number</p>
</p>
</body>
```
output:<p>send your <del>contact</del> <ins>whatsapp</ins> number</p>

**text with strike part**
```
<body>
<p>
<s>only few stocks left</s> <br>Soldout
</p>
</body>
```
output:<p><s>only few stocks left</s><br>Sold out</p>

[Back to top](#100DaysOfCode)

# DAY4
**Date:** 28 November 2020

[Back to top](#100DaysOfCode)

