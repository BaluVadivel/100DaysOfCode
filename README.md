# 100DaysOfCode
Learnings and projects done/doing during 100Days Of Code.
### Why am i taking this 100DaysOfCode challenge?
Am taking this challenge to learn and take notes Everyday. Which helps to revise the learned things in future.*Once everyday learning is habituated, it doesn't end at 100 days.*

**Here we can see all my 100days learning without going into large number of folders**

**[DAY1](#DAY1) - [DAY2](#DAY2) - [DAY3](#DAY3) - [DAY4](#DAY4) - [DAY5](#DAY5) - [DAY6](#DAY6) - [DAY7](#DAY7) - [DAY8](#DAY8) - [DAY9](#DAY9)**

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

### Image Tag
#### Affecting aspect ratio
Giving height and width values without considering aspect ratio.

**Code:**
```
<img src="ubuntu.png" alt="Ubuntu groovy gorila desktop image" title="Ubuntu Desktop" width="240px" height="220px">
```
**Output:**
<br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/004/ubuntu.png" alt="Your image title" width="240" height="220"/>

#### Without affecting aspect ratio
Giving height only or width only dosen't affect your aspect ratio.

**Code:**
```
<img src="ubuntu.png" alt="Ubuntu groovy gorila desktop image" title="Ubuntu Desktop" width="240px">
```
**Output:**
<br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/004/ubuntu.png" alt="Your image title" width="240" />

#### Figure Caption
Figure caption tag is used to give caption to image.

**Code:**
```
<figure>
<img src="ubuntu.png" alt="Ubuntu groovy gorila desktop image" title="Ubuntu Desktop" width="360px">
<figcaption>Caption of the above image</figcaption>
</figure>
```
**Output:**
<figure>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/004/ubuntu.png" alt="Ubuntu groovy gorila desktop image" title="Ubuntu Desktop" width="360px">
<figcaption>Caption of the above image</figcaption>
</figure>

### Linking Web Page
Anchor Tag or a Tag is used to link web pages.
#### Opening web pages in the CURRENT TAB
**Code:**
```
<a href="https://www.google.com">Google</a> is a search engine
```
**Outout:**
<p>
<a href="https://www.google.com">Google</a> is a search engine
</p>

#### Opening web pages in the NEW TAB
(**this feature dosen't work in md**)
**Code:**
```
<a href="https://www.google.com" target="_blank">Google</a> is a search engine
```
Outout:
<p>
<a href="https://www.google.com" target="_blank">Google</a> is a search engine
</p>

### Email Link
#### Email link will open email app and fills the corresponding email address in TO field.
**Code:**
```
<a href="mailto:mailid@domain.com">Click</a> to contact
```
**Output:**
<a href="mailto:mailid@domain.com">Click</a> to contact

#### Fills the corresponding email address in TO field and filling text in subject field
**Code:**
```
<a href="mailto:mailid@domain.com?subject=FEEDBACK">Click</a> to contact
```
**Output:**
<a href="mailto:mailid@domain.com?subject=FEEDBACK">Click</a> to contact

### Named Anchor tag or Link within the page
This linking is created with the help of id attribute. Value of the id attribute must be unique.

**Code:**
```
<h5 id="link">This tags id="link"</h5> <br><br><br><br><br><br><br><br>
<a href="#link">Click here</a> to scroll to "This tags id="link" "
```
**Output:**

##### Link Tags

<br>
<br>
<br>
<br>

[Click](#link-tags) here to scroll to "Link Tags" which appear above.

### Lists
#### Unordered list
Unordered list is used to list the items with bullet symbol. This represents list items can be in any order.

**Code:**
```
Programming Languages
<ul>
<li>Go</li>
<li>C</li>
<li>Python</li>
</ul>
```
**Output:**
<p>
Programming Languages
<ul>
<li>Go</li>
<li>C</li>
<li>Python</li>
</ul>
</p>

#### Ordered list
Ordered list is used to list the items with numbers. This represents list items must be in given order.

**Code:**
```
Programming Languages in top 3 rank for less compiling time
<ol>
<li>Go</li>
<li>C</li>
<li>Python</li>
</ol>
```
**Output:**
<p>
Programming Languages in top 3 rank for less compiling time
<ol>
<li>Go</li>
<li>C</li>
<li>Python</li>
</ol>
</p>

#### Definition list
Definition list is a list of terms and corresponding definitions.Definition list is formated with the term in left side with the definition on next line on the right side.

**Code:**
```
Expansion of abbrevation
<dl>
<dt>HTML</dt>
<dd>Hyper Text Markup Language</dd>
<dt>CSS</dt>
<dd>Casscading Style sheet</dd>
</dl>
```
**Output:**
<p>
Expansion of abbrevation
<dl>
<dt>HTML</dt>
<dd>Hyper Text Markup Language</dd>
<dt>CSS</dt>
<dd>Casscading Style sheet</dd>
</dl>
</p>

[Back to top](#100DaysOfCode)

# DAY5
**Date:** 29 November 2020
### Screenshot of 5th day learning
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/005/day5.png" alt="Your image title" width="100%"/>

[Back to top](#100DaysOfCode)


# DAY6
**Date:** 30 November 2020

## Input Checkbox Important Point
Name attributes value without `[]` (array square bracket) symbol. This cause data loss or confusion at server side. If we are selecting more than one option then only last selected value will be stored. Previously stored values are over written by succeeding (upcoming or incoming) values. OR maybe the server get confused because of Same variable appearing more time but each time having different values.

## Below code & screen shot explains the above Problem</h2>

### WITHOUT ARRAY SYMBOL `[]`

<b>CODE:</b>
```
<form>
Select your Hobbies<br>
<label for="photography">
<input type="checkbox" id="photography" name="hobbies" value="photography"> Photography
</label>
<label for="video-gaming">
<input type="checkbox" id="video-gaming" name="hobbies" value="video-gaming"> Video Gaming
</label>
<label for="dance">
<input type="checkbox" id="dance" name="hobbies" value="dance"> Dance
</label>
<br><br>
<input type="submit" value="SUBMIT">
</form>
```

<br><br>
<b>OUTPUT OF CODE:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/Output.png" alt="Above code output" width="100%" />

<br><br>
<b>OUTPUT OF CODE WITH SELECTED CHECKBOX:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/OutputSelected.png" alt="Above code output with selected checkbox" width="100%" />

<br><br>
<b>AFTER CLICKING SUBMIT BUTTON:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/WithoutArrayOutputSelectedOutput.png" alt="Clicking the submit button of the form with the selected checkbox" width="100%" />
<p>
In the above image we can see the url has two times hobbies appearing. Each it has different value. This may create a confusion at backend or only the last one value will be stored at backend. Just over write the existing values so only stores the last value. 
</p>

<br><br>
### WITH ARRAY SYMBOL `[]`
<b>CODE:</b>
```
<form>
Select your Hobbies<br>
<label for="photography">
<input type="checkbox" id="photography" name="hobbies[]" value="photography"> Photography
</label>
<label for="video-gaming">
<input type="checkbox" id="video-gaming" name="hobbies[]" value="video-gaming"> Video Gaming
</label>
<label for="dance">
<input type="checkbox" id="dance" name="hobbies[]" value="dance"> Dance
</label>
<br><br>
<input type="submit" value="SUBMIT">
</form>
```

<br><br>
<b>OUTPUT OF CODE:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/Output.png" title="" alt="Above code output" width="100%" />

<br><br>
<b>OUTPUT OF CODE WITH SELECTED CHECKBOX:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/OutputSelected.png" alt="Above code output with selected checkbox" width="100%" />

<br><br>
<b>AFTER CLICKING SUBMIT BUTTON:</b>
<br><br>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/WithArrayOutputSelectedOutput.png" alt="Clicking the submit button of the form with the selected checkbox" width="100%" />
<br>
In the above image we can see the url has two times `hobbies[]` appearing. Here `[]` (square brackets) represents the that hobbies is a array. So this stores each hobbies values in array. This is proper way to use checkbox.
<br>
# Select within form

## CODE:
```
<form>
<p>Select your Profession</p>
<select name="profession" id="profession" required>
<option value="select" selected disabled>select</option>
<option value="web"> Web developer</option>
<option value="android"> Android developer</option>
<option value="ios">IOS developer</option>
<option value="flutter">Flutter developer</option>
<option value="other">Other</option>
<select>
<br><br>
<input type="submit" value="SUBMIT">
</form>
```
<br><br><br>

## CODE explanation:
<p>
<dl>
<dt><b>SELECT TAG</b></dt>
<dd>Select tag is like the radio button. But this is more simple than the RadioButton input. Here select tag has "name" attribute with "profession" value.</dd>
<dt><b>Required</b></dt>
<dd>Select elements has required keyword which makes the form un submitable when th user didn't select any option in the select elelment.<dd>
<dt><b>name="profession"</b></dt>
<dd>Inside the select element maultiple option elements are placed which has only value attribute and it's value.</dd>
<dt><b>Selected</b></dt>
<dd>First option element has value select.It has selected keyword which indicates this option is defaultly selected.</dd>
<dt><b>Disabled</b></dt>
<dd>Disabled option used to disable that option so that the user can't submit the defaultly selected value in the select element.</dd>
<dl>
</p>
<br><br><br>

## OUTPUT:
<p>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/SelectOutput.png" alt="Above code output 1" width="100%" />
</p>

## OUTPUT Of clicking Enter without Selecting:
<p>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/SelectOutputEnter.png" alt="Above code output 2" width="100%" />
</p>

## OUTPUT Of clicking the Select:
<p>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/SelectOutputOpen.png" alt="Above code output 3" width="100%" />
</p>

## OUTPUT Of clicking the Select:
<p>
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/006/SelectOutputOpen Select.png" alt="Above code output 4" width="100%" />
</p>

[Back to top](#100DaysOfCode)

# DAY7
**Date:** 1 December 2020

## SELECT MULTIPLE, FIELDSET, LEGEND, FILE INPUT, RANGE INPUT, TIME
### CODE :
```
<form enctype="multipart/form-data">
<fieldset>
<legend>Job Details</legend>
<label for="profession">
Select your professions<br><br>
<select name="profession[]" id="profession" multiple required>
<option value="web"> Web developer</option>
<option value="android"> Android developer</option>
<option value="ios">IOS developer</option>
<option value="flutter">Flutter developer</option>
<option value="other">Other</option>
<select>
</label>
<br><br>
<label for="resume">Attach your resume<br><br>
<input type="file" name="resume" id="resume" required>
<label>
<br><br>
<label for="salary">Enter your Salary expectation per month<br><br>
18000<input type="range" name="salary" id="salary" min="18000" max="46000" step="1000">46000
<label>
<br><br>
<label for="time">Select interview time<br><br>
<input type="time" name="time" id="time">
</label>
</fieldset>

<fieldset>
<legend>Education Details</legend>
<label for="education">
Select your Education<br><br>
<select name="education" id="education" required>
<option value="select" selected disabled>select</option>
<option value="be"> B.E</option>
<option value="btech"> B.Tech</option>
<option value="bsc"> B.Sc</option>
<select>
</label>
<br><br>
<label for="year">Year of passed out<br><br>
<input type="number" name="year" id="year" min="2018" max="2021" placeholder="yyyy" required>
</label>
<br><br>
</fieldset>

<fieldset>
<legend>Contact Details</legend>
<label for="email">Enter your email<br><br>
<input type="email" name="email" id="email" required>
</label>
<br><br>
<label for="githubid">Enter your github profile<br><br>
<input type="url" name="githubid" id="githubid" placeholder="https://github.com/user" required>
</label>
<br><br>
</fieldset>

<input type="submit" value="SUBMIT">
</form>
```

### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/007/SelectMultiple.png" alt="Above code output" width="100%" />

## DIV & SPAN TAGS
Div tag is used to group block level element. Span tag is used to group inline level element. This tag has both opening and closing tags
### CODE :

```
<div>this is div</div>
<span>this is span</span>
<div>this is div</div>
```

### OUTPUT :
<p>
<div>this is div</div>
<span>this is span</span>
<div>this is div</div>
</p>

## IFRAME
IFRAME tag is use to embeed one website into another one
### CODE :

```
<iframe src="https://www.youtube.com/embed/7cVpA4rME8w" width="380" height="210px"></iframe>
```

### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/007/IframeOutput.png" alt="Above code output" width="100%" />

### Explanation :
iframe tag must have width and height values. If you don't giv widthand height values it automatically takes 0 value to both. This tag must have closing tag. If you don't give closing tag you content after the iframe won't be displayed. Just now got and clear this issue by addind closing iframe tag.

## HTML ENTITIES
Entities codes are used to display symols in html. THIs is the standard way to use symbols in html.


**HTML ENTITIES Source [https://dev.w3.org](https://dev.w3.org/html5/html-author/charref)**


[Back to top](#100DaysOfCode)


# DAY8
**Date:** 2 December 2020

## Audio Tag

### Single Format

#### CODE :
```
<audio src="SampleAudiomp3.mp3" controls>This fall back message only displayed when the browser dosen't support audio tag.</audio>
```
#### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/008/OutputAudio.png" alt="Above code output" width="100%" />

### Multiple Format using SOURCE tag

#### CODE :
```
<audio controls>
This fall back message only displayed when the browser dosen't support audio tag.

<source type="audio/ogg"  src="SampleAudioogg.ogg">
<source type="audio/wav"  src="SampleAudiowav.wav">
<source type="audio/mpeg" src="SampleAudiomp3.mp3">
<source type="audio/m4a"  src="SampleAudiom4a.m4a">
</audio>
```

#### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/008/OutputAudio.png" alt="Above code output" width="100%" />

## Video Tag

### Single Format

#### CODE :
```
<video src="SampleVideomp4.mp4" controls>This fall back message only displayed when the browser dosen't support video tag.</video>
```

#### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/008/OutputVideo.png" alt="Above code output" width="100%" />

### Multiple Format using SOURCE tag

#### CODE :
```
<video controls>
This fall back message only displayed when the browser dosen't support audio tag.

<source type="video/quicktime"  src="SampleVideomov.mov">
<source type="video/x-msvideo"  src="SampleVideoavi.avi">
<source type="video/webm"       src="SampleVideowebm.webm">
<source type="video/x-ms-wmv"   src="SampleVideowmv.wmv">
<source type="video/ogg"        src="SampleVideoogg.ogg">
<source type="video/mp4"        src="SampleVideomp4.mp4">
</video>
```

#### OUTPUT :
<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/008/OutputVideo.png" alt="Above code output" width="100%" />

[Back to top](#100DaysOfCode)


# DAY0
**Date:** 3 December 2020

<img src="https://raw.githubusercontent.com/BaluVadivel/100DaysOfCode/main/009/Day9.png" alt="Above code output" width="100%" />

[Back to top](#100DaysOfCode)
