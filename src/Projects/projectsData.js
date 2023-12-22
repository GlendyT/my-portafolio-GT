import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"
import projectFour from "../assets/project-4.png"
import projectCuatro from "../assets/projectFour.jpg"
import "../styles/projectMenu.css"

const projects = {
    1: {
        title: "Sitio web de una Veterinaria para agendar citas",
        image: projectOne,
        description:( 
            <> 
             <p>Sitio web para agendar citas de una veterinaria, donde puedes editar la fecha y eliminar la cita programada. Proyecto creado con la ayuda de UDEMY, Juan Pablo De la torre Valdez.
             </p>
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
             <p>Pagina web donde puedes planificar tus gastos de forma facil y rapida. Tambien te ayuda a filtrar por gastos y resetear la app. Proyecto creado con la ayuda de UDEMY, Instructor Juan Pablo De la torre Valdez.</p>
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
             <p>Sitio web para la conversión de criptomonedas de forma fácil, rápida y actualizada. Proyecto creado con la ayuda de UDEMY,  Instructor Juan Pablo De la torre Valdez. </p>
            </>
        ),
        github: "https://github.com/GlendyT/Criptomonedas",
        demo: "https://app-de-conversion-criptomonedas.netlify.app/"
    },
    4: {
        title: "Netflix CLONE",
        image: projectFour,
        description:( 
            <> 
             <p>
                Clone de Netflix, incluye las funciones: login, sing up, add to favorites, more info y su version para telefono. Fullstack utilizando Tailwind CSS, NEXT.JS, Prisma, NextAuth,Guarda la informacion en MONGODB y el deployment esta hecho en VERCEL. Proyecto creado con la ayuda de YouTuber Code with Antonio, adjunto el video.<a 
              href="https://www.youtube.com/watch?v=mqUN4N2q4qY"
              className="link"
              target='_blank' 
              rel='noopener noreferrer'
              >Ver Video</a></p>
            </>
        ),
        github: "https://github.com/GlendyT/Netflix-clone",
        demo: "https://paginanetflixclone.vercel.app/auth/"
    },
    5: {
        title: "Wanna see more projects",
        image: projectCuatro,
        description:( 
            <> 
             <p>If you are interesting to see more projects that I have done, see my repository on my GitHub Account.</p>
            </>
        ),
        github: "https://github.com/GlendyT?tab=repositories",
    },
};
//proyectos agregados

export default projects;