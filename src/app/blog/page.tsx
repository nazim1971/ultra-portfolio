import Pagination from "@/components/ui/Pagination";
import { getAllBlogs } from "./_actions";
import AllBlogs from "./_components/AllBlogs";

const AllIdeasPage = async () => {
  const { data: blogs, meta } = await getAllBlogs();

  return (
    <div>
      <AllBlogs blogs={blogs || []} />
      <Pagination page={Number(1)} totalPage={meta?.totalPage} />
    </div>
  );
};

export default AllIdeasPage;
