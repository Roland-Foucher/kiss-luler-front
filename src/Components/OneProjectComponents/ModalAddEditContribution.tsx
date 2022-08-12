import React, { useState } from "react";
import { FloatingLabel, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authApi } from "../../App/API/authAPI";
import { Considerations } from "../../App/entities/considerations";

interface Props {
  setShowModal: Function
  projectId: number
  queryType: Function
  consideration: Considerations
  labelButton: string
}




export default function ModalAddEditContribution({ projectId, setShowModal, queryType, consideration, labelButton }: Props) {

  const [postConsideration, postQuery] = queryType();

  const [form, setForm] = useState<Considerations>(consideration as Considerations);
  const [imageFile, setImageFile] = useState({} as File | null);
  const dispatch = useDispatch();


  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {

    event.preventDefault();
    form.id = consideration?.id;
    form.projectId = projectId;
    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile, imageFile.name)
    }
    formData.append("considerationDto", new Blob([JSON.stringify(form)], {
      type: "application/json"
    }));

    try {
      await postConsideration(formData).unwrap();
      dispatch(authApi.util.invalidateTags(["Project"]));
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
  }


  const handleChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement
    let name = target.name;
    let value = target.value

    if (target.files != null) {
      setImageFile(target.files[0])
    } else {
      setImageFile(null);
    }

    let change = { ...form, [name]: value }
    setForm(change)
  }



  return (
    <>
      (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl ">

            {/*content*/}
            <div className=" bg-neutral-100/80 border-x border-red-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
              <button className="position-absolute end-0"
                type="button"
                onClick={() => setShowModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50px" height="50px"><path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z" /><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" /><path fill="#f9dbd2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" /><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" /><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" /><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z" /><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" /><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z" /><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z" /><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z" /><g><path fill="#fdfcee" d="M50 26A24 24 0 1 0 50 74A24 24 0 1 0 50 26Z" /><path fill="#472b29" d="M50,26.4C63,26.4,73.6,37,73.6,50S63,73.6,50,73.6S26.4,63,26.4,50S37,26.4,50,26.4 M50,25 c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25L50,25z" /><path fill="#ee3e54" d="M50 30.4A19.6 19.6 0 1 0 50 69.6A19.6 19.6 0 1 0 50 30.4Z" /><path fill="#f06272" d="M50,33.4c10.3,0,18.8,8,19.5,18.1c0-0.5,0.1-1,0.1-1.5c0-10.8-8.8-19.6-19.6-19.6S30.4,39.2,30.4,50 c0,0.5,0,1,0.1,1.5C31.2,41.4,39.7,33.4,50,33.4z" /><path fill="#472b29" d="M50,30.8c10.6,0,19.3,8.6,19.3,19.2c0,10.6-8.6,19.3-19.3,19.3c-10.6,0-19.2-8.6-19.2-19.3 C30.8,39.4,39.4,30.8,50,30.8 M50,30c-11,0-20,9-20,20c0,11,9,20,20,20c11,0,20-9,20-20S61,30,50,30L50,30z" /></g><g><path fill="#fdfcee" d="M52.3,50l5.9-5.9c0.3-0.3,0.5-0.7,0.5-1.1s-0.2-0.8-0.5-1.1c-0.6-0.6-1.7-0.6-2.3,0L50,47.7 l-5.9-5.9c-0.6-0.6-1.7-0.6-2.3,0c-0.6,0.6-0.6,1.7,0,2.3l5.9,5.9l-5.9,5.9c-0.6,0.6-0.6,1.7,0,2.3c0.6,0.6,1.7,0.6,2.3,0l5.9-5.9 l5.9,5.9c0.3,0.3,0.7,0.5,1.1,0.5s0.8-0.2,1.1-0.5c0.6-0.6,0.6-1.7,0-2.3L52.3,50z" /><path fill="#472b29" d="M43,59c-0.5,0-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l5.6-5.6l-5.6-5.6C41.2,44,41,43.5,41,43 s0.2-1,0.6-1.4c0.8-0.8,2.1-0.8,2.8,0l5.6,5.6l5.6-5.6c0.8-0.8,2-0.8,2.8,0C58.8,42,59,42.5,59,43s-0.2,1-0.6,1.4L52.8,50l5.6,5.6 c0.8,0.8,0.8,2,0,2.8c-0.8,0.8-2.1,0.8-2.8,0L50,52.8l-5.6,5.6C44,58.8,43.5,59,43,59z M43,41.7c-0.3,0-0.6,0.1-0.9,0.4 c-0.2,0.2-0.4,0.5-0.4,0.9s0.1,0.6,0.4,0.9l6.1,6.1l-6.1,6.1c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0l6.1-6.1l6.1,6.1 c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8L51.8,50l6.1-6.1c0.2-0.2,0.4-0.6,0.4-0.9s-0.1-0.6-0.4-0.9c-0.5-0.5-1.3-0.5-1.8,0 L50,48.2l-6.1-6.1C43.6,41.9,43.3,41.7,43,41.7z" /></g>
                </svg>
              </button>
              {/*header*/}

              {/*body*/}
              <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">

                  <div>
                    <img className=" mx-auto animate-bounce object-cover w-14 h-14 rounded-full avatar avatar-48 rounded-circle p-2 border-1 border-red-500"
                      src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt="profile"></img>
                    <h2 className="mt-4 text-center text-3xl font-light  text-red-500 tracking-widest">Hello</h2>
                  </div>



                  <form className="mt-8 space-y-4" action="#" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div>

                      <div className="col-span-6 sm:col-span-3">
                        <FloatingLabel controlId="floatingInput"
                          label="Titre*" className="mb-4 font-extralight">

                          <FormControl
                            value={form.title}
                            placeholder="Titre"
                            aria-label="Titre"
                            aria-describedby="basic-addon1"
                            type="text"
                            name="title"
                            required
                            onChange={handleChange}

                          />
                        </FloatingLabel>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <FloatingLabel controlId="floatingInput"
                          label="Prix*" className="mb-4 font-extralight">

                          <FormControl
                            value={form.considAmount}
                            placeholder="Prix"
                            aria-label="Prix"
                            aria-describedby="basic-addon1"
                            type="number"
                            name="considAmount"
                            required
                            onChange={handleChange}

                          />
                        </FloatingLabel>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FloatingLabel controlId="floatingInput"
                          label="Description*" className="mb-4 font-extralight">

                          <FormControl
                            as="textarea"
                            rows={3}
                            value={form.description}
                            placeholder="Description"
                            aria-label="Description"
                            aria-describedby="basic-addon1"
                            name="description"
                            type="text"
                            onChange={handleChange}

                          />

                        </FloatingLabel>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <FloatingLabel controlId="floatingInput"
                          label="Image*" className="mb-4 font-extralight">

                          <FormControl
                            type="file"
                            aria-label="image"
                            aria-describedby="basic-addon1"
                            name="imageFile"
                            accept="image/*"
                            onChange={handleChange}
                          />

                        </FloatingLabel>
                      </div>
                    </div>



                    <div>

                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4   font-light text-md text-white   rounded-md bg-red-500 opacity-90 hover:opacity-100 hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        {labelButton}
                      </button>

                      {postQuery.isError && <p>{(postQuery.error as any).data.error}</p>}

                    </div>



                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>


    </>
  );
}