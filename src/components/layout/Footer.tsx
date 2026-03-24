import data from "@/data/data.json";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <img src={logo} alt={data.business.name} className="h-16 mx-auto mb-4" />
      <p className="text-primary-foreground/60 font-body text-sm">
        © {new Date().getFullYear()} {data.business.name}. All rights reserved.
      </p>
      <p className="text-primary-foreground/40 text-xs mt-2">
        {data.business.contact.address}
      </p>
    </div>
  </footer>
);

export default Footer;
