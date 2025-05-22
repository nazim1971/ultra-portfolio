/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllBlogs = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
      method: "GET",
      next: {
        revalidate: 10, // ✅ Revalidate every 10 seconds
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Unknown error" };
  }
};

// getSingleIdeaDetails
export const getSingleBlogDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
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
