function AboutDescription() {
    return (

        <>
            <div className="flex flex-col  text-[#959595]">
                <h2 className="text-2xl mb-4">Summary</h2>
                <p>Introduce yourself, your team (if you have) and you background.</p>
                <p>Briefly describe about the long term and short term goal of your brand and why it's important to you.</p>
                <h2 className="text-2xl mb-4 mt-8">The impact</h2>
                <ul className="list-disc pl-5">
                    <li>
                        Share more about your brand and highlight how contributions can make a meaningful impact
                    </li>
                    <li>
                        Explain why your brand is important to contributions and how it positively influences the world.
                    </li>
                    <li>
                        Showcase your brand's proven success and past achievements.
                    </li>
                    <li>
                        Help people connect with your brand's mission and build trust by sharing authentic stories and experiences.
                    </li>
                </ul>
                <h2 className="text-2xl mb-4 mt-8">The story</h2>
                <ul className="list-disc pl-5">
                    <li>Share the vision of your organization and the journey that led to its stablishment</li>
                </ul>
            </div>
        </>
    );
}

export default AboutDescription;