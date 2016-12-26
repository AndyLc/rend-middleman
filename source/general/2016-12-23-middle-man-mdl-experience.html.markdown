---
title: Building my portfolio with Middleman and MDL
date: 2016-12-23 21:54 UTC
tags: middleman, MDL
---

Nowadays many artists and programmers have Portfolio websites
to display their projects. When I first decided to create my own,
I started exploring different front-end frameworks and static site generators.
In particular, I found:
<br><br>
<strong>Front-end Frameworks:</strong>
<ul>
  <li>MDL</li>
  <li>Bootstrap</li>
  <li>Foundation</li>
  <li>Pure</li>
</ul>
<strong>Static Site Generators:</strong>
<ul>
  <li>Middleman</li>
  <li>Jekyll</li>
</ul>
<h4>Front-end Frameworks</h4>
I had previous experience with Bootstrap, so I decided to try something new. I ended up using
MDL, which was a poor choice because MDL relies on images for aesthetics, which my
website does not have a lot of. What I mean by this is that MDL uses cards, blocks with
box shadows that look plain without images. Box shadows put emphasis on the cards,
but if the cards only contain text, the box shadows are unnecessary and ugly. In the end,
I barely used any MDL components, but I modeled the color scheme after Google's material design colors at
<a href="https://www.materialui.co/colors">https://www.materialui.co/colors</a>.
<br><br>
If I could have done it again, I would have used Foundation. Though Foundation is more popular
and popularity in Front-end Frameworks can act like a double edged sword - making a website
look nice but at the same time like everybody else's, it also is a more valuable skill.
 <h4>Static Site Generators</h4>
I looked at two different technologies for static site generation: Middleman and Jekyll.
Because I come from a Ruby on Rails background, I chose Middleman, which was easy to learn
because Middleman uses Rails conventions. Jekyll however is more popular than Middleman and
easier to learn for those without Rails experience. Jekyll comes with a blog feature, but middleman also
can use the gem middleman-blog, which was enough for this blog. For the comments, because github.io
cannot hold comments as a static site, I needed to use a third party to store comments - Disqus.
 Disqus is easier to integrate with Jekyll, but with the middleman-disqus gem, integration for middleman
 is also very simple. Without a Ruby on Rails background, I would have chosen Jekyll, but Middleman was
 very easy and intuitive to me with my current background.
