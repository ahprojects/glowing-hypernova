export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2>
                        <span className="text-gold">İDEAL</span> AV
                    </h2>
                    <p>
                        Tarihi Büyüksaat Civarı, 23006 Sk. No: 10-12<br />
                        Seyhan / ADANA
                    </p>
                    <div className="social-links">
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Hızlı Menü</h4>
                    <ul>
                        <li>
                            <a href="#">Kurumsal</a>
                        </li>
                        <li>
                            <a href="#">Kalite Politikamız</a>
                        </li>
                        <li>
                            <a href="#">Av Yönetimi & MAK</a>
                        </li>
                        <li>
                            <a href="#contact">İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 İdeal Av Spor Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}
