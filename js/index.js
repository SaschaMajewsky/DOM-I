const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const navBarAnchors = document.querySelectorAll('a');
navBarAnchors[0].textContent = 'Services'
navBarAnchors[1].textContent = 'Product'
navBarAnchors[2].textContent = 'Vision'
navBarAnchors[3].textContent = 'Features'
navBarAnchors[4].textContent = 'About'
navBarAnchors[5].textContent = 'Contact'

navBarAnchors.forEach(element => element.style.color = 'green')

// cta
const ctaHeadline = document.querySelector('h1');
ctaHeadline.textContent = "DOM Is Awesome"
// this is a little bit off, but now it is stacked up as "awesome" is overflowing. Whitespace pre didn't work out.
ctaHeadline.style.width = "11rem"

/* const ctaButton = document.getElementsByTagName('button') */ // alternative version
const ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started"
ctaButton.addEventListener('click', (event) => { 
  funkyButton.style.backgroundColor = "white"; 
  document.body.style.background = "white";
});

/* const ctaImg = document.getElementByID('cta-img') */ // alternative version
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png"

/* const ctaText = document.getElementsByClassName('cta-text') */ // alternative version
const ctaText = document.querySelector(".cta-text");
ctaText.style.width = "30%"


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const funkyButton = document.createElement("button");
funkyButton.textContent = "Get Funky"
funkyButton.addEventListener('click', (event) => { 
  event.target.style.backgroundColor = getRandomColor(); 
  document.body.style.background = getRandomColor();
});
ctaText.appendChild(funkyButton);




// middle
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', "img/mid-page-accent.jpg");

// h4
const headerFour = document.querySelectorAll("h4");
headerFour[0].textContent = "Features"
headerFour[1].textContent = "About"
headerFour[2].textContent = "Services"
headerFour[3].textContent = "Product"
headerFour[4].textContent = "Vision"
headerFour[5].textContent = "Contact"

// contact
const contactClassSelector = document.querySelector(".contact")
contactClassSelector.style.width = "25%"

// paragraphs main
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// paragraphs contact
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];

// paragraphs footer
paragraphs[8].textContent = siteContent["footer"]["copyright"];


// using .appendChild and .prepend()
const navigation = document.querySelector("nav");

const navBarAdditionStart = document.createElement("a");
navBarAdditionStart.textContent = "Lambda"
navBarAdditionStart.style.color = "#BB1333"
navigation.prepend(navBarAdditionStart);

const navBarAdditionEnd = document.createElement("a");
navBarAdditionEnd.textContent = "School"
navBarAdditionEnd.style.color = "#BB1333"
navigation.appendChild(navBarAdditionEnd);