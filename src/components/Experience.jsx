import { experiences } from "../data"
import SectionTitle from "./SectionTitle"

export const Experience = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element">
        <SectionTitle title="Experience" />
        {experiences.map((experience, index) => (
          <div key={index} className="my-10">
            <h3 className="text-xl font-semibold text-gray-700">{experience.title}</h3>
            <p className="text-gray-600">{experience.company} - {experience.location}</p>
            <p className="text-gray-600">{experience.date}</p>
            <p className="mt-2 text-gray-800">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
