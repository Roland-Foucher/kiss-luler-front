import React, { useState } from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import { ProjectCreate } from "../App/entities/projectCreate";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useAddProjectMutation } from "../App/API/projects";
import { ProjectCategory } from "../App/entities/enum";
import Confetti from 'react-confetti'
import { useNavigate } from "react-router";
import { useAppDispatch } from "../App/hooks";
import { authApi } from "../App/API/authAPI";





export default function CreateProject() {



    /**
     * gestion feedback
     */
    const [succes, setSucces] = useState(false);
    const [notSucces, setNotSucces] = useState(false)

    const navigate = useNavigate()

    /**
     * body request
     */
    const [form, setForm] = useState({} as ProjectCreate);
    const [file, setFile] = React.useState<any[]>([]);

    /**
     * query
     */
    const [newPost, postQuery] = useAddProjectMutation()



    /**
     * lib uploadImage
     */
    const maxNumber = 1;
    const filesChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ): any => {

        setFile(imageList as never);


    };


    const [resultId, setResultId] = useState(0);

    let dispatch = useAppDispatch()



    const handleSubmit = async (event: React.FormEvent<EventTarget>) => {


        event.preventDefault();
        try {
            let finalFile;
            for (const files of file!) {
                let goodFile = files.file
                finalFile = goodFile

            }

            let formdata: FormData = new FormData()
            if (finalFile) {
                formdata.append('file', finalFile && finalFile as unknown as Blob)
            }

            for (const key in form!) {
                formdata.append(key, (form as any)[key])
            }
            let result = await newPost(formdata).unwrap()
            setResultId(result.id)
            setSucces(true)
            dispatch(authApi.util.invalidateTags(["User"]))




        } catch (error) {
            console.log(error);
            setNotSucces(true)

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
        <div >


            <aside
                className=" overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-50"
            >

                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <header className="flex font-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                        </svg>
                        <h2 className="ml-2 font-newFont text-2xl font-bold text-gray-500 ">Création de votre projet</h2>
                    </header>
                    <form className="mt-8 space-y-4" action="#" method="POST" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-6 gap-6">

                            {/*Title*/}
                            <div className="col-span-6 sm:col-span-3">
                                <FloatingLabel controlId="floatingInput" label="Titre" className="mb-4 font-extralight" >
                                    <FormControl
                                        placeholder="Titre"
                                        aria-label="Title"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        name="name"
                                        required
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </div>

                            {/*ConsiderationsAmount*/}
                            <div className="col-span-6 sm:col-span-3">
                                <FloatingLabel controlId="floatingInput"
                                    label="Montant total demandé" className="mb-4 font-extralight">
                                    <FormControl
                                        placeholder="Montant total demandé"
                                        aria-describedby="basic-addon1"
                                        type="number"
                                        name="amountInit"
                                        required
                                        onChange={handleChange}
                                        min="0"
                                    />
                                </FloatingLabel>
                            </div>




                            {/*date init*/}
                            <div className="col-span-3 sm:col-span-3">
                                <FloatingLabel controlId="floatingInput"
                                    label="Date de départ" className="mb-4 font-extralight">
                                    <FormControl
                                        placeholder="Date de départ"
                                        aria-label="date de naissance"
                                        aria-describedby="basic-addon1"
                                        type="date"
                                        name="dateInit"
                                        className="font-light"
                                        required
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>


                            </div>

                            {/*date end*/}
                            <div className="col-span-3 sm:col-span-3">
                                <FloatingLabel controlId="floatingInput"
                                    label="Date de fin" className="mb-4 font-extralight ">
                                    <FormControl
                                        placeholder="Date de fin"
                                        aria-label="date de fin"
                                        aria-describedby="basic-addon1"
                                        type="date"
                                        name="dateEnd"
                                        required
                                        onChange={handleChange}
                                        className="font-light"
                                    />
                                </FloatingLabel>
                            </div>


                            {/*Category*/}
                            <div className="col-span-6  ">
                                <Form.Select name="category" size="lg" className="font-extralight " onChange={handleChange} required>
                                    <option>Categorie</option>
                                    <option value={ProjectCategory.TOURDATE}>Tourdate</option>
                                    <option value={ProjectCategory.EP}>Ep</option>
                                    <option value={ProjectCategory.CD}>Cd</option>
                                </Form.Select>

                            </div>

                            <div className="col-span-6">

                                <ImageUploading
                                    multiple
                                    value={file}
                                    onChange={filesChange}
                                    maxNumber={maxNumber}
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageRemove,
                                        isDragging,
                                        dragProps
                                    }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper ">
                                            <button
                                                style={isDragging ? { color: "red" } : undefined}
                                                type="button"
                                                onClick={onImageUpload}
                                                {...dragProps}
                                                className="font-medium  font-newFont text-xl mb-5 inline-flex hover:-translate-y-3 hover:duration-500 hover:text-redBull  border-x border-y rounded-lg border-dashed p-4 border-orangeBull  "
                                            >
                                                Téléchargez votre image <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                </svg>

                                            </button>
                                            &nbsp;
                                            {file!.length > 1 && <button className='text-redCahier' type="button" onClick={onImageRemoveAll}>Remove all images</button>}

                                            <div className='grid grid-cols-4 gap-4 space-x-3 '>  {imageList.map((image: any, index: any) => (
                                                <div key={index} className="image-item rounded-md p-2 border border-greyNakala relative ">

                                                    <img className='mb-4' src={image.dataURL} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper absolute -bottom-4 -right-4">

                                                        <button onClick={() => onImageRemove(index)}
                                                            className=" ml-12  block p-3 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                                                            type="button"
                                                        >
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                </div>
                                            ))}</div>

                                        </div>
                                    )}
                                </ImageUploading>
                            </div>


                            {/*description*/}
                            <div className="col-span-6 ">
                                <FloatingLabel controlId="floatingInput"
                                    label="Description" className="mb-4 font-extralight">
                                    <FormControl
                                        placeholder="Description"
                                        aria-label="nom"
                                        aria-describedby="basic-addon1"
                                        as="textarea"
                                        name="description"
                                        required
                                        style={{ height: '100px' }}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4   font-light text-lg text-white   rounded-md bg-gradient-to-r from-yellowBull/80 to-redBull/80 hover:bg-gradient-to-r hover:from-yellowBull hover:to-redBull  hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                                Créer
                            </button>


                        </div>
                    </form>
                </div>

                {notSucces && <div
                    className="fixed right-4 bottom-4  flex items-center justify-between gap-4 p-4 text-red-600 border-1 rounded border-red-500 bg-red-50"
                    role="alert"
                >
                    <div className="flex items-center gap-4 ">
                        <span className="p-2 text-white bg-red-600 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                />
                            </svg>
                        </span>

                        <p>
                            <strong className="text-sm font-medium"> Mince !</strong>

                            <span className="block text-xs opacity-90">
                                {postQuery.isError && (postQuery.error as any).data.message}
                            </span>
                        </p>
                    </div>

                    <button onClick={() => setNotSucces(false)} className="opacity-90" type="button" data-dismiss-target="#alert-additional-content-1">
                        <span className="sr-only"> Close </span>

                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>}

                {succes && <div
                    className="  fixed bottom-1/3 left-1/3   flex items-center justify-between  p-20 text-green-700  rounded  bg-gray-700/30"
                    role="alert"

                >   <Confetti
                        width={400}
                        height={200}
                        numberOfPieces={100}
                        opacity={0.8}


                    />
                    <div className="flex items-center gap-4 ">
                        <span className="p-2 text-white bg-green-600 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                        <strong className="text-xl font-medium">Projet enregistré</strong> 
                        <button onClick={() => navigate(`/project/${resultId}`)} className="border-1 border-green-600 absolute bottom-2  right-10 left-10  p-2 bg-green-700/20 rounded-md hover:border hover:border-green-800">Voir</button>
                    </div>


                    <button onClick={() => setSucces(false)} className=" absolute top-1 right-2 opacity-90" type="button" data-dismiss-target="#alert-additional-content-1">
                        <span className="sr-only"> Close </span>

                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                </div>}

                <img
                    alt="photo de formulaire"
                    src={process.env.PUBLIC_URL + '/img/record.jpg'}
                    className=" border-t border-l border-redBull object-cover sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
                />
            </aside>


        </div>
    )
}