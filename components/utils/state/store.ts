import create from 'zustand';
import { GlobalState } from '../../../types/state';

export const useGlobalStore = create<GlobalState>(set => ({
    activeSection: '',
    setActiveSection: (section) => {
        console.log(section);
        set(state => ({ activeSection: section}));
    }
}));