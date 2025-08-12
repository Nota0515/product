import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-0">
      <div className="section-container">
        <p className="flex justify-center text-gray-600 text-sm">
          Design by someone cause am not a designer. Made with{' '}
          <Heart className="inline h-4 w-4 mx-1" color="#FE5C02" /> by&nbsp;
          <a 
            href="https://x.com/Akhilesh_nota" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pulse-500 hover:underline"
          >
            pixels.akhil
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
