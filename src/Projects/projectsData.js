import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/uptaskmern.jpg";
import projectCuatro from "../assets/projectFour.jpg";
import bebidas from "../assets/bebidas.png" 
import noticias from "../assets/noticias.png" 
import clima from "../assets/clima.png" 
import auth5 from "../assets/auth5.png" 
import calorias from "../assets/calorias.png" 
import java from "../assets/java.png" 
import ticket from "../assets/ticket.png" 
import postal from "../assets/postal.png" 
import photobooth from "../assets/photobooth.png" 
import poemas from "../assets/poemas.png" 
import guitar from "../assets/guitarsale.png" 
import "../styles/projectMenu.css";

const projects = {
  1: [
    {
      title: "Schedule appointments",
      image: projectOne,
      description: (
        <>
          <p>
            Website to schedule veterinary appointments, where you can edit the
            date and delete the scheduled appointment.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/citas_react_vite",
      demo: "https://citas-para-veterinaria.netlify.app/",
    },
    {
      title: "Expense Planner",
      image: projectTwo,
      description: (
        <>
          <p>
            Website where you can plan your expenses easily and fast. It also
            helps you filter by expenses and reset the app.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/Presupuestos",
      demo: "https://app-para-planificar-gastos.netlify.app/",
    },
    {
      title: "Cryptocurrency Converter",
      image: projectThree,
      description: (
        <>
          <p>
            Website for converting cryptocurrencies easily and quickly and
            updated.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/Criptomonedas",
      demo: "https://app-de-conversion-criptomonedas.netlify.app/",
    },
    {
      title: "Task Manager",
      image: projectFive,
      description: (
        <>
          <p>
            Website where you can add or manage your tasks, add collaborators,
            where as an administrator you have more options than just being a
            collaborator.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/uptask_mern_",
      demo: "https://merntask-frontend-theta.vercel.app/",
    },
    {
      title: "Drink Finder",
      image: bebidas,
      description: (
        <>
          <p>
            Website to search for different types of drinks and instructions to
            prepare them
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/BuscadorBebidas",
      demo: "https://buscador-bebidas-ashy.vercel.app/",
    },
    {
      title: "News App",
      image: noticias,
      description: (
        <>
          <p>
            Website where you can find the most relevant news on different
            topics, such as entertainment, sports, etc.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/NoticiasApi",
      demo: "https://noticias-api-black.vercel.app/",
    },
  ],
  2: [
    {
      title: "Netflix CLONE",
      image: projectFour,
      description: (
        <>
          <p>
            Netflix clone, with functional components, such as adding to
            favorites, creating users, movie list, showing a brief description.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/Netflix-clone",
      demo: "https://paginanetflixclone.vercel.app/auth/",
    },
    {
      title: "Calories counter",
      image: calorias,
      description: (
        <>
          <p>
            Website where you can keep track of the calories you burn or gain
            during the day.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/Contador-de-calorias",
      demo: "https://contador-de-calorias.vercel.app/",
    },
    {
      title: "NextAuth 5",
      image: auth5,
      description: (
        <>
          <p>
            Website to implement NextAuth 5, with email verification, 2-step
            verification, password change, authorization with gmail or github
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/NextAuthVS",
      demo: "https://next-auth-vs.vercel.app/",
    },
    {
      title: "Weather App",
      image: clima,
      description: (
        <>
          <p>
            Website where you can be updated on the weather status in real time
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/clima-react-typescript",
      demo: "https://clima-typescript.netlify.app/",
    },
  ],
  3: [
    {
      title: "Test Backend with Java",
      image: java,
      description: (
        <>
          <p>Test code to create an interface to add movies in the backend</p>
        </>
      ),
      github: "https://github.com/GlendyT/screenmatch-inmersionjava",
      demo: "https://github.com/GlendyT/screenmatch-inmersionjava",
    },
  ],
  4: [
    {
      title: "Guitar Sale",
      image: guitar,
      description: (
        <>
          <p>Guitar sales website, with database in Strapi (deactivated)</p>
        </>
      ),
      github: "https://github.com/GlendyT/GuitarLA-Astro",
      demo: "https://guitar-la-astro-rho.vercel.app/",
    },
  ],
  5: [
    {
      title: "PhotoStrip",
      image: photobooth,
      description: (
        <>
          <p>
            Website where you can add your favorite photos, adjust the desired
            size with a modal and create a photobooth strip online
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/photobooth-strip",
      demo: "https://photobooth-strip.vercel.app/",
    },
    {
      title: "Badge Birthday",
      image: postal,
      description: (
        <>
          <p>
            Website where you can write a phrase and a postcard will be
            generated.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT/Yoongi-project",
      demo: "https://yoongifreelancer.vercel.app/",
    },
    {
      title: "Dedication of Poems",
      image: poemas,
      description: (
        <>
          <p>Website where you can write your poem</p>
        </>
      ),
      github: "https://github.com/GlendyT/Owly-poems",
      demo: "https://owlyspace.netlify.app/",
    },
    {
      title: "Ticket Generator",
      image: ticket,
      description: (
        <>
          <p>Website where you can generate your personalized ticket</p>
        </>
      ),
      github: "https://github.com/GlendyT/Jhope-project",
      demo: "https://jhope-project1.vercel.app/",
    },
  ],
  6: [
    {
      title: "Wanna see more projects",
      image: projectCuatro,
      description: (
        <>
          <p>
            If you are interesting to see more projects that I have done, see my
            repository on my GitHub Account.
          </p>
        </>
      ),
      github: "https://github.com/GlendyT?tab=repositories",
    },
  ],
};

export default projects;
