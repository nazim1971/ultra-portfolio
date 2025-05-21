
import Pagination from '@/components/ui/Pagination';
import { getAllProjects } from './_actions';
import AllProjects from './_components/AllProject';



const AllProjectsPage = async () => {


  const { data: projects, meta } = await getAllProjects();

  console.log(projects);

  return (
    <div>
      <AllProjects projects={projects?.data || []} />
      <Pagination page={Number(1) || 1} totalPage={meta?.totalPage} />
    </div>
  );
};

export default AllProjectsPage;
