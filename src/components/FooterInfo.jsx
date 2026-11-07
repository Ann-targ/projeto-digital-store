function FooterInfo({ title, informations }) {
  return (
    <div className="footer-info">
      <h3>{title}</h3>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>
            {item.link ? <a href={item.link}>{item.text}</a> : item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInfo;