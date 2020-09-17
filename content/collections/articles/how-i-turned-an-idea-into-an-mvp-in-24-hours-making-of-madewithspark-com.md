---
title: 'How I turned an idea into an MVP in 24 hours — Making of MadeWithSpark.com'
cover_image: articles/how-i-turned-idea-into-mvp/editing-made-with-spark.png
date_published: '2018-01-18 19:57'
date_modified: '2018-01-18 19:57'
article_tags:
  - 518ebbee-2b16-4701-96d8-daeca9097be3
  - 039ce82e-8750-4bd0-9080-981a2e10d285
  - 71b05431-5f90-4b23-bed6-0c8a4ebb72ca
updated_by: 59e67be5-435b-45c1-a7e6-1d9a02873b6e
updated_at: 1599422590
id: da4baa4b-4268-45dd-b670-9939ee5ecb51
content:
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: 'Several days ago, I turned an idea I had for a side project into a [deployed live MVP,](http://madewithspark.com) which was fairly exciting. It is so easy to come up with ideas but often I feel my failure comes with execution and deployment, aka I’m constrained by time (or often lazy). A few weeks ago I had a similar idea to this product and suggested it to the product owner; never did I think “I should just build it myself.” So of course someone else came along after that suggestion and built that product. I wasn’t going to miss the opportunity this time — so now that I’m a web developer and fairly in tune with growth hacking, social media marketing and all that jazz I’m excited to be able to ship products out the door. **I’m hoping this blog post will help encourage all you web developers and digital creators out there to get off the couch, standing desk or where-ever you are and ship MVP\* products into the world.**'
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          _(\*For those more sports-inclined than tech inclined, MVP in tech is Minimum Viable Product, not Most Valued Player. When you ship an MVP product you are releasing a product that is bare bones functional and will have later functionality added to it)._
          
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          > If you get nothing else from my rambles, read the below 3 points and then close this tab…
          
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: header
        text: 'Tools I used:  '
        radio: h3
        header_type: h3
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          
          1\.[**Carrd.co**](http://www.carrd.co) **by @ajlkn —**this website builder is fantastic and allows a user to ship super clean, responsive and fast landing pages.   
          2\.[**Zapier**](http://www.zapier.com) — this site is sort of like [IFTTT](http://www.ifttt.com) but for developers and tech-minded folks. If you don’t know what IFTTT is, think ‘a website that connects things together’.   
          3\.[**Airtable**](http://www.airtable.com)** — **a recent lovechild of the tech world, this site is a hybrid of spreadsheets and databases with lots of magic mixed in.
          
  -
    type: paragraph
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: header
        text: 'The Process: '
        radio: h3
        header_type: h3
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          Several months ago I had stumbled across [Laravel Spark](https://spark.laravel.com/) and was impressed with what I saw, even though I’m not a PHP or backend developer. I am a HUGE fan of anything [Steve Schoger](https://medium.com/u/582a92a6b0b9) touches and because he did the web design for Spark I loved the visual aesthetics of their site. As a result of that and the product looking pretty cool, I was very curious to find examples of what was built using Spark, but after combing Reddit and Twitter I only found a few examples. Fast forward several days ago, I was browsing Twitter and saw a post about Laravel Spark. At that point, after careful prodding from my developer brother, I started to think about building a gallery of projects that use Spark.   
          I started with brainstorming out the concept and researching out similar ideas. Of course, this type of idea is nothing new, there are many websites out there that display a gallery of websites that use ‘x’ technology.
          
          So I choose to use Carrd rather than coding a site from scratch because it is so stinking easy to whip up a clean and responsive landing page via Carrd. I’ve actually built 5+ sites using Carrd and absolutely recommend the pro version. It is a great value! So I picked a template and then customized the design, fonts, etc to match the visual vibes I was looking for. It was also super easy to attach the form from Carrd to the Zapier ‘zap’ that would send the data to my Airtable.
          
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: single_image
        single_image: articles/how-i-turned-idea-into-mvp/carrd-starting-point.png
        width: container
        caption: 'Just a few of the various templates you can use to start building with www.carrd.co.'
  -
    type: paragraph
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: single_image
        single_image: articles/how-i-turned-idea-into-mvp/editing-made-with-spark.png
        width: container
        caption: "Made With Spark’s homepage, as seen in the editing view of\_Carrd."
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: single_image
        single_image: articles/how-i-turned-idea-into-mvp/control-view-of-carrd.png
        width: page
        caption: "Carrd makes sending form responses to Zapier super\_easy!"
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          The next step was to setup the database on Airtable. My only prior experience with it was setting a job search spreadsheet _(any design minded agencies looking for a talented Junior Frontend Developer btw?)_ a few weeks ago so I honestly haven’t used it a lot. But it looks really powerful and beautiful; If you haven’t been able to tell yet, I love powerful and beautiful tools.
          
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: single_image
        single_image: articles/how-i-turned-idea-into-mvp/carrd__airtable.png
        width: container
        caption: 'My Airtable spreadsheet with a test submission.'
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: 'And finally, I needed to connect the Carrd website and the Airtable database. So I set up a zap in just a few minutes.'
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: single_image
        single_image: articles/how-i-turned-idea-into-mvp/carrd__zapier-resp.png
        width: container
        caption: "Using Zapier.com to send any form response from Carrd.co to Airtable.com is\_great!"
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: text
        markdown: |
          The hardest part was picking a name. I seriously went back and forth and asked everyone under the sun for insight. I originally started with “The Spark Collection” but eventually ditched that for “Made With Spark” which is the typical naming convention for a project like this. In this branding decision process, I was, of course, scoping out social media handles, domains and thinking about things like SEO and branding. So I picked my name, bought my domain from [Dreamhost](https://www.dreamhost.com/r.cgi?1344648) (they are amazing by the way). You can check out my MVP, [Made With Spark](http://madewithspark.com)!
          
          The whole building process took about 40 minutes and was made easy by the above tools. I recommend you check them out for quick MVP deployment! I hope this quick guide helps you ship more MVPs and miss fewer opportunities to turn all those ideas into real things.
          
          > Let me know if you have any questions or comments below!
          
          > Do you have any favorite tools to ship MVP?
  -
    type: paragraph
---
