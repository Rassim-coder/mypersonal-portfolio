import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import {motion} from "framer-motion";


const highlights = [
    {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  }, 
];




export const About = () => { 
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        
        <motion.div 
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*left column*/}
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I’m a passionate Software Engineer who builds scalable, 
                        high-performance web applications that help businesses automate operations, 
                        improve user experience, and grow faster.
                    </p>
                    <p>
                        My main stack includes React, JavaScript, Node.js, Express, and PostgreSQL, 
                        and I specialize in building REST APIs, SaaS-style platforms, dashboards, 
                        and business management systems. I focus on writing clean, maintainable code, 
                        designing efficient system architectures, and delivering solutions that are secure, fast, and production-ready.
                    </p>
                    <p>
                        I’ve worked on real-world projects such as employee leave management systems, 
                        database-driven business tools, and automation platforms, always with a strong emphasis on performance, 
                        scalability, and business impact.
                    </p>
                    <p>
                       What sets me apart is my ability to understand both technical and business needs — I don’t just build software, 
                       I build solutions that solve real problems, save time, and create measurable value. 
                    </p>
                    <p>
                        If you’re looking for a Software Engineer who is reliable, detail-oriented, and focused on delivering real results, 
                        I’m ready to help bring your ideas to life.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                   <p className="text-lg font-medium italic text-foreground">
                     "My mission is to turn ideas into powerful digital 
                     products that create real business value and measurable results."
                    </p>   
                </div>
            </div>
            {/*right column highlights*/}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 "
                                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 group-hover:animate-float">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}

            </div>


           </div>
        </motion.div>
    </section>
    );
};