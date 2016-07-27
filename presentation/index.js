// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import FilterExample from "./filter_example";
import MapExample from "./map_example";
import ReduceExample from "./reduce_example";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/css/galaxy.css");
require("../assets/css/franklin-gothic-book.css");
require("../assets/css/franklin-gothic-demi.css");
require("../assets/css/franklin-gothic-medium-cond.css");

const images = {
  stars: require("../assets/images/star-bg.jpg"),
  darthMaul: require("../assets/images/darth-maul-face.jpg"),
  ackbar: require("../assets/images/ackbar.jpg"),
  vaderBountyHunters: require("../assets/images/vader-bounty-hunters.jpg"),
  galaxyMap: require("../assets/images/star-wars-map.jpg"),
  yoda: require("../assets/images/yoda.jpg"),
  tieRepair: require("../assets/images/may-the-4th.jpg"),
  milleniumFalcon: require("../assets/images/millenium-falcon.jpg"),
  sith: require("../assets/images/sith.jpg"),
  rey: require("../assets/images/rey.jpg"),
  stormTrooper: require("../assets/images/stormtrooper-reflection.jpg"),
  fett: require("../assets/images/fett-reflection.jpg"),
  r2d2: require("../assets/images/r2d2.jpg"),
  vaderRain: require("../assets/images/vader-rain.jpg"),
  deathStar: require("../assets/images/death-star.jpg"),
  fancyJabbaFett: require("../assets/images/fancy-jabba-fett.jpg"),
  atat: require("../assets/images/rebel-at-at.jpg"),
  sniper: require("../assets/images/rebel-sniper.jpg"),
  forceUnleashed: require("../assets/images/force-unleashed.jpg"),
  slideBg: require("../assets/opi-slide.jpg"),
  opiLogo: require("../assets/2015 OP_Logo.svg")
};

preloader(images);

