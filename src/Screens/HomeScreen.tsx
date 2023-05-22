import { aboutMe } from "../data/AboutData"

export const HomeScreen = () => {
  return (
    <>
    <div className="cotainer">
      <img src={aboutMe.photo.src} alt={aboutMe.photo.name} width={200}  height={200}/>
      <h1>{aboutMe.name}</h1>
      <h2>{aboutMe.job}</h2>
      <h3>{aboutMe.age}</h3>
      <h4>{aboutMe.desc}</h4>
    </div>
    </>
  )
}
