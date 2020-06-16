# Zero Maintenance Blogging
Throughout the years my website has taken a number of forms.  First it was a baremetal wordpress site, deployed on my own ESXi server.  Next, I containerized it, deploying in a dockerized version of my baremetal server. Over that time I really enjoyed running Wordpress and a server but I eventually got the point where I found myself avoiding writing to avoid dealing with the maintenance.  After considerable deliberation, I eventually landed on an architecture that I call Zero Maintenance Blogging. 

## What is Zero Maintenance Blogging?
The motivation behind this idea, is that I want to spend as little time as possible *running* my blog because it's about the content not the infrastructure. I don't want anything about how the blog is set up to be a barrier from writing. The most maintenance I should have to do is security patching, but even that can be automated. 

## How did I do it?
Note: Though I currently work closely with them, this is not a product plug for GitHub. These are my own thoughts. 

### Content Management System (CMS)
Given that is just a simple blog, static hosting was definitely the way to go, so I took a look at a number of statically hosted website generators. At first, I was intrigued by Hugo but after stumbling upon VuePress, I was immediately drawn in.  VuePress was opinionated enough that I didn't have to think much about my interface and contained enough features that the blog wouldn't feel like a text based blog out of the 90's. So, starting with a [repo](https://github.com/rreichel3/rj3.me) on GitHub I created a VuePress proof of concept and built and deployed it to S3. 

### Hosting
Though hosting on S3 was nice, I figured that there had to be a simpler way - Enter: GitHub Pages.  GitHub offers static hosting for free which provides automatic SSL and hosting out of a specific branch (`docs`). I was able to build my static site locally and push it to the branch to have pages serve it! This was a huge step since it was free compared to S3 and also provided a ton of nice features.  Further, it was even simpler! All I had to do was commit the built files to a new branch and they were deployed.


### Continuous Deployment
Eventually, I got tired of having to build the branch every time I committed.  I wanted to have something automatically build it for me, since it was just the same repetitive action every time I made a change in `master`.  After some hunting and playing with GitHub actions, I eventually found one that did most of the work for me! Unfortunately, the action appeared to be unmaintaned as [my PR](https://github.com/testthedocs/github-pages-deploy-action/pull/2) to fix CNAME support remains unmerged to this day. Ultimately, I forked the action and fixed it myself and now you can use it too [on the Marketplace!](https://github.com/marketplace/actions/deploy-vuepress-to-github-pages-with-cname) 

This action effectively builds the entire VuePress bundle and commits it to the `docs` branch for me every time I merge something into master - It's really the gamechanger I was looking for.  I can now write changes, merge them into master and have them deployed to my website with all the work it takes to create and merge a pull request. Not only is it simple, I can now easily make updates on mobile just by editing the files in the web editor and merging them into master. 

## Zero Maintenance
I currently do no maintenance on this blog. I pay for nothing, I have to update nothing but VuePress and can rest assured that my blog will continue to be served as long as GitHub is being served. This has freed me to worry about the content of my blog rather than the architecture of it. 

Check out [the repo](https://github.com/rreichel3/rj3.me) and feel free to fork it to create your own website!