import { useEffect } from "react";

export default function LinkedInCard(props : any) {
    const theme = props.theme;

    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);   
    return (
        <div
            className="badge-base LI-profile-badge"
            data-locale="fr_FR"
            data-size="large"
            data-theme={theme}
            data-type="HORIZONTAL"
            data-vanity="clemencechomel"
            data-version="v1">
            <a
                className="badge-base__link LI-simple-link"
                href="https://fr.linkedin.com/in/clemencechomel?trk=profile-badge">
            </a>
        </div>
    );
}