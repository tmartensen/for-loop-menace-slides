// <Slide transition={["slide"]} bgColor="white" textColor="#404040"
//   notes="You can even put notes on your slide. How awesome is that?">
//
// </Slide>
// <Slide transition={["zoom", "fade"]} bgColor="primary"
// notes="<ul><li>talk about that</li><li>and that</li></ul>">
//   <CodePane
// lang="jsx"
// source={require("raw!../assets/deck.example")}
// margin="20px auto"
//   />
//   </Slide>
//   <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//   <Appear fid="1">
//   <Heading size={1} caps fit textColor="secondary">
//   Full Width
// </Heading>
// </Appear>
// <Appear fid="2">
//   <Heading size={1} caps fit textColor="tertiary">
//   Adjustable Darkness
// </Heading>
// </Appear>
// <Appear fid="3">
//   <Heading size={1} caps fit textColor="secondary">
//   Background Imagery
// </Heading>
// </Appear>
// </Slide>
// <Slide transition={["zoom", "fade"]} bgColor="primary">
//   <Heading caps fit>Flexible Layouts</Heading>
// <Layout>
// <Fill>
// <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//   Left
//   </Heading>
//   </Fill>
//   <Fill>
//   <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//   Right
//   </Heading>
//   </Fill>
//   </Layout>
//   </Slide>
//   <Slide transition={["slide"]} bgColor="black">
//   <BlockQuote>
//   <Quote>Wonderfully formatted quotes</Quote>
// <Cite>Ken Wheeler</Cite>
// </BlockQuote>
// </Slide>
// <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//   <Heading caps fit size={1} textColor="secondary">
//   Inline Markdown
// </Heading>
// <Markdown>
// {`
//                 ![Markdown Logo](${images.markdown.replace("/", "")})
//
//                 You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
//                 * Lists too!
//                 * With ~~strikethrough~~ and _italic_
//                 * And lets not forget **bold**
//               `}
// </Markdown>
// </Slide>
// <Slide transition={["slide", "spin"]} bgColor="primary">
//   <Heading caps fit size={1} textColor="tertiary">
//     Smooth
//   </Heading>
//   <Heading caps fit size={1} textColor="secondary">
//     Combinable Transitions
//   </Heading>
// </Slide>
// <Slide transition={["fade"]} bgColor="secondary" textColor="secondary">
//   <List>
//     <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//     <Appear><ListItem>Autofit text</ListItem></Appear>
//     <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//     <Appear><ListItem>React-Router navigation</ListItem></Appear>
//     <Appear><ListItem>PDF export</ListItem></Appear>
//     <Appear><ListItem>And...</ListItem></Appear>
//     </List>
//     </Slide>
//     <Slide transition={["slide"]} bgColor="primary">
//     <Heading size={1} caps fit textColor="tertiary">
//     Your presentations are interactive
//     </Heading>
//     <Interactive/>
//     </Slide>
//     <Slide transition={["spin", "slide"]} bgColor="tertiary">
//     <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
//     Made with love in Seattle by
//     </Heading>
//     <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//     </Slide>