import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";




const skillDescriptions = {
    js: "Search for the keywords to learn more about each warning",
    css: " it with appropriate styles. Learn more:",
    react: " attribute requires a valid value to be accessible. Provide a valid, navigable address as the hr"
}
export const skillTitles = {
    js: 'Js',
    css: 'Css',
    react: 'React',
}


const App = () => {


    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills title={skillTitles} description={skillDescriptions}/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
