// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const getWorkshops = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workshops`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching workshops:', error);
    throw error;
  }
};

export const getWorkshopFilters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workshops/filters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching filters:', error);
    throw error;
  }
};

export const addWorkshop = async (workshopData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/new`, workshopData);
    return response.data;
  } catch (error) {
    console.error('Error adding workshop:', error);
    throw error;
  }
};

export const uploadParticipants = async (workshopId, file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(
      `${API_BASE_URL}/${workshopId}/upload`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error uploading participants:', error);
    throw error;
  }
};

export const getWorkshopStats = async (year) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workshops/stats/${year}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

export const downloadWorkshops = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workshops/download`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading workshops:', error);
    throw error;
  }
};

export const getFilterOptions = async () => {
  const response = await fetch('/workshops/filters');
  return await response.json();
};