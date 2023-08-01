import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Contact } from "../../Interfaces/languageInterface"
import { useContext } from 'react';
import { LanguageContext } from "../../context/languageContext/languageContext ";
import { Title } from "../../components/Title";
import { useAnimation } from "../../hooks/useAnimation";

export const ContactScreen = () => {

  const { animateFadeIn } = useAnimation();
  const { languageRed: { contactList, menu } } = useContext(LanguageContext);

  const listContact = (contact: Contact) => {
    return (
      <li key={contact.text}>
        <span className="icon">
          <FontAwesomeIcon icon={contact.icon} className='icon-contact' />
        </span>
        <span className="text"><a href={contact.link} target="_blank">{contact.text}</a></span>
      </li>
    )
  }

  return (
    <>
    <Title title={menu[3].name!} />
    <div className={`${animateFadeIn(1, 'U')} contact-list`}>
      <ul>
        {
          contactList.map((contact: Contact) => listContact(contact))
        }
      </ul>
    </div>
    </>
  )
}
