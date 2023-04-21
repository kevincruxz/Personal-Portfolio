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
                <ProjectSquare project='calculator' name='Calculator' link='https://kevincruxz.github.io/calculator/' />
                <ProjectSquare project='ssc' name='SSC (Online Game)' link='https://kevincruxz.github.io/sword_shield_crossbow-game/' />
                <ProjectSquare project='hangman' name='hangman' link='https://replit.com/@kevincruxz/hangman#README.md' />
            </div>
        </div>
    );
} 