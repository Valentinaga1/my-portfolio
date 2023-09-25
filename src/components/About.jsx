import aboutSvg from "../assets/about.svg";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2  gap-16">
        <article className="">
        <SectionTitle title="My Skills" />
          <div className="flex flex-wrap mt-8">
            {skills.map(item => {
              return (
                <div className="m-3 px-4 py-3 md:px-8  mb-6 md:mb-0 bg-slate-300 rounded-lg shadow-md hover:shadow-xl duration-300" key={item.id}>{item.title}</div>
                )
            })}
          </div>
        </article>
        <article>
          <SectionTitle title="About me!" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm Valentina, originally a financial engineer who embarked on an exciting journey into the world of software development. Over the past two years, I've delved deep into web2 technologies like Next.js, GraphQL, ReactJS, and MongoDB. This journey has allowed me to craft interactive features for websites, blending my financial engineering background's analytical rigor with forward-thinking software solutions
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Beyond the digital realm, you'll often find me exploring the world through travel or gracefully gliding on roller skates. My love for coffee fuels both my work and adventures. Recently, I've taken significant steps into web3 and blockchain by  completing my training at the Polkadot Blockchain Academy, where I acquired essential skills to navigate this revolutionary domain. With my unique blend of financial background, web development experience, and emerging blockchain knowledge, I'm excited to contribute, innovate, and craft solutions in this dynamic space.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Recently, I've taken significant steps into web3 and blockchain by completing my training at the Polkadot Blockchain Academy, where I acquired essential skills to navigate this revolutionary domain. I'm currently dedicated to studying and improving my knowledge in web3 technologies, including Substrate, FRAME, Polkadot, and various other blockchain technologies and smart contracts.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            With my financial background, engineer, web development experience, and emerging blockchain knowledge, I'm excited to contribute, innovate, and craft solutions in this dynamic space.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About