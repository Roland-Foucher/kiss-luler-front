import React, { useState } from 'react';
import { FloatingLabel, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useUpdateUserProfileMutation } from '../App/API/authAPI';
import { User } from '../App/entities/login';


export default function UpdateProfile() {
    const [postUpdate, postQuery] = useUpdateUserProfileMutation();
    const [form, setForm] = useState<User>({} as User);
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        const data = await postUpdate(form).unwrap();
        if (data) {
            navigate('/account')
        }
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
                    <FloatingLabel controlId="floatingFirstname" label="Prénom" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="prénom"
                            aria-label="prénom"
                            aria-describedby="basic-addon1"
                            type="firstName"
                            name="firstName"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>
                <div className="relative z-0 mb-6 w-full group">

                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingBirthdate"
                        label="Date de naissance" className="mb-4 font-extralight">
                        <FormControl
                            className=" text-gray-400 "
                            placeholder="Date de naissance"
                            aria-label="date de naissance"
                            aria-describedby="basic-addon1"
                            type="date"
                            name="birthdate"
                            required
                            onChange={handleChange}

                        />
                    </FloatingLabel>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingFirstname"
                        label="Nom de famille" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="nom de famille"
                            aria-label="nom de famille"
                            aria-describedby="basic-addon1"
                            type="lastName"
                            name="lastName"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <FloatingLabel controlId="floatingJob" label="Job" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="Job"
                            aria-label="Job"
                            aria-describedby="basic-addon1"
                            type="job"
                            name="job"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <FloatingLabel controlId="floatingPseudo"
                        label="Pseudo" className="mb-4 font-extralight">
                        <FormControl
                            placeholder="pseudo"
                            aria-label="pseudo"
                            aria-describedby="basic-addon1"
                            type="pseudo"
                            name="pseudo"
                            required
                            onChange={handleChange}
                        />
                    </FloatingLabel>
                </div>
                <div>
                    <button type="submit" className="rounded-md  p-2 text-md text-grey-600 shadow-md hover:text-white  hover:bg-gray-600 hover:duration-500 bg-gray-200 p-2">
                        Mulifier mon profil
                    </button>
                </div>
                {postQuery.isError && <p>{(postQuery.error as any).data.error}</p>
                }
            </form>

        </>
    )
}
