---
title: Resume
author: Hazel Weakly
contact:
  address: |
    Portland, OR, 97217
  phone: "[(503) 369--8931](tel:5033698931)"
  email: "[hazel@theweaklys.com](mailto:hazel@theweaklys.com)"
---

# Employment and Professional Experience

::: cv

Experienced in improving feedback loops, developer experience and productivity, reliability, and build systems.
Specializing in delivering a holistic approach to cross-cutting concerns that blend theory with pragmatism and embraces empathy.

:::

::: cv

| Staff SRE | Eden Health | Sept. 2021--Present

Eden Health is a healthtech startup focused on providing Concierge Health for every employee.
As the first Security-focused Systems Reliability Engineer, I helped scope and prioritize security related initiatives that balanced current business needs while keeping future opportunities open.
Additionally, as part of embracing the Staff engineering role of soft leadership, I dedicated time to working on developer experience from a holistic approach.
Part of that work resulted in redesigning how Eden Health thinks of developer environments, getting buy-in across the engineering and product organizations, and shepherding adaption of the chosen solution.
Another part of that work resulted in the creation of a design system code repo that worked across React, React Native, and allowed for seamless collaboration between design, product, and engineering teams.

- Helped build out the developer environments using Nix shells to create reproducible and ephemeral environments that were fully consistent between developers and CI; virtually eliminating rework and toil caused by environment mismatches.
- Revamped documentation regarding on-boarding for developers and integrated a discoverable bootstrapping mechanism into projects to create cross-team consistency, reducing on-boarding time significantly and creating ample automation opportunities.
- Prioritized and built out the infrastructure required to adopt a mesh VPN solution as part of implementing zero trust networking.
- Worked with the Director of Security to help mitigate critical vulnerabilities as they came up.
- Built a design system for front-end development to facilitate integration and cooperation between design and engineering.
- Implemented authoring, consuming, and publishing infrastructure for using private package registries, enabling consumption of internal libraries in a secure and ergonomic manner.
- Building upon the previous developer environments, I developed a build environment DSL in Nix to generate complex and reusable environments using a consistent and centralized framework. This centralized and codified domain knowledge, and allowed for rapid iteration across N repos.
- Assisted with multiple critical vendor procurements, carefully selecting vendors to meet business needs with an eye towards saving money and increasing developer efficiency. The vendor procurements are expected to be finalized in Q3 2022 and achieve breakeven cost savings by EOY 2022.
- Assisted with adaption of modern observability infrastructure in the front-end, including creating and developing a javascript helper library and full Open Telemetry demo, and delivering an internal talk on the subject.

:::

::: cv

| Build/Release Engineer | Galois, Inc\. | Dec. 2019--Sept. 2021

Galois, Inc., is a formal verification consulting company that specializes in high assurance software and cryptography.
As the first Ops employee, I helped shape the career ladder and scope of responsibilities for DevOps, taking care to match existing concerns with evolving needs when possible.
Part of that work resulted in advising on a coherent plan to address the recent growing desire inside the Department of Defence for transitionable research.
I also built out an internal platform and front-facing developer portal, enabling infrastructure and tooling knowledge to be shared and utilized effectively and paving the way for future growth in infrastructure competencies.

- Helped build out and design the career ladder for DevOps and worked with the engineering council to envision what Ops at Galois looks like.
- Architected and implemented an internal platform on top of Kubernetes, using GitOps and NixOS for a fully auditable, reproducible, and automatic system.
- Raised cultural awareness within the company for the importance of infrastructure and engineering work within research projects.
- Reduced CI/CD pipeline times from 2 days to 10 minutes and reduced complexity by consolidating from 4 CI systems to 1 CI system.
- Shortened FPGA development loop by days, and enabled automated testing of FPGA machines by designing and deploying a CI system, testsuite, and cross-project CI coordination.
- Created development environments, CI and CD pipelines, and optimized releases for projects across a wide range of environments, from secure enclaves, to FPGAs, to cloud deployments.
- Reduced PR merge times from weeks/months to days by championing automation tooling to make collaboration across and within teams smoother.
- Enabled the shipping of modern development tooling into a highly isolated system by creating a fully self-bootstrapping environment suitable for non-privileged HPC-like systems.

