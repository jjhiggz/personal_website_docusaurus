# Code Opinions

I'm not the most experienced developer by any means, but I definitely have some values that are important to me and my coding journey.

## Quality

I'm a firm believer that code quality **ALWAYS** pays off and that you can tell alot about a company's future by their emphasis on consistent quality.

- Tests should be written for features whenever possible
- Refactors should happen whenever necessary
- Discussions should take place early and often

Companies that don't take the time to ensure code quality think that they are

- Releasing More Features
- Getting More Work Done
- Thinking Pragmatically

While in reality the data supports that they are actually

- Fixing More Bugs
- Doing More Work
- Releasing Less Features

Personally, I don't always set up integration or end to end testing on smaller projects, but I never can think of a good reason not to run unit tests. 90% of the time unit tests allow me to get to the correct answer to a complex question FASTER. Sometimes the only cost associated with testing is having to learn something new.

## Traceable Code

I think that the intent of what code does should always be clear. Abstractions provide a benefit but also can come with a cost. Sometimes in particular with OOP programming, non referentially transparent abstractions can make it much harder to understand a codebase.

Lets look at an example where we seed data.

```js
const myDataSource = require("some-datasource")

class DataSeeder {

 this.dataSource;

 constructor(){
  this.dataSource = myDataSource
 }

 async seed(){
  const person1 = await this.dataSource.create("person", {name: "jon"})
  const person1 = await this.dataSource.create("person", {name: "rachel"})
 }

}

```

In a case like this the same exact functionality could be achieved through a function

```js
const myDataSource = require("some-datasource")

const seed = () => {
  const person1 = await myDataSource.create("person", {name: "jon"})
  const person1 = await myDataSource.create("person", {name: "rachel"})
}
```

The simplicity here is more meaningful than "A has 10 lines, and B has 5". More importantly than that, the person reading this doesn't have to sift through layers of abstraction in order to determine what is happening.

Yet sometimes abstractions are necessary, one that I've looked at before in the past is the concept of a DTO (Data Transfer Object). Whether or not you use OOP or FP or whatever to accomplish this doesn't matter, the important part is that there is benefit to be had about abstracting logic into a concept. Lets look at the following code to see what I mean.

```js

const PersonController = (req, res) => {
 const person = req.person;
 if(!person.name ){
  res.send(SomeError)
 }

 if(!person?.age < 10 ){
  res.send(SomeError)
 }
 db.create(person)
 res.send(person.name + " was created")
}

```

Well if you have a ton of controller methods in your app (however your architecture). You probably want to test that you are validating the correct things. You probably also want to test that you are throwing the correct errors. The only way to do that without actually hitting your person controller, is by creating some kind of viable abstraction.

In Object Oriented Land you might do something like.

```js
const PersonController = (req, res) => {
 const person = req.person;
 validate(new PersonDto(person))
 db.create(person)
 res.send(person.name + " was created")
}
```

In functional land you might do something like

```js
const PersonController = (req, res) => {
 const person = req.person;
 validate(person)
 db.create(person)
 res.send(person.name + " was created")
}
```

Either way, the abstraction here is a good thing, as it improves the readability and reliability of your code.
