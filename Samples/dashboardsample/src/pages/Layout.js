import { useEffect } from 'react';
import Leftbar from '../components/Leftbar';
import Topbar from '../components/Topbar';
import { useTheme } from '../context/ThemeContext';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { theme } = useTheme();
    useEffect(()=>{
        console.log('reloaded')
    },[])
    return (
        <>
            <div className={`main hv-100 wv-100 flex flex-col `}>
                <Topbar />
                <div className='hv-95 flex flex-row justify-center itmes-center'>
                    <Leftbar />
                    <div className='wv-85 hv-95 flex justify-center items-center'>
                        <div className={`content-wrapper ${theme === 'light' ? 'light-theme' : 'dark-theme'} flex items-center justify-center`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout