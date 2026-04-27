import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
}

const SEO = ({ 
    title = 'Coffee Time | Premium Coffee & Artisanal Food',
    description = 'Experience the perfect blend of rich coffee, artisanal pizzas, and gourmet burgers in a warm, inviting atmosphere at Coffee Time.'
}: SEOProps) => {
    useEffect(() => {
        document.title = title;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
