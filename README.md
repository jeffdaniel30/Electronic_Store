[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Online Store Lab

Hone your skills in HTML & CSS by building a page that is based on a mock up!

## Prerequisites

- HTML & CSS
- Flexbox and Grid

## Instructions

You do not have the necessary rights to update this repository. Therefore, you
must fork it, make changes to your fork, and then send a pull request to the
owners of this repository:

1. Fork and clone this repository.
1. Change into the new directory and create a development branch to work on.
1. Fulfill the listed requirements.


## Requirements

Faithfully reproduce the mockup in HTML & CSS.

![goal](./mock.png)

### Build Your HTML

1. Create your html boilerplate in the `index.html` file.
1. Add a new file called `styles.css` and link it to the HTML file.
1. In the body of your HTML, use [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), and [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) tags to clearly define the different parts of the page.
1. Use [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) tags inside the page header to create an accessible navigation. Follow the example in the [W3C Web Accessibility Initiative (WAI) Guidelines](https://www.w3.org/WAI/tips/developing/#provide-meaning-for-non-standard-interactive-elements) to format your navigation:
   1. Wrap each link in an anchor tag
   1. Wrap each anchor tag in a list item
   1. Wrap all of the list item tags in an unordered list tag
   1. Place the unordered list inside the the nav tag and give it attributes for `aria-label="Main Navigation"` and `role="navigation"`
1. Mark up each of the sections of the site using the [`section`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) tag.
1. Lets structure out first section for our 3 images. With flexbox in mind. Lets add out first image, and a div to house our other two images.
1. Lets structure out second section for our 3 boxs. Lets add 3 divs to our second section containing 'Electronics', 'Appliances', and 'Games' int here own div .
1. Lets structure out last section for all our items. With Grid in mind. Lets add 9 divs with a class of `card` to our third section containing an image and a p tag that says $300 each.
1. Make sure your images all have `alt` attributes so that they are accessible.
1. Inside the page footer, use the same technique you used earlier to create a semantic and accessible navigation, using a wrapping `nav` tag, unordered list and the aria attributes.
1. Add a copyright in the `footer`. For the &copy; symbol, use an [html entity](https://www.w3schools.com/html/html_entities.asp).

_Make sure to add and commit your changes when you've got the html done!_

### Style Your Page

1. Set the `body` element's `min-height` to be at least 100% of the [viewport height](https://alligator.io/css/viewport-units/). Also, use the `font-family` property to set the entire page to use `sans-serif` fonts.
1. Give the `body` a `max-width` of `100vw`. Lets also give our main a `margin` of `0 5vw` and a `flex-grow` of 1 (this will make the main div stretch and take all the available space that both the footer and the header)
1. Lets style our Logo a bit. Lets target the `header` nad give it a `margin` of `0 auto` so we center everything. Lets also give our logo a `max-height` of 200px.
1. For your site navigation, you'll need to remove all of the padding on the `ul` elements and then set it's `list-style-type` to `none`. It would be a good idea to use a class to style the navigation so that you can still make a bulleted list on your page. Use Flexbox to style the `ul` for the navigation elements. On the top navigation use the `space-between` rule to have the menu items spread across their container evenly. Set the color for the anchors inside the main navigation to be `Black` and the footer navigation to be `white`.
1. Lets style out first section by giving that section a id of `section-one` and lets give that the property `display:flex`. Lets also Justify out content to center. Next Lets select just the image of section one and give it a max height of 500px(`.section-one img`). Lets now select our images within the div in section-one(`.section-one div > img`), and give that a max-height 250px. Last lets target the section-one div, and dislay:flex and give this a flex direction of column.
1. Now lets work on our middle section. Lets give out second section tag a id of `section-two`. Lets add add `display` `flex` and a `justify-content` of `space-around`. Lets select our divs inside our section-two(`.section-two div`) and lets give those a padding of 100px. Lets also give them a `background-color` `black`, a `color` of `white`, and a `margin` of `5%.
1.Lets work on the last section. Lets target our last section by adding an id of `section-three`. Lets add `display:grid`,  add `grid-template-columns` with 3 rows of `1fr`. Next lets set the width by adding 100vw. Lets center our items in our box `justify-items` and `center` our items.
1. Lets taget all the `img` inside `.section-three` and give them a `max-height` of `300px`.
1. Now lets target our divs inside using the `card` class we added. Lets make this a `flex` container, and set the `flex-direction` to `column`. Now lets give these cards a `max-width` of `300px`. Finally lets align our $300 by using `text-align` `center`
1. Finally lets style up that footer. Lets target the `footer nav ul`, and lets set the display to flex, and the `list-style-type` to none. Last lets target the `footer li` and lets add a margin of `0 5%`


### Bonus

- Use [Google Fonts](https://fonts.google.com/).
- Use media queries and set up a mobile design
