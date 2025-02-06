import { useState } from 'react'
import HookUseCallback from './HookUseCallback'
import HookUseMemo from './HookUseMemo'
import HookUseRef from './HookUseRef'
import './css/reacthooks.scss'
import AccordionContent from '../../../components/Accordion/AccordionContent'

const ReactHooks = () => {

    const [hook, setHook] = useState(null)

    const components = {
      useRef: HookUseRef,
      useCallback: HookUseCallback,
      useMemo: HookUseMemo
    }

    const handleOption = (e) => {
      const option = e.target.value;
      setHook(hook => components[option]);
    }

    return (
      <div>
        <ul className='style-hooks'>
          <li><input type="radio" name="hooks" value="useRef" onChange={handleOption} id="" />UseRef</li>
          <li><input type="radio" name="hooks" value="useMemo" onChange={handleOption} id="" />UseMemo</li>
          <li><input type="radio" name="hooks" value="useCallback" onChange={handleOption} id="" />UseCallback</li>
        </ul>

        {
          <AccordionContent component={hook}/>
        }
        
      </div>
    )
}

export default ReactHooks