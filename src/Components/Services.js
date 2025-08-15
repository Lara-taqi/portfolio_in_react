import { SiSpringsecurity } from "react-icons/si";
import { DiHtml53dEffects } from "react-icons/di";
function Services(){
    return(
        <>
        <section className="services" id="Services">
        <div className="Services-sec">
            <h1>SERVICES</h1>
             </div>
        <div className="icon">
            <div className="text_ser"><SiSpringsecurity />
            <h3>SOC Analyst</h3>
            <p>As a SOC Analyst, I specialize in real-time threat monitoring,detection,
                 and incident response to safeguard digital environments.
                  Using SIEM tools and threat intelligence,
                   I analyze security logs, manage alerts,
                    and help ensure systems remain secure
                     and resilient against cyber threats.</p>
            </div>
                        <div className="text_ser"><SiSpringsecurity />
            <h3>Penetration Testing</h3>
            <p>Conducted ethical hacking assessments to identify 
                and exploit security vulnerabilities in 
                web applications,
                 networks, and systems. Simulated real-world cyberattacks
                  using tools like Burp Suite,
                   Nmap, and Metasploit
                  , and provided detailed reports with remediation steps.
                   Focused on OWASP Top 10. </p>
            </div>

            <div className="text_ser"><DiHtml53dEffects />
            <h3>Web Development</h3>
            <p>Built responsive and user-friendly websites
                 using modern web technologies like HTML, CSS, JavaScript,
                  and React. Focused on performance, accessibility, and clean code.
                 implemented dynamic features, and followed best practices
                  for SEO and responsive design.</p>
            </div>


        </div>
</section>
        </>
    )
}
export default Services;

