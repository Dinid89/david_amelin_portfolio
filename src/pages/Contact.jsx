function Contact() {
    return (
        <>
        <div className="bg-gradient-to-b from-black to-gray-900 text-white py-5">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4 text-center">Contactez-moi</h1>
                <p className="text-xl text-center mb-8">Vous avez une question ou souhaitez collaborer ? N'hésitez pas à me contacter !</p>
                <p className="text-center">Vous pouvez me contacter via le formulaire ci-dessous ou par email à : <a href="mailto:david.amelin62@gmail.com" className="text-blue-500 hover:underline">david.amelin62@gmail.com</a></p>
            </div>
        </div>

        <section id="contact" className="bg-gradient-to-b from-gray-900 to-black py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-800 to-black text-white p-8 rounded-lg shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Nom</label>
                            <input type="text" id="name" name="name" className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre nom" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" name="email" className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre email" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                            <textarea id="message" name="message" rows="4" className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre message" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition">Envoyer</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
        </>
    );
}

export default Contact;