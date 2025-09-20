// Website Configuration File
// Edit the values below to customize your website content

const CONFIG = {
    // Site Metadata
    site: {
        title: "Dr. Jonathan J Molina - Biomedical Science & Entrepreneurship",
        description: "Bridging the gap between scientific discovery and market-ready innovation.",
        author: "Jonathan J Molina"
    },

    // Personal Information
    personal: {
        name: "Dr. Jonathan J Molina",
        title: "Ph.D. in Biomedical Sciences | M.S. in ESTEEM",
        bio: "Bridging the gap between scientific discovery and market-ready innovation. I leverage my deep scientific expertise to identify, develop, and commercialize impactful technologies.",
        profileImage: "https://placehold.co/128x128/e2e8f0/64748b?text=Jonathan+Molina",
        professionalImage: "https://placehold.co/500x350/e2e8f0/64748b?text=Professional+Photo"
    },

    // Navigation Menu
    navigation: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
    },

    // Hero Section
    hero: {
        ctaButton: "Explore My Projects"
    },

    // About Section
    about: {
        title: "About Me",
        paragraph1: "I am a recent Ph.D. graduate in Integrated Biomedical Sciences from the University of Notre Dame, with a focus on dissecting the inflammatory background during catheter-associated urinary tract infections. My doctoral work led to the development of novel catheters to reduce inflammation and infections, and resulted in several high-impact publications.",
        paragraph2: "I am currently pursuing a Master's degree in Engineering, Science, and Technology Entrepreneurship (ESTEEM) at Notre Dame. I'm leveraging my scientific expertise to conduct market research, develop strategic launch plans, and identify key market segments within the MedTech industry. My passion is to translate cutting-edge scientific discoveries from the lab into viable, impactful business solutions."
    },

    // Projects Section
    projects: {
        title: "Featured Work",
        items: [
            {
                title: "PhD Research: Fibrinolytic-deficiencies",
                description: "My doctoral research focused on how defects in the host's fibrinolytic system can predispose them to septicemia from catheter-associated UTIs. This work was published in Nature Communications."
            },
            {
                title: "ESTEEM Capstone Project: Parkview Health",
                description: "I led a project to understand the market value of an IP developed by a urologist, conducting 50 interviews and proposing a strategic launch plan into the MedTech industry."
            },
            {
                title: "Post-Doctoral Research: Spatial Proteomics",
                description: "I utilized Xenium spatial proteomics to analyze the immune milieu in bladder tissues, refining transcriptomic methodologies to generate rapid and actionable insights for critical projects."
            },
            {
                title: "Selected Publications",
                description: "Authored and co-authored over 8 high-impact publications, effectively communicating complex scientific findings to diverse audiences."
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Let's Connect",
        description: "I'm always open to new opportunities and collaborations. Feel free to connect with me on LinkedIn or via email.",
        links: {
            linkedin: "https://linkedin.com/in/JonathanJMolina",
            github: "#", // Replace with your GitHub URL
            email: "jmolina@nd.edu"
        }
    },

    // Footer
    footer: {
        copyright: "Jonathan J Molina. All Rights Reserved."
    }
};

// Make CONFIG available globally
window.CONFIG = CONFIG;
