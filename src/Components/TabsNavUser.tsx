import { Tabs, Tab } from 'react-bootstrap';
import PasswordUpdate from './PasswordUpdate';
import UpdateProfile from './UpdateProfil';


export default function TabsNavUser() {

    return (
        <div>
            <Tabs
                defaultActiveKey=""
                transition={true}
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="" title="Mon Mumulcompte">
                    <UpdateProfile />
                </Tab>
                <Tab eventKey="password" title="Mon mumule passe ">
                    <PasswordUpdate />
                </Tab>
                <Tab eventKey="Si on a des idées" title="?" >
                </Tab>
            </Tabs>
        </div>

    )
}

{
    /* 
    Exemple de tabs nav sans react bootstap :
    <div >
                <ul className="flex border-b">
                    <li className="-mb-px mr-1">
                        <Link to="" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-600 hover:text-gray-800 font-semibold" >
                            Mon Mumulcompte</Link>
                    </li>
                    <li className="mr-1">
                        <Link to="password" className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" >Mon Mumul passe</Link>
                    </li>
                    <li className="mr-1">
                        <a className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" href="#">Confidentialité</a>
                    </li>
                    <li className="mr-1">
                        <a className="bg-white inline-block py-2 px-4 text-gray-400 hover:text-gray-800 font-semibold" href="#">Notifications</a>
                    </li>
                </ul>
            </div> */}

{/* <Outlet /> */ }