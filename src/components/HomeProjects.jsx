import ProjetCard from "./ProjetCard";

function HomeProjects() {
    return (
        <>

        <div className="bg-gradient-to-b from-gray-900 to-black p-5">

        <h2 className="text-white text-center text-2xl font-bold p-5">Projets Récents</h2>


        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
            
            <ProjetCard
                title="Outland Clothing"
                tags={["React", "JavaScript", "Node.js", "PHPMyAdmin", "MySQL", "Bootstrap"]}
                description="Site fictif de vente en ligne de vêtements et accessoires Outdoor "
                imageUrl="https://outland-beta.vercel.app/assets/outland%204%20transparent-gtrvm1us.png"
                projectUrl="https://outland-beta.vercel.app/"
            />
            <ProjetCard
                title="Morgane Peroy - Graphiste"
                tags={["ViteJS", "Tailwind"]}
                description="Site vitrine pour une graphiste freelance, mettant en avant son portfolio et ses services de design graphique."
                imageUrl="https://morgane-peroy-graphiste.vercel.app/"
                projectUrl="https://morgane-peroy-graphiste.vercel.app/"
            />
            <ProjetCard
                title="Trouve ton artisan!"
                tags={["React", "Bootstrap", "HTML", "CSS", "JavaScript", "PHPMyAdmin", "MySQL"]}
                description="Plateforme de mise en relation entre artisans locaux et clients."
                imageUrl="https://amelin-david-devoir-8-tta.vercel.app/Logo.png"
                projectUrl="https://amelin-david-devoir-8-tta.vercel.app/"
            />
    
        
</div>
</div>





        </>
    );
}

export default HomeProjects;