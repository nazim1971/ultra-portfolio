/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProjects = async (
  page?: string,
  limit: string = '12',
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  try {

    const params = new URLSearchParams();

    if (page) params.append('page', page);
    if (limit) params.append('limit', limit);

    if (query?.searchTerm) {
      params.append('searchTerm', query.searchTerm.toString());
    }

if (!query?.sortBy) {
  params.append('sort', 'createdAt'); // not sortBy/sortOrder — use `sort`
}


    // Add any other query params similarly...

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project?${params.toString()}`,
       {
        method: "GET",
        next: {
          revalidate: 10, // ✅ Revalidate every 10 seconds
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || 'Unknown error' };
  }
};


// getSingleIdeaDetails
export const getSingleProjectDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
        method: "GET",
        next: {
          revalidate: 10, // ✅ Revalidate every 10 seconds
        },
      });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
