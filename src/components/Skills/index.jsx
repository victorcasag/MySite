import styles from "./Skills.module.scss";
import images from "./images";

const skillsData = [
    { name: "Java", img: images.java },
    { name: "Android", img: images.android },
    { name: "Spring Boot", img: images.spring },
    { name: "SQL", img: images.sqlServer },
    { name: "MongoDB", img: images.mongodb }, 
    { name: "REST API", img: images.api },
    { name: "Git", img: images.git }, 
    { name: "Docker", img: images.docker },
    { name: "AWS Cloud", img: images.aws },
    { name: "Visual Basic", img: images.visualBasic }, 
    { name: "C#", img: images.csharp },
    { name: "NodeJS", img: images.nodejs },
    { name: "React", img: images.react },
    { name: "HTML", img: images.html }, 
    { name: "CSS", img: images.css }, 
    { name: "JavaScript", img: images.js },  
];

export default function Skills() {
    return (
        <div id="Skills" className={`${styles.skills} container`}>
            <h1 className={styles.skillsTitle}>Habilidades</h1>
            <div className={styles.skillsContainer}>
                {skillsData.map(skill => (
                    <div className={styles.skillItem} key={skill.name}>
                        <img src={skill.img} alt={skill.name} className={styles.skillImage} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
