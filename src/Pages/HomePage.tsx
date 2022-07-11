import CategoriesCards from "../Components/CategoriesCards";
import ProjectsCards from "../Components/ProjectsCards";









export default function HomePage() {

    return (
        <>
            <div className=" mx-5 mt-12">
                <CategoriesCards />
                <ProjectsCards/>
            </div>

        </>
    )
}