# Blogform.xyz

A simple, boilerplate for you to host your blog very easily.
Just add your `.md` files in the `blogs` folder of the repo and push it to make it live and deploy it wherever you want.

### Why am i building this?

I know, there are hundreds of blogging apps and tools made for people to self host and publish, but I still find everything very complex for a laymen to create & publish.
I have been writing for years on [substack](https://blogs.souravk.com/), it has been breeze - to type, publish and send newsletters. Nothing comes close to this.

I want to build something like substack, open-source for anyone to clone and self host it, plugin your own services and customise your own themes.
That's it.

_Will be building in public, you can follow the repo and star it if you think, something like should exists.
It would encourage me to maintain this long term._

### To-Do:

- [ ] Simple host-able content layer pages
- [ ] A simple theme
- [ ] An admin auth to publish through the app, instead of adding `.md` files
- [ ] Plugin LLM to correct your grammar and format the content to publish
- [ ] Integrating resend to send out newsletter
- [ ] Supabase back-end to store necessary data and auth

### How to run?

Clone the repo

    git clone https://github.com/sourav-bz/blogform.xyz

Add your blogs in `blogs` folder as `.md` files.
Run the app by `npm run dev` check out the look and feel of your blog, if everything looks good host it on vercel or any hosting site.
