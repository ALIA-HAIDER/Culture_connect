import { create } from 'zustand';
import { axiosInstance } from '../config/axios';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface LocationState {
  id?: string;
  name: string;
  city: string;
  area?: string;
  lat: number;
  lng: number;
  location?: string;
  rating?: number;        // out of 5
  reviews?: number;       // total count
  matchScore?: number;    // out of 10
  matchPercentage?: number; // out of 100
  description?: string;
  priceRange?: string;
  highlights?: string[];
  vibes?: string[];
  residents?: number;
  safetyScore?: number;
  languages?: string[];
  amenities?: string[];
}

export interface PreferencesData {
  languages: string[];
  culture: string[];
  religion: string[];
  foodPreferences: string[];
  lifestyle: string[];
  areaVibe: string[];
  community: string[];
  safetyLevel: number;
  affordabilityRange: [number, number];
  commuteOptions: string[];
  connectivity: string[];
}

interface LocationStore {
  locations: LocationState[];
  filterLocation: LocationState[];
  getLocation: () => Promise<void>;
  filterLocations: (preferences: PreferencesData) => Promise<void>;
  restoreFilteredLocations: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  filterLocation: [],

  getLocation: async () => {
    try {
      const response = await axiosInstance.get('/locations');
      set({ locations: response.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'Failed to fetch locations');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  },

  filterLocations: async (preferences) => {
    try {
      const response = await axiosInstance.post('/locations/filter', preferences);
      set({ filterLocation: response.data });
      sessionStorage.setItem('filteredLocations', JSON.stringify(response.data));
    } catch (error) {
      console.error('Store: Error filtering locations:', error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'Failed to filter locations');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  },

  restoreFilteredLocations: () => {
    try {
      const stored = sessionStorage.getItem('filteredLocations');
      if (stored) {
        const parsedData = JSON.parse(stored);
        set({ filterLocation: parsedData });
      }
    } catch (error) {
      console.error('Error restoring filtered locations:', error);
    }
  },
}));
