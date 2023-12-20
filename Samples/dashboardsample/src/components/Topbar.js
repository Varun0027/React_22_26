import React from 'react'
import { useTheme } from '../context/ThemeContext';
const Topbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <div className={`hv-5 wv-100 flex items-center justify-center shadow ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
                <div className='wv-95 flex  items-center justify-end'>
                    <div className="toggle-switch">
                        <input className="toggle-input" id="toggle" type="checkbox" onChange={toggleTheme} />
                        <label className="toggle-label" htmlFor="toggle"></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar