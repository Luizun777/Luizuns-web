import { useContext } from 'react';
import { LanguageContext } from '../../context/languageContext/languageContext ';
import { Title } from '../../components/Title';
import { PrivacyPolicy } from '../../Interfaces/languageInterface';
import { useAnimation } from '../../hooks/useAnimation';

export const PrivacyPolicyScreen = () => {

  const { languageRed: 
    { MenuAppVerb: menu,
      PrivacyPolicyAppVerb
    }
  } = useContext(LanguageContext);
  const { animateFadeIn } = useAnimation();

  const { date, description, policyList } = PrivacyPolicyAppVerb;

  console.log(PrivacyPolicyAppVerb);
  

  return (
    <div className="cotainer cotainer-experience">
      <Title title={menu[0].name ?? ''} />
      <div className={`${animateFadeIn(1, 'U')} contenido-policy`}>
        <p className="date">{date} 07/08/2023</p>
        <p className="description">{description}</p>
        <div className="contenido-list">
          {
            policyList.map(({desc, title}: PrivacyPolicy, i: number) => (
              <div className="item-policy" key={i}>
                <p className="policy-title">{i+1}) {title}</p>
                <p className="policy-description">{desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
