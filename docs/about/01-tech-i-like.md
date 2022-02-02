# Tech Stacks

Over the course of my programming career I've grown to like certain tech more than others. Here are the ones that I am currently interested in.

## Typescript

After working on [DativeApp](#) with a good friend [Stephen Barna](#), I gained a deep appreciation for strongly typed systems. We did our backend in [NestJS](https://nestjs.com/), and were dealing with massive data structures that represented date ideas. Without typescript I think the amound of bugs we'd have had would be significantly higher.

Shortly after, when I got a job at [PFL](https://www.pfl.com/) we spent a massive amount of time working with graphql and React. Now we have type generation for backend data structures that we use on the frontend. This may have been extremely nice with DativeApp (although admittedly graphql comes with its tradeoffs)

If there's one thing I love about typescript it's that autocompletion!
<!-- Todo! Add autocompletion picture here -->

## Strongly Opinionated Frameworks

Rails is interesting. First of all I don't really like Ruby as a language, but if you've ever worked with rails you know why people love rails. Lets list some of the stuff out of the box that you get for free with Rails.

1. Unit + Integration + e2e tests
2. Massive code generation from your cli
3. Seeds and Migrations
4. A ton of Gems

Now what I seek as a developer is to learn a strongly opinionated framework that scales a bit better than Rails. I've explored two options, [BlitzJS](https://blitzjs.com/) and Elixir's [Phoenix](https://www.phoenixframework.org/) framework.

### BlitzJS

BlitzJS aimed to be effectively React on Rails, but defaulted to typescript instead of Javascript. It shipped with prismaORM and was SUPER easy to pick up. In fact I liked the idea so much that for a [Property Management Application](https://blitzapp-z3tc.onrender.com/), I decided to use it. Here are some of the things that made that developer experience INCREDIBLE.

- No Configuration For
  - Typescript
  - Jest Testing
  - PrismaORM
- Database to frontend type persistence
- Built in schema validation
- Free Auth

### Phoenix framework

In a whole different realm of programming. In 1986 a super interesting language was invented for the telecommunications industry named Erlang. Erlang is a functional language that was designed specifically to create EXTREMELY fault tolerant systems, and be EXTREMELY interoperable with low level languages. I don't remember the exact numbers, but if I read correctly there were programming teams of 20-30 elixir developers working more efficiently than 200 person teams in C++.

**Why?** A combination of the simplicity of functional programming, and the restraints of the virtual machine that the language runs on called **THE BEAM!!!!** *you gotta admit that just sounds cool* The Beam also has some interesting properties like how it spawns of new threads for every process. A little bit beyond my current scope of understanding but we'll get there one day.

Influenced by Ruby and Rails, in 2012, [Jose Valim](https://twitter.com/josevalim?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) invented a language called Elixir, that is basically just a wrapper around erlang that feels VERY ruby-like.

In 2015, [Chris McCord](https://twitter.com/chris_mccord?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) released 1.0 of the Pheonix framework, which basically is Rails but in Elixir. Finally you could get all of the benefits of rails with out the extreme downside of horrible scaling, and difficulty to mantain. In fact, as well as boasting extreme productivity, fast time-to-market, and a love for the syntax, most projects built in Pheonix never have scaling issues. As it turns out Elixir + The Beam is just really freaking scalable.

To me learning Elixir is like gaining a productivity superpower, and I for one am super excited to learn more. While I am no expert, I do have a couple of small projects that I have made [Here is one of them](https://github.com/jjhiggz/noteworthy)

## Rust

As much as I like strongly opinionated frameworks, I think that sometimes only working in them can sheild you from learning how to put things together by yourself. I'd watch videos of game developers and audio engineers that work with very low level data structures, and feel like I might be missing out.

Naturally I started learning C (I bet you thought I was going to say rust). Here's the thing though, the developer experience in C is objectively TRASH. Coming from the web dev world, I was working with low level concepts I'd never thought about before, and my only feedback on my terrible code was often "Error: Segmentation Fault".  I worked through about 200 pages of a C book, before I decided "You know what, I messed around with rust for an hour once and it was kind of fun, let me do more of that.

All the sudden the whole experience of learning low level programming changed. Now, if I did something stupid my compiler would yell at me instead of having to compile and execute a binary manually. This alone made the experience so much more pleasant.

I wound up working through the entire [Rustlings](https://github.com/rust-lang/rustlings) Course, and then started working on a [Markdown Parser](https://github.com/jjhiggz/custom_rust_md_parser). By no means am I a beast in Rust yet, but at least I can make myself useful! I even used that markdown parser in the aforementioned elixir app I had as a Natively Invoked Function.
