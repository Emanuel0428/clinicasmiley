import axios from 'axios';

export const formatCOP = (amount: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const fetchDoctors = async (id_sede: string): Promise<string[]> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/doctors`, {
    params: { id_sede }, // Incluir id_sede como parámetro de consulta
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchAssistants = async (id_sede: string): Promise<string[]> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/assistants`, {
    params: { id_sede }, // Incluir id_sede como parámetro de consulta
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchServices = async (): Promise<{ nombre: string; precio: number }[]> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchPaymentMethods = async (): Promise<string[]> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/payment-methods`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};