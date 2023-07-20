---
title: "So You Want to Hire for Developer Tooling"
date: 2023-07-14
---

I see you want to hire a developer to work on internal developer tooling, developer experience, and the generally intangible but admirable goal of "making life better for devs".
That's awesome; you've got one hell of a challenge ahead of you.
This role is extremely difficult to hire for.
In my opinion, and in my experience, it's been the most difficlt role in the company outside of senior leadership, and the most likely to fail; if there ever was a role that burns people out, it's this one.
Tread carefully, and good luck.
You'll need it.

You probably have some questions, such as:

- What do they even do? (If you're really confident you can already answer this question, I urge you to throw that confidence away and light it on fire. It will not help you here.)
- How do I interview this person?
- What should I look for?

I'm going to go over all of these, but first I want to provide some background into why I'm talking about this.

I have been this person multiple times in various companies.
It has been a mixed bag, to put it mildly.

- In one company, I was hired as "the first devops person".
  They fundamentally misunderstood what they needed and were institutionally incapable of handling or addressing cross cutting concerns.
  Once I realized that what they wanted was purely hourly labor of cheaper toil, I built them a "what they needed but not what they asked for" platform by scraping together enough time from various teams and then left once it was operational.
- In another company, I was hired as a Staff Security-oriented SRE but they actually needed tooling expertise more so I built that for them.
  It went well, but they didn't go out of their way to actually hire for that.
- I have been hired for a role (stability / infrastructure / resilience) and had people hire me with the generic "backend software engineer" interview loops. The loop itself went alright, but that was more me being abnormally good at both backend _and_ this rather than than any indicator of their skill in placing me.
  That company underleveled me significantly and I left shortly after when it became obvious that they were incapable of seeing the value that the role was intended to capture.

There's a trend here, really, and I think it's a common one.
If a company hires "smart people who do things," they seem to be very prone to fucking this up.
I'm not sure _why_ this correlation seems to exist (although I have my suspicions), but I have noticed it repeatedly.

To wit, I would personally not see this role as a dev tools role; I would also not see it as operationally oriented.
What you're looking for, I think, is someone who can take "developer experience" and push that forward holistically by whatever way is necessary.
The hardest things they will have to do is gain the trust of the entire engineering organization, buy-in for their approach, and deliver perceived value and improvements.

I'm reminded of the concept that there are several inflection points at which organizations change and their needs evolve; importantly, the nature of how work becomes visible and how coordination happens fundamentally shifts.
Anecdotally, I've found these numbers to be true--you may recognize them as being related to dunbar's number(s): 5, 15, 50, 150, 500, 1500.

Here's how I personally apply them to the general bucket of "not product engineering", which includes but isn't limited to: infrastructure, operations, and developer experience.

- 5 Engineers: The number of engineers you can have and work without docs. The true bliss of "yolo driven development."
- 15 Engineers: You now need documentation, but still don't need "real" infrastructure (or pretty much anything else).
- 50 Engineers:
  - The threshold by which it makes sense to have one person specialized on infrastructure, ops stuff, developer environments, CI/CD, etc.
  - Start building what will become the internal platform; but don't build the platform yet, it's still too early.
- 150 Engineers:
  - The threshold where it makes sense to transition from people-driven coordination to process-driven coordination.
  - You should have something that _resembles_ an internal platform, but it's not a full platform yet.
  - If you don't have anyone who truly understands Progressive Delivery and quality assurance, you need one.
  - Knowledge management as an institutional capability is no longer optional and is likely sorely overdue.
- 500 Engineers:
  - The threshold by which developer environments, cost optimization, infrastructure, security, all pay for themselves as fully separate and independent teams of expertise _in addition to_ people closer to the teams who work to improve these functions.
  - You should have an internal platform that is fully fleshed out.
  - Enabling experimentation, progressive delivery, and effective testing as an expertise is no longer optional.
- 1500 Engineers
  - Developer experience, infrastructure, cost visibility, security, etc., should be embedded into the culture, exist as teams within organizations, and also as a separate organization.
  - The idea that you can have basically any engineering function without hiring industry experts in that function should seem both insulting and laughable; even if you hire them as consultants, you should understand deeply that success means leveraging others and you now have the funding to fully do so.

Figure out where in here you are and how much catching up you have to do.
This role probably doen't make sense until you're at 50 engineers, but it's not a bad idea to start thinking about it at 15.

# How To Fuck Up Before You Even Start Hiring

1. Not having an answer for "How does this role demonstrate value."
2. Not having significant buy-in across the entire CTO org for recognizing the need of this role and the benefits it will deliver.
3. "We just need someone to implement X, Y, and Z and migrate us from a few tools." No.
4. Literally any desire for this role involving the word "kubernetes". It's a fantastic tool; that is not this role.
5. Not having a good picture for how consensus happens, a good process around moving from decision to action to execution, or a willingness to implement one top-down from senior leadership.
6. Doing things way before you're ready:
   - For example, self service catalogues are great. Implementing Spotify's Backstage before you're at 500-1,500 engineers is a mistake.
   - "Let's have the dev tools person implement observability" is going to end badly.
7. Culture, then process, then tooling, then process, then culture.
   - "It could've been an email" applies to overengineering your CI pipelines just as much as it does to useless meetings.
8. Not having a way to get visibility into your actual needs
   - If I were to be in this role again, I would be fine doing interviewing tours amongst all the EMs and tech leads every month.
     However, companies like [getdx](https://getdx.com) exist now to automate the vast majority of that toil; use them to set this role up for success.

# What Should Developer Tooling People Work On

In reality, this list should be informed by actual answers from engineers, where the "dev tools person" interviews everyone and figures out:

1. immediate pain points
2. medium term plans
3. long term goals
4. shared frustrations
5. things teams aren't aware of but cause friction

That list should then be categorized, prioritized, and an appropriate allocation of time should be spent on it.
In my experience, it has always been that immediate pain points needs 80%+ time allocation for the first quarter, because nobody ever hires for this role before it's too late.
Eventually, a 30/30/30 split of immediate pain, medium term plans, and knowledge sharing is a great place to be.
You'll notice I didn't allocate any time to items 3, 4 and 5; that was intentional.

Being the only hire in this role means they won't get to work on the long term goals because there's absolutely no way to make meaningful progress on them quickly enough for it to matter.
Long term goals should be turned into medium term goals, and frustration and friction points are things where leading without authority starts to come into play; progress there is made by sharing knowledge, writing process, showing, demonstrating, and teaching, not by plowing ahead on massively scoped projects.
When leadership without authority happens successfully, along with delivery of value in the short and medium term, the ROI for more people doing this will become apparent, and demand for headcount will organically happen.

As a leader, you'll know this role is being executed successfully when cross-team and cross-functional collaboration starts to happen more; another strong indicator will be when other managers and leaders start to ask for more headcount in the developer tooling and infrastructure functions.

All of that said, the below list of projects is something that is pretty much guaranteed to be positive ROI, I haven't gone wrong from picking something off of this list and rolling with it if I didn't have a more compelling first option:

- Fully automated developer onboarding and local developer environments
- Comprehensive documentation strategies, testing strategies
- Building out Progressive Delivery as a capability - ability to rollback deploys, deploy feature flags, and drive feature flag driven development
- Build system performance improvements and reliability improvements
- Roll out a comprehensive philosophy and approach to observability, including (but not limited to): cost consciousness, performance, distributed tracing in production and CI
- Finding one cross-functional collaboration point, automate aspects of it, and reduce friction there
  - Nothing says "I know how to improve things where it actually hurts" like bringing more visibility into tickets and making it easier to open and close them
- Find a new project a team is about to do, sit in on planning, and take notes. Look for opportunities to notice when multiple teams are trying to solve the same problem, and bridge that communication gap.

Crucially here, the takeaway is that I would expect this person to succeed if, and likely only if, there is some visibility into showing what the actual needs of the company are, and they have the ability to globally prioritize needs as well as locally drive improvements.

# How Do I Screen For This Role

Here's the gist:
This role requires leading without authority.
It is not about programming.
It is not about technical skills.
It is not about architecture.

If you screen for those, you will probably fail to hire someone who will succeed in this role.
If you utilize in a whiteboard algorithms interview, you will _actively screen out_ everyone who is qualified to do this role; they will be capable of doing the interview just fine, they will just tell you to fuck off.
They will be right.

> If you do not reach the offer stage with at least 50% of the pipeline being women and at least 40% of the pipeline being other underrepresented minorities, you fucked up.

Frankly, who the fuck do you think is _most qualified_ to lead without authority and work within systems to drive change than those who have been systematically oppressed, denied leadership roles and opportunities, and have had to succeed despite that?
If you are screeening out the experts in sociotechnical systems, you are doing it wrong; put this article down and fix your pipeline.

If you want to hire someone who knows how to pull off a developer experience transformation and building all of that out, the things that would highlight that strength are:

- Skip the coding interview. You'll probably need _some_ technical aptitude, but this is best measured with a coding review, or even better yet, an architecture review.
- Lean in on questions that ask them how they drive organizational change.
  You're asking for someone to be an expert in leading without authority and doing so is incredibly challenging even with leadership buy-in.
  If this doesn't go well, it will probably be the reason they quit, and hiring their backfill will be 10x harder than it should be.
- My favorite architecture/technical question here is asking people to walk through how they build a paperclip maximizer.
  I personally call it an addition function.
  Here's the question: "let's say I want to add two numbers and return a result, how do I scale that taking into account people, coordinating teams, software architecture, and infrastructure?" You're going to be looking for people who can walk the evolution of a company and point out how the nature of coordination, tooling requirements, architecture needs, etc., fundamentally change _both as the software scales as well as the organization_.
- People don't do well in this role if they don't recognize the sociotechnical nature of the work; they will also not do well in this role if _you_ don't recognize the sociotechnical nature of the work.
  Empowering the social humanity with technology and humanizing the technical systems is key to this role and most people don't seem to understand how to do that.
  Look for indicators of this thinking throughout answers.
- Ask about times they have done something intentionally that is not a best practice.
  Example: One of my favorite stories to tell is when I turned off all of the on-call for the entire company.
  Leadership refused to prioritize stability, the alerts were not actionable, and fatigue was burning teams out; so I turned it off rather than fight against leadership priorities.
  That's the kind of thinking that will be required to succeed here; working with the dysfunctions of an organization to improve the health of the engineers is really the value here, not migrating a CI system.
- Look for the types of questions _they_ ask when interviewing _you_. High quality questions speak volumes.
  Some great questions would be:
  - how does the company think about value, ROI, and what incentivizes work
  - what does high impact mean at the company
  - how does leading without authority look like at the company
  - what does success in this role look like.
    When I ask this, I always poke and prod at the answer; I want to know why it looks like that and not like a different way.
    Look for someone who can ask this question and follow it up with the "why not X instead" so that they understand the outcome behind success rather than the simple outputs
  - what are the pain points people currently have, and how would one measure addressing those?
  - how does the company build consensus, how do decisions get made, and how do decisions turn into action
  - what are the dysfunctions of the company and quirks of its communication gaps? (I have never had a company answer this effectively or accurately, but discovering the delta behind the honest effort to answer and reality is very illuminating during my first 90 days)

If you _don't_ have good answers to those questions, by the way, this role will not be successful, and you have more fundamental problems in engineering to address first.

Fundamentally, this role interviews best in interviews where people know what high quality expertise looks like and allows them to just talk.
Like can identify like very rapidly in most cases.
Which means, quite honestly, that if you don't have a good artistic sense and aesthetic for what high quality engineering truly looks like, you will be unable to hire for this role effectively, regardless of your process.
If you fail to hire for this role, consider that a strong indicator, and take the opportunity to reflect on the implications of that.

Candidly, you should worry less than you think you need to about having an "objective" interview process.
This person will have to lead without authority, institute company wide change, and is going to be hired into the most difficult role to succeed in outside of senior leadership.
"The Vibes feel good; I would trust this person to tell me very uncomfortable things about stuff I am personally proud of" is absolutely something to aim for over most everything else.
However, the full implications of this are not always obvious.
For example, you will need to be very painfully aware that if you don't have diversity in senior leadership, hiring someone who is not a white male will likely not turn out well.
The exceptions to this, imo, prove the rule; I have personally been both the exception and the rule, here.
Many companies will be uncomfortable with this; which is one reason why this role is so prone to failure.

This role is truly a Sociotechnical Engineer, in every sense of the term; they will expose the weaknesses of your company in ways you are not prepared for, and they will challenge the status quo in ways that are painful.
Embrace it.
Be prepared to grow as much, if not more, than they do.
