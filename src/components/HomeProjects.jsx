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
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                projectUrl="https://example.com/projet1"
            />
            <ProjetCard
                title="Morgane Peroy - Graphiste"
                tags={["React", "Tailwind"]}
                description="Site vitrine pour une graphiste freelance, mettant en avant son portfolio et ses services de design graphique."
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                projectUrl="https://example.com/projet2"
            />
            <ProjetCard
                title="Trouve ton artisan!"
                tags={["React", "Tailwind"]}
                description="Plateforme de mise en relation entre artisans locaux et clients, permettant de trouver facilement des professionnels pour divers services."
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                projectUrl="https://example.com/projet3"
            />
    
        
</div>
</div>





        </>
    );
}

export default HomeProjects;