:::

::: cv

| Sr. Web Developer | 503 Collective | March 2019--Nov. 2019

503 Collective was a web design agency startup that focused on providing content personalization as a service.
The website built also included a microservice backend to handle and eventually subsume a lot of the legacy infrastructure of the client.
While there, I rapidly accelerated the implementation time for design changes and increased the Percent Complete and Accurate fulfillment of design tickets to nearly 100% by translating traditional print design into a dynamic and coherent language across desktop, mobile, and apps.
On the infrastructure side, I sped up development lifecycles on the order of weeks by implementing infrastructure as code automation, reliable CI, and reproducible developer environments.

- Rebuilt the code layout as a full monorepo to increase code sharing, reduce build times by over 50%, and eliminate phantom code transpilation errors.
- Built a design system and provided training as design lead, saving weeks of developer time.
- Reduced average page load over 50%.
- Optimized server infrastructure to handle traffic beyond 5,000 concurrent active users.
- Built a backend capable of self healing ingestion of data from a slow internal API, increasing site responsiveness by over 90%.

:::

::: cv

| Web Developer/DevOps | WFG National Title Company | Fall 2017--March 2019

WFG National Title Company is a title insurance agency; my time there was spent as a web developer as well as implementing infrastructure.
I transitioned all of the company websites from a fragile server setup to a containerized setup, significantly reducing deployment risk.
In addition, I rewrote websites or tools in modern technologies as needed, speeding them up and securing them in the process.

- Created and managed on-prem container/automation based infrastructure.
- Enabled consistent handling of design and security fixes by containerizing and standardizing all wordpress websites.
- Reduced developer setup time from weeks to hours and made local environments fully consistent with staging and production.
- Implemented SPAs in React, created microservices, maintained WordPress codebases, and reduced technical debt.

:::

::: cv

| Full-stack Web Developer | Freelance | Dec. 2018--Feb. 2019

<https://honeydoservicesinc.com>

- Achieved sub-second loading times through best practices and careful optimization.
- Designed the site to easily adapt to changing requirements.

:::

::: cv

| Team Lead | University Capstone | Spring 2018--Fall 2018

- Lead, mentored, and trained a team of 6 to renovate the Portland Opera's website.
- Organized and delivered on project timelines and progress reports.

:::

::: cv

| Remote Intern | Haskell Summer of Code | Summer 2017

- Implemented performance metrics tracking for the Glasgow Haskell Compiler test-suite.
- Wrote documentation regarding the test-suite driver; improving existing documentation substantially.

:::

::: cv

| Open Source | |

- Created and maintain the Haskell setup action for GitHub Actions to make using Haskell in GitHub's CI easier.
- Have contributed in small ways to various OSS projects, eg: [direnv](https://github.com/direnv/direnv), [neovim](https://github.com/neovim/neovim), [mach-nix](https://github.com/DavHau/mach-nix/), and various neovim plugins.

:::

# Education

::: cv

| University | | 2013--2018

Portland State University
: B.S. in Computer Science. 2016--2018.

Walla Walla University
: Prograss towards B.S. in Computer Engineering. 2013--2016.

:::

# ~~Buzzword Bingo~~ Technical Skills

::: cv

Languages
: TypeScript, JavaScript, Bash, Nix, Haskell, Rust, Python, C, Bash, JSON, YAML, Sass, CSS

OS/Virtualization
: Linux (Debian, RHEL, CentOS, Ubuntu, NixOS, Amazon Linux), Kubernetes, Nomad, Docker, Terraform, Ansible, AWS, Packer

Technologies
: GitLab CI/CD, GitHub Actions, Varnish, Git, React, NoSQL, Helm, ArgoCD, Tailscale, Atlantis, Okta, honeycomb.io, Open Telemetry

Soft Skills
: Strong and attentive listener, empathetic, works well with others, leads by example, eye for detail, advocates fiercely for equitable treatment for all

:::
