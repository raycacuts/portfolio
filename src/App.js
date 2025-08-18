import React, { useState } from "react";
import "./App.css";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
        if (!query) return;

        const allElements = document.querySelectorAll("h2, h3, p, a, li");
        for (let el of allElements) {
            if (el.textContent.toLowerCase().includes(query)) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.style.backgroundColor = "#333";
                setTimeout(() => (el.style.backgroundColor = ""), 1500);
                return;
            }
        }
        alert("No match found for: " + query);
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {/* Header */}
            <header className="header">
                <h1 className="logo">Rui Zhang</h1>
                <form className="search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search anything..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Go</button>
                </form>
            </header>

            {/* Profile */}
            <section id="profile" className="section">
                <h2>Profile</h2>
                <div className="profile-layout">
                    <div className="profile-text">
                        <p>
                            I am a recent Master of Science graduate in Computer Science from the University of Victoria
                            with a strong focus on machine learning, reinforcement learning, and physics-based simulation.
                            I bring hands-on experience in developing multi-agent reinforcement learning controllers,
                            building full-stack web applications, and creating interactive 3D games with Unity and Unreal Engine.
                            My technical background spans Python, C++, C#, and modern frameworks such as TensorFlow, Keras, React,
                            and OpenCV, with practical experience deploying applications on AWS and Azure,
                            and training policies using Docker and Singularity on high-performance computing clusters.
                            I am passionate about applying advanced algorithms and simulation techniques
                            to solve complex real-world problems and developing innovative AI-driven applications.
                        </p>
                    </div>

                    <div className="profile-contact">
                        <p><strong>Email:</strong> <a href="mailto:ruiruicactus@hotmail.com">ruiruicactus@hotmail.com</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/raycacuts" target="_blank" rel="noreferrer">github.com/raycacuts</a></p>
                        <p><strong>Mobile:</strong> +1-778-835-8489</p>
                    </div>
                </div>
            </section>


            {/* Work Experience */}
            <section id="work" className="section">
                <h2>Work Experience</h2>

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>Research Assistant – GAIDG Lab</h3>
                        <p className="date">Jan 2021 – Apr 2025, Victoria</p>
                        <ul>
                            <li>Developed AI-driven simulations for crowd behavior and agent-based modeling.</li>
                            <li>Developed multi-agent hierarchical RL controllers for physics-based crowd simulation with articulated characters.</li>
                            <li>Designed state representations, rewards, and locomotion objectives for robust, morphology-agnostic control.</li>
                            <li>Augmented motion capture data and built visualization tools to support RL training and evaluation.</li>
                            <li>Tuned parameters to improve agent performance, stability, and generalization.</li>
                            <li>Proposed a framework separating high-level navigation from low-level locomotion for adaptable control.</li>
                            <li>Benchmarked emergent crowd behaviors against traditional methods using simulation metrics.</li>
                            <li>Deployed simulations in Docker and Singularity containers, training RL policies on the Digital Research Alliance
                                of Canada’s high-performance computing clusters.</li>
                            <li>Tech Stack: C++, Python, Physics Engine(Bullet), Blender, Linux, Docker, Singularity, TensorFlow, OpenCV, GitHub</li>

                        </ul>
                        <a href="https://github.com/raycacuts/demo" target="_blank" rel="noreferrer">
                            Demo →
                        </a>
                        <a href="https://github.com/GAIDG-Lab/TerrainRLSim" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>
                    <div className="media-group">
                        <video autoPlay loop muted playsInline className="media">
                            <source src="/videos/llc_humanoid.mp4" type="video/mp4" />
                        </video>
                        <video autoPlay loop muted playsInline className="media">
                            <source src="/videos/hlc.mp4" type="video/mp4" />
                        </video>
                        <video autoPlay loop muted playsInline className="media">
                            <source src="/videos/circle.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="subsection">
                    <h3>Fullstack Web Developer (Volunteer) & Assistant Manager – Chi Cha Teahouse</h3>
                    <p className="date">Jun 2021 – Aug 2022, Victoria</p>
                    <ul>
                        <li>Built a responsive React-based website for a small business, enabling customers to view the menu, rank menu
                            items, leave comments, and access directions via Google Maps integration.</li>
                        <li>Designed and implemented interactive UI components to improve customer engagement and ease of navigation.</li>
                        <li>Collaborated with store staff to gather requirements and deliver a user-friendly digital presence for the business.</li>
                        <li>Tech Stack: React, JavaScript, HTML, CSS, Flask (Python) / Node.js, AWS (S3, EC2), SQL</li>
                    </ul>
                </div>

                <div className="subsection">
                    <h3>Teaching Assistant – University of Victoria</h3>
                    <p className="date">Jan 2022 – Apr 2023, Victoria</p>
                    <ul>
                        <li>Assisted in Artificial Intelligence and Computer Animation courses.</li>
                        <li>Maintained interactive Q&A to enrich understanding of course materials.</li>
                        <li>Guided students in project topics and research completion.</li>
                        <li>Tech Stack: C++, Tensorflow, Jupyter</li>
                    </ul>
                </div>
            </section>

            {/* Projects */}

            <div className="subsection media-layout">
                <div className="text">
                    <div className="header-with-button">
                        <h3>UseBy Mobile App</h3>
                        <a
                            href="https://apps.apple.com/ca/app/useby/id6749925117"
                            target="_blank"
                            rel="noreferrer"
                            className="play-button-box"
                        >
                            View on App Store
                        </a>
                    </div>
                    <ul>
                        <li>Created and published <strong>UseBy</strong>, an iOS app that helps users track expiry dates for groceries, medicine, and cosmetics to reduce waste and save money.</li>
                        <li>Implemented <strong>AI-powered scanning</strong> using Google Cloud Vision and OpenAI APIs to automatically detect product names and expiry/product dates.</li>
                        <li>Built with <strong>React Native</strong> (JavaScript) and deployed backend on <strong>Google Cloud Platform (GCP)</strong> for scalable API integration.</li>
                        <li>Features include smart scanning, expiry tracking, custom reminders, categories, and ad-based monetization with subscription upgrades.</li>
                        <li>Tech Stack: React Native, JavaScript, Google Cloud Vision, OpenAI API, GCP, AdMob.</li>
                    </ul>
 
                </div>
                <div className="media-group">
    <img 
        src="/images/useby.jpg" 
        alt="UseBy Mobile App Screenshot" 
        className="media" 
        style={{ width: "50%", height: "auto" }} 
    />
