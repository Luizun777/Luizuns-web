
export const Header = () => {
  const subTitle: string = '<Developer />';
  return (
    <header className="header">
      <div className="title__container">
        <h1 className="header__title">💻 Luizun's Page</h1>
        <h2 className="header__sub__title">{subTitle}</h2>
      </div>
      <div className="header__pagination">
        <button className="header__pagination-button">
          About me
        </button>
        <button className="header__pagination-button">
          Experience
        </button>
        <button className="header__pagination-button">
          Proyects
        </button>
        <button className="header__pagination-button">
          Contact
        </button>
        <button className="header__pagination-button">
          About web
        </button>
      </div>
    </header>
  )
}
