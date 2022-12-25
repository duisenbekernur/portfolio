const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Asnata, Kazakhstan</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+77002932158">+7 (700) 293-21-58</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:duisenbekernur@outlook.com">
                duisenbekernur@outlook.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
