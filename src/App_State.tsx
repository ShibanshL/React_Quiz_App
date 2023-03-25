import { create } from 'zustand'

const useStore = create(set => ({
  page: '',
  setPage: (e:any) => set((state:any) => ({ page: e })),
}))

const useScore = create((set) => ({
  score: 0,
  setScore: (e:any) => set((state:any) => ({ score: e })),
}))

export {useStore, useScore}