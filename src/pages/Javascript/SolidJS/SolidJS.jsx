import './../../css/stylesCode.scss'
import OpenClose from './OpenClose'
import LiskovSubstitution from './LiskovSubstitution'
import InterfaceSegregation from './InterfaceSegregation'
import DependencyInversion from './DependencyInversion'
import SingleResponsability from './SingleResponsability'
import AccordionJS from '../../../components/Accordion/AccordionJS'

const solidComponents = [
  {
    title: 'S: Single Responsability Principle',
    component: <SingleResponsability/>
  },
  {
    title: 'O: Open Closed Principle',
    component: <OpenClose/>
  },
  {
    title: 'L: Liskov Substituion Principle',
    component: <LiskovSubstitution/>
  },
  {
    title: 'I: Interface Segregation Principle',
    component: <InterfaceSegregation/>
  },
  {
    title: 'D: Dependency Inversion Principle',
    component: <DependencyInversion/>
  }
]

export default function SolidJS(){
  return (
    <section>
      <h2>Principios Solid</h2>

      {
        solidComponents.map((item,index) => (
            <AccordionJS key={index} item={item} index={index}/>
        ))
      }

    </section>
  )
}
