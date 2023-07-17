"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{1375:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),i=a(1883),r=a.p+"static/ct-logo-37c29b996e3bc1219439c24571581a5f.png";var l=()=>n.createElement("header",{className:"header-module--header--666b3"},n.createElement("h1",{className:"header-module--title--de67b"},n.createElement("img",{id:"header-module--orgLogo--88fe7",src:r,alt:!0})),n.createElement("ul",{className:"header-module--navList--0129c"},n.createElement("li",null,n.createElement(i.Link,{to:"#project"},"PROJECT")),n.createElement("li",null,n.createElement(i.Link,{to:"#faq"},"FAQ")),n.createElement("li",null,n.createElement(i.Link,{to:"https://dl.acm.org/doi/10.1145/3593013.3594020",target:"_blank"},"PAPER")),n.createElement("li",null,n.createElement(i.Link,{to:"#data"},"DATA")),n.createElement("li",null,n.createElement(i.Link,{to:"#press"},"PRESS")),n.createElement("li",null,n.createElement(i.Link,{to:"#team"},"TEAM")),n.createElement("li",null,n.createElement(i.Link,{to:"#support"},"SUPPORT"))))},8678:function(e,t,a){var n=a(7294),i=a(1883),r=a(1375);t.Z=e=>{var t;let{children:a}=e;const l=(0,i.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(r.Z,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},n.createElement("main",null,a),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,a){var n=a(7294),i=a(1883);t.Z=function(e){var t,a;let{description:r,title:l,children:o}=e;const{site:c}=(0,i.useStaticQuery)("63159454"),m=r||c.siteMetadata.description,s=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,s?l+" | "+s:l),n.createElement("meta",{name:"description",content:m}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:m}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:m}),o)}},7239:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return E}});var n=a(7294),i=(a(1883),a(8678),a(9357));var r=()=>n.createElement("div",{className:"hero-module--hero--26b78"},n.createElement("div",{className:"hero-module--bannerContainer--0466d"},n.createElement("div",{className:"hero-module--banner--7ec98"},n.createElement("h1",{className:"hero-module--title--fae11"},"Detecting Disparities in Police Deployments Using Dashcam Data"),n.createElement("h3",{className:"hero-module--paperLink--aef47"},n.createElement("a",{href:"https://dl.acm.org/doi/10.1145/3593013.3594020",target:"_blank"},"Paper Link"))))),l=a(1375);const o=e=>{let{faq:t,index:a,toggleFAQ:i}=e;return n.createElement("div",{className:"FAQ-module--faq--bd539 "+(t.open?"FAQ-module--open--cb012":""),key:a,onClick:()=>i(a)},n.createElement("h3",{className:"FAQ-module--faqQuestion--b6000"},t.question),n.createElement("p",{className:"FAQ-module--faqAnswer--49f9d",dangerouslySetInnerHTML:{__html:t.answer}}))};var c=e=>{let{faqs:t}=e;const{0:a,1:i}=(0,n.useState)(t),r=e=>{i(a.map(((t,a)=>(t.open=a===e&&!t.open,t))))};return n.createElement("div",{className:"FAQ-module--faqs--78bcb"},a.map(((e,t)=>n.createElement(o,{faq:e,key:t,index:t,toggleFAQ:r}))))},m=a.p+"static/proj-gif-780158dcd646b5debcfe545146be558c.gif",s=a.p+"static/matt-9b40fed65c2f06c4294f843b951109d3.jpeg",d=a.p+"static/jd-9075fe55bc5573351531a460fad96b15.jpeg",h=a.p+"static/wendy-1268c025f6be721ee1a991d08524b03c.jpeg",p=a.p+"static/emma-6f671716de24d8d18da7a50f47608d5e.jpeg";const u=[{question:"Where does your data come from?",answer:'Our data comes from Nexar. We purchased this data in during the COVID pandemic in 2020, envisioning initial applications in <a href="https://dl.acm.org/doi/abs/10.1145/3486611.3491133">predicting social distancing policy compliance.</a>',open:!1},{question:"What period of time do you analyze?",answer:"While our data spans the period of March-November 2020, the dataset was acquired over two phases. The latter phase covers October-November 2020, and covers all of New York City with high temporal density. The former was still used as a source of training data, but only contains images from Downtown Manhattan and Brooklyn.",open:!1}],g=[{name:"Matt Franchi",twitter:"mattwfranchi",image:s,link:"https://mattwfranchi.github.io/about"},{name:"J.D. Zamfirescu-Pereira",twitter:"jdzamfi",image:d,link:"https://zamfi.net"},{name:"Wendy Ju",twitter:"wendyju",image:h,link:"https://wendyju.com"},{name:"Emma Pierson",twitter:"2plus2make5",image:p,link:"https://www.cs.cornell.edu/~emmapierson/"}],f=()=>n.createElement(i.Z,{title:"Home"});var E=()=>n.createElement("main",null,n.createElement(l.Z,null),n.createElement(r,null),n.createElement("div",{className:"index-module--projectContent--e6bbf"},n.createElement("section",{id:"project"},n.createElement("h2",null,"Project Overview"),n.createElement("div",{id:"index-module--projContainer--6dcc6"},n.createElement("div",{id:"index-module--projGIFContainer--e456a"},n.createElement("img",{src:m,id:"index-module--projGIF--eff79",alt:"Project infographic"})),n.createElement("div",{id:"index-module--projInfoContainer--6f8b9"},n.createElement("p",null,"Large-scale policing data is vital for detecting inequity in police behavior and policing algorithms. However, one important type of policing data remains largely unavailable within the United States: aggregated police deployment data capturing which neighborhoods have the heaviest police presences. Here we show that disparities in police deployment levels can be quantified by detecting police vehicles in dashcam images of public street scenes. Using a dataset of 24,803,854 dashcam images from rideshare drivers in New York City, we find that police vehicles can be detected with high accuracy (average precision 0.82, AUC 0.99) and identify 233,596 images which contain police vehicles. There is substantial inequality across neighborhoods in police vehi- cle deployment levels. The neighborhood with the highest deployment levels has almost 20 times higher levels than the neighborhood with the lowest. Two strikingly different types of areas experience high police vehicle deploy- ments — 1) dense, higher-income, commercial areas and 2) lower-income neighborhoods with higher proportions of Black and Hispanic residents. We discuss the implications of these disparities for policing equity and for algorithms trained on policing data")))),n.createElement("section",{id:"faq"},n.createElement("div",null,n.createElement("h2",null,"FAQs"),n.createElement(c,{faqs:u}))),n.createElement("section",{id:"data"},n.createElement("div",{id:"index-module--dataContainer--85e85"},n.createElement("h2",null,"Data"),n.createElement("p",null," Our image data was acquired from ",n.createElement("a",{href:"https://data.getnexar.com/",target:"_blank"},"Nexar"),". Nexar images in New York City are sourced from ridesharing drivers. All Nexar data is anonymized, with significant measures in place to uncouple riders with ride footage. We obtained an IRB exemption for the image data from Cornell University. "),n.createElement("p",null," Our code is available on ",n.createElement("a",{id:"index-module--dataGitHubLink--3b98b",href:"https://github.com/mattwfranchi/police-deployment-patterns",target:"_blank"},"GitHub.")))),n.createElement("section",{id:"press"},n.createElement("div",{id:"index-module--pressContainer--b4d71"},n.createElement("h2",null,"Selected Media Articles"),n.createElement("p",null,"Cornell Press ",n.createElement("a",{href:"https://news.cornell.edu/stories/2023/07/dashcam-images-reveal-where-police-are-deployed",target:"_blank"},"article")," "))),n.createElement("section",{id:"team"},n.createElement("div",{className:"index-module--teamContainer--419e9"},n.createElement("h2",null,"Team"),n.createElement("div",{className:"index-module--teamGrid--949fa"},g.map((e=>n.createElement("a",{href:e.link,target:"_blank",onClick:()=>{}},n.createElement("div",{className:"index-module--teamGridItem--d5d92",key:e.name},n.createElement("img",{src:e.image,alt:e.name,className:"index-module--teamPortrait--73814"}),n.createElement("h3",null,e.name),n.createElement("a",{href:"https://twitter.com/"+e.twitter,target:"_blank",rel:"noopener noreferrer"},"@",e.twitter)))))))),n.createElement("section",{id:"support"},n.createElement("div",{id:"index-module--supportStatement--f096e"},n.createElement("p",null," Support for this work came from an Amazon Research Award, a Google Research Scholar Award and the National Science Foundation."),n.createElement("p",{id:"index-module--siteDeveloperStatement--afcf2"}," Site by Matt Franchi ")))))}}]);
//# sourceMappingURL=component---src-pages-index-js-82117d7a7908efe39568.js.map