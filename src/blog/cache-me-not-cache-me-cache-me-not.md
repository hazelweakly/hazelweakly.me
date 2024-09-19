---
title: "Cache Me Not, Cache Me, Cache Me Not"
date: 2024-09-19
---

Caching is hard.
So hard.
But also, we are so fucking bad at it.
Every time I have to use a public wifi setup I have a joker moment.
Does absolutely nobody test shit on anything less than wired symmetric gigabit anymore?

Web SPA apps are some of the worst for this.
Motherfucker, you have the same fucking iconography for three years, why does it load correctly and then ALL OF THE ICONS FAIL ONCE I DROP TO A SHIT INTERNET CONNECTION?!

I didn't even reload the page?! The fuck are you doing?

But seriously, caching is hard, it's really hard, but you can make life WAY easier for yourselves when building an SPA if you do this super simple thing.

Break down all your content into two axis:

1. push vs pull
2. owned vs user

Whenever possible, turn your pull assets into push assets and all of your user assets into owned assets.

What do I mean by that? Let's break it down further.
There's four categories:

1. Push + Owned
2. Push + User
3. Pull + Owned
4. Pull + User

I'm making up terminology but fuck it, I'm drinking coffee and eating my donut and doing this live at a coffee donut shop, so bite me.
**Push** means that the asset is pushed to a central server and then distributed.
**Pull** means the asset is referenced and the central server has to "pull" the content.
**Owned** means it's owned by the central server.
**User** means it's user-submitted content.

Every content caching strategy on the web (and most non-web stuff too, tbh) fucks this up because the web isn't designed to handle this notion of push vs pull or user vs owned.
However, the web _is_ designed extraordinarily well to handle the concept of pull + owned, and with service workers, it's also extremely equipped to handle push + owned.
Mobile apps and other non-web stuff is also designed to handle push + owned extremely well, so it's even more disappointing how bad things have gotten with this lately.

So, make everything owned, and make it all push if possible, _especially_ if it's an SPA or a native application of some sort.

## Push + Owned

Push + Owned is weird, so let's go over that first.
Content is pushed to a central server and then distributed.
And it's owned by the central server.
This is ideal, because it means that your expiration time can be infinite.
You only expire content on the client when explicitly told to

Got that? **You. Only. Expire. Content. On. The. Client. When. Told. To.**

Make everything push + owned if you can.
That means not returning a 304, it means not even trying the web request.
Put that shit in STORAGE.
UI icons are the classic example

It turns out, however, that you can make a shit ton of other stuff push + owned if you try a little harder.
User profile picture? If the user doesn't change their profile picture, it's guaranteed to be the same.
Guess what fukers, expire the it on new upload but otherwise OWN IT.
IT DOESN'T NEED TO BE RE-FETCHED.
Custom emojis n shit? Own them.
Expire them only when they're changed.

> "But Hazel how does the client check if they're expired?"
>
> -- an unenlightened programmer

Use "stale while re-validate". Ur welc'

**In summary:**

- Store asset
- Use stale-while-re-validate access patterns
- Should work offline

## Push + User & Pull + Owned

These sound super different, but they're actually almost identical.
You should handle both of these with hashed URLs.

If a user pushes content to a server to be referenced, you can hash the URL and treat it immutably.
So, do that!
Likewise, if your content that you own needs to be pulled, since you own it, you can reference it with a stable URL and then... You got it, treat it immutably.

A great example of the push + user content would be a user uploading an image to a comment on a social forum.
You have no way to _store_ this, reasonably, and the space is infinite, so you're referencing it.
But you can save yourself a ton of trouble if you have them upload the content rather than link it, and then you can host it on your own CDN, cache the url, and reference it immutably.

An example of the pull + owned content would be content you own, but that is dynamic in a way that, e.g., iconography isn't; a solid example of that would be temporary or other "in-content" assets.
Dynamically generated content is a prime example, and so is assets that another part of the central server owns but you need a central source of truth and so you can't re-upload it.
This is particularly common when you switch from monolithic backends to more micro or service oriented architectures; you might end up not owning a lot of the content that you "own".

That's because ownership in this case means you can tell when the content changed because your service was in charge of changing it; that's not possible in a lot of microservice architectures, which explains the rise of event driven architectures and being able to subscribe to the content-change notifications of another service.
So, you're left with content-addressed URIs.

**In summary:**

- Load asset
- Use infinite TTL + hashed URLs
- Should not re-fetch across page/app reloads

## Pull + User

Let's talk about Pull + User since that's the other weird pattern not covered by "standard caching how-to" guides on the internet.

That's where it's user generated content, but not owned by the server.
Posting gifs into the chat is a prime example; linking a blog post and generating a media upload for that is another.

Guess what: this pattern fits for highly dynamic user-generated content, which means it's the content _users link to each other in-platform._

Stable URL, short TTL.
**YES, SHORT TTL.**

You would be absolutely fucking shocked how much traffic the pull + user generates.
It's atrocious, but it's also extraordinarily cache hostile, and has a half life of minutes to hours.

You would also be shocked how much caching it will break assumptions on the behalf of users.

It breaks all of their assumptions.
They're gonna change something and refresh the page and get mad when it doesn't update.
All of your bug reports lie here.

Debounce + throttle? Sure.
Micro-TTL? Yes.
Cache? _Never._

**In summary:**

- Fetch asset
- use short TTL + stable URLs
- Should (almost) always re-fetch
- Content should change even though the URL is the same

## tl;dr

Anyways long story short don't just give up because "lol caching is hard."
Understand your users and what the fuck you're doing, make a strategy that builds a mental model for your developers, and then make doing the right thing easy.

As an example, an amazing fetching interface for encoding this concept would be

1. Push + Owned: `storeAsset(URI)`
2. Push + User: `storeContent(URI)`
3. Pull + Owned: `loadAsset(URI)`
4. Pull + User: `loadContent(URI)`

Then, you can attach automatic policies to this along with fallbacks and other appropriate handling.
You can even build tests to make sure that certain parts of the page only contain the "right" type of assets!
A comment inside of a forum would never contain a Push + Owned asset, for example, because that's user content.
Likewise, your UI will never contain anything _but_ Push + Owned content.
You can also even test that all of your Push + Owned stuff works offline!

I've never seen anyone build that interface, and I've never seen these types of tests, but fuk me it would fix so much.
Give it a go, and stop fucking up my coffee shop experience, thanks!

Now if you don't mind, I'm going to go sip my coffee and reload my broken pages even though we both know that's not going to fix the issue.
