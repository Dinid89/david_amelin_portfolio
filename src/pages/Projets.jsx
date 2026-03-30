import React from "react";
import ProjetCard from "../components/ProjetCard";

function Projets() {
    return (
        <>
            <div className="bg-gradient-to-b from-black to-gray-900 text-white py-5">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4 text-center">Mes projets</h1>
                    <p className="text-xl text-center mb-8">
                        Découvrez mes derniers projets et réalisations.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black p-5">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 py-10">
                    <ProjetCard
                        title="Outland Clothing"
                        tags={["React", "JavaScript", "Node.js", "PHPMyAdmin", "MySQL", "Bootstrap"]}
                        description="Site fictif de vente en ligne de vêtements et accessoires Outdoor"
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
                    description="Plateforme de mise en relation entre artisans locaux et clients."
                    imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                    projectUrl="https://example.com/projet3"
                />
            </div>
            </div>
        </>
    );  
}

export default Projets;