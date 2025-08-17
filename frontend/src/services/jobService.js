// frontend/src/services/jobService.js

import { api } from '../lib/apiClient';

// Get all jobs
export const getJobs = async () => {
  try {
    return await api.get('/jobs');
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    throw error;
  }
};

// Get single job by ID
export const getJobById = async (jobId) => {
  try {
    return await api.get(`/jobs/${jobId}`);
  } catch (error) {
    console.error(`Failed to fetch job with ID ${jobId}:`, error);
    throw error;
  }
};

// Create a new job
export const createJob = async (jobData) => {
  try {
    return await api.post('/jobs', jobData);
  } catch (error) {
    console.error('Failed to create job:', error);
    throw error;
  }
};

// Update an existing job
export const updateJob = async (jobId, jobData) => {
  try {
    return await api.put(`/jobs/${jobId}`, jobData);
  } catch (error) {
    console.error(`Failed to update job with ID ${jobId}:`, error);
    throw error;
  }
};

// Delete a job
export const deleteJob = async (jobId) => {
  try {
    return await api.delete(`/jobs/${jobId}`);
  } catch (error) {
    console.error(`Failed to delete job with ID ${jobId}:`, error);
    throw error;
  }
};