const theme = createTheme({
  // primary: "red",
  // secondary: "black",
  // tertiary: "white",
  // quartenary: "#404040"
  primary: "black",
  secondary: "#E5B13A",
  tertiary: "#4BD5EE",
  quartenary: "#E5B13A"
}, {
  primary: "franklin_gothic_fsbook",
  secondary: "distant_galaxyregular",
  tertiary: "franklin_gothic_fsdemi",
  quartenary: "News Cycle"
},);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="black" bgImage={images.stars.replace("/", "")}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              The For Loop Menace
            </Heading>
            <Text textSize="0.9em" margin="20px 0px 0px" bold textColor="tertiary">Travis Martensen (<Link
              textColor="tertiary" href="http://twitter.com/tmartensen">@tmartensen</Link>)</Text>
            <Text textSize="0.9em" margin="0px 0px 0px" bold textColor="tertiary">Principal Consultant</Text>
            <Text textSize="0.9em" margin="0px 0px 0px" bold textColor="tertiary">Object Partners, Inc.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.stars.replace("/", "")}>
            <Text textColor="tertiary">A long, long time ago, in a working group far, far, away...</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={images.stars.replace("/", "")}>
            <Heading size={1} fit caps textColor="secondary" textFont="secondary">
              ES5
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.stars.replace("/", "")}
            align="center flex-start">
            <Heading size={5} textColor="secondary" textFont="primary">
              Episode 2011
            </Heading>
            <Text caps textColor="secondary" textFont="quartenary">
              The For Loop Menace
            </Text>
            <Text textColor="secondary" margin="100px 0px 0px">
              It is the year 2011. Two years earlier, the wise masters of ECMAScript Technical Committee 39
              had finalized a specification that contains a way to combat the horrible FOR LOOP MENACE. Now,
              after much foot-dragging and bikeshedding, the browsers of the Web have fully adopted the teachings of
              TC39, including the use of ARRAY EXTRAS. Let's see them in action...
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.darthMaul.replace("/", "")} bgDarken={0.75}
            notes="But first, lets's take a look at why array extras can be more intuitive than for loops. I'm fairly sure that everyone has seen, and written, one of these before. Looks innocent, right?">
            <Heading size={4} caps textColor="secondary" textFont="primary">
              The For Loop Menace
            </Heading>
            <CodePane lang="js" source={require("raw!../assets/examples/for_loop.example")}/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.ackbar.replace("/", "")} bgDarken={0.75}
            notes="And here's the obligatory...">
            <BlockQuote>
              <Quote>It&#39;s a trap!</Quote>
              <Cite>Admiral Ackbar</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.vaderBountyHunters.replace("/", "")} bgDarken={0.75}
            notes="There are lots of issues with for loops. For instance, most for loops have to track 5 separate things
             in order to figure out what's going on in the loop. That makes it extremely hard for someone who comes after you
             to figure out what's going on in there. Also, you can accidentally change the data inside the loop if you're not
             careful. Or, if you don't get the iterator right, you may end up accidentally omitting data. Furthermore,
             you can get into trouble with scoping. How many of you have seen the example of trying to call a function
             in a loop, only to have it repeat the last value in the loop?">
            <Heading size={4} caps textColor="secondary" textFont="primary" lineHeight={2}>
              The For Loop Menace
            </Heading>
            <Appear><ListItem>Lots of things to keep track of</ListItem></Appear>
            <Appear><ListItem>Unintuitive</ListItem></Appear>
            <Appear><ListItem>Mutating the data (side effects!)</ListItem></Appear>
            <Appear><ListItem>Iterators can be deceiving</ListItem></Appear>
            <Appear><ListItem>Scoping problems</ListItem></Appear>
            <Appear><CodePane lang="js" source={require("raw!../assets/examples/bad_scoping.example")}/></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.yoda.replace("/", "")} bgDarken={0.60}>
            <Heading size={4} caps textColor="secondary" textFont="primary" lineHeight={2}>
              Array methods
            </Heading>
            <Appear><ListItem>Easier to read</ListItem></Appear>
            <Appear><ListItem>Return a new instance of the array (no side effects!)</ListItem></Appear>
            <Appear><ListItem>Always will iterate over all items in the array</ListItem></Appear>
            <Appear><ListItem>Each iteration has its own closure (no scoping problems!)</ListItem></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.tieRepair.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} caps textColor="secondary" textFont="primary" lineHeight={2}>
              Examples
            </Heading>
            <Appear><ListItem>Data courtesy of the <Link textColor="tertiary" href="https://swapi.co">Star Wars API
              (SWAPI)</Link></ListItem></Appear>
            <Appear><ListItem>Downloaded with the assistance of <Link textColor="tertiary"
              href="https://github.com/franckLdx/grunt-swapi2json">grunt-swapi2json</Link></ListItem></Appear>
          </Slide>
          <Slide bgImage={images.stormTrooper.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} textColor="secondary" textFont="primary" lineHeight={2}>
              Array.filter()
            </Heading>
            <Appear><ListItem>Used to remove elements of an array that do not meet the specified
              criteria</ListItem></Appear>
            <Appear><ListItem>Function passed in must return a boolean value</ListItem></Appear>
            <Appear><ListItem>Returns a new array with elements that resulted in a value of true in the filtering
              function</ListItem></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.rey.replace("/", "")} bgDarken={0.75}>
            <CodePane margin="0px 0px 20px 0px" lang="js"
              source={require("raw!../assets/examples/filter_definition.example")}/>
            <Layout>
              <Table textColor="tertiary" text>
                <thead>
                <TableRow>
                  <TableHeaderItem>Parameter</TableHeaderItem>
                  <TableHeaderItem>What it stands for</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>element</TableItem>
                  <TableItem>current element</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>index</TableItem>
                  <TableItem>where the iteration currently is</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>array</TableItem>
                  <TableItem>the original array</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>thisArg</TableItem>
                  <TableItem>reference to <S bgColor="secondary" textSize="2em" textColor="secondary"
                    type="bold">"this"</S> in the callback</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide bgImage={images.milleniumFalcon.replace("/", "")} bgDarken={0.75}>
            <FilterExample/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.galaxyMap.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} textColor="secondary" textFont="primary" lineHeight={2}>
              Array.map()
            </Heading>
            <Appear><ListItem>Used to transform data</ListItem></Appear>
            <Appear><ListItem>Takes a function that returns the transformed element</ListItem></Appear>
            <Appear><ListItem>Applies the given function to each element in the array</ListItem></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.sith.replace("/", "")} bgDarken={0.75}>
            <CodePane margin="0px 0px 20px 0px" lang="js"
              source={require("raw!../assets/examples/map_definition.example")}/>
            <Layout>
              <Table textColor="tertiary" text>
                <thead>
                <TableRow>
                  <TableHeaderItem>Parameter</TableHeaderItem>
                  <TableHeaderItem>What it stands for</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>element</TableItem>
                  <TableItem>current element</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>index</TableItem>
                  <TableItem>where the iteration currently is</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>array</TableItem>
                  <TableItem>the original array</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>thisArg</TableItem>
                  <TableItem>reference to <S bgColor="secondary" textSize="2em" textColor="secondary"
                    type="bold">"this"</S> in the callback</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.r2d2.replace("/", "")} bgDarken={0.60}>
            <MapExample />
          </Slide>
          <Slide bgImage={images.vaderRain.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} textColor="secondary" textFont="primary" lineHeight={2}>
              Array.reduce()
            </Heading>
            <Appear><ListItem>Used to find a new value computed by iterating over the array</ListItem></Appear>
            <Appear><ListItem>Takes a function that returns the accumulated value</ListItem></Appear>
            <Appear><ListItem>The accumulated value is then passed to the next iteration until
              finished</ListItem></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.fett.replace("/", "")} bgDarken={0.75}>
            <CodePane margin="0px 0px 20px 0px" lang="js"
              source={require("raw!../assets/examples/map_definition.example")}/>
            <Layout>
              <Table textColor="tertiary" text>
                <thead>
                <TableRow>
                  <TableHeaderItem>Parameter</TableHeaderItem>
                  <TableHeaderItem>What it stands for</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>accumulator</TableItem>
                  <TableItem>the accumulated value from the previous iteration</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>element</TableItem>
                  <TableItem>current element</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>index</TableItem>
                  <TableItem>where the iteration currently is</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>array</TableItem>
                  <TableItem>the original array</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>initialValue</TableItem>
                  <TableItem>the starting accumulator value</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide bgImage={images.deathStar.replace("/", "")} bgDarken={0.30}>
            <ReduceExample />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.atat.replace("/", "")} bgDarken={0.75}>
            <Heading caps fit size={2} textColor="secondary" textFont="secondary" lineHeight={2}>
              Just want something simple?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.sniper.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} textColor="secondary" textFont="primary" lineHeight={2}>
              Array.forEach()
            </Heading>
            <Appear><ListItem>Simply iterates over every element in the array</ListItem></Appear>
            <Appear><ListItem>Takes a function that performs a function on each element</ListItem></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.forceUnleashed.replace("/", "")} bgDarken={0.75}>
            <CodePane margin="0px 0px 20px 0px" lang="js"
              source={require("raw!../assets/examples/foreach_definition.example")}/>
            <Layout>
              <Table textColor="tertiary" text>
                <thead>
                <TableRow>
                  <TableHeaderItem>Parameter</TableHeaderItem>
                  <TableHeaderItem>What it stands for</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>element</TableItem>
                  <TableItem>current element</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>index</TableItem>
                  <TableItem>where the iteration currently is</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>array</TableItem>
                  <TableItem>the original array</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>thisArg</TableItem>
                  <TableItem>reference to <S bgColor="secondary" textSize="2em" textColor="secondary"
                    type="bold">"this"</S> in the callback</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.sniper.replace("/", "")} bgDarken={0.75}>
            <Heading size={4} textColor="secondary" textFont="primary" lineHeight={2}>
              Where can I use array extras?
            </Heading>
              <ListItem>Chrome 8+</ListItem>
              <ListItem>Firefox 3.6+</ListItem>
              <ListItem>Internet Explorer 9+</ListItem>
              <ListItem>Opera 11+</ListItem>
              <ListItem>Safari 5+</ListItem>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.stars.replace("/", "")}>
            <Heading caps fit size={2} textColor="secondary" textFont="secondary">
              ???
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.fancyJabbaFett.replace("/", "")} bgDarken={0.55}>
            <Heading caps fit size={2} textColor="secondary" textFont="secondary">
              Thanks!
            </Heading>
          </Slide>
        </Deck>
        <
        / Spectacle >
        );
        }
        }
