import { supabase } from '../lib/supabase';
import type { Policy, Category } from '../types';
import { MOCK_CATEGORIES, MOCK_POLICIES } from './mockData';

// In-memory store for the session
let localCategories = [...MOCK_CATEGORIES];
let localPolicies = [...MOCK_POLICIES]; // Initial load from mock data

export const supabaseService = {
    // --- Categories ---
    async getCategories() {
        // Return local mock data immediately
        return Promise.resolve([...localCategories]);
    },

    async createCategory(category: Category) {
        localCategories.push(category);
        return Promise.resolve(category);
    },

    async deleteCategory(id: string) {
        localCategories = localCategories.filter(c => c.id !== id);
        return Promise.resolve();
    },

    // --- Policies ---
    async getPolicies() {
        return Promise.resolve([...localPolicies]);
    },

    async createPolicy(policy: Omit<Policy, 'id'>) {
        const newPolicy: Policy = {
            ...policy,
            id: Math.max(...localPolicies.map(p => p.id), 0) + 1
        };
        localPolicies.unshift(newPolicy);
        return Promise.resolve(newPolicy);
    },

    async updatePolicy(id: number, updates: Partial<Policy>) {
        let updatedPolicy: Policy | undefined;
        localPolicies = localPolicies.map(p => {
            if (p.id === id) {
                updatedPolicy = { ...p, ...updates };
                return updatedPolicy;
            }
            return p;
        });

        if (!updatedPolicy) throw new Error("Policy not found");
        return Promise.resolve(updatedPolicy);
    },

    async deletePolicy(id: number) {
        localPolicies = localPolicies.filter(p => p.id !== id);
        return Promise.resolve();
    }
};

