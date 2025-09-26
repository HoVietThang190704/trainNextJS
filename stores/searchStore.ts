import { create } from 'zustand'

interface SearchState {
    isSearchOpen: boolean;
    searchQuery: string;
    setIsSearchOpen: (open: boolean) => void;
    setSearchQuery: (query: string) => void;
    toggleSearch: () => void;
    clearSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    isSearchOpen: false,
    searchQuery: '',
    setIsSearchOpen: (open) => set({ isSearchOpen: open }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    toggleSearch: () => set((state) => ({isSearchOpen: !state.isSearchOpen })),
    clearSearch: () => set({ searchQuery: '' }),
}))