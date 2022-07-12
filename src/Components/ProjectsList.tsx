import { useGetAllProjectsQuery } from "../App/API/projects"








export default function ProjectsList() {

    const {data, isError} = useGetAllProjectsQuery()

    return (
        <>
        </>
    )
}