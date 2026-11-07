import './Section.css';

// Mostra um título e, embaixo, qualquer conteúdo que for colocado dentro dele
function Section({ title, titleAlign = 'left', link, children }) {
  const classeTopo = 'section-topo section-' + titleAlign;

  return (
    <section className="section">
      <div className={classeTopo}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      {children}
    </section>
  );
}

export default Section;