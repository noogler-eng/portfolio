'use client'
import { useRouter } from "next/navigation";
import { projectList } from "@/app/projectList";

export default function Projects(){

    const navigate = useRouter();
    const getProjects = projectList.map((project, index)=>{
        return <div className="flex gap-2 flex-col font-mono">
                    <p className="text-xl font-extrabold animate-colorChange">{project?.title}</p>
                    <p>{project.content}</p>
                    <div className="flex gap-2">
                        {project.website && <a href={project.website} className="text-blue-500 font-semibold">#website</a>}
                        {project.frontend && <a href={project.frontend} className="text-green-500 font-semibold">#frontend</a>}
                        {project.backend && <a href={project.backend} className="text-purple-500 font-semibold">#backend</a>}
                        
                        {project.task_1 && <a href={project.task_1} className="text-blue-500 font-semibold">#task-1</a>}
                        {project.task_2 && <a href={project.task_2} className="text-green-500 font-semibold">#task-2</a>}
                        {project.task_3 && <a href={project.task_3} className="text-purple-500 font-semibold">#task-3</a>}
                    </div>
                </div>
    })

    return <div className="flex flex-col justify-center min-h-screen p-20 justify-center items-center">
        <h1 className="text-orange-600 font-semibold font-mono w-full underline mb-12 text-2xl">projects</h1>
        <div className="flex flex-col p-4 gap-8 w-5/6">
            { getProjects }
        </div>
        <button onClick={()=>{
            navigate.replace('/');
        }} className="mt-12 border shadow-lg shadow-purple-500/50 p-2 rounded-lg place-self-center">Home 👋</button>
</div>
}