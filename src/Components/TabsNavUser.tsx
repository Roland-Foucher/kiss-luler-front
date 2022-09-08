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
                className="mb-3 mt-4 font-newFont font-bold text-base"
                justify
            >
                <Tab eventKey="" title="Mon Mumulcompte" >
                    <UpdateProfile />
                </Tab>
                <Tab eventKey="password" title="Mon mumule passe ">
                    <PasswordUpdate />
                </Tab>
                <Tab eventKey="Si on a des idées" title="Me muluprimer" className='text-center font-newFont h-screen' >
                    <h3>Cette page est en cours de construction</h3>
                </Tab>
            </Tabs>
        </div>

    )
}

