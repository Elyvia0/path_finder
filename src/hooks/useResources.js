import { useState, useEffect } from 'react';

export function useResources() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return {
    data,
    loading,
    setData,
    setLoading
  };
}
