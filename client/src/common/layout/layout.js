import {Header} from '../../components/Header/Header'
import './layout.css'


export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="layout">
                {children}
            </div>
        </>
    )
}