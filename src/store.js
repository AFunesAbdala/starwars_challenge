import { create } from 'zustand';

const useDataStore = create((set) => ({
    charactersPreData: {
        name: "",
        eyeColor: "",
        gender:"",
        id: ""
    },
    setCharactersPreData: (predata) => set({ charactersPreData: { name: predata.name,eyeColor: predata.eyeColor, gender: predata.gender, id: predata.id } }),
}));

export default useDataStore