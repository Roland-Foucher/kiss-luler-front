import React, { useState } from 'react';
import { FloatingLabel, FormControl } from 'react-bootstrap';
import { useUpdatePasswordUserMutation } from '../App/API/authAPI';
import { UpdatePasswordUSerDTO } from '../App/entities/updateUser';


export default function PasswordUpdate() {
    const [postUpdatePassword, postQuery] = useUpdatePasswordUserMutation();
    const [form, setForm] = useState<UpdatePasswordUSerDTO>({} as UpdatePasswordUSerDTO);

    const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        const data = await postUpdatePassword(form).unwrap();
    }

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLInputElement;
        let name = target.name;
        let value = target.value
        let change = { ...form, [name]: value }
        setForm(change)
    }

    return (
        <>

            <form className="col-8 mx-auto mt-20 space-y-4" action="#" method="POST" onSubmit={handleSubmit}>

                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingOldPassword" label="Ancien password" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="ancien mot de passe"
                            aria-label="ancien mot de passe"
                            aria-describedby="basic-addon1"
                            type="password"
                            name="oldPassword"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>
                <div className="relative z-0 mb-6 w-full group">

                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingNewPassword"
                        label="Nouveau mot de passe" className="mb-4 font-extralight">
                        <FormControl
                            className=" text-gray-400 "
                            placeholder="Nouveau mot de passe"
                            aria-label="Nouveau mot de passe"
                            aria-describedby="basic-addon1"
                            type="password"
                            name="newPassword"
                            required
                            onChange={handleChange}

                        />
                    </FloatingLabel>
                </div>

                <div>
                    <button type="submit" className="rounded-md p-2 text-md text-grey-600 shadow-md hover:text-white  hover:bg-gray-600 hover:duration-500 bg-gray-200 p-2">
                        Submit
                    </button>
                </div>
                {postQuery.isError && <p>{(postQuery.error as any).data.error}</p>
                }
            </form>

        </>
    )
}
