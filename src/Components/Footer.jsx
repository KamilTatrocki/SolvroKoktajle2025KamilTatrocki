import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()}  Wszelkie prawa zastrzeżone.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="" className="hover:underline">Polityka prywatności</a>
            </li>
            <li>
              <a href="" className="hover:underline">Regulamin</a>
            </li>
            <li>
              <a href="" className="hover:underline">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;