# Design Patterns Demo

A set of small demos por  Builder, Facade, Visitor and Memento Design Patterns made in Typescript.

## Getting Started

The main purpose of these demos are more based on checking the code structure for the implementation of the design patterns than the results of it, but there is a simple interface to check the output objects.

To run this interface you have to open the index.html file on the root directory (sorry, no server yet!) after building the bundle script.

### Building the project

First, install neccesary packages

`$ npm install`

And, build the bundle

`$ npm run build`

Now it will be ready to run on the index file :)

## Patterns Covered
A simple explanation of the examples and a description of the output on the interface.

### Builder
A Builder for Star Wars lightsabers. The Director constructs all the parts of the lightsaber separately and then "attach" them together to form the weapon. A Director focus on building an specific type of lightsaber, and all of them use the same parts but create it with different characteristics.

#### Output
A built Lightsaber JSON object.

### Visitor
A Visitor for leveling up D&D Wizard and Warlock classes. A Wizard or Warlock object accept the visitor and depending of the reciever, it runs the appropiate method to increase the level.

#### Output
The character advancement numbers (HP, spells slots, etc) and the final object in current level.

### Facade
A Facade for an attack action following D&D rules. This uses the Visitor example to create a Wizard character, then creates a Spell and Troll object and the Client calls the Facade to execute the attack using the objects created.

#### Output
A log of the attack steps and the JSON objects of the character, spell and enemy after the attack calculations.

### Memento
A Memento emulating states for a video game level including checkpoints. At certain points of a state change a memento is creating saving such state (points, current weapon and others properties). You can go back to a previous saved state and recover all the info related.

#### Output
A log of the state changes and saving and a JSON object of the mementos created.