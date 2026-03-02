import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
    {
        title: "Plumber Website",
        description: "A website for a local plumber business, showcasing their services and contact information.",
        image: "/proplumb.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
        link: "https://plumbingweb-one.vercel.app/",
        github: "https://github.com/Rassim-coder/plumbingweb",
    },

    {
        title: "Datastructure Visualizer",
        description: "A website for visualizing data structures and algorithms.",
        image: "/algotp.png",
        tags: ["HTML", "CSS", "JavaScript", "Vis.js"],
        link: "https://algodatastructureproject.vercel.app/",
        github: "https://github.com/Rassim-coder/ALGO-TP-main",
    },

    {
        title: "Air Algerie Leave management system",
        description: "A web application for Air Algerie company, managing employee leave requests.",
        image: "/airalgerie.png",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
        link: "/",
        github: "/",
    },
    {
        title: "Video editor portfolio",
        description: "A website portfolio for showcasing video editing projects and skills with email contact service.",
        image: "/videoeditor.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
        link: "https://videoeditor-jade.vercel.app/",
        github: "https://github.com/Rassim-coder/videoeditor",
    },

]



export const Projects = () => { 
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/*baclground glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/*section header*/}  
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppecase animate-fade-in">
                Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                here are some of the projects I’ve worked on that demonstrate my skills and experience as a Software Engineer. 
                Each project is a real-world example of how I’ve applied my technical expertise to solve problems, 
                create value, and deliver results for businesses and users.
            </p>
          </div>
          {/*projects grid*/}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md;row-span-1"
                               style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                    {/*image*/}
                    <div className="relative overflow-hidden aspect-video">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div
                         className="absolute inset-0 
                            bg-gradient-to-t from-card via-card/50
                            to-transparent opacity-60"
                        />
                        {/*Overlay links*/}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5"/>

                            </a >
                            <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <Github className="w-5 h-5"/>

                            </a>
                        </div>

                    </div>
                    {/*content*/}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3  className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}</h3>
                            <ArrowUpRight 
                             className="w-5 h-5 
                             text-muted-foreground group-hover:text-primary
                             group-hover:translate-x-1 
                             group-hover:-translate-y-1 transition-all"/>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                            <span 
                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                            key={tagIdx}>
                                {tag}</span>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
          </div>
          {/* View all projects call to action*/}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Rassim-coder">
            <AnimatedBorderButton>
                View all Projects
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
            </a>
          </div>
        </div>

    </section>);
};