</div>

            </div>


            <section id="projects" className="section">
                <h2>Projects</h2>

                <div className="subsection media-layout">
                    <div className="text">
                        <div className="header-with-button">
                            <h3>TravelTrack Web App</h3>
                            <a
                                href="https://witty-dune-0cb8be810.2.azurestaticapps.net/"
                                target="_blank"
                                rel="noreferrer"
                                className="play-button-box"
                            >
                                Open App
                            </a>
                        </div>
                        <ul>
                            <li>Built a full-stack travel logging web application with a React + Vite frontend and Node.js/Express backend, deployed on Azure Static Web Apps and Azure App Service.</li>
                            <li>Implemented interactive maps using Leaflet to mark visited cities and planned destinations with visual travel lines.</li>
                            <li>Added JWT-based authentication, secure API endpoints, and file uploads with Multer.</li>
                            <li>Tech Stack: React, JavaScript, Leaflet, CSS Modules, Node.js, Express, MongoDB, Azure.</li>
                        </ul>
                        <a href="https://github.com/raycacuts/TravelTrack" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>
                    <div className="media-group">
                        <img src="/images/TravelTrack.png" alt="TravelTrack Web App" className="media" />
                    </div>
                </div>

                <div className="subsection media-layout">
                    <div className="text">
                        <div className="header-with-button">
                            <h3>Gomoku AI Web App</h3>
                            <a
                                href="http://gomoku-ai-frontend.s3-website.us-east-2.amazonaws.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="play-button-box"
                            >
                                ▶ Play Online
                            </a>
                        </div>
                        <ul>
                            <li>Developed a full-stack Gomoku web application with React frontend and Python Flask backend, deployed on
                                AWS S3 and EC2.</li>
                            <li>Integrated a reinforcement learning AlphaZero AI agent to provide real-time gameplay via REST API.</li>
                            <li>Designed game logic, AI-player interaction, and responsive UI.</li>
                            <li>Tech Stack: React, Javascript, HTML, CSS, Python, AWS (S3, EC2)</li>
                        </ul>
                        <a href="https://github.com/raycacuts/gomokuai" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>
                    <div className="media-group">
                        <img src="/images/gomoku.png" alt="Gomoku Web App Screenshot" className="media" />
                    </div>
                </div>

                

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>3D Game Development (Unity & Unreal Engine)</h3>
                        <ul>
                            <li>Developed first-person shooter and action (Souls-like) games using Unity (C#) and Unreal Engine
                                (C++/Blueprints), featuring multi-level design, dynamic environments, and interactive gameplay elements.</li>
                            <li>Implemented player abilities (combat, weapon switching, movement, dodge/jump), enemy AI with navigation and
                                varied behaviors, and player-enemy combat interactions.</li>
                            <li>Integrated animation montages, special effects (Unity particles, Unreal Niagara), MetaSounds, audio, and custom
                                UI to deliver polished and immersive game experiences.</li>
                            <li>Tech Stack: Unity, Unreal Engine, Visual Studio, C++, C#</li>
                        </ul>
                        <a href="https://github.com/raycacuts/FPSGame" target="_blank" rel="noreferrer">
                            Unity FPS Game GitHub →
                        </a>
                        <a href="https://github.com/raycacuts/ActionGame" target="_blank" rel="noreferrer">
                            Unreal Action Game GitHub →
                        </a>
                    </div>
                    <div className="media-group">
                        <img src="/images/fpsgame.png" alt="Unity FPS Game" className="media" />
                        <img src="/images/actiongame.png" alt="Unreal Action Game" className="media" />
                    </div>
                </div>

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>Singing Voice Separation</h3>
                        <ul>
                            <li>Compared and reproduced results of several papers of singing voice separation, and applied various machine
                                learning techniques: Recurrent Neural Network, Convolutional Neural Network, and Gaussian Mixture Model.</li>
                            <li>Utilized MUSDB18 dataset, created time-frequency spectrograms and Ideal Binary Masks by signal processing as
                                the data and trained the machine learning models.</li>
                            <li>Built the models based on the architectures in the papers, successfully implemented all models and assured the
                                accuracy.</li>
                            <li>Tech Stack: Python, TensorFlow/Keras, Librosa, nussl, NumPy, SciPy, Google Colab, MUSDB18 Dataset</li>
                        </ul>
                        <a href="https://github.com/raycacuts/Singing-Voice-Separation" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>

                    {/* First Pair */}
                    <div className="audio-comparison">
                        <div className="audio-item">
                            <p>Original Audio</p>
                            <audio controls>
                                <source src="/audios/origin.m4a" type="audio/mp4" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <div className="arrow">➡</div>

                        <div className="audio-item">
                            <p>Separated Audio</p>
                            <audio controls>
                                <source src="/audios/separate.m4a" type="audio/mp4" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>

                    {/* Second Pair */}
                    <div className="audio-comparison" style={{ marginTop: "20px" }}>
                        <div className="audio-item">
                            <p>Original Audio 2</p>
                            <audio controls>
                                <source src="/audios/origin2.m4a" type="audio/mp4" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <div className="arrow">
                            ➡ 
                        </div>

                        <div className="audio-item">
                            <p>Separated Audio 2</p>
                            <audio controls>
                                <source src="/audios/separate2.m4a" type="audio/mp4" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>

                

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>Ray Tracing System</h3>
                        <ul>
                            <li>Utilized C++ to implement a ray tracing system and maintained its functionalities.</li>
                            <li>Conducted research and reproduced the features of the ray tracing system, including: Antialiasing, several types
                                of Multisampling, Fish-eye Camera, Area Light, Diffuse Shading, Ambient Occlusion, Glossy Reflection, Path
                                Tracing, Transparency, and Shadows.</li>
                            <li>Tech Stack: C++, C, OpenCV, Visual Studio</li>
                        </ul>
                        <a href="https://github.com/raycacuts/Ray-Tracing" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>
                    <div className="media-group">
                        <img src="/images/render.bmp" alt="Ray Tracing Render" className="media" />
                    </div>
                </div>

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>Generative Image Manipulation Model</h3>
                        <ul>
                            <li>Conducted research on a generative model: SinGAN, which is based on GAN model and can be used for a wide
                                range of image manipulation tasks.</li>
                            <li>Studied the architecture and experiment design, and reconstructed the model with TensorFlow.</li>
                        </ul>
                    </div>
                    <div className="media-group">
                        <img src="/images/SinGAN.png" alt="Ray Tracing Render" className="media" />
                    </div>
                </div>

                <div className="subsection media-layout">
                    <div className="text">
                        <h3>Simple Operating System Project</h3>
                        <ul>
                            <li>Implement a simple shell program similar to the Unix shell bash.</li>
                            <li>Construct a simulation of an automated control system with multi-tasking.</li>
                            <li>Implement utilities that perform operations on a file system similar to FAT file system.</li>
                            <li>Tech Stack: C, Linux</li>
                        </ul>
                        <a href="https://github.com/raycacuts/Operating-System" target="_blank" rel="noreferrer">
                            View on GitHub →
                        </a>
                    </div>
                
                </div>

                
            </section>

            {/* Education */}
            <section id="education" className="section">
                <h2>Education</h2>
                <div className="subsection">
                    <h3>MSc in Computer Science</h3>
                    <p className="date">University of Victoria, 2022 – 2025</p>
                    <p>Research: Reinforcement Learning, Crowd Simulation, Robotics, OpenCV, Blender, AI, Games Lab Member(GAIDG)</p>
                </div>
                <div className="subsection">
                    <h3>BSc (Honours) in Computer Science</h3>
                    <p className="date">University of Victoria, 2019 – 2021</p>
                    <p>GPA: 7.72/9</p>
                    <p>Dean’s Graduation List with Distinction</p>

                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section">
                <h2>Skills Summary</h2>
                <ul>
                    <li><strong>Languages:</strong> Python, C, C++, C#, SQL, Bash, Java, Ruby, Racket, SML, JavaScript, HTML, CSS</li>
                    <li><strong>Frameworks:</strong> React, Scikit, OpenCV, OpenGL, TensorFlow, Keras</li>
                    <li><strong>Tools:</strong> MongoDB, MySQL, Docker, Singularity, GitHub, CI/CD (GitHub Actions, Jenkins)</li>
                    <li><strong>Platforms:</strong> Linux, Web, Windows, GitHub, AWS, Azure, GCP</li>
                    <li><strong>Soft Skills:</strong> Research, Event Management, Writing, Time Management</li>
                </ul>
            </section>

            {/* Back to Top */}
            <button className="back-to-top" onClick={backToTop}>↑</button>

            {/* Footer */}
            <footer className="footer">
                © {new Date().getFullYear()} Rui Zhang. All Rights Reserved.
            </footer>
        </div>
    );
}

export default App;
