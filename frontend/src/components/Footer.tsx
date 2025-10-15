import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-zinc-700/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg text-gray-700">BlogSphere</h3>
            <p className="text-sm text-gray-500">
              Build your writing habit with daily streaks and an engaged
              community.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm text-gray-700">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500 ">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm text-gray-700">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500 ">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm text-gray-700">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-sm">
          <p>&copy; 2025 BlogSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
