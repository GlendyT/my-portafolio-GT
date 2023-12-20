import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"

const projects = {
    1: {
        title: "Sitio web de una Veterinaria para agendar citas",
        image: projectOne,
        description:( 
            <> 
             <p>Sitio web para agendar citas de una veterinaria</p>
            </>
        ),
        github: "https://github.com/GlendyT/citas_react_vite",
        demo: "https://citas-para-veterinaria.netlify.app/"
    },
    2: {
        title: "Sitio web para planificar gastos",
        image: projectTwo,
        description:( 
            <> 
             <p>Pagina web donde puedes planificar tus gastos de forma facil y rapida</p>
            </>
        ),
        github: "https://github.com/GlendyT/Presupuestos",
        demo: "https://app-para-planificar-gastos.netlify.app/"
    },
    3: {
        title: "Sitio web para conversion de criptomonedas",
        image: projectThree,
        description:( 
            <> 
             <p>Sitio web para la conversion de criptomonedas de forma facil, rapida y actualizada </p>
            </>
        ),
        github: "https://github.com/GlendyT/Criptomonedas",
        demo: "https://app-de-conversion-criptomonedas.netlify.app/"
    },
};
//proyectos agregados

export default projects;