import React from 'react'
import {useContext} from 'react'
import { ThemeContext } from '../../App'

function ContextHook() {
    const darkTheme = useContext(ThemeContext)
    console.log(darkTheme);

  return (
    <>
    <div>ContextHook</div>
    {darkTheme?<h1>Dark Theme</h1>:<h1>Light Theme</h1>}
    
    </>
  )
}

export default ContextHook