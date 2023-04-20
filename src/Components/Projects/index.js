import { ProjectSquare } from "../ProjectSquare";
import './projects.css'

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-section-header">
                <h1>Projects</h1>
                <h2>(Hover over the squares to see a preview)</h2>
            </div>

            <div className="scheme">
                <ProjectSquare project='wedding' name='Wedding Invitation' subtitle='(real usage)'/>
                <ProjectSquare project='etch-a-sketch' name='Etch - a - Sketch' link='https://kevincruxz.github.io/etch-a-sketch/' />
                <ProjectSquare project='calculator' name='Calculator'/>
                <ProjectSquare project='ssc' name='SSC (Online Game)'/>
                <ProjectSquare project='hangman' name='hangman'/>
            </div>
        </div>
    );
} 