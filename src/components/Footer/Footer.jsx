import './Footer.css'
const Footer = () => {
  return(
  // src/components/Footer/Footer.jsx
 // Import the CSS for the Footer
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
    </footer>
  );
}
export default Footer;