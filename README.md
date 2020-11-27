# 100DaysOfCode
learnings and projects done/doing during 100Days Of Code.

**Here we can see all my 100days learning without going into large number of folders**

**[DAY1](#Day1) - [DAY2](#Day2) - [DAY3](#Day3)** 

## Day1
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

## Day3
### Heading Tags
Heading tags has six sizes
```
<h1>h1 tag</h1>
<h2>h2 tag</h2>
<h3>h3 tag</h3>
<h4>h4 tag</h4>
<h5>h5 tag</h5>
<h6>h6 tag</h6>
```
output:
# h1 tag
## h2 tag
### h3 tag
#### h4 tag
##### h5 tag
###### h6 tag

### Bold, italic and paragraph
Bold and italic with paragraph tag.Bold and Italic tags dosen't have any meaning. Only for presentation.

```
<p><b>This</b> is a <i>paragraph</i></p>
```
output: **This** is a *paragraph*.

### Line Break
`<br>`this tag give line break (new line).This tag has no closing tag.
### Horizontal rule
Horizontal rule tag has no closing tag.
```
<hr>
```
output:
***
### Strong, Emphasis
Strong and Emphasis tags have meaning. These two tags give importance to words.`<strong>` tag for highlight particular word `<i>` tag differentiate particular word.
```
<p><strong>This</strong> is a <em>paragraph</em></p>
```
output: **This** is a *paragraph.*

### Superscript
```
a<sup>2</sup>
```
output: a<sup>2</sup>
### Subscript
```
H<sub>2</sub>O
```
output: H<sub>2</sub>O
### Quote
quote tag giv double quotes.
```
<q>Double quotes</q>
```
output:<q>Double quotes</q>
### Block Quote
This gives empty space on left side. Optionally we can give cite attribute if that section is quoted from another website.
```
<blockquote cite="https://www.w3schools.com/index.html">Block quote</blockquote>
```
output:<blockquote cite="https://www.w3schools.com/index.html">Block quote</blockquote>
### Abbreviation
when you hover your mouse pointer it's expansion will be shown but **it won't work in markdown**
```
<abbr title="Doctor">Dr</abbr>
<abbr title="Indian Adminiatrative Service">IAS</abbr>
```
output: Dr IAS
### Acronym
when you hover your mouse pointer it's expansion will be shown but **it won't work in markdown**
```
<abbr title="National Aeronautics and Space Adminiatration">NASA</abbr> -> NASA
<abbr title="Indian Space Research Organisation">NASA</abbr> ------------> ISRO
```
output: NASA ISRO
### Citation
Citation refering Book which has many parts.
```
<cite>Ponnien Selvan</cite> is a tamil book which is wrote by Kalki.
```
output:<cite>Ponnien Selvan</cite> is a tamil book which is wrote by Kalki.
### Definition
Definition mean's refering a meaning of a word.
```
<dfn>Ponnien Selvan</dfn> mean The son of Ponni(Cauvery) river.
```
output:<dfn>Ponnien Selvan</dfn> mean The son of Ponni(Cauvery) river.
### Address
Address tag tells the search engine that was a address
```
Address:
<address> <p> <b>Gandhi</b><br>
Four cross road,<br>
Gujrath,<br>
India.<br>
</p>
</address>
```
output:

Address:
<address> <p> <b>Gandhi</b><br>
Four cross road,<br>
Gujrath,<br>
India.<br>
</p>
</address>

### Delete, Insert and Strikeout
**Text with deleted part and inserted part.**
```
<p>send your <del>contact</del> <ins>whatsapp</ins> number</p>
```
output:send your <del>contact</del> <ins>whatsapp</ins> number

**text with strike part**
```
<p><s>only few stocks left</s>
<br>Soldout</p>
```
output:<s>only few stocks left</s><br>Sold out
