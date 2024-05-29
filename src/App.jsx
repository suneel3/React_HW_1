
import "./App.css";

function App(){
  return(
    <>
      <div className="wrapper">
         <h1>Topics covered</h1>
         <p className="para">The following is a list of all the topics we cover in the MDN learning area.</p>

         <div className="zero">
         <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" target="_blank">Getting started with the web</a>
          <p className="paragraph">Provides a practical introduction to web development for complete beginners.</p>
         </div>

         <div className="first">
           <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">HTML — Structuring the web</a>
            <p className="paragraph">HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
         </div>
         <div className="second">
           <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">CSS — Styling the web</a>
            <p className="paragraph">CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
         </div>
         <div className="third">
           <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank">JavaScript — Dynamic client-side scripting</a>
            <p className="paragraph">JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.</p>
         </div>
      </div>
    </>
  )
}

export default App;