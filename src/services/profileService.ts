import { mockProfiles, Profile } from '../data/mockProfiles';

export const profileService = {
  getProfiles: (category?: string, filters?: {
    minAge?: number;
    maxAge?: number;
    location?: string;
  }): Promise<Profile[]> => {
    return new Promise((resolve) => {
      let filtered = [...mockProfiles];

      if (category) {
        filtered = filtered.filter(profile => profile.category === category);
      }

      if (filters) {
        if (filters.minAge) {
          filtered = filtered.filter(profile => profile.age >= filters.minAge!);
        }
        if (filters.maxAge) {
          filtered = filtered.filter(profile => profile.age <= filters.maxAge!);
        }
        if (filters.location) {
          filtered = filtered.filter(profile => 
            profile.location.toLowerCase().includes(filters.location!.toLowerCase())
          );
        }
      }

      // Simulate network delay
      setTimeout(() => resolve(filtered), 500);
    });
  },

  getProfileById: (id: string): Promise<Profile | undefined> => {
    return new Promise((resolve) => {
      const profile = mockProfiles.find(p => p.id === id);
      setTimeout(() => resolve(profile), 300);
    });
  },

  getNewProfiles: (): Promise<Profile[]> => {
    return new Promise((resolve) => {
      const newProfiles = mockProfiles.filter(p => p.isNew);
      setTimeout(() => resolve(newProfiles), 300);
    });
  },

  getTopProfiles: (): Promise<Profile[]> => {
    return new Promise((resolve) => {
      const topProfiles = mockProfiles.filter(p => p.isTop);
      setTimeout(() => resolve(topProfiles), 300);
    });
  }
};