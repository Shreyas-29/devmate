import { create } from 'zustand';

export const useProblemStore = create((set) => ({

  // const 

  // selectedProblemSlug: null,
  // problems: [], // Add your list of problems here
  // setSelectedProblemSlug: (slug:string) => set({ selectedProblemSlug: slug }),
  // getNextProblemSlug: () => {
  //   // Logic to get the next problem slug
  //   const currentIndex = problems.findIndex((problem: { slug: any; }) => problem.slug === selectedProblemSlug);
  //   if (currentIndex < problems.length - 1) {
  //     return problems[currentIndex + 1].slug;
  //   }
  //   return null; // No more problems
  // },
  // getPrevProblemSlug: () => {
  //   // Logic to get the previous problem slug
  //   const currentIndex = problems.findIndex((problem) => problem.slug === selectedProblemSlug);
  //   if (currentIndex > 0) {
  //     return problems[currentIndex - 1].slug;
  //   }
  //   return null; // No previous problems
  // },
}));

